/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/hook/desktop.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/asset/scss/desktop.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js??ref--4-2!./src/asset/scss/desktop.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".plugin-space-heading {\\n  font-size: 1.5rem;\\n  margin: 0.8rem; }\\n\\n.plugin-space-message {\\n  display: inline-block;\\n  font-size: 1.2em;\\n  margin: 0.8rem;\\n  margin-top: 0; }\\n\\n.kplugin-field-linker.target-field {\\n  font-size: .9em;\\n  padding-right: 0;\\n  padding: 0 !important; }\\n  .kplugin-field-linker.target-field > div {\\n    padding: .2em; }\\n  .kplugin-field-linker.target-field.kp-fl-linked {\\n    cursor: pointer; }\\n    .kplugin-field-linker.target-field.kp-fl-linked:hover {\\n      background-color: rgba(0, 0, 0, 0.04); }\\n  .kplugin-field-linker.target-field > div > span,\\n  .kplugin-field-linker.target-field > span {\\n    font-family: Consolas, Courier New, monospace;\\n    color: #447aef;\\n    padding: .3em .4em .1em;\\n    display: inline-block; }\\n  .kplugin-field-linker.target-field .preview-inner {\\n    padding: .6em;\\n    border-top: 1px dashed #ccc;\\n    font-size: 12px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/asset/scss/desktop.scss?./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js??ref--4-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/asset/scss/desktop.scss":
/*!*************************************!*\
  !*** ./src/asset/scss/desktop.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../../node_modules/sass-loader/dist/cjs.js??ref--4-2!./desktop.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/asset/scss/desktop.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/asset/scss/desktop.scss?");

/***/ }),

