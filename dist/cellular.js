(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Cell = __webpack_require__(1);

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sheet = function () {
  function Sheet() {
    _classCallCheck(this, Sheet);

    this.cells = new Map();
  }

  _createClass(Sheet, [{
    key: 'getCell',
    value: function getCell(id) {
      if (this.cells.has(id)) return this.cells.get(id);
      var cell = new _Cell2.default(id);
      this.cells.set(id, cell);
      return cell;
    }
  }, {
    key: 'calculate',
    value: function calculate() {
      // todo process the sheet here
    }
  }, {
    key: 'toString',
    value: function toString() {
      var lines = [];
      this.cells.forEach(function (cell) {
        return lines.push(cell.id + ': ' + cell.text + ' => ' + cell.value);
      });
      return lines.join('\n');
    }
  }]);

  return Sheet;
}();

exports.default = Sheet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TaGVldC5qcyJdLCJuYW1lcyI6WyJTaGVldCIsImNlbGxzIiwiTWFwIiwiaWQiLCJoYXMiLCJnZXQiLCJjZWxsIiwic2V0IiwibGluZXMiLCJmb3JFYWNoIiwicHVzaCIsInRleHQiLCJ2YWx1ZSIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRXFCQSxLO0FBQ25CLG1CQUFjO0FBQUE7O0FBQ1osU0FBS0MsS0FBTCxHQUFhLElBQUlDLEdBQUosRUFBYjtBQUNEOzs7OzRCQUVPQyxFLEVBQUk7QUFDVixVQUFJLEtBQUtGLEtBQUwsQ0FBV0csR0FBWCxDQUFlRCxFQUFmLENBQUosRUFBd0IsT0FBTyxLQUFLRixLQUFMLENBQVdJLEdBQVgsQ0FBZUYsRUFBZixDQUFQO0FBQ3hCLFVBQU1HLE9BQU8sbUJBQVNILEVBQVQsQ0FBYjtBQUNBLFdBQUtGLEtBQUwsQ0FBV00sR0FBWCxDQUFlSixFQUFmLEVBQW1CRyxJQUFuQjtBQUNBLGFBQU9BLElBQVA7QUFDRDs7O2dDQUVXO0FBQ1Y7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUUsUUFBUSxFQUFkO0FBQ0EsV0FBS1AsS0FBTCxDQUFXUSxPQUFYLENBQW1CO0FBQUEsZUFBUUQsTUFBTUUsSUFBTixDQUN0QkosS0FBS0gsRUFEaUIsVUFDVkcsS0FBS0ssSUFESyxZQUNNTCxLQUFLTSxLQURYLENBQVI7QUFBQSxPQUFuQjtBQUdBLGFBQU9KLE1BQU1LLElBQU4sQ0FBVyxJQUFYLENBQVA7QUFDRDs7Ozs7O2tCQXRCa0JiLEsiLCJmaWxlIjoiU2hlZXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xmL2NvZGUvY2VsbHVsYXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2VsbCBmcm9tICcuL0NlbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGVldCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2VsbHMgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBnZXRDZWxsKGlkKSB7XG4gICAgaWYgKHRoaXMuY2VsbHMuaGFzKGlkKSkgcmV0dXJuIHRoaXMuY2VsbHMuZ2V0KGlkKTtcbiAgICBjb25zdCBjZWxsID0gbmV3IENlbGwoaWQpO1xuICAgIHRoaXMuY2VsbHMuc2V0KGlkLCBjZWxsKTtcbiAgICByZXR1cm4gY2VsbDtcbiAgfVxuXG4gIGNhbGN1bGF0ZSgpIHtcbiAgICAvLyB0b2RvIHByb2Nlc3MgdGhlIHNoZWV0IGhlcmVcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IGxpbmVzID0gW107XG4gICAgdGhpcy5jZWxscy5mb3JFYWNoKGNlbGwgPT4gbGluZXMucHVzaChcbiAgICAgIGAke2NlbGwuaWR9OiAke2NlbGwudGV4dH0gPT4gJHtjZWxsLnZhbHVlfWBcbiAgICApKTtcbiAgICByZXR1cm4gbGluZXMuam9pbignXFxuJyk7XG4gIH1cbn1cbiJdfQ==

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cell = function Cell(id) {
  _classCallCheck(this, Cell);

  this.id = id;
  this.text = null;
  this.value = null;
};

exports.default = Cell;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DZWxsLmpzIl0sIm5hbWVzIjpbIkNlbGwiLCJpZCIsInRleHQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFBcUJBLEksR0FDbkIsY0FBWUMsRUFBWixFQUFnQjtBQUFBOztBQUNkLE9BQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNBLE9BQUtDLElBQUwsR0FBWSxJQUFaO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLElBQWI7QUFDRCxDOztrQkFMa0JILEkiLCJmaWxlIjoiQ2VsbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbGYvY29kZS9jZWxsdWxhciIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENlbGwge1xuICBjb25zdHJ1Y3RvcihpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRleHQgPSBudWxsO1xuICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICB9XG59XG4iXX0=

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sheet = undefined;

var _Sheet = __webpack_require__(0);

var _Sheet2 = _interopRequireDefault(_Sheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */
exports.Sheet = _Sheet2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJTaGVldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFQTtRQUVFQSxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9sZi9jb2RlL2NlbGx1bGFyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoZWV0IGZyb20gJy4vU2hlZXQnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5leHBvcnQge1xuICBTaGVldCxcbn07XG4iXX0=

/***/ })
/******/ ]);
});