/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/section/section.js":
/*!**************************************************!*\
  !*** ./src/blocks/components/section/section.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fullpage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fullpage.js */ "./node_modules/fullpage.js/dist/fullpage.js");
/* harmony import */ var fullpage_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fullpage_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");


 // const video = $('.animation video').get(0);
// console.log(video);

var scroller = new fullpage_js__WEBPACK_IMPORTED_MODULE_1___default.a('#sections', {
  anchors: ['first', 'second', 'third', 'fourth', 'fiveth', 'sixth', 'seventh', 'eight', 'nine'],
  // licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  scrollingSpeed: 1500,
  // autoScrolling: false,
  controlArrows: true,
  afterRender: function afterRender(section, origin, destination, direction) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.counter__current').text(section.index + 1);
  },
  onLeave: function onLeave(origin, destination) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('.animation__in').length) return;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.counter__current').text(destination.index + 1);

    switch (destination.anchor) {
      case "first":
        step = 1;
        step1();
        break;

      case "second":
        step = 2;
        step2();
        break;

      case "third":
        step = 3;
        step3();
        break;

      case "fourth":
        step = 4;
        step4();
        break;

      case "fiveth":
        step = 5;
        step5();
        break;

      case "sixth":
        step = 6;
        step6();
        break;

      case "seventh":
        step = 7;
        step7();
        break;

      case "eight":
        step = 8;
        step8();
        break;

      case "nine":
        step = 9;
        step9();
        break;

      default:
        step = 1;
        step1();
    }
  },
  afterLoad: function afterLoad() {// video.play();
  }
});

/***/ }),

/***/ "./src/blocks/modules/animation/animation.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/animation/animation.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mobile-arrows__item--up').on('click', function () {
  fullpage_api.moveSectionUp();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mobile-arrows__item--down').on('click', function () {
  fullpage_api.moveSectionDown();
});

/***/ }),

/***/ "./src/blocks/modules/first/first.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/first/first.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".first__text").innerHeight(jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-item-id].isActive').innerHeight());
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.first__shield').on('mouseenter', '.small_shield', function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-text-id].isActive').removeClass('isActive');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-item-id].isActive').removeClass('isActive');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('isActive');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".first__text-in[data-item-id=\"".concat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('text-id'), "\"]")).addClass('isActive');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".first__text").innerHeight(jquery__WEBPACK_IMPORTED_MODULE_0___default()(".first__text-in[data-item-id=\"".concat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('text-id'), "\"]")).innerHeight());
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/preloader/preloader.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/preloader/preloader.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  var svgWidthOnFullHd = 219 * (window.innerWidth / 1920);
  var svgHeightOnFullHd = 109 * (window.innerWidth / 1920);
  var innerWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.preloader__in').width();
  var innerHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.preloader__in').height();
  console.log((innerWidth - svgWidthOnFullHd) / 2, svgWidthOnFullHd);
  console.log((innerHeight - svgHeightOnFullHd) / 2, svgHeightOnFullHd);
  setTimeout(function () {
    if (window.innerWidth > 1023) {
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to('.preloader__in', 1, {
        left: function left() {
          return 100 * 100 / 1920 + 'vw';
        },
        top: function top() {
          return 60 * 100 / 1920 + 'vw';
        },
        x: function x() {
          return (innerWidth - svgWidthOnFullHd) / 2 * -1 * 100 / 1920 + 'vw';
        },
        y: function y() {
          return (innerHeight - svgHeightOnFullHd) / 2 * -1 * 100 / 1920 + 'vw';
        },
        onComplete: function onComplete() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.preloader').fadeOut();
        }
      });
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.preloader').fadeOut();
  }, 2000);
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_section_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/section/section */ "./src/blocks/components/section/section.js");


/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_animation_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/animation/animation */ "./src/blocks/modules/animation/animation.js");
/* harmony import */ var _modules_preloader_preloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/preloader/preloader */ "./src/blocks/modules/preloader/preloader.js");
/* harmony import */ var _modules_first_first__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/first/first */ "./src/blocks/modules/first/first.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");



/***/ })

/******/ });
//# sourceMappingURL=main.js.map