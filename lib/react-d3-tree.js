(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("d3"), require("uuid"), require("clone"), require("deep-equal"), require("react-transition-group"));
	else if(typeof define === 'function' && define.amd)
		define("react-d3-tree", ["react", "prop-types", "d3", "uuid", "clone", "deep-equal", "react-transition-group"], factory);
	else if(typeof exports === 'object')
		exports["react-d3-tree"] = factory(require("react"), require("prop-types"), require("d3"), require("uuid"), require("clone"), require("deep-equal"), require("react-transition-group"));
	else
		root["react-d3-tree"] = factory(root["react"], root["prop-types"], root["d3"], root["uuid"], root["clone"], root["deep-equal"], root["react-transition-group"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_11__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(15);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {
		return null;
	}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.treeUtil = exports.Tree = undefined;

var _Tree = __webpack_require__(7);

var _Tree2 = _interopRequireDefault(_Tree);

var _util = __webpack_require__(23);

var treeUtil = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Tree = _Tree2.default;
exports.treeUtil = treeUtil;
exports.default = _Tree2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d = __webpack_require__(2);

var _clone = __webpack_require__(8);

var _clone2 = _interopRequireDefault(_clone);

var _deepEqual = __webpack_require__(9);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _uuid = __webpack_require__(3);

var _uuid2 = _interopRequireDefault(_uuid);

var _NodeWrapper = __webpack_require__(10);

var _NodeWrapper2 = _interopRequireDefault(_NodeWrapper);

var _Node = __webpack_require__(12);

var _Node2 = _interopRequireDefault(_Node);

var _Link = __webpack_require__(18);

var _Link2 = _interopRequireDefault(_Link);

__webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tree = function (_React$Component) {
  _inherits(Tree, _React$Component);

  function Tree(props) {
    _classCallCheck(this, Tree);

    var _this = _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, props));

    _this.state = {
      data: _this.assignInternalProperties((0, _clone2.default)(props.data)),
      rd3tSvgClassName: '_' + _uuid2.default.v4(),
      rd3tGClassName: '_' + _uuid2.default.v4()
    };
    _this.internalState = {
      initialRender: true,
      targetNode: null,
      isTransitioning: false,
      d3: {
        scale: _this.props.zoom,
        translate: _this.props.translate
      }
    };
    _this.findNodesById = _this.findNodesById.bind(_this);
    _this.collapseNode = _this.collapseNode.bind(_this);
    _this.handleNodeToggle = _this.handleNodeToggle.bind(_this);
    _this.handleOnClickCb = _this.handleOnClickCb.bind(_this);
    _this.handleOnMouseOverCb = _this.handleOnMouseOverCb.bind(_this);
    _this.handleOnMouseOutCb = _this.handleOnMouseOutCb.bind(_this);
    return _this;
  }

  _createClass(Tree, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.internalState.d3 = this.calculateD3Geometry(this.props);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.bindZoomListener(this.props);
      this.internalState.initialRender = false;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      // Rebind zoom listeners to new DOM nodes in case NodeWrapper switched <TransitionGroup> <-> <g>
      if (prevProps.transitionDuration !== this.props.transitionDuration) {
        this.bindZoomListener(this.props);
      }

      if (typeof this.props.onUpdate === 'function') {
        this.props.onUpdate({
          node: this.internalState.targetNode ? (0, _clone2.default)(this.internalState.targetNode) : null,
          zoom: this.internalState.d3.scale,
          translate: this.internalState.d3.translate
        });

        this.internalState.targetNode = null;
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // Clone new data & assign internal properties
      if (this.props.data !== nextProps.data) {
        this.setState({
          data: this.assignInternalProperties((0, _clone2.default)(nextProps.data))
        });
      }

      this.internalState.d3 = this.calculateD3Geometry(nextProps);

      // If zoom-specific props change -> rebind listener with new values
      if (!(0, _deepEqual2.default)(this.props.translate, nextProps.translate) || !(0, _deepEqual2.default)(this.props.scaleExtent, nextProps.scaleExtent) || this.props.zoom !== nextProps.zoom) {
        this.bindZoomListener(nextProps);
      }
    }

    /**
     * setInitialTreeDepth - Description
     *
     * @param {array} nodeSet Array of nodes generated by `generateTree`
     * @param {number} initialDepth Maximum initial depth the tree should render
     *
     * @return {void}
     */

  }, {
    key: 'setInitialTreeDepth',
    value: function setInitialTreeDepth(nodeSet, initialDepth) {
      nodeSet.forEach(function (n) {
        n._collapsed = n.depth >= initialDepth;
      });
    }

    /**
     * bindZoomListener - If `props.zoomable`, binds a listener for
     * "zoom" events to the SVG and sets scaleExtent to min/max
     * specified in `props.scaleExtent`.
     *
     * @return {void}
     */

  }, {
    key: 'bindZoomListener',
    value: function bindZoomListener(props) {
      var _this2 = this;

      var zoomable = props.zoomable,
          scaleExtent = props.scaleExtent,
          translate = props.translate,
          zoom = props.zoom,
          onUpdate = props.onUpdate;
      var _state = this.state,
          rd3tSvgClassName = _state.rd3tSvgClassName,
          rd3tGClassName = _state.rd3tGClassName;

      var svg = (0, _d.select)('.' + rd3tSvgClassName);
      var g = (0, _d.select)('.' + rd3tGClassName);

      if (zoomable) {
        svg.call(_d.behavior.zoom().scaleExtent([scaleExtent.min, scaleExtent.max]).on('zoom', function () {
          g.attr('transform', 'translate(' + _d.event.translate + ') scale(' + _d.event.scale + ')');
          if (typeof onUpdate === 'function') {
            // This callback is magically called not only on "zoom", but on "drag", as well,
            // even though event.type == "zoom".
            // Taking advantage of this and not writing a "drag" handler.
            onUpdate({
              node: null,
              zoom: _d.event.scale,
              translate: { x: _d.event.translate[0], y: _d.event.translate[1] }
            });
            _this2.internalState.d3.scale = _d.event.scale;
            _this2.internalState.d3.translate = { x: _d.event.translate[0], y: _d.event.translate[1] };
          }
        })
        // Offset so that first pan and zoom does not jump back to [0,0] coords
        .scale(zoom).translate([translate.x, translate.y]));
      }
    }

    /**
     * assignInternalProperties - Assigns internal properties to each node in the
     * `data` set that are required for tree manipulation and returns
     * a new `data` array.
     *
     * @param {array} data Hierarchical tree data
     *
     * @return {array} `data` array with internal properties added
     */

  }, {
    key: 'assignInternalProperties',
    value: function assignInternalProperties(data) {
      var _this3 = this;

      return data.map(function (node) {
        node.id = _uuid2.default.v4();
        node._collapsed = false;
        // if there are children, recursively assign properties to them too
        if (node.children && node.children.length > 0) {
          node.children = _this3.assignInternalProperties(node.children);
          node._children = node.children;
        }
        return node;
      });
    }

    /**
     * findNodesById - Recursively walks the nested `nodeSet` until a node matching `nodeId` is found.
     *
     * @param {string} nodeId The `node.id` being searched for
     * @param {array} nodeSet Array of nested `node` objects
     * @param {array} hits Accumulator for matches, passed between recursive calls
     *
     * @return {array} Set of nodes matching `nodeId`
     */
    // TODO: Refactor this into a more readable/reasonable recursive depth-first walk.

  }, {
    key: 'findNodesById',
    value: function findNodesById(nodeId, nodeSet, hits) {
      var _this4 = this;

      if (hits.length > 0) {
        return hits;
      }

      hits = hits.concat(nodeSet.filter(function (node) {
        return node.id === nodeId;
      }));

      nodeSet.forEach(function (node) {
        if (node._children && node._children.length > 0) {
          hits = _this4.findNodesById(nodeId, node._children, hits);
        }
      });

      return hits;
    }

    /**
     * findNodesAtDepth - Recursively walks the nested `nodeSet` until all nodes at `depth` have been found.
     *
     * @param {number} depth Target depth for which nodes should be returned
     * @param {array} nodeSet Array of nested `node` objects
     * @param {array} accumulator Accumulator for matches, passed between recursive calls
     * @return
     */

  }, {
    key: 'findNodesAtDepth',
    value: function findNodesAtDepth(depth, nodeSet, accumulator) {
      var _this5 = this;

      accumulator = accumulator.concat(nodeSet.filter(function (node) {
        return node.depth === depth;
      }));

      nodeSet.forEach(function (node) {
        if (node._children && node._children.length > 0) {
          accumulator = _this5.findNodesAtDepth(depth, node._children, accumulator);
        }
      });

      return accumulator;
    }

    /**
     * collapseNode - Recursively sets the `_collapsed` property of
     * the passed `node` object and its children to `true`.
     *
     * @param {object} node Node object with custom properties
     *
     * @return {void}
     */

  }, {
    key: 'collapseNode',
    value: function collapseNode(node) {
      var _this6 = this;

      node._collapsed = true;
      if (node._children && node._children.length > 0) {
        node._children.forEach(function (child) {
          _this6.collapseNode(child);
        });
      }
    }

    /**
     * expandNode - Sets the `_collapsed` property of
     * the passed `node` object to `false`.
     *
     * @param {type} node Node object with custom properties
     *
     * @return {void}
     */

  }, {
    key: 'expandNode',
    value: function expandNode(node) {
      node._collapsed = false;
    }

    /**
     * collapseNodeNeighbors - Collapses all nodes in `nodeSet` that are neighbors (same depth) of `targetNode`.
     *
     * @param {object} targetNode
     * @param {array} nodeSet
     *
     * @return {void}
     */

  }, {
    key: 'collapseNeighborNodes',
    value: function collapseNeighborNodes(targetNode, nodeSet) {
      var _this7 = this;

      var neighbors = this.findNodesAtDepth(targetNode.depth, nodeSet, []).filter(function (node) {
        return node.id !== targetNode.id;
      });
      neighbors.forEach(function (neighbor) {
        return _this7.collapseNode(neighbor);
      });
    }

    /**
     * handleNodeToggle - Finds the node matching `nodeId` and
     * expands/collapses it, depending on the current state of
     * its `_collapsed` property.
     * `setState` callback receives targetNode and handles
     * `props.onClick` if defined.
     *
     * @param {string} nodeId A node object's `id` field.
     *
     * @return {void}
     */

  }, {
    key: 'handleNodeToggle',
    value: function handleNodeToggle(nodeId, evt) {
      var _this8 = this;

      var data = (0, _clone2.default)(this.state.data);
      var matches = this.findNodesById(nodeId, data, []);
      var targetNode = matches[0];

      if (this.props.collapsible && !this.state.isTransitioning) {
        if (targetNode._collapsed) {
          this.expandNode(targetNode);
          this.props.shouldCollapseNeighborNodes && this.collapseNeighborNodes(targetNode, data);
        } else {
          this.collapseNode(targetNode);
        }
        // Lock node toggling while transition takes place
        this.setState({ data: data, isTransitioning: true }, function () {
          return _this8.handleOnClickCb(targetNode, evt);
        });
        // Await transitionDuration + 10 ms before unlocking node toggling again
        setTimeout(function () {
          return _this8.setState({ isTransitioning: false });
        }, this.props.transitionDuration + 10);
        this.internalState.targetNode = targetNode;
      } else {
        this.handleOnClickCb(targetNode, evt);
      }
    }

    /**
     * handleOnClickCb - Handles the user-defined `onClick` function
     *
     * @param {object} targetNode Description
     *
     * @return {void}
     */

  }, {
    key: 'handleOnClickCb',
    value: function handleOnClickCb(targetNode, evt) {
      var onClick = this.props.onClick;

      if (onClick && typeof onClick === 'function') {
        onClick((0, _clone2.default)(targetNode), evt);
      }
    }

    /**
     * handleOnMouseOverCb - Handles the user-defined `onMouseOver` function
     *
     * @param {string} nodeId
     *
     * @return {void}
     */

  }, {
    key: 'handleOnMouseOverCb',
    value: function handleOnMouseOverCb(nodeId, evt) {
      var onMouseOver = this.props.onMouseOver;

      if (onMouseOver && typeof onMouseOver === 'function') {
        var data = (0, _clone2.default)(this.state.data);
        var matches = this.findNodesById(nodeId, data, []);
        var targetNode = matches[0];
        onMouseOver((0, _clone2.default)(targetNode), evt);
      }
    }

    /**
     * handleOnMouseOutCb - Handles the user-defined `onMouseOut` function
     *
     * @param {string} nodeId
     *
     * @return {void}
     */

  }, {
    key: 'handleOnMouseOutCb',
    value: function handleOnMouseOutCb(nodeId, evt) {
      var onMouseOut = this.props.onMouseOut;

      if (onMouseOut && typeof onMouseOut === 'function') {
        var data = (0, _clone2.default)(this.state.data);
        var matches = this.findNodesById(nodeId, data, []);
        var targetNode = matches[0];
        onMouseOut((0, _clone2.default)(targetNode), evt);
      }
    }

    /**
     * generateTree - Generates tree elements (`nodes` and `links`) by
     * grabbing the rootNode from `this.state.data[0]`.
     * Restricts tree depth to `props.initialDepth` if defined and if this is
     * the initial render of the tree.
     *
     * @return {object} Object containing `nodes` and `links`.
     */

  }, {
    key: 'generateTree',
    value: function generateTree() {
      var _props = this.props,
          initialDepth = _props.initialDepth,
          depthFactor = _props.depthFactor,
          separation = _props.separation,
          nodeSize = _props.nodeSize,
          orientation = _props.orientation;


      var tree = _d.layout.tree().nodeSize(orientation === 'horizontal' ? [nodeSize.y, nodeSize.x] : [nodeSize.x, nodeSize.y]).separation(function (a, b) {
        return a.parent.id === b.parent.id ? separation.siblings : separation.nonSiblings;
      }).children(function (d) {
        return d._collapsed ? null : d._children;
      });

      var rootNode = this.state.data[0];
      var nodes = tree.nodes(rootNode);

      // set `initialDepth` on first render if specified
      if (initialDepth !== undefined && this.internalState.initialRender) {
        this.setInitialTreeDepth(nodes, initialDepth);
        nodes = tree.nodes(rootNode);
      }

      if (depthFactor) {
        nodes.forEach(function (node) {
          node.y = node.depth * depthFactor;
        });
      }

      var links = tree.links(nodes);
      return { nodes: nodes, links: links };
    }

    /**
     * calculateD3Geometry - Set initial zoom and position.
     * Also limit zoom level according to `scaleExtent` on initial display. This is necessary,
     * because the first time we are setting it as an SVG property, instead of going
     * through D3's scaling mechanism, which would have picked up both properties.
     *
     * @param  {object} nextProps
     * @return {object} {translate: {x: number, y: number}, zoom: number}
     */

  }, {
    key: 'calculateD3Geometry',
    value: function calculateD3Geometry(nextProps) {
      var scale = void 0;

      if (nextProps.zoom > nextProps.scaleExtent.max) {
        scale = nextProps.scaleExtent.max;
      } else if (nextProps.zoom < nextProps.scaleExtent.min) {
        scale = nextProps.scaleExtent.min;
      } else {
        scale = nextProps.zoom;
      }

      return {
        translate: nextProps.translate,
        scale: scale
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this9 = this;

      var _generateTree = this.generateTree(),
          nodes = _generateTree.nodes,
          links = _generateTree.links;

      var _state2 = this.state,
          rd3tSvgClassName = _state2.rd3tSvgClassName,
          rd3tGClassName = _state2.rd3tGClassName;
      var _props2 = this.props,
          nodeSvgShape = _props2.nodeSvgShape,
          nodeLabelComponent = _props2.nodeLabelComponent,
          orientation = _props2.orientation,
          pathFunc = _props2.pathFunc,
          transitionDuration = _props2.transitionDuration,
          zoomable = _props2.zoomable,
          textLayout = _props2.textLayout,
          nodeSize = _props2.nodeSize,
          depthFactor = _props2.depthFactor,
          initialDepth = _props2.initialDepth,
          separation = _props2.separation,
          circleRadius = _props2.circleRadius,
          allowForeignObjects = _props2.allowForeignObjects,
          styles = _props2.styles;
      var _internalState$d = this.internalState.d3,
          translate = _internalState$d.translate,
          scale = _internalState$d.scale;


      var subscriptions = _extends({}, nodeSize, separation, { depthFactor: depthFactor, initialDepth: initialDepth });

      return _react2.default.createElement(
        'div',
        { className: 'rd3t-tree-container ' + (zoomable ? 'rd3t-grabbable' : undefined) },
        _react2.default.createElement(
          'svg',
          { className: rd3tSvgClassName, width: '100%', height: '100%' },
          _react2.default.createElement(
            _NodeWrapper2.default,
            {
              transitionDuration: transitionDuration,
              component: 'g',
              className: rd3tGClassName,
              transform: 'translate(' + translate.x + ',' + translate.y + ') scale(' + scale + ')'
            },
            links.map(function (linkData) {
              return _react2.default.createElement(_Link2.default, {
                key: _uuid2.default.v4(),
                orientation: orientation,
                pathFunc: pathFunc,
                linkData: linkData,
                transitionDuration: transitionDuration,
                styles: styles.links
              });
            }),
            nodes.map(function (nodeData) {
              return _react2.default.createElement(_Node2.default, {
                key: nodeData.id,
                nodeSvgShape: _extends({}, nodeSvgShape, nodeData.nodeSvgShape),
                nodeLabelComponent: nodeLabelComponent,
                nodeSize: nodeSize,
                orientation: orientation,
                transitionDuration: transitionDuration,
                nodeData: nodeData,
                name: nodeData.name,
                attributes: nodeData.attributes,
                image: nodeData.image,
                onClick: _this9.handleNodeToggle,
                onMouseOver: _this9.handleOnMouseOverCb,
                onMouseOut: _this9.handleOnMouseOutCb,
                textLayout: textLayout,
                circleRadius: circleRadius,
                subscriptions: subscriptions,
                allowForeignObjects: allowForeignObjects,
                styles: styles.nodes
              });
            })
          )
        )
      );
    }
  }]);

  return Tree;
}(_react2.default.Component);

