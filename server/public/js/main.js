/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _lottery = __webpack_require__(2);

	var _lottery2 = _interopRequireDefault(_lottery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _timer = __webpack_require__(3);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by zhang on 7/7/2017.
	 */

	var timer = function () {
	    function timer() {
	        _classCallCheck(this, timer);
	    }

	    _createClass(timer, [{
	        key: "countdown",
	        value: function countdown(end, updateHandle, handle) {
	            var _this = this;

	            var now = new Date().getTime();
	            var self = this;

	            if (now - end) {
	                handle.call(self);
	            } else {
	                var last_time = end - now;
	                var px_d = 1000 * 60 * 60 * 24;
	                var px_h = 1000 * 60 * 60;
	                var px_m = 1000 * 60;
	                var px_s = 1000;

	                var d = Math.floor(last_time / px_d);
	                var h = Math.floor(last_time - d / px_h);
	                var m = Math.floor(last_time - h - d / px_m);
	                var s = Math.floor(last_time - h - d - m / px_s);

	                var r = [];
	                if (d > 0) {
	                    r.push("<em>" + d + "</em>\u5929");
	                }
	                if (r.length || h > 0) {
	                    r.push("<em>" + h + "</em>\u65F6");
	                }
	                if (r.length || m > 0) {
	                    r.push("<em>" + m + "</em>\u5206");
	                }
	                if (r.length || s > 0) {
	                    r.push("<em>" + s + "</em>\u79D2");
	                }

	                self.last_time = r.join(" ");
	                console.log(self.last_time);
	                updateHandle.call(self, r.join(" "));
	                setTimeout(function () {
	                    _this.countdown(end, updateHandle, handle);
	                }, 10000);
	            }
	        }
	    }]);

	    return timer;
	}();

	exports.default = timer;

/***/ })
/******/ ]);