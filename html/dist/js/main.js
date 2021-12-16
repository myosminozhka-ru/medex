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
/* harmony import */ var typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typewriter-effect/dist/core */ "./node_modules/typewriter-effect/dist/core.js");
/* harmony import */ var typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_2__);



var third_shield = new typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_2___default.a('.third__shield-in', {
  strings: ['Mosoblkino "has been organizing film distribution.'],
  autoStart: false
});
var fiveth_shield = new typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_2___default.a('.fiveth__shield-in', {
  strings: ['Mosoblkino "has been organizing film distribution.'],
  autoStart: false
});
var seventh_shield = new typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_2___default.a('.seventh__shield-in', {
  strings: ['Mosoblkino "has been organizing film distribution.'],
  autoStart: false
});

function animateTyping(writer, text, selector) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).html('');
  writer.typeString(text).start();
} // const video = $('.animation video').get(0);
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
        setTimeout(function () {
          animateTyping(third_shield, jquery__WEBPACK_IMPORTED_MODULE_0___default()('.third__shield').data('text'), '.third__shield-in .Typewriter__wrapper');
        }, 3000); // third_shield
        //     .typeString($('.third__shield').data('text'))
        //     .start();

        break;

      case "fourth":
        step = 4;
        step4();
        break;

      case "fiveth":
        step = 5;
        step5();
        setTimeout(function () {
          animateTyping(fiveth_shield, jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fiveth__shield').data('text'), '.fiveth__shield-in .Typewriter__wrapper');
        }, 3000);
        break;

      case "sixth":
        step = 6;
        step6();
        break;

      case "seventh":
        step = 7;
        step7();
        setTimeout(function () {
          animateTyping(seventh_shield, jquery__WEBPACK_IMPORTED_MODULE_0___default()('.seventh__shield').data('text'), '.seventh__shield-in .Typewriter__wrapper');
        }, 3000);
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


if (window.innerWidth <= 1023) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".first__text").innerHeight(jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-item-id].isActive').innerHeight());
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.first__shield').on('mouseenter', '.small_shield', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-text-id].isActive').removeClass('isActive');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-item-id].isActive').removeClass('isActive');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('isActive');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".first__text-in[data-item-id=\"".concat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('text-id'), "\"]")).addClass('isActive');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".first__text").innerHeight(jquery__WEBPACK_IMPORTED_MODULE_0___default()(".first__text-in[data-item-id=\"".concat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('text-id'), "\"]")).innerHeight());
  });
}

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
/* harmony import */ var typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typewriter-effect/dist/core */ "./node_modules/typewriter-effect/dist/core.js");
/* harmony import */ var typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_2__);