exports.default = Tree;


Tree.defaultProps = {
  nodeSvgShape: {
    shape: 'circle',
    shapeProps: {
      r: 10
    }
  },
  nodeLabelComponent: null,
  onClick: undefined,
  onMouseOver: undefined,
  onMouseOut: undefined,
  onUpdate: undefined,
  orientation: 'horizontal',
  translate: { x: 0, y: 0 },
  pathFunc: 'diagonal',
  transitionDuration: 500,
  depthFactor: undefined,
  collapsible: true,
  initialDepth: undefined,
  zoomable: true,
  zoom: 1,
  scaleExtent: { min: 0.1, max: 1 },
  nodeSize: { x: 140, y: 140 },
  separation: { siblings: 1, nonSiblings: 2 },
  textLayout: {
    textAnchor: 'start',
    x: 10,
    y: -10,
    transform: undefined
  },
  allowForeignObjects: false,
  shouldCollapseNeighborNodes: false,
  circleRadius: undefined, // TODO: DEPRECATE
  styles: {}
};

Tree.propTypes = {
  data: _propTypes2.default.array.isRequired,
  nodeSvgShape: _propTypes2.default.shape({
    shape: _propTypes2.default.string,
    shapeProps: _propTypes2.default.object
  }),
  nodeLabelComponent: _propTypes2.default.object,
  onClick: _propTypes2.default.func,
  onMouseOver: _propTypes2.default.func,
  onMouseOut: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func,
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  translate: _propTypes2.default.shape({
    x: _propTypes2.default.number,
    y: _propTypes2.default.number
  }),
  pathFunc: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['diagonal', 'elbow', 'straight']), _propTypes2.default.func]),
  transitionDuration: _propTypes2.default.number,
  depthFactor: _propTypes2.default.number,
  collapsible: _propTypes2.default.bool,
  initialDepth: _propTypes2.default.number,
  zoomable: _propTypes2.default.bool,
  zoom: _propTypes2.default.number,
  scaleExtent: _propTypes2.default.shape({
    min: _propTypes2.default.number,
    max: _propTypes2.default.number
  }),
  nodeSize: _propTypes2.default.shape({
    x: _propTypes2.default.number,
    y: _propTypes2.default.number
  }),
  separation: _propTypes2.default.shape({
    siblings: _propTypes2.default.number,
    nonSiblings: _propTypes2.default.number
  }),
  textLayout: _propTypes2.default.object,
  allowForeignObjects: _propTypes2.default.bool,
  shouldCollapseNeighborNodes: _propTypes2.default.bool,
  circleRadius: _propTypes2.default.number,
  styles: _propTypes2.default.shape({
    nodes: _propTypes2.default.object,
    links: _propTypes2.default.object
  })
};
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NodeWrapper = function (_React$Component) {
  _inherits(NodeWrapper, _React$Component);

  function NodeWrapper(props) {
    _classCallCheck(this, NodeWrapper);

    var _this = _possibleConstructorReturn(this, (NodeWrapper.__proto__ || Object.getPrototypeOf(NodeWrapper)).call(this, props));

    _this.state = {
      enableTransitions: props.transitionDuration > 0
    };
    return _this;
  }

  _createClass(NodeWrapper, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.transitionDuration !== this.props.transitionDuration) {
        this.setState({
          enableTransitions: nextProps.transitionDuration > 0
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.enableTransitions) {
        return _react2.default.createElement(
          _reactTransitionGroup.TransitionGroup,
          {
            component: this.props.component,
            className: this.props.className,
            transform: this.props.transform
          },
          this.props.children
        );
      }

      return _react2.default.createElement(
        'g',
        { className: this.props.className, transform: this.props.transform },
        this.props.children
      );
    }
  }]);

  return NodeWrapper;
}(_react2.default.Component);

