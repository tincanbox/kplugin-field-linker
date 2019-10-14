import '../../asset/scss/desktop.scss';

(function(k, factory) {
  'use strict';

  factory(new Kluginn.default({
    namespace: "kplugin-field-linker"
  }));

})(kintone, function(p){


  var K = p;
  var $ = K.$;

  var S = {
    conf: null,
    data: null,
    form: null,
    p: {
      attr_rec_id: "data-fl-rec-id",
      attr_src_field: "data-fl-src-field",
    }
  };

  var inited = K.init().then(main);
  inited.then(function(){
    K.debug.log("inited");
  });
  bind_event();

  K.$k.events.on('app.record.index.show', function(){
    inited.then(function(){
      K.debug.log("index.show");
      update_asset();
      update_all_data_cell();
    })
  });

  K.$k.events.on('app.record.detail.show', function(){
    inited.then(function(){
      update_asset();
      update_all_data_cell();
    })
  });

  K.$k.events.on('app.record.index.edit.submit.success', function(e){
    K.debug.log("submit", e);
    setTimeout(function(){
      update_asset();
      for(var k in e.record){
        for(var rr of S.data.rel_entry){
          if(rr.field == k){
            var mm = find_all_field_by_config(rr);
            build_data_cell(mm);
          }
        }
      }
    }, 0);
  });

  function main(){
    K.debug.log("main");
  }

  function update_asset(){
    S.conf = K.config.fetch();
    S.data = JSON.parse(S.conf.data_json);
    S.form = cybozu.data.page.FORM_DATA.schema.table.fieldList;

    S.data.rel_entry.map(function(r){
      r.fid = false;
      for(var k in S.form){
        var f = S.form[k];
        if(f.var == r.field){
          r.fid = f.id;
        }
      }
      return r;
    });
    update_all_data_cell_attr();
  }


  function find_all_field_by_config(f){
    var tgt = '.value-' + f.fid;
    K.debug.log("finding", tgt);
    var $el = $(tgt);
    return $el;
  }

  function apply_attr($el, f){
    assign_class($el, 'target-field');
    $el.attr(S.p.attr_src_field, f.field);
  }

  function bind_event(){
    $(document).on('click', '.kp-fl-linked', function(){
      var el = $(this);
      var matched_config;
      var el_fld = el.attr(S.p.attr_src_field);
      for(var a of S.data.rel_entry){
        if(a.field == el_fld){
          var rid = el.attr(S.p.attr_rec_id);
          rid && rid.length && window.open("/k/" + a.app_id + "/show#record=" + rid, "fl-win-" + a.app_id);
          break;
        }
      }
    });

    $(document).on('click', '.recordlist-cancel-gaia', function(e){
      K.debug.log("canceled");
      setTimeout(function(){
        update_asset();
        build_data_cell(find_field_cell());
      }, 400);
    });
  }

  function update_all_data_cell(){
    K.debug.log("update_all_data_cell");
    var td = find_field_cell();
    td.each(function(){
      var $el = $(this);
      var fid = find_fid_from_element($el);
      var cnf = find_config_by_fid(fid);
      if(fid && cnf){
        build_data_cell($el);
      }
    });
  }

  function update_all_data_cell_attr(){
    K.debug.log("update_all_data_cell_attr");
    var td = find_field_cell();
    K.debug.log("update_all_data_cell_attr", "target_cell", td.length);
    td.each(function(){
      var $el = $(this);
      var fid = find_fid_from_element($el);
      var cnf = find_config_by_fid(fid);
      if(fid && cnf){
        apply_attr($el, find_config_by_fid(fid));
      }else{
        //console.error("invalid cell", fid);
        //
      }
    });
  }

  function find_field_cell(wrp){
    var s = '[class*="value-"]';
    return wrp ? wrp.find(s) : $(s)
  }

  function find_fid_from_element($el){
    var clss = $el.attr("class").split(" ");
    var mcls = "";
    for(var c of clss){
      if(c.match(/^value\-[0-9]+$/)){
        var s = c.split("-");
        return s[1];
      }
    }
    return false;
  }

  function find_config_by_fid(fid){
    var mf = S.form[fid];
    if(mf){
      for(var e of S.data.rel_entry){
        if(e.field == mf.var){
          return e;
        }
      }
    }
    return false;
  }

  function build_data_cell($els){
    K.debug.log("build_data_cell", $els.length);
    $els.each(function(){
      var td = $(this);
      var rec_id = td.attr(S.p.attr_rec_id);

      if(rec_id && rec_id.length){
        //console.error("Already applyed " + rec_id);
        return;
      }

      var fid = find_fid_from_element(td);
      var f = find_config_by_fid(fid);
      var vw = td.find("span").first();
      var vl = vw.text().trim();

      if(!f || !vw || vl.length == 0){
        return;
      }

      K.api.fetch('records', {
        app: f.app_id,
        query: f.target_field + ' = "' + vl + '" limit 1'
      }).then(function(e){
        // success
        var div;
        var cont;
        var prvw = f.preview;
        var orig = vw.text();

        div = $('<section>');
        assign_class(div, 'preview-inner');

        if(e.records.length){
          var m = e.records[0];
          td.attr(S.p.attr_rec_id, m.$id.value);
          assign_class(td, 'kp-fl-linked');
          if(prvw.length){
            cont = _.template(prvw)({
              record: m
            });
            div.html(cont);
          }else{
            div.html("Record: " + m.$id.value);
          }
        }else{
          div.html('<b class="text-danger">NOT FOUND</b>');
          console.error("Failed to find record => " + vl);
        }
        if(div){
          vw.after(div);
        }
      }).catch(function(e){
        K.dialog({
          type: 'error',
          title: e.code,
          text: e.message
        });
      });

    });
  }

  /*
   */
  function assign_class(el, cl, remove){
    el.addClass('kplugin-field-linker');
    if(remove){
      el.removeClass(cl);
    }else{
      el.addClass(cl);
    }
  }

});