window.typewriter = new typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_2___default.a('.first__name', {
  strings: ['Mosoblkino "has been organizing film distribution.'],
  autoStart: false
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  function moveItem(item) {
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(item, 0.3, {
      transform: "translate(0, 0)",
      fillOpacity: 1,
      onComplete: function onComplete() {
        console.log(jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).next().length);

        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).next().length) {
          moveItem(jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).next());
        } else {
          finishPreloading();
        }
      }
    });
  }

  function startPreloader() {
    moveItem(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.preloader__in > svg > g')[0]);
  }

  function finishPreloading() {
    var svgWidthOnFullHd = 219 * (window.innerWidth / 1920);
    var svgHeightOnFullHd = 109 * (window.innerWidth / 1920);
    var innerWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.preloader__in').width();
    var innerHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.preloader__in').height();

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
        opacity: 0,
        onComplete: function onComplete() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.preloader').fadeOut('slow', function () {
            showShield();
          });
        }
      });
    } else {
      showShield();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.preloader').fadeOut();
    }
  }

  function showShield() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.first__shield').fadeIn('fast', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.first__shield').html(jquery__WEBPACK_IMPORTED_MODULE_0___default()("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" viewBox=\"0 0 641 775\" fill=\"none\">\n                <mask id=\"mask0_101_208\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"136\" y=\"155\" width=\"369\"\n                    height=\"442\">\n                    <path\n                        d=\"M484.141 202.231L324.682 155.625L324.353 155.533C321.661 154.822 318.812 154.822 316.118 155.533L315.952 155.577L156.329 202.231C144.554 205.43 136.347 216.148 136.347 228.367V455.717C136.347 485.567 152.824 512.481 179.374 526.061L283.789 587.433L284.514 587.828C295.698 593.472 307.966 596.295 320.234 596.295C332.502 596.295 344.771 593.473 355.953 587.828L356.323 587.642L461.094 526.061C487.645 512.483 504.122 485.569 504.122 455.717V228.367C504.121 216.148 495.916 205.431 484.141 202.231Z\"\n                        fill=\"white\" />\n                </mask>\n                <g mask=\"url(#mask0_101_208)\">\n                    <g opacity=\"0.19\">\n                        <g opacity=\"0.19\">\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M271.307 350.69C272.128 350.47 298.012 343.737 300.893 343.372L301.162 343.367C300.914 343.704 300.649 343.978 300.464 344.299L300.624 344.391C296.787 348.263 291.115 349.579 285.728 349.94C280.898 350.354 276.087 350.086 271.307 350.69Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M311.128 392.688C310.61 393.029 310.076 393.308 309.524 393.524C306.358 394.846 302.791 394.922 299.396 394.884C299.459 394.867 299.425 394.74 299.231 394.522C299.276 393.426 300.489 390.123 300.489 390.123L311.128 392.688Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M299.316 394.838C299.379 394.821 299.379 394.821 299.316 394.838C290.179 394.848 280.925 394.417 271.713 394.652L286.851 390.257L299.316 394.838Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M202.838 371.811C205.887 371.062 223.157 364.268 223.772 364.036C222.639 364.61 221.524 365.247 220.506 365.994C219.079 366.986 217.686 368.104 216.871 369.608C216.055 371.113 215.834 373.068 216.78 374.574C217.269 375.391 217.944 375.887 218.728 376.286C218.711 376.223 205.429 372.132 202.838 371.811Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M284.862 414.416L293.313 415.13C289.558 417.287 285.195 418.185 280.942 418.987C277.337 419.682 273.783 420.566 270.173 419.977L276.545 415.967L283.859 410.42L284.862 414.416Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M179.834 348.866L130.773 368.646L131.64 367.331C133.861 365.517 136.003 363.657 138.225 361.843C139.82 360.468 141.431 359.156 143.22 358C147.867 355.13 153.337 354.07 158.681 353.045C161.574 352.472 164.484 351.963 167.377 351.391C171.487 350.561 175.661 349.713 179.834 348.866Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M252.634 413.641L270.253 420.023L244.286 424.679L237.192 416.899C237.719 417.096 244.47 419.552 244.47 419.552L252.634 413.641Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M264.097 429.39L270.173 419.977C271.109 420.944 270.597 422.571 269.903 423.772C268.436 426.128 266.598 428.11 264.405 429.781L264.097 429.39Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M224.612 396.982L252.629 391.642C253.206 392.028 271.713 394.651 271.713 394.651C268.559 394.752 265.421 394.916 262.237 395.16C255.3 395.8 248.372 396.979 241.427 397.08C237.114 397.153 232.825 396.813 228.478 396.759C227.257 396.748 225.909 396.77 224.612 396.982Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M261.999 429.14L264.177 429.436L264.485 429.827C260.21 433.072 254.884 435.176 249.777 437.086C244.67 438.996 239.563 440.906 234.286 442.184C233.781 442.319 233.322 442.375 232.817 442.51L261.999 429.14Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M237.112 416.853L244.206 424.633L200.713 422.747L196.883 414.77C196.9 414.833 236.602 416.719 237.112 416.853Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M224.527 424.964L202.079 426.579L184.196 431.844L183.872 418.256L196.9 414.833L200.73 422.81L244.206 424.633L228.634 424.879L224.527 424.964Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M230.078 438.099L232.736 442.464C227.22 443.603 221.677 444.141 216.122 444.884C211.882 445.479 207.675 446.2 203.501 447.048L203.978 440.489C214.764 439.562 229.652 438.28 230.078 438.099Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M184.196 431.844L193.065 441.45L203.501 447.048C192.578 449.23 181.84 452.107 171.069 454.858L184.196 431.844Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M171.069 454.858C169.932 455.163 168.858 455.45 167.767 455.675C159.649 457.715 151.433 459.645 143.052 460.199C140.579 460.32 138.153 460.361 135.647 460.355C135.647 460.355 153.42 451.396 154.027 451.639C154.082 452.098 171.069 454.858 171.069 454.858Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                        </g>\n                    </g>\n                    <path\n                        d=\"M77.138 465.337C74.4906 463.541 71.771 461.223 68.9284 458.194C64.9386 453.915 61.542 449.071 58.8526 443.834C55.5089 437.419 53.3146 430.493 52.2447 423.468C51.1364 416.048 52.2334 410.541 55.5063 407.092L55.5695 407.075L55.6327 407.058C58.6735 406.785 61.0431 405.27 63.1263 403.696C63.7996 403.177 64.5191 402.578 65.1925 402.059C67.1323 400.456 69.1985 398.819 71.6065 397.7C73.4168 396.877 75.4718 396.462 77.3836 396.017C77.8889 395.882 78.3479 395.826 78.8532 395.691C80.5755 395.297 82.3441 394.823 84.0787 394.223C88.8113 392.684 93.7074 390.492 99.0659 387.499L99.2137 387.798C93.8552 390.791 88.896 393 84.1634 394.539C82.4287 395.139 80.6601 395.613 78.9379 396.007C78.4326 396.142 77.9735 396.197 77.4682 396.333C75.5395 396.714 73.5646 397.176 71.7543 397.999C69.3926 399.038 67.4064 400.721 65.4496 402.261C64.7763 402.78 64.0568 403.379 63.3834 403.898C61.3635 405.455 58.8675 407.003 55.7804 407.357C52.6339 410.772 51.5199 416.216 52.5774 423.447C53.5841 430.488 55.8248 437.334 59.1684 443.75C61.8579 448.986 65.2544 453.831 69.2273 458.046C78.4342 467.9 87.0258 470.405 92.6158 470.802L92.6789 470.785L92.8391 470.878C93.474 469.963 94.189 469.094 94.9842 468.272C100.554 462.785 109.857 461.376 116.335 460.791C120.959 460.364 125.673 460.523 130.29 460.572C131.781 460.579 133.289 460.649 134.843 460.638C137.762 460.669 140.062 460.662 142.248 460.482C150.583 460.009 158.655 458.049 166.9 455.975C167.974 455.687 169.111 455.383 170.202 455.158C171.717 454.752 173.233 454.346 174.766 454.003C183.878 451.629 193.26 449.25 202.634 447.348C207.123 446.416 211.204 445.729 215.255 445.185C216.822 444.968 218.469 444.797 220.035 444.581C223.897 444.088 227.966 443.607 231.869 442.764C232.375 442.628 232.897 442.556 233.339 442.438C238.632 441.222 243.785 439.232 248.783 437.419L248.846 437.402C254.206 435.425 259.325 433.308 263.555 430.144C265.92 428.36 267.695 426.395 269.007 424.215C269.33 423.655 270.36 421.686 269.327 420.609L268.972 420.298L269.465 420.369C272.583 420.888 275.792 420.231 278.874 419.608C279.317 419.49 279.712 419.451 280.155 419.333C284.155 418.599 288.724 417.714 292.462 415.493C292.807 415.266 293.152 415.038 293.497 414.81C294.987 413.801 296.721 412.186 296.954 410.025C297.099 408.294 296.196 406.437 294.425 404.881C294.248 404.725 293.991 404.523 293.75 404.384C290.458 401.95 286.279 401.512 283.394 401.608C280.571 401.688 277.805 402.226 275.021 402.701C273.93 402.926 272.76 403.104 271.589 403.282C268.725 403.711 265.638 404.064 262.087 404.203L262.066 403.871C265.617 403.732 268.704 403.378 271.567 402.949C272.675 402.788 273.829 402.547 275 402.368C277.703 401.847 280.55 401.355 283.372 401.276C286.337 401.226 290.579 401.646 293.952 404.127C294.209 404.329 294.45 404.468 294.644 404.687C296.495 406.289 297.415 408.209 297.241 410.084C297.041 412.371 295.198 414.083 293.645 415.109C293.3 415.337 292.955 415.564 292.547 415.809C288.746 418.046 284.16 418.869 280.113 419.682C279.671 419.801 279.275 419.839 278.833 419.958C275.876 420.547 272.794 421.17 269.71 420.777C270.525 422.049 269.524 423.874 269.201 424.434C267.843 426.694 266.004 428.675 263.639 430.46C259.427 433.687 254.227 435.758 248.885 437.798L248.821 437.815C243.841 439.691 238.671 441.618 233.394 442.897C232.889 443.032 232.43 443.087 231.925 443.223C228.021 444.066 223.953 444.547 220.091 445.04C218.524 445.257 216.877 445.427 215.311 445.644C211.259 446.188 207.178 446.875 202.689 447.807C193.315 449.709 183.934 452.088 174.821 454.462C173.306 454.868 171.79 455.274 170.257 455.617C169.12 455.922 168.046 456.21 166.955 456.434C158.711 458.508 150.558 460.422 142.24 460.958C140.1 461.057 137.754 461.145 134.835 461.114C133.344 461.108 131.773 461.055 130.282 461.048C125.711 460.919 121.015 460.823 116.39 461.25C109.976 461.818 100.736 463.211 95.212 468.617C94.4169 469.44 93.6387 470.325 93.0207 471.303L92.9282 471.463L92.6079 471.278C88.5553 470.807 83.1242 469.487 77.138 465.337Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M99.1968 387.735L99.049 387.436C100.573 386.554 102.223 385.638 103.793 384.676C104.845 384.055 105.88 383.372 107.042 382.654C109.412 381.139 111.828 379.544 114.134 378.046C118.276 375.312 122.59 372.463 126.988 369.931C127.931 369.407 128.799 369.107 129.67 369.077L130.473 367.779C131.803 366.678 133.179 365.497 134.572 364.379L137.059 362.291C138.544 361.013 140.265 359.604 142.054 358.447C146.747 355.498 152.487 354.433 157.515 353.492L166.211 351.839C170.843 350.936 174.953 350.106 178.748 349.36L178.832 349.676C175.055 350.485 170.945 351.315 166.296 352.155L157.6 353.808C152.572 354.749 146.912 355.86 142.202 358.746C140.396 359.839 138.801 361.214 137.19 362.526L134.703 364.614C133.373 365.715 131.997 366.896 130.667 367.997L129.818 369.376L129.755 369.393C128.883 369.423 128.016 369.723 127.136 370.23C122.737 372.762 118.487 375.594 114.345 378.328C112.039 379.826 109.623 381.421 107.253 382.936C106.091 383.654 105.056 384.337 104.004 384.958C102.354 385.874 100.721 386.853 99.1968 387.735Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M178.878 349.596L178.794 349.28C189.305 347.073 198.405 344.905 206.645 342.562L206.922 342.082L206.986 342.065C214.074 338.202 221.226 334.323 228.315 330.46C229.148 330.033 230.2 329.413 231.325 329.315C232.323 329.25 233.646 329.641 234.14 330.727C234.322 331.152 234.377 331.611 234.432 332.07C234.539 332.719 234.565 333.321 235.062 333.661C235.302 333.8 235.543 333.939 235.875 333.917C236.351 333.925 236.92 333.773 237.408 333.574L237.534 333.541C240.2 332.623 243.106 332.86 245.87 333.067C246.839 333.146 247.871 333.208 248.823 333.224C251.346 333.292 253.847 333.028 256.286 332.781L267.75 331.605C272.817 331.06 277.883 330.514 283.03 330.015C285.531 329.751 288.033 329.487 290.624 329.808C293.008 330.117 295.212 331.016 297.05 331.81C297.433 331.978 297.817 332.146 298.12 332.268L298.2 332.314C300.118 333.154 302.31 334.259 303.121 336.276C303.699 337.678 303.508 339.489 302.6 341.154C302.138 341.955 301.532 342.726 300.909 343.435C300.708 343.692 300.506 343.949 300.304 344.206C300.056 344.544 299.854 344.801 299.715 345.041L299.875 345.134L299.703 345.248C296.396 348.571 291.525 350.35 284.761 350.876C282.827 350.988 280.877 351.037 278.99 351.068C276.151 351.084 273.203 351.197 270.385 351.546L270.364 351.213C273.228 350.785 276.13 350.752 279.032 350.719C280.919 350.687 282.869 350.638 284.802 350.526C291.44 350.034 296.185 348.289 299.479 345.172L299.399 345.126L299.492 344.966C299.677 344.645 299.942 344.371 300.173 343.971C300.375 343.714 300.577 343.456 300.779 343.199C301.338 342.508 301.944 341.736 302.406 340.935C303.268 339.35 303.43 337.682 302.868 336.343C302.091 334.453 300.042 333.377 298.125 332.537L298.045 332.491C297.661 332.323 297.341 332.138 296.974 332.033C295.137 331.239 292.95 330.404 290.629 330.078C288.101 329.74 285.599 330.004 283.161 330.251C278.094 330.796 273.027 331.341 267.881 331.84L256.337 332.971C253.835 333.235 251.333 333.499 248.81 333.43C247.795 333.431 246.826 333.353 245.794 333.291C243.031 333.083 240.204 332.893 237.539 333.81L237.413 333.844C236.924 334.043 236.293 334.212 235.753 334.221C235.358 334.259 235.054 334.137 234.797 333.936C234.203 333.486 234.16 332.82 234.037 332.108C233.998 331.713 233.943 331.253 233.778 330.891C233.318 329.932 232.155 329.634 231.283 329.664C230.222 329.746 229.279 330.269 228.399 330.776C221.311 334.638 214.222 338.501 207.133 342.364L206.793 342.861L206.73 342.878C198.552 345.204 189.389 347.389 178.878 349.596Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M222.863 364.686L222.715 364.387C224.555 363.42 226.445 362.643 228.634 361.718L232.099 360.248C234.84 359.107 237.627 357.887 240.368 356.746C242.321 355.952 244.321 355.077 246.422 354.582C247.875 354.193 249.441 353.976 251.501 353.831C252.499 353.766 253.577 353.748 254.576 353.684C256.715 353.584 258.935 353.531 261.133 353.145C262.43 352.933 263.757 352.577 265.083 352.222C266.157 351.934 267.294 351.63 268.465 351.451C268.78 351.367 269.113 351.345 269.492 351.244L269.577 351.56C269.261 351.644 268.928 351.666 268.612 351.75C267.522 351.975 266.385 352.279 265.294 352.504C264.031 352.843 262.688 353.135 261.344 353.427C259.146 353.813 256.926 353.866 254.787 353.966C253.788 354.03 252.71 354.048 251.712 354.112C249.652 354.258 248.086 354.475 246.633 354.864C244.532 355.359 242.532 356.234 240.579 357.028C237.838 358.169 235.051 359.389 232.31 360.53L228.845 362C226.513 362.895 224.703 363.719 222.863 364.686Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M222.612 397.857L222.527 397.541C222.906 397.439 223.239 397.418 223.618 397.316C225.042 397.07 226.533 397.077 227.565 397.139C229.199 397.175 230.833 397.211 232.422 397.327C235.088 397.425 237.817 397.506 240.513 397.46C245.033 397.4 249.623 396.847 254.007 396.282C256.429 395.971 258.868 395.724 261.306 395.477C264.221 395.238 267.359 395.074 270.783 394.969C276.697 394.806 282.678 394.895 288.47 395.036C291.738 395.108 295.07 395.163 298.385 395.155C302.113 395.171 305.411 395.1 308.451 393.811C309.002 393.596 309.537 393.317 309.991 392.992C312.677 391.393 314.317 388.923 314.495 386.302C314.581 384.857 314.175 383.342 313.344 382.007C312.268 380.265 310.577 378.755 308.579 377.868C307.188 377.226 305.659 376.823 303.83 376.568C301.779 376.238 299.605 376.211 297.701 376.18C296.686 376.181 295.654 376.119 294.639 376.12C293.687 376.104 292.735 376.089 291.703 376.027C289.862 375.978 288.021 375.93 286.181 375.882C284.34 375.833 282.499 375.785 280.658 375.737L260.254 375.382C255.621 375.27 250.844 375.128 246.169 375.365C242.825 375.517 239.801 375.853 237.017 376.328L236.701 376.413C232.149 377.362 227.537 377.582 222.765 377.71C220.545 377.763 218.86 377.538 217.612 376.924C216.685 376.496 216.057 375.919 215.584 375.166C214.736 373.768 214.797 371.721 215.705 370.056C216.427 368.712 217.551 367.599 219.386 366.362C220.358 365.696 221.473 365.058 222.715 364.387L222.863 364.686C221.621 365.357 220.569 365.977 219.597 366.644C217.825 367.864 216.702 368.977 216.025 370.241C215.163 371.826 215.132 373.73 215.883 375.018C216.339 375.708 216.967 376.285 217.814 376.667C219.045 377.217 220.667 377.46 222.823 377.423C227.596 377.296 232.208 377.075 236.697 376.143L237.013 376.059C239.859 375.567 242.82 375.247 246.228 375.079C250.903 374.841 255.679 374.983 260.313 375.096L280.831 375.623C282.672 375.671 284.512 375.719 286.353 375.768C288.194 375.816 290.035 375.864 291.876 375.913C292.827 375.929 293.779 375.944 294.811 376.006C295.827 376.005 296.859 376.067 297.874 376.066C299.778 376.097 301.968 376.187 304.003 376.454C305.831 376.709 307.441 377.158 308.832 377.801C310.846 378.75 312.68 380.29 313.757 382.032C314.622 383.493 315.028 385.009 314.958 386.517C314.797 389.2 313.048 391.767 310.316 393.447C309.799 393.789 309.264 394.067 308.712 394.283C305.61 395.588 302.248 395.676 298.521 395.66C295.206 395.668 291.794 395.567 288.605 395.541C282.813 395.401 276.832 395.311 270.918 395.474C267.494 395.579 264.356 395.743 261.442 395.982C259.003 396.229 256.501 396.494 254.143 396.787C249.742 397.289 245.151 397.842 240.632 397.903C237.936 397.948 235.206 397.867 232.54 397.769C230.969 397.716 229.318 397.617 227.7 397.644C226.685 397.645 225.257 397.622 223.834 397.868C223.324 397.734 222.928 397.772 222.612 397.857Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M221.682 398.174L221.597 397.858C221.913 397.773 222.228 397.689 222.607 397.587L222.692 397.903C222.233 397.958 221.917 398.043 221.682 398.174Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M219.064 403.817C218.246 403.291 217.643 402.302 217.785 401.316C217.856 400.824 218.116 400.28 218.583 399.749C219.315 398.943 220.287 398.276 221.534 397.875L221.618 398.191C220.498 398.558 219.526 399.225 218.84 399.95C218.42 400.402 218.142 400.882 218.071 401.375C217.883 402.441 218.756 403.426 219.683 403.854C220.691 404.329 221.832 404.294 222.91 404.276L245.909 404.206L245.93 404.539L222.932 404.608C221.853 404.627 220.632 404.615 219.561 404.158C219.384 404.002 219.224 403.909 219.064 403.817Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M92.8142 471.291L92.7172 471.181L58.7894 443.851L58.7725 443.788L55.4893 407.029L98.9857 387.453L129.653 369.014L178.794 349.28L179.253 349.225L175.325 354.271L174.132 364.475L185.181 371.601L174.88 380.657L173.334 398.131L182.828 401.476L176.817 408.097L175.034 420.895L183.396 432.397L183.35 432.477L170.177 455.571L170.033 455.542C169.97 455.559 165.724 454.869 161.523 454.099C154.412 452.823 153.169 452.479 152.911 452.277C152.12 452.354 141.595 457.543 134.675 461.022L134.612 461.039L105.622 455.674L92.8142 471.291ZM59.0883 443.704L92.6958 470.849L105.394 455.329L105.474 455.375L134.527 460.723C139.781 458.097 151.782 452.105 152.907 452.007L153.033 451.973L153.05 452.037C153.708 452.47 163.427 454.13 169.869 455.18L182.903 432.326L174.558 420.887L176.417 407.865L176.48 407.848L182.163 401.519L172.972 398.295L174.543 380.409L184.625 371.547L173.736 364.513L174.988 354.023L178.373 349.731L129.801 369.313L99.1967 387.735L55.8266 407.277L59.0883 443.704Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M299.937 344.101L299.916 343.769C300.105 343.718 300.186 343.764 300.249 343.747L300.409 343.84L300.316 344L300.156 343.907L300.127 344.051C300.144 344.114 300.081 344.131 299.937 344.101ZM300.173 343.97L300.076 343.861L300.173 343.97Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M270.352 351.42L270.267 351.104L270.52 351.036C276.79 349.424 297.305 344.13 299.853 343.786L299.874 344.118C297.326 344.463 276.811 349.757 270.604 351.352L270.352 351.42Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M270.415 351.403L270.267 351.104L285.442 343.314L271.75 341.229L284.451 331.53L286.057 343.082L299.916 343.769L299.937 344.102L285.999 343.369L270.415 351.403ZM284.208 332.137L272.508 341.026L285.771 343.023L284.208 332.137Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M299.937 344.101L299.903 343.975L299.806 343.866L299.903 343.975L299.853 343.786L299.933 343.832L299.903 343.975L300.064 344.067L299.937 344.101Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M207.537 348.416L207.503 348.29L207.629 348.256L207.595 348.129C207.705 348.032 208.672 347.096 209.606 346.034C213.035 342.407 214.827 340.505 215.383 340.559C215.446 340.542 215.526 340.589 215.526 340.589C216.386 340.764 228.086 336.682 235.732 333.888L235.985 333.82L235.61 344.549L246.532 354.485L270.141 351.138L271.877 341.195L270.534 334.921L267.384 331.5L296.941 331.907L296.975 332.033L300.317 344L300.367 344.19L299.891 344.182L299.933 343.832L296.739 332.164L268.197 331.756L270.959 334.739L272.353 341.203L272.324 341.346L270.558 351.432L269.64 351.543L246.553 354.818L246.473 354.772L235.374 344.68L235.358 344.617L235.691 334.238C234.634 334.589 230.331 336.216 225.931 337.733C216.39 341.034 215.645 341.031 215.468 340.875C214.882 340.964 211.672 344.397 209.944 346.282C207.903 348.521 207.823 348.475 207.68 348.445L207.537 348.416Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M200.619 403.953L222.229 397.689L212.976 391.706L212.922 381.904L217.452 376.832C215.683 376.29 204.331 372.833 201.866 372.478C201.487 372.58 201.407 372.533 201.327 372.487L201.247 372.441L201.23 372.378C201.213 372.315 201.26 372.235 201.323 372.218C201.369 372.137 201.495 372.104 201.845 372.145C204.578 371.481 217.924 366.212 222.336 364.488L208.867 358.688L208.85 358.624C208.706 357.58 207.553 348.479 207.503 348.289L207.835 348.268C207.823 348.474 208.677 354.947 209.149 358.477L223.242 364.584L222.8 364.703L222.674 364.737C218.75 366.262 206.38 371.133 202.561 372.292C206.222 373.071 217.288 376.47 217.734 376.621L217.958 376.696L213.162 382.043L213.211 391.575L222.928 397.772L222.549 397.874L221.538 398.144L202.628 403.618L219.46 403.779L219.481 404.111L200.619 403.953Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M182.61 401.67L182.525 401.354C182.841 401.27 212.326 390.797 213.177 391.449L213.291 391.621C213.274 391.558 213.274 391.558 213.258 391.495C213.258 391.495 213.258 391.495 213.321 391.478C215.057 391.893 238.94 388.81 242.928 388.283L217.612 376.924L217.734 376.621L243.244 388.199L246.033 374.86L255.977 387.969L260.153 375.003L275.724 387.89C280.338 375.552 280.544 375.564 280.688 375.593C280.831 375.623 281.02 375.572 285.84 390.528L289.38 385.043L291.601 375.648L298.122 386.086C303.573 376.366 303.653 376.412 303.796 376.442C303.86 376.425 303.94 376.471 313.47 381.973L313.55 382.02L313.521 382.163L310.063 393.515L299.488 390.933C299.244 391.539 298.321 394.156 298.242 395.125C298.373 395.361 298.407 395.487 298.36 395.567L298.314 395.647L298.188 395.681C298.188 395.681 298.061 395.715 298.028 395.589C297.931 395.479 297.897 395.353 297.926 395.21C297.487 394.583 296.289 393.144 294.429 391.002L285.786 391.084L285.58 391.071L280.781 390.597L275.733 388.429L275.922 388.379L275.825 388.269L256.239 388.44L256.146 388.6L256.049 388.491L251.673 392.371L251.593 392.325L243.346 388.578C241.653 388.828 215.049 392.369 213.153 391.861C213.073 391.815 212.993 391.769 212.993 391.769C211.324 391.607 185.022 400.821 182.61 401.67ZM246.283 375.538L243.611 388.304L251.698 391.959L255.902 388.192L246.283 375.538ZM260.351 375.491L256.281 388.09L275.408 387.975L260.351 375.491ZM280.789 375.972C280.176 377.22 277.744 383.558 276.09 387.995L281.076 390.18L285.667 390.642C283.942 385.214 281.368 377.374 280.789 375.972ZM289.654 385.308L286.207 390.633L294.374 390.543C292.337 388.245 290.219 385.902 289.654 385.308ZM295.061 390.833C296.613 392.583 297.634 393.866 298.17 394.603C298.341 393.474 299.084 391.447 299.311 390.777L295.061 390.833ZM290.05 385.27C290.809 386.082 292.846 388.379 294.787 390.567L299.369 390.49C298.896 388.722 298.325 386.844 298.16 386.482L298.143 386.419C297.823 386.234 293.18 385.582 290.05 385.27ZM291.868 376.389L289.822 384.925C292.476 385.229 296.466 385.717 297.852 386.091L291.868 376.389ZM298.459 386.334C298.754 386.932 299.482 389.648 299.702 390.469L299.828 390.435L299.845 390.498L310.118 392.958L313.424 382.053C310.941 380.62 304.935 377.152 304.054 376.644C303.465 377.478 300.476 382.747 298.459 386.334Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M182.416 401.452L201.121 372.475L184.326 371.695L208.943 358.464L235.45 344.457L272.668 341.118L272.673 341.388L272.088 341.477L235.534 344.773L209.09 358.763L185.48 371.453L201.655 372.196L182.673 401.653L182.416 401.452Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M222.612 397.857L222.527 397.541L223.618 397.316L251.698 391.959L251.778 392.005C252.259 392.282 263.406 393.966 270.783 394.968L285.92 390.574L298.448 395.137L298.327 395.441L298.246 395.395L285.862 390.86L270.724 395.255C268.896 395 252.98 392.698 251.64 392.245L222.612 397.857Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M174.878 421.072L174.794 420.756L195.907 415.167C199.955 415.368 235.672 417.036 236.198 417.233C236.708 417.367 242.582 419.584 243.396 419.84L251.577 413.992L251.64 413.975L270.644 413.148L275.568 416.365L282.617 411.091L261.915 404.317C258.301 404.473 254.59 404.52 251.006 404.533L249.514 404.526C248.356 404.498 247.152 404.55 245.993 404.522L245.972 404.189C247.13 404.217 248.335 404.165 249.493 404.193L250.984 404.2C254.569 404.187 258.296 404.204 261.956 403.968L262.02 403.951L282.802 410.771L284.656 404.046L293.872 404.081L292.483 415.826L283.747 415.053L282.857 411.23L275.59 416.697L270.523 413.452L251.662 414.308L243.434 420.236L243.354 420.19C243.274 420.144 236.603 417.734 236.076 417.537C235.423 417.373 209.5 416.128 195.928 415.5L174.878 421.072ZM283.076 411.036L283.948 414.796L292.129 415.515L293.498 404.452L284.884 404.391L283.076 411.036Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M183.051 432.625L183.064 432.418L182.416 401.451L182.605 401.401L201.9 403.677L196.101 415.386L199.834 423.254L242.897 425.051L235.98 417.427L236.089 417.33L246.001 404.046L251.784 414.005L269.179 420.311L270.506 413.389L261.898 404.254L262.117 404.06L270.822 413.304L269.495 420.226L275.585 416.428L275.733 416.727L269.407 420.656L269.424 420.719L269.361 420.736L269.297 420.753L243.647 425.324L243.727 425.37L243.314 425.346L223.618 425.614L201.186 427.292L183.051 432.625ZM182.69 401.716L183.346 432.207L201.039 426.993L223.551 425.361L237.712 425.154L199.632 423.511L195.751 415.344L195.797 415.264L201.428 403.939L182.69 401.716ZM236.376 417.389L243.356 424.996L268.674 420.446L251.582 414.262L245.947 404.602L236.376 417.389Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M92.6371 471.135L54.7257 405.947L82.3307 436.461L83.1775 394.397L83.4177 394.536L111.967 411.392L121.976 387.86L121.529 387.709L122.052 387.636L129.653 369.014L129.797 369.043L175.546 380.614L122.865 387.892L177.087 408.092L127.78 433.015L183.236 432.305L183.316 432.351L192.009 441.801L201.085 426.913L203.736 431.753L227.611 425.356L237.625 434.181L243.12 425.127L243.183 425.11L259.443 426.169L269.621 420.192L263.113 430.263L260.935 429.966L231.626 443.371L231.546 443.325L231.529 443.261L228.967 439.006C228.381 439.095 225.025 439.453 203.137 441.392L202.643 447.887L202.551 448.047L192.035 442.403L192.018 442.34L191.874 442.311L191.921 442.231L183.228 432.781L127.233 433.5L105.626 455.943L82.4999 437.092L82.3228 436.937L56.5271 408.375L92.8729 471.004L92.6371 471.135ZM82.7819 436.881L105.52 455.295L126.925 433.109L111.959 411.868L82.7819 436.881ZM83.4731 394.995L82.6803 436.502L111.765 411.65L83.4731 394.995ZM112.241 411.657L127.144 432.915L176.261 408.043L122.263 387.918L112.224 411.594L112.304 411.64L112.241 411.657ZM202.816 441.207C197.985 441.621 194.01 441.942 192.632 442.108L202.364 447.353L202.816 441.207ZM201.094 427.452L192.341 441.779C193.466 441.681 197.694 441.293 202.858 440.857L203.563 431.867L201.094 427.452ZM129.818 369.376L122.448 387.598L173.895 380.515L129.818 369.376ZM203.82 432.069L203.128 440.852C219.932 439.396 226.267 438.782 228.246 438.59L203.82 432.069ZM227.616 425.626L204.309 431.871L229.101 438.496C229.888 438.15 236.194 434.903 237.453 434.295L227.616 425.626ZM229.295 438.715L231.806 442.781L260.816 429.524C260.427 428.072 259.877 426.526 259.62 426.325C259.212 426.569 256.358 428.552 254.557 429.915L254.494 429.932L237.819 434.4L237.773 434.48L237.693 434.434C236.813 434.94 230.571 438.17 229.295 438.715ZM243.314 425.346L238.068 434.063L254.363 429.696C254.881 429.355 257.873 427.131 259.098 426.397L243.314 425.346ZM259.936 426.24C260.358 426.804 260.946 428.745 261.149 429.503L263.12 429.787L268.763 421.032L259.936 426.24Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M134.515 460.929L126.823 432.73L153.113 452.02L152.928 452.34L152.911 452.277L127.376 433.53L134.831 460.845L134.515 460.929Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <g opacity=\"0.19\">\n                        <g opacity=\"0.19\">\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M365.797 325.371C364.976 325.591 339.194 332.702 336.516 333.826L336.28 333.957C336.664 334.125 337.03 334.23 337.351 334.415L337.258 334.575C342.517 336.009 348.087 334.313 352.933 331.932C357.324 329.875 361.356 327.238 365.797 325.371Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M352.31 381.653C352.929 381.69 353.532 381.664 354.117 381.575C357.52 381.137 360.647 379.419 363.569 377.689C363.505 377.706 363.472 377.579 363.53 377.293C362.944 376.367 360.241 374.112 360.241 374.112L352.31 381.653Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M363.552 377.625C371.469 373.067 379.268 368.066 387.363 363.663L372.056 367.426L363.552 377.625Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M435.653 309.429C432.638 310.304 414.285 313.056 413.637 313.162C414.904 313.093 416.189 313.087 417.445 313.225C419.176 313.37 420.941 313.642 422.4 314.537C423.858 315.433 425.027 317.015 424.961 318.793C424.946 319.744 424.61 320.511 424.13 321.249C424.113 321.186 433.507 311.019 435.653 309.429Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M385.921 387.337L378.96 392.181C383.29 392.172 387.518 390.768 391.602 389.335C395.071 388.135 398.591 387.124 401.423 384.808L393.9 384.522L384.792 383.375L385.921 387.337Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M444.103 278.055L496.481 270.655L495.073 269.949C492.242 269.489 489.457 268.949 486.626 268.489C484.557 268.096 482.506 267.765 480.378 267.658C474.919 267.496 469.652 269.314 464.511 271.098C461.72 272.049 458.945 273.063 456.154 274.014C452.179 275.35 448.141 276.702 444.103 278.055Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M413.444 370.552L401.377 384.888L426.193 375.937L428.446 365.653C428.089 366.087 423.47 371.589 423.47 371.589L413.444 370.552Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M411.328 389.939L401.36 384.825C401.033 386.131 402.29 387.284 403.491 387.977C405.94 389.285 408.523 390.082 411.257 390.432L411.328 389.939Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M429.383 342.114L402.449 351.497C402.142 352.121 387.426 363.646 387.426 363.646C390.209 362.156 393.008 360.729 395.887 359.348C402.215 356.434 408.804 353.992 414.869 350.606C418.641 348.513 422.185 346.074 425.922 343.854C426.975 343.233 428.153 342.579 429.383 342.114Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M413.083 388.657L411.345 390.002L411.274 390.495C416.599 391.167 422.263 390.326 427.641 389.427C433.019 388.528 438.396 387.628 443.605 386.097C444.11 385.962 444.536 385.78 445.041 385.645L413.083 388.657Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M428.429 365.59L426.176 375.874L462.899 352.495L462.227 343.671C462.307 343.718 428.804 365.219 428.429 365.59Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M443.447 366.305L463.695 356.479L481.815 352.097L475.238 340.185L462.307 343.718L462.979 352.541L426.176 375.874L439.848 368.284L443.447 366.305Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M445.207 380.455L445.087 385.565C450.434 383.793 455.503 381.487 460.686 379.354C464.656 377.749 468.66 376.27 472.697 374.917L469.005 369.475C459.201 374.065 445.666 380.4 445.207 380.455Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M481.815 352.097L478.936 364.851L472.697 374.917C483.249 371.345 493.986 368.468 504.69 365.464L481.815 352.097Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                            <g opacity=\"0.19\">\n                                <path opacity=\"0.19\"\n                                    d=\"M504.69 365.464C505.827 365.16 506.901 364.872 507.958 364.521C516.008 362.229 524.089 359.793 531.624 356.081C533.825 354.95 535.947 353.772 538.115 352.514C538.115 352.514 518.243 353.642 517.839 354.156C517.958 354.598 504.69 365.464 504.69 365.464Z\"\n                                    fill=\"white\" fill-opacity=\"0.71\" />\n                            </g>\n                        </g>\n                    </g>\n                    <path\n                        d=\"M591.276 327.574C592.671 324.695 593.867 321.328 594.814 317.284C596.13 311.583 596.649 305.69 596.36 299.81C596.048 292.582 594.485 285.486 591.9 278.868C589.149 271.888 585.383 267.684 580.824 266.333L580.76 266.35L580.697 266.367C577.927 267.651 575.118 267.524 572.527 267.203C571.684 267.09 570.762 266.931 569.919 266.818C567.438 266.4 564.83 266.016 562.185 266.25C560.205 266.442 558.218 267.11 556.34 267.681C555.835 267.816 555.41 267.998 554.904 268.133C553.216 268.654 551.447 269.127 549.645 269.475C544.777 270.509 539.441 271.058 533.304 271.146L533.325 271.478C539.462 271.391 544.862 270.824 549.73 269.791C551.532 269.443 553.3 268.969 554.989 268.449C555.494 268.314 555.919 268.132 556.425 267.997C558.286 267.363 560.227 266.775 562.206 266.583C564.771 266.302 567.333 266.767 569.797 267.122C570.64 267.234 571.562 267.393 572.405 267.506C574.933 267.844 577.869 267.938 580.719 266.7C585.152 268.085 588.838 272.242 591.538 279.033C594.187 285.634 595.669 292.684 595.981 299.911C596.27 305.791 595.751 311.684 594.418 317.322C591.372 330.459 585.183 336.924 580.541 340.063L580.478 340.08L580.386 340.24C579.378 339.765 578.325 339.371 577.225 339.056C569.658 337.09 560.896 340.52 554.994 343.253C550.776 345.195 546.773 347.69 542.8 350.04C541.512 350.792 540.241 351.606 538.889 352.374C536.377 353.86 534.381 355.004 532.399 355.941C524.943 359.699 516.973 362.038 508.795 364.365C507.722 364.652 506.585 364.957 505.528 365.308C504.012 365.714 502.496 366.12 500.997 366.589C491.919 369.09 482.605 371.721 473.535 374.76C469.182 376.198 465.304 377.643 461.523 379.197C460.058 379.793 458.547 380.469 457.082 381.064C453.491 382.568 449.727 384.186 445.925 385.408C445.42 385.543 444.931 385.742 444.489 385.86C439.297 387.454 433.839 388.308 428.605 389.236L428.542 389.253C422.911 390.22 417.42 390.947 412.175 390.322C409.234 389.959 406.714 389.145 404.489 387.913C403.928 387.589 402.052 386.4 402.409 384.95L402.56 384.504L402.168 384.812C399.728 386.819 396.62 387.855 393.639 388.857C393.197 388.975 392.835 389.14 392.393 389.259C388.562 390.624 384.162 392.141 379.815 392.087C379.402 392.063 378.989 392.038 378.576 392.013C376.782 391.885 374.473 391.352 373.19 389.598C372.199 388.171 372.053 386.111 372.809 383.878C372.884 383.655 373.006 383.351 373.145 383.111C374.779 379.356 378.179 376.888 380.726 375.528C383.209 374.186 385.875 373.269 388.523 372.288C389.58 371.937 390.683 371.506 391.786 371.076C394.48 370.015 397.331 368.777 400.475 367.123L400.327 366.824C397.183 368.479 394.333 369.716 391.638 370.777C390.598 371.191 389.478 371.558 388.375 371.989C385.773 372.89 383.062 373.887 380.578 375.229C377.985 376.669 374.522 379.154 372.841 382.989C372.72 383.292 372.581 383.533 372.522 383.819C371.72 386.133 371.883 388.255 372.972 389.792C374.288 391.673 376.74 392.234 378.598 392.346C379.011 392.371 379.424 392.395 379.899 392.403C384.31 392.44 388.693 390.859 392.604 389.541C393.046 389.422 393.408 389.257 393.85 389.139C396.705 388.171 399.686 387.169 402.161 385.288C402.091 386.796 403.87 387.876 404.43 388.2C406.736 389.477 409.319 390.275 412.259 390.637C417.521 391.326 423.059 390.519 428.706 389.615L428.77 389.598C434.021 388.733 439.462 387.816 444.671 386.285C445.176 386.15 445.601 385.968 446.107 385.833C449.909 384.611 453.672 382.993 457.263 381.49C458.729 380.894 460.24 380.218 461.705 379.623C465.486 378.068 469.363 376.623 473.717 375.185C482.786 372.146 492.1 369.515 501.179 367.015C502.695 366.608 504.211 366.202 505.71 365.733C506.846 365.428 507.92 365.141 508.977 364.79C517.154 362.463 525.171 360.044 532.643 356.35C534.546 355.366 536.621 354.268 539.134 352.783C540.422 352.031 541.756 351.2 543.044 350.449C546.938 348.052 550.958 345.621 555.176 343.678C561.015 340.963 569.713 337.549 577.2 339.469C578.3 339.784 579.417 340.161 580.441 340.699L580.601 340.792L580.786 340.471C584.123 338.02 588.103 334.178 591.276 327.574Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M533.372 271.398L533.35 271.066C531.59 271.063 529.703 271.095 527.862 271.047C526.64 271.036 525.402 270.961 524.037 270.921C521.227 270.794 518.338 270.62 515.591 270.476C510.637 270.179 505.477 269.869 500.401 269.875C499.323 269.893 498.422 270.067 497.652 270.476L496.307 269.754C494.542 269.482 492.823 269.13 491.058 268.858L487.86 268.294C485.935 267.93 483.74 267.57 481.612 267.463C476.073 267.255 470.57 269.203 465.745 270.902L457.388 273.819C452.925 275.353 448.95 276.689 445.291 277.94L445.376 278.256C449.051 277.068 453.026 275.732 457.472 274.134L465.83 271.218C470.655 269.519 476.112 267.651 481.634 267.796C483.744 267.839 485.813 268.233 487.865 268.563L491.062 269.128C492.764 269.417 494.546 269.751 496.248 270.04L497.593 270.763L497.656 270.746C498.426 270.337 499.328 270.163 500.343 270.162C505.418 270.155 510.516 270.482 515.469 270.779C518.216 270.924 521.106 271.097 523.915 271.224C525.28 271.265 526.518 271.339 527.74 271.35C529.707 271.365 531.548 271.413 533.372 271.398Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M445.295 278.21L445.211 277.894C435.005 281.238 426.04 283.911 417.732 286.001L417.252 285.724L417.188 285.741C409.118 285.94 400.985 286.156 392.915 286.355C391.98 286.403 390.758 286.392 389.735 286.869C388.838 287.312 387.888 288.312 388.003 289.499C388.058 289.958 388.24 290.384 388.421 290.809C388.654 291.424 388.932 291.958 388.672 292.502C388.533 292.742 388.395 292.982 388.096 293.13C387.687 293.375 387.119 293.527 386.597 293.6L386.47 293.633C383.704 294.172 381.305 295.83 379.015 297.391C378.215 297.944 377.353 298.514 376.536 299.003C374.385 300.324 372.087 301.346 369.851 302.351L359.335 307.065C354.675 309.126 350.014 311.187 345.308 313.328C343.009 314.35 340.71 315.372 338.627 316.946C336.717 318.406 335.257 320.286 334.063 321.892C333.815 322.229 333.567 322.567 333.365 322.824L333.319 322.904C332.078 324.59 330.733 326.643 331.038 328.795C331.238 330.299 332.31 331.772 333.929 332.76C334.729 333.222 335.64 333.587 336.533 333.89C336.836 334.011 337.14 334.133 337.443 334.255C337.827 334.423 338.13 334.545 338.37 334.683L338.278 334.844L338.484 334.856C343.01 336.081 348.118 335.186 354.239 332.259C355.969 331.39 357.682 330.457 359.332 329.541C361.799 328.135 364.409 326.759 367.023 325.652L366.875 325.353C364.181 326.414 361.651 327.836 359.121 329.259C357.471 330.175 355.758 331.108 354.028 331.977C348.033 334.87 343.051 335.731 338.64 334.679L338.686 334.599L338.619 334.346C338.298 334.161 337.932 334.056 337.531 333.825C337.228 333.703 336.924 333.582 336.621 333.46C335.791 333.141 334.881 332.775 334.08 332.313C332.541 331.371 331.566 330.008 331.384 328.567C331.112 326.542 332.348 324.586 333.588 322.899L333.634 322.819C333.883 322.482 334.068 322.162 334.333 321.888C335.527 320.281 337.003 318.464 338.851 317.021C340.871 315.465 343.169 314.443 345.405 313.437C350.065 311.376 354.725 309.315 359.432 307.174L369.965 302.524C372.264 301.502 374.562 300.48 376.713 299.159C377.593 298.652 378.393 298.099 379.255 297.53C381.545 295.969 383.898 294.39 386.664 293.852L386.791 293.818C387.313 293.746 387.944 293.577 388.416 293.315C388.778 293.15 388.98 292.893 389.102 292.59C389.391 291.903 389.096 291.305 388.847 290.627C388.682 290.265 388.5 289.84 388.462 289.444C388.381 288.383 389.239 287.543 390.009 287.134C390.969 286.674 392.047 286.656 393.062 286.654C401.133 286.455 409.203 286.256 417.273 286.057L417.817 286.317L417.88 286.3C426.062 284.243 435.026 281.571 445.295 278.21Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M414.749 313.27L414.727 312.937C412.651 313.02 410.625 313.292 408.267 313.585L404.531 314.045C401.587 314.427 398.563 314.764 395.62 315.146C393.531 315.435 391.362 315.678 389.294 316.3C387.842 316.689 386.376 317.284 384.52 318.188C383.623 318.631 382.68 319.155 381.784 319.598C379.881 320.582 377.932 321.646 375.835 322.411C374.606 322.875 373.28 323.231 371.953 323.586C370.879 323.874 369.743 324.179 368.639 324.61C368.324 324.694 368.025 324.842 367.646 324.944L367.73 325.259C368.046 325.175 368.345 325.027 368.661 324.942C369.718 324.591 370.855 324.287 371.911 323.936C373.175 323.597 374.484 323.179 375.794 322.76C377.89 321.995 379.839 320.932 381.742 319.948C382.639 319.505 383.582 318.981 384.478 318.538C386.335 317.634 387.8 317.038 389.253 316.649C391.32 316.028 393.489 315.785 395.578 315.496C398.522 315.113 401.546 314.777 404.489 314.394L408.225 313.935C410.693 313.544 412.672 313.353 414.749 313.27Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M431.552 341.871L431.467 341.556C431.088 341.657 430.789 341.805 430.41 341.906C429.054 342.405 427.766 343.156 426.904 343.726C425.506 344.574 424.109 345.423 422.791 346.317C420.531 347.735 418.208 349.17 415.851 350.479C411.906 352.686 407.654 354.503 403.575 356.205C401.322 357.147 399.087 358.152 396.852 359.157C394.208 360.407 391.408 361.834 388.39 363.455C383.187 366.271 378.052 369.34 373.107 372.357C370.312 374.054 367.454 375.767 364.579 377.418C361.359 379.296 358.467 380.883 355.19 381.287C354.605 381.376 354.003 381.402 353.447 381.348C350.321 381.306 347.666 379.986 346.202 377.806C345.404 376.598 344.998 375.082 345.051 373.511C345.112 371.464 345.821 369.311 347.108 367.544C347.991 366.292 349.114 365.179 350.57 364.044C352.182 362.732 354.051 361.622 355.684 360.643C356.564 360.137 357.426 359.567 358.306 359.06C359.123 358.571 359.939 358.081 360.802 357.511C362.372 356.549 363.942 355.587 365.512 354.625C367.082 353.662 368.652 352.7 370.222 351.738L387.727 341.022C391.684 338.608 395.75 336.097 399.917 333.965C402.889 332.424 405.676 331.203 408.324 330.223L408.64 330.138C413.057 328.684 417.161 326.569 421.358 324.294C423.307 323.23 424.654 322.192 425.427 321.037C426.016 320.202 426.272 319.389 426.305 318.5C426.341 316.866 425.264 315.123 423.646 314.135C422.348 313.332 420.818 312.93 418.611 312.777C417.435 312.685 416.151 312.691 414.74 312.731L414.761 313.064C416.172 313.024 417.394 313.035 418.569 313.126C420.713 313.297 422.243 313.699 423.461 314.456C424.999 315.397 425.979 317.031 425.972 318.522C425.922 319.347 425.666 320.161 425.124 320.915C424.333 322.007 423.05 323.028 421.164 324.075C416.967 326.35 412.863 328.465 408.509 329.903L408.194 329.987C405.482 330.985 402.758 332.188 399.723 333.746C395.556 335.878 391.49 338.39 387.533 340.804L369.999 351.662C368.429 352.625 366.859 353.587 365.289 354.549C363.719 355.511 362.149 356.474 360.579 357.436C359.762 357.926 358.946 358.415 358.083 358.985C357.203 359.491 356.34 360.061 355.461 360.567C353.827 361.547 351.975 362.72 350.347 363.969C348.891 365.103 347.721 366.297 346.838 367.549C345.568 369.378 344.75 371.629 344.689 373.676C344.67 375.373 345.076 376.889 345.891 378.16C347.372 380.404 350.17 381.752 353.376 381.841C353.995 381.878 354.597 381.852 355.183 381.763C358.522 381.342 361.477 379.738 364.697 377.86C367.572 376.21 370.477 374.416 373.225 372.799C378.171 369.782 383.306 366.713 388.509 363.898C391.527 362.277 394.326 360.849 396.97 359.6C399.205 358.594 401.504 357.572 403.693 356.647C407.756 354.882 412.008 353.065 415.952 350.858C418.309 349.549 420.633 348.114 422.893 346.696C424.227 345.865 425.608 344.953 427.022 344.168C427.902 343.662 429.127 342.927 430.482 342.429C430.874 342.121 431.173 341.973 431.552 341.871Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M432.516 341.681L432.431 341.365C432.115 341.45 431.8 341.534 431.421 341.636L431.505 341.951C431.867 341.787 432.183 341.702 432.516 341.681Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M437.604 345.259C438.05 344.395 438.078 343.237 437.462 342.454C437.154 342.063 436.657 341.722 435.987 341.495C434.95 341.164 433.775 341.073 432.494 341.348L432.579 341.664C433.733 341.422 434.908 341.514 435.865 341.799C436.455 341.979 436.935 342.257 437.243 342.648C437.939 343.477 437.675 344.766 437.087 345.601C436.452 346.516 435.446 347.056 434.503 347.58L414.551 359.018L414.699 359.317L434.65 347.878C435.593 347.355 436.646 346.735 437.344 345.803C437.419 345.58 437.512 345.419 437.604 345.259Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M561.777 333.447L539.29 352.605L539.227 352.622C531.494 353.07 519.785 353.838 519.061 354.167C518.939 354.47 518.035 355.39 512.514 360.051C509.261 362.818 505.928 365.539 505.865 365.556L505.756 365.653L482.864 352.222L482.784 352.176L484.275 338.034L476.331 327.842L467.815 325.114L474.364 317.47L464.271 303.047L450.823 300.354L456.828 288.658L450.694 280.418L444.769 278.012L445.194 277.83L497.635 270.413L533.413 271.048L580.933 266.236L596.407 299.729L596.423 299.793L580.769 340.408L580.74 340.551L561.777 333.447ZM580.702 266.637L533.372 271.398L497.656 270.746L445.801 278.074L450.879 280.098L457.207 288.557L451.311 300.156L464.473 302.789L474.777 317.494L468.383 324.962L476.47 327.601L476.533 327.585L484.654 337.932L483.146 352.011L505.861 365.286C510.915 361.156 518.438 354.875 518.855 354.155L518.838 354.091L518.964 354.058C519.987 353.58 533.376 352.768 539.239 352.416L561.726 333.257L561.772 333.177L580.529 340.269L596.061 299.957L580.702 266.637Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M337.535 334.095L337.438 333.985L337.346 334.145L337.186 334.053L337.278 333.893C337.342 333.876 337.325 333.813 337.577 333.745L337.725 334.044C337.599 334.078 337.535 334.095 337.535 334.095ZM337.468 333.842L337.438 333.985L337.468 333.842Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M366.989 325.526L366.905 325.21L366.652 325.277C360.416 327.016 340.002 332.689 337.624 333.665L337.771 333.964C340.15 332.988 360.564 327.315 366.737 325.593L366.989 325.526Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M349.493 326.423L337.788 334.027L337.641 333.728L349.299 326.204L344.914 315.396L360.763 317.446L349.948 326.098L366.985 325.256L367.006 325.589L349.493 326.423ZM349.518 326.01L360.005 317.649L345.428 315.8L349.518 326.01Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M337.708 333.981L337.674 333.854L337.704 333.711L337.674 333.854L337.561 333.682L337.577 333.745L337.611 333.871L337.582 334.014L337.708 333.981Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M419.778 291.614C419.668 291.711 419.668 291.711 416.736 290.872C414.296 290.104 409.8 288.736 409.248 288.952C409.173 289.175 408.466 289.567 398.616 291.462C394.046 292.348 389.524 293.154 388.416 293.315L393.877 302.074L393.894 302.137L389.328 316.426L389.282 316.506L367.65 325.213L366.8 325.576L360.228 317.724L360.131 317.615L358.186 311.366L359.087 307.402L334.573 322.026L337.561 333.682L337.772 333.964L337.363 334.209L337.312 334.019L334.223 321.984L334.189 321.858L359.583 306.727L358.565 311.265L360.539 317.37L367.014 325.113L389.134 316.207L393.624 302.142L387.936 293.038L388.188 292.97C396.206 291.566 408.381 289.252 409.037 288.67C409.02 288.606 409.084 288.589 409.147 288.573C409.618 288.311 412.104 288.999 416.887 290.425C418.21 290.815 419.533 291.205 419.676 291.235L419.71 291.361L419.836 291.327L419.87 291.453L419.778 291.614Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M453.646 336.154L431.8 341.534L436.821 331.727L431.967 323.211L425.508 321.083C426.77 319.73 434.872 311.06 436.829 309.52C437.208 309.419 437.254 309.339 437.3 309.258L437.346 309.178L437.329 309.115C437.312 309.052 437.232 309.006 437.169 309.023C437.089 308.976 436.963 309.01 436.681 309.221C433.982 310.012 419.789 312.123 415.106 312.836L423.87 301.078L423.853 301.015C423.456 300.038 419.904 291.58 419.853 291.39L419.554 291.538C419.668 291.711 422.165 297.744 423.521 301.036L414.307 313.389L414.749 313.27L414.875 313.236C419.036 312.595 432.184 310.629 436.071 309.723C433.289 312.229 425.406 320.704 425.095 321.059L424.939 321.236L431.765 323.468L436.489 331.748L431.253 342.019L431.632 341.918L432.642 341.647L451.756 336.932L437.259 345.487L437.407 345.786L453.646 336.154Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M436.822 331.727C436.839 331.79 436.792 331.87 436.729 331.887C435.278 333.291 410.468 343.527 408.939 344.139L403.67 351.509L403.624 351.589L397.894 350.416L397.865 350.559L397.705 350.467L380.657 360.112L380.628 360.255L380.611 360.192L377.322 364.594L373.404 367.404L373.232 367.517L365.705 371.768C365.182 374.616 364.847 376.398 364.781 377.161C364.878 377.27 364.929 377.46 364.883 377.54C364.836 377.62 364.773 377.637 364.79 377.7L364.664 377.734L364.584 377.687C364.504 377.641 364.47 377.515 364.465 377.245C363.912 376.446 361.821 374.704 361.29 374.237L353.422 381.761L344.752 373.659L344.655 373.55L344.701 373.47C350.204 363.939 350.313 363.842 350.313 363.842C350.423 363.745 350.486 363.728 360.05 369.357L360.477 357.057L367.099 364.083L372.907 367.063C369.62 351.764 369.792 351.65 369.902 351.553C370.011 351.456 370.184 351.342 380.349 359.721L387.39 340.774L397.633 349.945L399.69 333.62L408.775 343.777L425.095 321.059L425.352 321.26L409.234 343.722C412.888 342.201 435.193 332.975 436.472 331.685L436.535 331.668C436.535 331.668 436.489 331.748 436.569 331.794L436.581 331.588C437.073 330.644 467.827 324.908 468.08 324.84L468.165 325.156C465.524 325.66 438.202 330.815 436.822 331.727ZM397.89 350.147L403.413 351.307L408.59 344.098L399.893 334.378L397.89 350.147ZM380.825 359.729L397.448 350.265L387.623 341.389L380.825 359.729ZM373.273 367.168L377.019 364.472L380.244 360.087C376.61 357.135 371.319 352.798 370.163 352.025C370.426 353.511 372.117 361.588 373.273 367.168ZM365.747 371.418L372.865 367.413L367.217 364.526C367.024 365.322 366.3 368.427 365.747 371.418ZM361.542 374.17C362.074 374.637 363.731 376.02 364.444 376.913C364.539 376.007 364.862 374.431 365.251 372.093L361.542 374.17ZM360.421 369.732C360.413 370.207 360.921 372.102 361.395 373.871L365.402 371.646C365.925 368.798 366.604 365.773 366.855 364.69C364.301 366.526 360.606 369.411 360.421 369.732ZM360.446 369.319C361.46 368.302 364.671 365.885 366.817 364.294L360.777 357.924L360.446 369.319ZM350.495 364.268C349.986 365.149 346.501 371.092 345.085 373.638L353.401 381.429L361.066 374.162L361.05 374.099L361.176 374.065C360.956 373.244 360.228 370.528 360.185 369.862C356.564 367.719 351.342 364.65 350.495 364.268Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M468.16 324.886L437.473 309.144L451.627 300.071L423.693 300.922L393.734 302.045L359.832 317.763L359.963 317.999L360.514 317.783L393.818 302.36L423.715 301.255L450.507 300.439L436.807 309.187L467.975 325.207L468.16 324.886Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M431.552 341.872L431.467 341.556L430.41 341.907L403.413 351.307L403.367 351.387C403.09 351.867 394.278 358.9 388.391 363.456L373.084 367.219L364.533 377.498L364.79 377.7L364.836 377.62L373.295 367.501L388.601 363.738C390.058 362.603 402.69 352.651 403.624 351.589L431.552 341.872Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M463.482 343.809C451.979 351.156 430.169 365.259 429.731 365.647C429.373 366.081 424.801 371.504 424.755 371.584L424.709 371.664L414.62 370.644L397.857 379.332L395.092 384.677L386.064 383.576L387.206 387.331L380.026 392.369L372.951 382.892L380.915 378.253L385.882 383.15L400.471 366.853L400.534 366.836C403.741 365.164 406.978 363.349 410.152 361.551L411.44 360.8C412.429 360.196 413.499 359.639 414.488 359.035L414.635 359.334C413.646 359.938 412.577 360.495 411.588 361.098L410.3 361.85C407.189 363.631 403.969 365.509 400.745 367.118L386.203 383.335L394.944 384.378L397.6 379.131L414.472 370.345L414.535 370.328L424.544 371.302C425.12 370.673 429.099 365.816 429.474 365.445C429.831 365.011 459.929 345.708 463.334 343.51L484.413 337.794L484.498 338.11L463.482 343.809ZM380.827 378.683L373.397 383.043L380.114 391.94L386.839 387.227L385.714 383.534L380.827 378.683Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M464.887 356.633L444.622 366.396L427.431 376.012L427.086 376.239L427.132 376.159L402.632 385.026L402.569 385.043L402.506 385.06L402.489 384.996L395.046 384.757L395.024 384.424L402.198 384.668L397.588 379.337L400.505 366.979L400.791 367.038L397.903 379.252L402.514 384.584L414.362 370.442L414.391 358.926L429.617 365.474L429.76 365.504L427.582 375.565L463.977 352.477L463.276 343.796L452.4 336.556L467.971 324.937L468.16 324.886L483.083 352.028L483.196 352.201L464.887 356.633ZM452.939 336.547L463.477 343.539L463.558 343.585L464.28 352.599L432.124 373.062L444.491 366.16L464.803 356.317L482.733 351.987L468.055 325.253L452.939 336.547ZM414.779 359.364L414.729 370.547L403.019 384.448L427.22 375.73L429.461 365.652L414.779 359.364Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                    <path\n                        d=\"M580.42 340.366L580.581 267.955L572.522 305.588L572.447 305.811L561.857 333.493L531.923 324.86L483.07 352.235L480.267 364.765L480.347 364.811L480.238 364.908L480.255 364.971L473.97 375.118L473.81 375.025L470.134 369.646C450.163 378.992 447.124 380.28 446.572 380.496L446.481 385.462L446.498 385.525L446.452 385.605L414.367 388.651L412.629 389.997L401.958 384.529L413.76 384.616L427.312 375.569L427.376 375.552L436.661 380.646L440.921 367.996L464.796 361.599L464.672 356.081L479.976 364.437L482.779 351.907L482.825 351.826L531.207 324.714L476.044 327.783L512.902 283.179L463.674 303.342L497.508 270.447L497.618 270.35L513.466 282.757L513.954 282.558L513.643 282.913L534.078 298.288L550.374 269.415L550.512 269.175L572.278 305.179L580.927 264.952L580.752 340.345L580.42 340.366ZM534.323 298.696L532.045 324.557L561.675 333.068L572.16 305.752L534.323 298.696ZM534.444 298.393L572.059 305.373L550.602 269.76L534.444 298.393ZM533.973 298.654L513.504 283.153L476.802 327.58L531.776 324.562L534.053 298.701L533.973 298.654ZM473.834 374.612L479.64 365.204C478.381 365.812 474.761 367.459 470.37 369.515L473.834 374.612ZM465.054 361.801L470.159 369.234C474.849 367.029 478.642 365.268 479.728 364.774L464.984 356.742L465.054 361.801ZM465.054 302.431L513.15 282.842L497.656 270.746L465.054 302.431ZM446.976 379.981C448.786 379.158 454.579 376.522 469.86 369.381L464.869 362.121L446.976 379.981ZM436.901 380.785C438.295 380.682 445.38 380.341 446.235 380.247L464.393 362.113L441.086 368.359L436.901 380.785ZM436.796 381.152L436.75 381.232L436.67 381.186L419.995 385.654L419.932 385.67C417.708 385.454 414.228 385.1 413.752 385.092C413.631 385.396 413.927 387.009 414.317 388.461L446.068 385.437L446.21 380.66C444.816 380.763 437.795 381.087 436.796 381.152ZM414.207 384.767C415.652 384.854 419.338 385.22 419.957 385.258L436.253 380.891L427.305 376.045L414.207 384.767ZM403.171 385.017L412.435 389.778L414.001 388.546C413.798 387.788 413.336 385.813 413.42 385.114L403.171 385.017Z\"\n                        fill=\"white\" fill-opacity=\"0.71\" />\n                </g>\n                <path d=\"M1.5 545.185V120.557C1.5 103.32 12.9572 88.1831 29.5469 83.5031L309.568 4.50743C316.403 2.57913 323.639 2.57914 330.474 4.50743L610.495 83.5031C627.084 88.1831 638.542 103.32 638.542 120.557V244.459V545.185C638.542 558.214 631.953 570.358 621.031 577.461L341.01 759.561C328.248 767.861 311.794 767.861 299.032 759.561L19.0109 577.461C8.08895 570.358 1.5 558.214 1.5 545.185Z\" stroke=\"white\" stroke-opacity=\"0\" stroke-width=\"3\" transform=\"scale(0.71)\" style=\"transform-box: fill-box; transform-origin: 50% 50%;\">\n                    <animateTransform\n                        attributeName=\"transform\"\n                        type=\"scale\"\n                        values=\"0.71; 1\"\n                        dur=\"1s\"\n                        repeatCount=\"indefinite\"\n                        begin=\"12.5s\"\n                    />\n                    <animate\n                        attributeName=\"stroke-opacity\"\n                        values=\"0; 0.3; 0\"\n                        dur=\"1s\"\n                        repeatCount=\"indefinite\"\n                        begin=\"12.5s\"\n                    />\n                </path>\n                <path d=\"M45.1392 520.476V161.479C45.1392 144.237 56.6037 129.097 73.2005 124.422L309.582 57.8357C316.408 55.9128 323.633 55.9128 330.46 57.8357L566.841 124.422C583.438 129.097 594.903 144.237 594.903 161.479V264.148V520.476C594.903 533.514 588.304 545.666 577.37 552.766L340.988 706.26C328.236 714.54 311.806 714.54 299.054 706.26L62.672 552.766C51.7375 545.666 45.1392 533.514 45.1392 520.476Z\" stroke=\"white\" stroke-opacity=\"0\" stroke-width=\"3\" transform=\"scale(0.83)\" style=\"transform-box: fill-box; transform-origin: 50% 50%;\">\n                    <animateTransform\n                        attributeName=\"transform\"\n                        type=\"scale\"\n                        values=\"0.83; 1\"\n                        dur=\"1s\"\n                        repeatCount=\"indefinite\"\n                        begin=\"12.5s\"\n                    />\n                    <animate\n                        attributeName=\"stroke-opacity\"\n                        values=\"0; 0.3; 0\"\n                        dur=\"1s\"\n                        repeatCount=\"indefinite\"\n                        begin=\"12.5s\"\n                    />\n                </path>\n                <path d=\"M92.8191 493.926V205.481C92.8191 188.242 104.279 173.104 120.871 168.426L309.573 115.219C316.405 113.292 323.637 113.292 330.469 115.219L519.171 168.426C535.763 173.104 547.223 188.242 547.223 205.481V285.328V493.926C547.223 506.957 540.631 519.104 529.704 526.206L341.002 648.859C328.244 657.152 311.798 657.152 299.039 648.859L110.337 526.206C99.4112 519.104 92.8191 506.957 92.8191 493.926Z\" stroke=\"white\" stroke-opacity=\"0.3\" stroke-width=\"3\" stroke-dasharray=\"2100 2100\" stroke-dashoffset=\"2100\">\n                    <animate\n                        attributeName=\"stroke-dashoffset\"\n                        values=\"2100; 0\"\n                        dur=\"12s\"\n                        fill=\"freeze\"\n                        repeatCount=\"1\"\n                        begin=\"1s\"\n                    />\n                </path>\n                <path\n                    d=\"M135.65 470.405V244.498C135.65 227.274 147.09 212.146 163.662 207.454L309.533 166.155C316.39 164.214 323.652 164.214 330.509 166.155L476.379 207.454C492.952 212.146 504.392 227.274 504.392 244.498V304.122V470.405C504.392 483.411 497.825 495.538 486.934 502.646L341.063 597.849C328.276 606.194 311.766 606.194 298.979 597.849L153.108 502.646C142.217 495.538 135.65 483.411 135.65 470.405Z\"\n                    stroke=\"white\" stroke-width=\"3\" />\n                <g fill-opacity=\"0\" class=\"small_shield\" data-text-id=\"1\">\n                    <path class=\"border\"\n                        d=\"M80 497.816V517.99C80 518.661 80.3363 519.287 80.8956 519.657L93.8956 528.268C94.5651 528.712 95.4349 528.712 96.1044 528.268L109.104 519.657C109.664 519.287 110 518.661 110 517.99V503.671V497.816C110 496.925 109.409 496.14 108.552 495.894L95.5523 492.159C95.1914 492.055 94.8086 492.055 94.4477 492.159L81.4477 495.894C80.5905 496.14 80 496.925 80 497.816Z\" />\n                    <path\n                        d=\"M85 502.413V515.22C85 515.887 85.3319 516.51 85.8852 516.881L93.8852 522.252C94.5595 522.704 95.4405 522.704 96.1148 522.252L104.115 516.881C104.668 516.51 105 515.887 105 515.22V505.886V502.413C105 501.524 104.413 500.741 103.559 500.493L95.5592 498.163C95.194 498.056 94.806 498.056 94.4408 498.163L86.4408 500.493C85.5871 500.741 85 501.524 85 502.413Z\" />\n                    <animate\n                        attributeName=\"fill-opacity\"\n                        values=\"0; 1\"\n                        dur=\"0.3s\"\n                        fill=\"freeze\"\n                        repeatCount=\"1\"\n                    />\n                </g>\n                <g fill-opacity=\"0\" class=\"small_shield\" data-text-id=\"2\">\n                    <path class=\"border\"\n                        d=\"M83 172.816V192.99C83 193.661 83.3363 194.287 83.8956 194.657L96.8956 203.268C97.5651 203.712 98.4349 203.712 99.1044 203.268L112.104 194.657C112.664 194.287 113 193.661 113 192.99V178.671V172.816C113 171.925 112.409 171.14 111.552 170.894L98.5523 167.159C98.1914 167.055 97.8086 167.055 97.4477 167.159L84.4477 170.894C83.5905 171.14 83 171.925 83 172.816Z\" />\n                    <path\n                        d=\"M88 177.413V190.22C88 190.887 88.3319 191.51 88.8852 191.881L96.8852 197.252C97.5595 197.704 98.4405 197.704 99.1148 197.252L107.115 191.881C107.668 191.51 108 190.887 108 190.22V180.886V177.413C108 176.524 107.413 175.741 106.559 175.493L98.5592 173.163C98.194 173.056 97.806 173.056 97.4408 173.163L89.4408 175.493C88.5871 175.741 88 176.524 88 177.413Z\" />\n                    <animate\n                        attributeName=\"fill-opacity\"\n                        values=\"0; 1\"\n                        dur=\"0.3s\"\n                        fill=\"freeze\"\n                        repeatCount=\"1\"\n                        begin=\"2.7s\"\n                    />\n                </g>\n                <g fill-opacity=\"0\" class=\"small_shield\" data-text-id=\"3\">\n                    <path class=\"border\"\n                        d=\"M305 101.816V121.99C305 122.661 305.336 123.287 305.896 123.657L318.896 132.268C319.565 132.712 320.435 132.712 321.104 132.268L334.104 123.657C334.664 123.287 335 122.661 335 121.99V107.671V101.816C335 100.925 334.409 100.14 333.552 99.8942L320.552 96.1587C320.191 96.055 319.809 96.055 319.448 96.1587L306.448 99.8942C305.591 100.14 305 100.925 305 101.816Z\" />\n                    <path\n                        d=\"M310 106.413V119.22C310 119.887 310.332 120.51 310.885 120.881L318.885 126.252C319.559 126.704 320.441 126.704 321.115 126.252L329.115 120.881C329.668 120.51 330 119.887 330 119.22V109.886V106.413C330 105.524 329.413 104.741 328.559 104.493L320.559 102.163C320.194 102.056 319.806 102.056 319.441 102.163L311.441 104.493C310.587 104.741 310 105.524 310 106.413Z\" />\n                    <animate\n                        attributeName=\"fill-opacity\"\n                        values=\"0; 1\"\n                        dur=\"0.3s\"\n                        fill=\"freeze\"\n                        repeatCount=\"1\"\n                        begin=\"4s\"\n                    />\n                </g>\n                <g fill-opacity=\"0\" class=\"small_shield\" data-text-id=\"4\">\n                    <path class=\"border\"\n                        d=\"M528 172.816V192.99C528 193.661 528.336 194.287 528.896 194.657L541.896 203.268C542.565 203.712 543.435 203.712 544.104 203.268L557.104 194.657C557.664 194.287 558 193.661 558 192.99V178.671V172.816C558 171.925 557.409 171.14 556.552 170.894L543.552 167.159C543.191 167.055 542.809 167.055 542.448 167.159L529.448 170.894C528.591 171.14 528 171.925 528 172.816Z\" />\n                    <path\n                        d=\"M533 177.413V190.22C533 190.887 533.332 191.51 533.885 191.881L541.885 197.252C542.559 197.704 543.441 197.704 544.115 197.252L552.115 191.881C552.668 191.51 553 190.887 553 190.22V180.886V177.413C553 176.524 552.413 175.741 551.559 175.493L543.559 173.163C543.194 173.056 542.806 173.056 542.441 173.163L534.441 175.493C533.587 175.741 533 176.524 533 177.413Z\" />\n                    <animate\n                        attributeName=\"fill-opacity\"\n                        values=\"0; 1\"\n                        dur=\"0.3s\"\n                        fill=\"freeze\"\n                        repeatCount=\"1\"\n                        begin=\"5.3s\"\n                    />\n                </g>\n                <g fill-opacity=\"0\" class=\"small_shield\" data-text-id=\"5\">\n                    <path class=\"border\"\n                        d=\"M530 497.816V517.99C530 518.661 530.336 519.287 530.896 519.657L543.896 528.268C544.565 528.712 545.435 528.712 546.104 528.268L559.104 519.657C559.664 519.287 560 518.661 560 517.99V503.671V497.816C560 496.925 559.409 496.14 558.552 495.894L545.552 492.159C545.191 492.055 544.809 492.055 544.448 492.159L531.448 495.894C530.591 496.14 530 496.925 530 497.816Z\" />\n                    <path\n                        d=\"M535 502.413V515.22C535 515.887 535.332 516.51 535.885 516.881L543.885 522.252C544.559 522.704 545.441 522.704 546.115 522.252L554.115 516.881C554.668 516.51 555 515.887 555 515.22V505.886V502.413C555 501.524 554.413 500.741 553.559 500.493L545.559 498.163C545.194 498.056 544.806 498.056 544.441 498.163L536.441 500.493C535.587 500.741 535 501.524 535 502.413Z\" />\n                    <animate\n                        attributeName=\"fill-opacity\"\n                        values=\"0; 1\"\n                        dur=\"0.3s\"\n                        fill=\"freeze\"\n                        repeatCount=\"1\"\n                        begin=\"7.3s\"\n                    />\n                </g>\n                <g fill-opacity=\"0\" class=\"small_shield\" data-text-id=\"6\">\n                    <path class=\"border\"\n                        d=\"M305 642.816V662.99C305 663.661 305.336 664.287 305.896 664.657L318.896 673.268C319.565 673.712 320.435 673.712 321.104 673.268L334.104 664.657C334.664 664.287 335 663.661 335 662.99V648.671V642.816C335 641.925 334.409 641.14 333.552 640.894L320.552 637.159C320.191 637.055 319.809 637.055 319.448 637.159L306.448 640.894C305.591 641.14 305 641.925 305 642.816Z\" />\n                    <path\n                        d=\"M310 647.413V660.22C310 660.887 310.332 661.51 310.885 661.881L318.885 667.252C319.559 667.704 320.441 667.704 321.115 667.252L329.115 661.881C329.668 661.51 330 660.887 330 660.22V650.886V647.413C330 646.524 329.413 645.741 328.559 645.493L320.559 643.163C320.194 643.056 319.806 643.056 319.441 643.163L311.441 645.493C310.587 645.741 310 646.524 310 647.413Z\" />\n                    <animate\n                        attributeName=\"fill-opacity\"\n                        values=\"0; 1\"\n                        dur=\"0.3s\"\n                        fill=\"freeze\"\n                        repeatCount=\"1\"\n                        begin=\"9s\"\n                    />\n                </g>\n            </svg>"));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.first__name, .first__text').fadeIn('fast');
      typewriter.typeString(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.first__name').data('text')).start();
      var interval = setInterval(function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.first__text-in.isActive').next().length) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.first__text-in.isActive').removeClass('isActive').next().addClass('isActive');
        } else {
          clearInterval(interval);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.first__shield').addClass('isInteractable');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.first__text-in.isActive').removeClass('isActive');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-text-id="1"], [data-item-id="1"]').addClass('isActive');
        }
      }, 1800);
    });
  }

  startPreloader();
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