/***/ "./src/script/hook/desktop.js":
/*!************************************!*\
  !*** ./src/script/hook/desktop.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _asset_scss_desktop_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../asset/scss/desktop.scss */ \"./src/asset/scss/desktop.scss\");\n/* harmony import */ var _asset_scss_desktop_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_asset_scss_desktop_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n(function(k, factory) {\n  'use strict';\n\n  factory(new Kluginn.default({\n    namespace: \"kplugin-field-linker\"\n  }));\n\n})(kintone, function(p){\n\n\n  var K = p;\n  var $ = K.$;\n\n  var S = {\n    conf: null,\n    data: null,\n    form: null,\n    p: {\n      attr_rec_id: \"data-fl-rec-id\",\n      attr_src_field: \"data-fl-src-field\",\n      attr_tapp_id: \"data-fl-target-app\",\n    }\n  };\n\n  var inited = K.init().then(main);\n  inited.then(function(){\n    K.debug.log(\"inited\");\n  });\n  bind_event();\n\n  K.$k.events.on('app.record.index.show', function(){\n    inited.then(function(){\n      if(update_asset()){\n        update_all_data_cell();\n      }\n    })\n  });\n\n  K.$k.events.on('app.record.detail.show', function(){\n    inited.then(function(){\n      if(update_asset()){\n        update_all_data_cell();\n      }\n    })\n  });\n\n  K.$k.events.on('app.record.index.edit.submit.success', function(e){\n    K.debug.log(\"submit\", e);\n    setTimeout(function(){\n      if(update_asset()){\n        for(var k in e.record){\n          for(var rr of S.data.rel_entry){\n            if(rr.field == k){\n              var mm = find_all_field_by_config(rr);\n              build_data_cell(mm);\n            }\n          }\n        }\n\n      }\n    }, 0);\n  });\n\n  function main(){\n    K.debug.log(\"main\");\n  }\n\n  function update_asset(){\n    S.conf = K.config.fetch();\n    if(!S.conf.data_json){\n      return false;\n    }\n\n    S.data = JSON.parse(S.conf.data_json);\n    S.form = cybozu.data.page.FORM_DATA.schema.table.fieldList;\n\n\n    S.data.rel_entry.map(function(r){\n      r.fid = false;\n      for(var k in S.form){\n        var f = S.form[k];\n        if(f.var == r.field){\n          r.fid = f.id;\n        }\n      }\n      return r;\n    });\n    update_all_data_cell_attr();\n\n    return true;\n  }\n\n\n  function find_all_field_by_config(f){\n    var tgt = '.value-' + f.fid;\n    K.debug.log(\"finding\", tgt);\n    var $el = $(tgt);\n    return $el;\n  }\n\n  function apply_attr($el, f){\n    assign_class($el, 'target-field');\n    $el.attr(S.p.attr_src_field, f.field);\n    $el.attr(S.p.attr_tapp_id, f.app_id);\n  }\n\n  function bind_event(){\n    $(document).on('click', '.kp-fl-linked', function(){\n      var el = $(this);\n      var rid = el.attr(S.p.attr_rec_id);\n      var a = find_config_by_element(el);\n      if(a){\n        ( rid && rid.length )\n          && window.open(\n            \"/k/\" + a.app_id + \"/show#record=\" + rid,\n            \"fl-win-\" + a.app_id\n          );\n      }\n    });\n\n    $(document).on('click', '.recordlist-cancel-gaia', function(e){\n      K.debug.log(\"canceled\");\n      setTimeout(function(){\n        update_asset();\n        build_data_cell(find_field_cell());\n      }, 400);\n    });\n  }\n\n  function update_all_data_cell(){\n    K.debug.log(\"update_all_data_cell\");\n    var td = find_field_cell();\n    td.each(function(){\n      var $el = $(this);\n      var mm = find_config_by_element($el);\n      if(mm){\n        build_data_cell($el);\n      }\n    });\n  }\n\n  function update_all_data_cell_attr(){\n    K.debug.log(\"update_all_data_cell_attr\");\n    var td = find_field_cell();\n    K.debug.log(\"update_all_data_cell_attr\", \"target_cell\", td.length);\n    td.each(function(){\n      var $el = $(this);\n      var mm = find_config_by_element($el);\n      if(mm){\n        apply_attr($el, mm);\n      }\n    });\n  }\n\n  function find_config_by_element($el){\n    var nmcls = $el.attr(\"class\").split(\" \").filter(function(v){\n      return v.match(/^value\\-[0-9]+$/);\n    });\n\n    if(!nmcls.length){\n      return false;\n    }\n\n    var nm = nmcls.map(function(v){\n      return v.replace(\"value-\", \"\");\n    }).shift();\n\n    var f = find_config_by_fid(nm);\n    if(f){\n      return f;\n    }\n\n    for(var rr of S.data.rel_entry){\n      if(rr.field_addition){\n        var l = rr.field_addition.toString().split(\",\").map(function(v){\n          return v.trim();\n        });\n        if(l.indexOf(nm) > -1){\n          return rr;\n        }\n      }\n    }\n\n    return false;\n  }\n\n  function find_field_cell(wrp){\n    var s = '[class*=\"value-\"]';\n    return wrp ? wrp.find(s) : $(s)\n  }\n\n  function find_fid_from_element($el){\n    var clss = $el.attr(\"class\").split(\" \");\n    var mcls = \"\";\n    for(var c of clss){\n      if(c.match(/^value\\-[0-9]+$/)){\n        var s = c.split(\"-\");\n        return s[1];\n      }\n    }\n    return false;\n  }\n\n  function find_config_by_fid(fid){\n    var mf = S.form[fid];\n    if(mf){\n      for(var e of S.data.rel_entry){\n        if(e.field == mf.var){\n          return e;\n        }\n      }\n    }\n    return false;\n  }\n\n  function build_data_cell($els){\n    K.debug.log(\"build_data_cell\", $els.length);\n    $els.each(function(){\n      var td = $(this);\n      var rec_id = td.attr(S.p.attr_rec_id);\n\n      if(rec_id && rec_id.length){\n        //console.error(\"Already applyed \" + rec_id);\n        return;\n      }\n\n      var f = find_config_by_element(td);\n      var vw = td.find(\"span\").first();\n      var vl = vw.text().trim();\n\n      if(!f || !vw || vl.length == 0){\n        return;\n      }\n\n      K.api.fetch('records', {\n        app: f.app_id,\n        query: f.target_field + ' = \"' + vl + '\" limit 1'\n      }).then(function(e){\n        // success\n        var div;\n        var cont;\n        var prvw = f.preview;\n        var orig = vw.text();\n\n        div = $('<section>');\n        assign_class(div, 'preview-inner');\n\n        if(e.records.length){\n          var m = e.records[0];\n          td.attr(S.p.attr_rec_id, m.$id.value);\n          assign_class(td, 'kp-fl-linked');\n          if(prvw.length){\n            cont = _.template(prvw)({\n              record: m\n            });\n            div.html(cont);\n          }else{\n            div.html(\"Record: \" + m.$id.value);\n          }\n        }else{\n          div.html('<b class=\"text-danger\">NOT FOUND</b>');\n          console.error(\"Failed to find record => \" + vl);\n        }\n        if(div){\n          vw.after(div);\n        }\n      }).catch(function(e){\n        K.dialog({\n          type: 'error',\n          title: e.code,\n          text: e.message\n        });\n      });\n\n    });\n  }\n\n  /*\n   */\n  function assign_class(el, cl, remove){\n    el.addClass('kplugin-field-linker');\n    if(remove){\n      el.removeClass(cl);\n    }else{\n      el.addClass(cl);\n    }\n  }\n\n});\n\n\n//# sourceURL=webpack:///./src/script/hook/desktop.js?");

/***/ })

/******/ });