import '../../asset/scss/config.scss';

(function(k, factory) {
  'use strict';

  factory(new Kluginn.default({
    namespace: "kplugin-field-linker"
  }));

})(kintone, function(p){

  var K = p;
  var $ = K.$;
  var V = {};
  var C = {};
  var S = {};

  K.init().then(main);

  V.yield = $('#_yield_');

  V.form = (function(){
    var f = $(K.ui.render('form', {
      config: K.config.fetch()
    }));
    V.yield.append(f);
    return f;
  })();

  V.entry_table = V.form.find('.entry-table tbody');

  var C = {
    click: {
      add_row: function(){
        render_row();
      },
      submit: function(){
        var v;
        v = $('.kplugin-config-form').serializeArray().map(function(r){
          return [r.name, r.value];
        }).filter(function(r){
          return r && r[0] && r[1];
        });

        v = FM.ob.unserialize(v);
        v.rel_entry = v.rel_entry.filter(function(r){
          return r && r.app_id && r.target_field;
        });

        v.rel_entry = v.rel_entry.map(function(r){
          if(r.field_addition){
            r.field_addition = "" + r.field_addition;
          }
          return r;
        });

        var jn = JSON.stringify(v);
        K.config.save({
          data_json: jn
        }).then(function(){
          K.dialog({
            title: 'Saved!!',
            text: '設定を保存しました。'
          });
          render_form();
        });
      },
      show_help: function(){
        var cn = K.ui.render('help-content', {});
        K.dialog({
          title: 'Help',
          html: cn
        })
      }
    },
  };

  function main(){
    return Promise.all([
      K.api.fetch('apps').then(function(e){
        S["apps"] = e.apps;
      }),
      K.api.fetch('app/form/fields').then(function(e){
        S["fields"] = ob_sort(e.properties);
      })
    ]).then(function(){
      K.ui.bind_action(C);
      render_form();
    });
  }

  function render_form(){
    K.config.update_form();

    var c = K.config.fetch();
    var list = JSON.parse(c.data_json || []);

    V.entry_table.empty();

    list.rel_entry.map(function(r){
      (r) && render_row(r);
    });
  }

  function render_row(row){
    var t = $(K.ui.render('row', {
      info: S,
      row: row || null
    }));

    t.on('click', '.action-delete', function(){
      t.remove();
    });

    t.on('change', '.entry-data-field', function(e){
      var $el = $(this);
      var vl = $el.val();
      if(vl){
        var dp = [];
        V.form.find('.entry-data-field').not($el).each(function(){
          dp.push($(this).val());
        });
        if(dp.includes(vl)){
          K.dialog({
            type: 'error',
            text: '定義済みのフィールドです。'
          });
          $el.val("");
        }else{
          t.find('.entry-data-app_id').attr("disabled", false);
        }
      }
    });

    t.on('change', '.entry-data-app_id', function(e){
      var app_id = $(e.target).val();
      if(!app_id || !app_id.length) return;

      K.api.fetch('app/form/fields', {
        app: app_id
      }).then(function(e){
        render_row_app_field(row, t, e.properties)
      }).catch(function(e){
        K.dialog({
          title: 'Error',
          text: e.message
        });
      })
    });

    V.entry_table.append(t);

    // trigger
    [ ['.entry-data-field', 'change'],
      ['.entry-data-app_id', 'change']
    ].map(function(ef){
      var e = K.$.Event(ef[1]);
      e.target = t.find(ef[0])[0];
      t.trigger(e);
    })
  }

  function render_row_app_field(row, t, props){
    var s = t.find('.entry-data-target_field');
    s.empty();
    var a = K.ui.render('row-select-target-field', {
      row: row,
      fields: ob_sort(props)
    });
    s.append(a);
  }

  function ob_sort(o){
    var sk = Object.keys(o).sort(function(a, b){
      if (a.toLowerCase() < b.toLowerCase()) return -1;
      if (a.toLowerCase() > b.toLowerCase()) return 1;
      return 0;
    });
    var n = {};
    for(var k of sk) n[k] = o[k];

    return n;
  }

});