exports.default = NodeWrapper;


NodeWrapper.defaultProps = {
  component: 'g'
};

NodeWrapper.propTypes = {
  transitionDuration: _propTypes2.default.number.isRequired,
  component: _propTypes2.default.string,
  className: _propTypes2.default.string.isRequired,
  transform: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.array.isRequired
};
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: SyntaxError: Adjacent JSX elements must be wrapped in an enclosing tag (89:10)\n\n\u001b[0m \u001b[90m 87 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mpattern\u001b[39m\u001b[33m>\u001b[39m \n \u001b[90m 88 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdefs\u001b[39m\u001b[33m>\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 89 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33mcircle\u001b[39m r\u001b[33m=\u001b[39m{circleRadius} style\u001b[33m=\u001b[39m{nodeStyle\u001b[33m.\u001b[39mcircle} fill\u001b[33m=\u001b[39m\u001b[32m'url(#img1)'\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m    | \u001b[39m          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 90 | \u001b[39m           )\u001b[33m;\u001b[39m\n \u001b[90m 91 | \u001b[39m    }\n \u001b[90m 92 | \u001b[39m\u001b[0m\n");

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d = __webpack_require__(2);

__webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_React$PureComponent) {
  _inherits(Link, _React$PureComponent);

  function Link(props) {
    _classCallCheck(this, Link);

    var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

    _this.state = {
      initialStyle: {
        opacity: 0
      }
    };
    return _this;
  }

  _createClass(Link, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.applyOpacity(1, this.props.transitionDuration);
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      this.applyOpacity(0, this.props.transitionDuration, done);
    }
  }, {
    key: 'applyOpacity',
    value: function applyOpacity(opacity, transitionDuration) {
      var done = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

      if (transitionDuration === 0) {
        (0, _d.select)(this.link).style('opacity', opacity);
        done();
      } else {
        (0, _d.select)(this.link).transition().duration(transitionDuration).style('opacity', opacity).each('end', done);
      }
    }
  }, {
    key: 'diagonalPath',
    value: function diagonalPath(linkData, orientation) {
      var diagonal = _d.svg.diagonal().projection(function (d) {
        return orientation === 'horizontal' ? [d.y, d.x] : [d.x, d.y];
      });
      return diagonal(linkData);
    }
  }, {
    key: 'straightPath',
    value: function straightPath(linkData, orientation) {
      var straight = _d.svg.line().interpolate('basis').x(function (d) {
        return d.x;
      }).y(function (d) {
        return d.y;
      });

      var data = [{ x: linkData.source.x, y: linkData.source.y }, { x: linkData.target.x, y: linkData.target.y }];

      if (orientation === 'horizontal') {
        data = [{ x: linkData.source.y, y: linkData.source.x }, { x: linkData.target.y, y: linkData.target.x }];
      }

      return straight(data);
    }
  }, {
    key: 'elbowPath',
    value: function elbowPath(d, orientation) {
      return orientation === 'horizontal' ? 'M' + d.source.y + ',' + d.source.x + 'V' + d.target.x + 'H' + d.target.y : 'M' + d.source.x + ',' + d.source.y + 'V' + d.target.y + 'H' + d.target.x;
    }
  }, {
    key: 'drawPath',
    value: function drawPath() {
      var _props = this.props,
          linkData = _props.linkData,
          orientation = _props.orientation,
          pathFunc = _props.pathFunc;


      if (typeof pathFunc === 'function') {
        return pathFunc(linkData, orientation);
      }

      if (pathFunc === 'elbow') {
        return this.elbowPath(linkData, orientation);
      }

      if (pathFunc === 'straight') {
        return this.straightPath(linkData, orientation);
      }

      return this.diagonalPath(linkData, orientation);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var styles = this.props.styles;

      return _react2.default.createElement('path', {
        ref: function ref(l) {
          _this2.link = l;
        },
        style: _extends({}, this.state.initialStyle, styles),
        className: 'linkBase',
        d: this.drawPath()
      });
    }
  }]);

  return Link;
}(_react2.default.PureComponent);

exports.default = Link;


Link.defaultProps = {
  styles: {}
};

Link.propTypes = {
  linkData: _propTypes2.default.object.isRequired,
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical']).isRequired,
  pathFunc: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['diagonal', 'elbow', 'straight']), _propTypes2.default.func]).isRequired,
  transitionDuration: _propTypes2.default.number.isRequired,
  styles: _propTypes2.default.object
};
module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(20);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".linkBase {\n  fill: none;\n  stroke: #000;\n}", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(22);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".rd3t-tree-container {\n  width: 100%;\n  height: 100%;\n}\n\n.rd3t-grabbable {\n  cursor: move; /* fallback if grab cursor is unsupported */\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n.rd3t-grabbable:active {\n    cursor: grabbing;\n    cursor: -moz-grabbing;\n    cursor: -webkit-grabbing;\n}\n", ""]);

// exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d = __webpack_require__(2);

var _uuid = __webpack_require__(3);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * _transformToHierarchy - Transforms a flat array of parent-child links
 * into a hierarchy.
 * @private
 * @param {array<object>} links           Set of parent-child link objects
 * @param {array<string>|undefined} attributeFields Set of `link` fields to be used as attributes
 *
 * @return {array<object>} Single-element array containing the root node object.
 */
function _transformToHierarchy(links, attributeFields) {
  var nodesByName = {};

  var assignNode = function assignNode(name) {
    if (!nodesByName[name]) {
      nodesByName[name] = { name: name };
    }
    return nodesByName[name];
  };

  var assignNodeWithAttributes = function assignNodeWithAttributes(name, attributes) {
    if (!nodesByName[name]) {
      nodesByName[name] = {
        name: name,
        attributes: attributes
      };
    }
    return nodesByName[name];
  };

  // Create nodes for each unique source and target.
  links.forEach(function (link) {
    // if `attributeFields` is defined, create/overwrite current `link.attributes`
    if (attributeFields) {
      var customAttributes = {};
      attributeFields.forEach(function (field) {
        customAttributes[field] = link[field];
      });
      link.attributes = customAttributes;
    }

    link.source = assignNode(link.parent);
    link.target = assignNodeWithAttributes(link.child, link.attributes);
    var parent = link.source;
    var child = link.target;

    parent.id = _uuid2.default.v4();
    child.id = _uuid2.default.v4();
    child.parent = parent.name || null;

    parent._collapsed = child._collapsed = false; // eslint-disable-line
    // NOTE We assign to a custom `_children` field instead of D3's reserved
    // `children` to avoid update anomalies when collapsing/re-expanding nodes.
    parent._children ? parent._children.push(child) : parent._children = [child];
  });

  // Extract & return the root node
  var rootLinks = links.filter(function (link) {
    return !link.source.parent;
  });
  return [rootLinks[0].source];
}

/**
 * parseCSV - Parses a CSV file into a hierarchy structure.
 *
 * @param {string} csvFilePath     Path to CSV file to be parsed.
 * @param {array<string>|undefined} attributeFields Set of column names to be used as attributes (optional)
 *
 * @return {Promise} Returns hierarchy array if resolved, error object if rejected.
 */
function parseCSV(csvFilePath, attributeFields) {
  return new Promise(function (resolve, reject) {
    try {
      (0, _d.csv)(csvFilePath, function (data) {
        return resolve(_transformToHierarchy(data, attributeFields));
      }); // lol hello Lisp
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * parseJSON - Parses a hierarchical JSON file that requires no further transformation.
 *
 * @param {string} jsonFilePath Path to JSON file to be parsed.
 *
 * @return {Promise} Returns hierarchy array if resolved, error object if rejected.
 */
function parseJSON(jsonFilePath) {
  return new Promise(function (resolve, reject) {
    try {
      (0, _d.json)(jsonFilePath, function (data) {
        return resolve([data]);
      });
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * parseFlatJSON - Parses a flat JSON file into a hierarchy structure.
 *
 * @param {string} jsonFilePath Path to flat JSON file to be parsed.
 * @param {array<string>|undefined} attributeFields Set of `link` fields to be used as attributes
 *
 * @return {Promise} Returns hierarchy array if resolved, error object if rejected.
 */
function parseFlatJSON(jsonFilePath, attributeFields) {
  return new Promise(function (resolve, reject) {
    try {
      (0, _d.json)(jsonFilePath, function (data) {
        return resolve(_transformToHierarchy(data, attributeFields));
      });
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * generateHierarchy - Generates a hierarchical array from
 * a flat array of links.
 *
 * @param {array<object>} flatArray Flat array of `link` objects
 *
 * @return {array<object>} Hierarchical single-element array.
 */
function generateHierarchy(flatArray) {
  return _transformToHierarchy(flatArray);
}

exports.default = {
  parseCSV: parseCSV,
  parseJSON: parseJSON,
  parseFlatJSON: parseFlatJSON,
  generateHierarchy: generateHierarchy
};
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=react-d3-tree.js.map