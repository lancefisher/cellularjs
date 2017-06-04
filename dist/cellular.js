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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TokenTypes = {
  NAME: Symbol('NAME'),
  LPAREN: Symbol('LPAREN'),
  RPAREN: Symbol('RPAREN'),
  COLON: Symbol('COLON'),
  STRING: Symbol('STRING'),
  COMMA: Symbol('COMMA'),
  NUMBER: Symbol('NUMBER'),
  PLUS: Symbol('PLUS'),
  TIMES: Symbol('TIMES'),
  EOF: Symbol('EOF')
};

exports.default = TokenTypes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Ub2tlblR5cGVzLmpzIl0sIm5hbWVzIjpbIlRva2VuVHlwZXMiLCJOQU1FIiwiU3ltYm9sIiwiTFBBUkVOIiwiUlBBUkVOIiwiQ09MT04iLCJTVFJJTkciLCJDT01NQSIsIk5VTUJFUiIsIlBMVVMiLCJUSU1FUyIsIkVPRiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxhQUFhO0FBQ2pCQyxRQUFNQyxPQUFPLE1BQVAsQ0FEVztBQUVqQkMsVUFBUUQsT0FBTyxRQUFQLENBRlM7QUFHakJFLFVBQVFGLE9BQU8sUUFBUCxDQUhTO0FBSWpCRyxTQUFPSCxPQUFPLE9BQVAsQ0FKVTtBQUtqQkksVUFBUUosT0FBTyxRQUFQLENBTFM7QUFNakJLLFNBQU9MLE9BQU8sT0FBUCxDQU5VO0FBT2pCTSxVQUFRTixPQUFPLFFBQVAsQ0FQUztBQVFqQk8sUUFBTVAsT0FBTyxNQUFQLENBUlc7QUFTakJRLFNBQU9SLE9BQU8sT0FBUCxDQVRVO0FBVWpCUyxPQUFLVCxPQUFPLEtBQVA7QUFWWSxDQUFuQjs7a0JBYWVGLFUiLCJmaWxlIjoiVG9rZW5UeXBlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbGYvY29kZS9jZWxsdWxhciIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRva2VuVHlwZXMgPSB7XG4gIE5BTUU6IFN5bWJvbCgnTkFNRScpLFxuICBMUEFSRU46IFN5bWJvbCgnTFBBUkVOJyksXG4gIFJQQVJFTjogU3ltYm9sKCdSUEFSRU4nKSxcbiAgQ09MT046IFN5bWJvbCgnQ09MT04nKSxcbiAgU1RSSU5HOiBTeW1ib2woJ1NUUklORycpLFxuICBDT01NQTogU3ltYm9sKCdDT01NQScpLFxuICBOVU1CRVI6IFN5bWJvbCgnTlVNQkVSJyksXG4gIFBMVVM6IFN5bWJvbCgnUExVUycpLFxuICBUSU1FUzogU3ltYm9sKCdUSU1FUycpLFxuICBFT0Y6IFN5bWJvbCgnRU9GJyksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2tlblR5cGVzO1xuIl19

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NameExpression = function NameExpression(value) {
  _classCallCheck(this, NameExpression);

  this.name = value;
};

exports.default = NameExpression;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9leHByZXNzaW9ucy9OYW1lRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJOYW1lRXhwcmVzc2lvbiIsInZhbHVlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFBcUJBLGMsR0FDbkIsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsT0FBS0MsSUFBTCxHQUFZRCxLQUFaO0FBQ0QsQzs7a0JBSGtCRCxjIiwiZmlsZSI6Ik5hbWVFeHByZXNzaW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9sZi9jb2RlL2NlbGx1bGFyIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmFtZUV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHRoaXMubmFtZSA9IHZhbHVlO1xuICB9XG59XG4iXX0=

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NumberExpression = function NumberExpression(value) {
  _classCallCheck(this, NumberExpression);

  this.number = Number(value);
};

exports.default = NumberExpression;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9leHByZXNzaW9ucy9OdW1iZXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbIk51bWJlckV4cHJlc3Npb24iLCJ2YWx1ZSIsIm51bWJlciIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFBcUJBLGdCLEdBQ25CLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLE9BQUtDLE1BQUwsR0FBY0MsT0FBT0YsS0FBUCxDQUFkO0FBQ0QsQzs7a0JBSGtCRCxnQiIsImZpbGUiOiJOdW1iZXJFeHByZXNzaW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9sZi9jb2RlL2NlbGx1bGFyIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtYmVyRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy5udW1iZXIgPSBOdW1iZXIodmFsdWUpO1xuICB9XG59XG4iXX0=

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OperatorExpression = function OperatorExpression(left, operator, right) {
  _classCallCheck(this, OperatorExpression);

  this.left = left;
  this.operator = operator;
  this.right = right;
};

exports.default = OperatorExpression;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9leHByZXNzaW9ucy9PcGVyYXRvckV4cHJlc3Npb24uanMiXSwibmFtZXMiOlsiT3BlcmF0b3JFeHByZXNzaW9uIiwibGVmdCIsIm9wZXJhdG9yIiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQXFCQSxrQixHQUNuQiw0QkFBWUMsSUFBWixFQUFrQkMsUUFBbEIsRUFBNEJDLEtBQTVCLEVBQW1DO0FBQUE7O0FBQ2pDLE9BQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsT0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0QsQzs7a0JBTGtCSCxrQiIsImZpbGUiOiJPcGVyYXRvckV4cHJlc3Npb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xmL2NvZGUvY2VsbHVsYXIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVyYXRvckV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihsZWZ0LCBvcGVyYXRvciwgcmlnaHQpIHtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gIH1cbn1cbiJdfQ==

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PrefixParselet = function () {
  function PrefixParselet() {
    _classCallCheck(this, PrefixParselet);
  }

  _createClass(PrefixParselet, [{
    key: "parse",
    value: function parse() {
      throw new Error(this.constructor.name + " should implement parse()");
    }
  }]);

  return PrefixParselet;
}();

exports.default = PrefixParselet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYXJzZWxldHMvUHJlZml4UGFyc2VsZXQuanMiXSwibmFtZXMiOlsiUHJlZml4UGFyc2VsZXQiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkEsYzs7Ozs7Ozs0QkFDWDtBQUNOLFlBQU0sSUFBSUMsS0FBSixDQUFhLEtBQUtDLFdBQUwsQ0FBaUJDLElBQTlCLCtCQUFOO0FBQ0Q7Ozs7OztrQkFIa0JILGMiLCJmaWxlIjoiUHJlZml4UGFyc2VsZXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xmL2NvZGUvY2VsbHVsYXIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVmaXhQYXJzZWxldCB7XG4gIHBhcnNlKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IHNob3VsZCBpbXBsZW1lbnQgcGFyc2UoKWApO1xuICB9XG59XG4iXX0=

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Cell = __webpack_require__(6);

var _Cell2 = _interopRequireDefault(_Cell);

var _Interpreter = __webpack_require__(8);

var _Interpreter2 = _interopRequireDefault(_Interpreter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sheet = function () {
  function Sheet() {
    _classCallCheck(this, Sheet);

    this.cells = new Map();
    this.interpreter = new _Interpreter2.default(this);
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
      var _this = this;

      var evalOrder = this.getEvalOrder();
      evalOrder.forEach(function (key) {
        return _this.cells.get(key).eval(_this.interpreter);
      });
    }
  }, {
    key: 'resolveReferences',
    value: function resolveReferences() {
      var _this2 = this;

      this.cells.forEach(function (cell) {
        return cell.resolveReferences(_this2.interpreter);
      });
    }
  }, {
    key: 'getEvalOrder',
    value: function getEvalOrder() {
      var _this3 = this;

      this.resolveReferences();

      var keys = Array.from(this.cells.keys());
      // A map to keep track of which cells we visit
      var visited = new Map(keys.map(function (k) {
        return [k, false];
      }));
      // Holds the execution order when finished,
      // push cell ids onto this as we traverse using
      // depth first search
      var order = [];

      // recursive function to walk the cell references
      var sortUtil = function sortUtil(key) {
        visited.set(key, true);
        _this3.getCell(key).refs.forEach(function (ref) {
          if (!visited.get(ref)) sortUtil(ref);
        });
        order.push(key);
      };

      // kick off the sort by iterating all the cells
      keys.forEach(function (key) {
        if (!visited.get(key)) sortUtil(key);
      });

      return order;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TaGVldC5qcyJdLCJuYW1lcyI6WyJTaGVldCIsImNlbGxzIiwiTWFwIiwiaW50ZXJwcmV0ZXIiLCJpZCIsImhhcyIsImdldCIsImNlbGwiLCJzZXQiLCJldmFsT3JkZXIiLCJnZXRFdmFsT3JkZXIiLCJmb3JFYWNoIiwia2V5IiwiZXZhbCIsInJlc29sdmVSZWZlcmVuY2VzIiwia2V5cyIsIkFycmF5IiwiZnJvbSIsInZpc2l0ZWQiLCJtYXAiLCJrIiwib3JkZXIiLCJzb3J0VXRpbCIsImdldENlbGwiLCJyZWZzIiwicmVmIiwicHVzaCIsImxpbmVzIiwidGV4dCIsInZhbHVlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztJQUVxQkEsSztBQUNuQixtQkFBYztBQUFBOztBQUNaLFNBQUtDLEtBQUwsR0FBYSxJQUFJQyxHQUFKLEVBQWI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLDBCQUFnQixJQUFoQixDQUFuQjtBQUNEOzs7OzRCQUVPQyxFLEVBQUk7QUFDVixVQUFJLEtBQUtILEtBQUwsQ0FBV0ksR0FBWCxDQUFlRCxFQUFmLENBQUosRUFBd0IsT0FBTyxLQUFLSCxLQUFMLENBQVdLLEdBQVgsQ0FBZUYsRUFBZixDQUFQO0FBQ3hCLFVBQU1HLE9BQU8sbUJBQVNILEVBQVQsQ0FBYjtBQUNBLFdBQUtILEtBQUwsQ0FBV08sR0FBWCxDQUFlSixFQUFmLEVBQW1CRyxJQUFuQjtBQUNBLGFBQU9BLElBQVA7QUFDRDs7O2dDQUVXO0FBQUE7O0FBQ1YsVUFBTUUsWUFBWSxLQUFLQyxZQUFMLEVBQWxCO0FBQ0FELGdCQUFVRSxPQUFWLENBQWtCO0FBQUEsZUFBTyxNQUFLVixLQUFMLENBQVdLLEdBQVgsQ0FBZU0sR0FBZixFQUFvQkMsSUFBcEIsQ0FBeUIsTUFBS1YsV0FBOUIsQ0FBUDtBQUFBLE9BQWxCO0FBQ0Q7Ozt3Q0FFbUI7QUFBQTs7QUFDbEIsV0FBS0YsS0FBTCxDQUFXVSxPQUFYLENBQW1CO0FBQUEsZUFBUUosS0FBS08saUJBQUwsQ0FBdUIsT0FBS1gsV0FBNUIsQ0FBUjtBQUFBLE9BQW5CO0FBQ0Q7OzttQ0FFYztBQUFBOztBQUNiLFdBQUtXLGlCQUFMOztBQUVBLFVBQU1DLE9BQU9DLE1BQU1DLElBQU4sQ0FBVyxLQUFLaEIsS0FBTCxDQUFXYyxJQUFYLEVBQVgsQ0FBYjtBQUNBO0FBQ0EsVUFBTUcsVUFBVSxJQUFJaEIsR0FBSixDQUFRYSxLQUFLSSxHQUFMLENBQVM7QUFBQSxlQUFLLENBQUNDLENBQUQsRUFBSSxLQUFKLENBQUw7QUFBQSxPQUFULENBQVIsQ0FBaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFNQyxRQUFRLEVBQWQ7O0FBRUE7QUFDQSxVQUFNQyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ1YsR0FBRCxFQUFTO0FBQ3hCTSxnQkFBUVYsR0FBUixDQUFZSSxHQUFaLEVBQWlCLElBQWpCO0FBQ0EsZUFBS1csT0FBTCxDQUFhWCxHQUFiLEVBQWtCWSxJQUFsQixDQUF1QmIsT0FBdkIsQ0FBK0IsVUFBQ2MsR0FBRCxFQUFTO0FBQ3RDLGNBQUksQ0FBQ1AsUUFBUVosR0FBUixDQUFZbUIsR0FBWixDQUFMLEVBQXVCSCxTQUFTRyxHQUFUO0FBQ3hCLFNBRkQ7QUFHQUosY0FBTUssSUFBTixDQUFXZCxHQUFYO0FBQ0QsT0FORDs7QUFRQTtBQUNBRyxXQUFLSixPQUFMLENBQWEsVUFBQ0MsR0FBRCxFQUFTO0FBQ3BCLFlBQUksQ0FBQ00sUUFBUVosR0FBUixDQUFZTSxHQUFaLENBQUwsRUFBdUJVLFNBQVNWLEdBQVQ7QUFDeEIsT0FGRDs7QUFJQSxhQUFPUyxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1NLFFBQVEsRUFBZDtBQUNBLFdBQUsxQixLQUFMLENBQVdVLE9BQVgsQ0FBbUI7QUFBQSxlQUFRZ0IsTUFBTUQsSUFBTixDQUN0Qm5CLEtBQUtILEVBRGlCLFVBQ1ZHLEtBQUtxQixJQURLLFlBQ01yQixLQUFLc0IsS0FEWCxDQUFSO0FBQUEsT0FBbkI7QUFHQSxhQUFPRixNQUFNRyxJQUFOLENBQVcsSUFBWCxDQUFQO0FBQ0Q7Ozs7OztrQkF4RGtCOUIsSyIsImZpbGUiOiJTaGVldC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbGYvY29kZS9jZWxsdWxhciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDZWxsIGZyb20gJy4vQ2VsbCc7XG5pbXBvcnQgSW50ZXJwcmV0ZXIgZnJvbSAnLi9JbnRlcnByZXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoZWV0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jZWxscyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLmludGVycHJldGVyID0gbmV3IEludGVycHJldGVyKHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2VsbChpZCkge1xuICAgIGlmICh0aGlzLmNlbGxzLmhhcyhpZCkpIHJldHVybiB0aGlzLmNlbGxzLmdldChpZCk7XG4gICAgY29uc3QgY2VsbCA9IG5ldyBDZWxsKGlkKTtcbiAgICB0aGlzLmNlbGxzLnNldChpZCwgY2VsbCk7XG4gICAgcmV0dXJuIGNlbGw7XG4gIH1cblxuICBjYWxjdWxhdGUoKSB7XG4gICAgY29uc3QgZXZhbE9yZGVyID0gdGhpcy5nZXRFdmFsT3JkZXIoKTtcbiAgICBldmFsT3JkZXIuZm9yRWFjaChrZXkgPT4gdGhpcy5jZWxscy5nZXQoa2V5KS5ldmFsKHRoaXMuaW50ZXJwcmV0ZXIpKTtcbiAgfVxuXG4gIHJlc29sdmVSZWZlcmVuY2VzKCkge1xuICAgIHRoaXMuY2VsbHMuZm9yRWFjaChjZWxsID0+IGNlbGwucmVzb2x2ZVJlZmVyZW5jZXModGhpcy5pbnRlcnByZXRlcikpO1xuICB9XG5cbiAgZ2V0RXZhbE9yZGVyKCkge1xuICAgIHRoaXMucmVzb2x2ZVJlZmVyZW5jZXMoKTtcblxuICAgIGNvbnN0IGtleXMgPSBBcnJheS5mcm9tKHRoaXMuY2VsbHMua2V5cygpKTtcbiAgICAvLyBBIG1hcCB0byBrZWVwIHRyYWNrIG9mIHdoaWNoIGNlbGxzIHdlIHZpc2l0XG4gICAgY29uc3QgdmlzaXRlZCA9IG5ldyBNYXAoa2V5cy5tYXAoayA9PiBbaywgZmFsc2VdKSk7XG4gICAgLy8gSG9sZHMgdGhlIGV4ZWN1dGlvbiBvcmRlciB3aGVuIGZpbmlzaGVkLFxuICAgIC8vIHB1c2ggY2VsbCBpZHMgb250byB0aGlzIGFzIHdlIHRyYXZlcnNlIHVzaW5nXG4gICAgLy8gZGVwdGggZmlyc3Qgc2VhcmNoXG4gICAgY29uc3Qgb3JkZXIgPSBbXTtcblxuICAgIC8vIHJlY3Vyc2l2ZSBmdW5jdGlvbiB0byB3YWxrIHRoZSBjZWxsIHJlZmVyZW5jZXNcbiAgICBjb25zdCBzb3J0VXRpbCA9IChrZXkpID0+IHtcbiAgICAgIHZpc2l0ZWQuc2V0KGtleSwgdHJ1ZSk7XG4gICAgICB0aGlzLmdldENlbGwoa2V5KS5yZWZzLmZvckVhY2goKHJlZikgPT4ge1xuICAgICAgICBpZiAoIXZpc2l0ZWQuZ2V0KHJlZikpIHNvcnRVdGlsKHJlZik7XG4gICAgICB9KTtcbiAgICAgIG9yZGVyLnB1c2goa2V5KTtcbiAgICB9O1xuXG4gICAgLy8ga2ljayBvZmYgdGhlIHNvcnQgYnkgaXRlcmF0aW5nIGFsbCB0aGUgY2VsbHNcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKCF2aXNpdGVkLmdldChrZXkpKSBzb3J0VXRpbChrZXkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9yZGVyO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgbGluZXMgPSBbXTtcbiAgICB0aGlzLmNlbGxzLmZvckVhY2goY2VsbCA9PiBsaW5lcy5wdXNoKFxuICAgICAgYCR7Y2VsbC5pZH06ICR7Y2VsbC50ZXh0fSA9PiAke2NlbGwudmFsdWV9YCxcbiAgICApKTtcbiAgICByZXR1cm4gbGluZXMuam9pbignXFxuJyk7XG4gIH1cbn1cbiJdfQ==

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cell = function () {
  function Cell(id) {
    _classCallCheck(this, Cell);

    this.id = id;
    this.text = null;
    this.value = null;
    this.refs = [];
  }

  _createClass(Cell, [{
    key: 'eval',
    value: function _eval(interpreter) {
      if (this.isLiteral()) {
        this.value = Number(this.text);
      } else {
        var expression = this.text.slice(1, this.text.length);
        var value = interpreter.eval(expression);
        this.value = value;
      }
    }
  }, {
    key: 'resolveReferences',
    value: function resolveReferences(interpreter) {
      if (this.isLiteral()) return;

      var text = this.text;
      var expression = text.slice(1, text.length);
      this.refs = interpreter.getRefs(expression);
    }
  }, {
    key: 'isLiteral',
    value: function isLiteral() {
      if (typeof this.text === 'number') return true;
      if (this.text[0] !== '=') return true;
      return false;
    }
  }]);

  return Cell;
}();

exports.default = Cell;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DZWxsLmpzIl0sIm5hbWVzIjpbIkNlbGwiLCJpZCIsInRleHQiLCJ2YWx1ZSIsInJlZnMiLCJpbnRlcnByZXRlciIsImlzTGl0ZXJhbCIsIk51bWJlciIsImV4cHJlc3Npb24iLCJzbGljZSIsImxlbmd0aCIsImV2YWwiLCJnZXRSZWZzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQXFCQSxJO0FBQ25CLGdCQUFZQyxFQUFaLEVBQWdCO0FBQUE7O0FBQ2QsU0FBS0EsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWEsSUFBYjtBQUNBLFNBQUtDLElBQUwsR0FBWSxFQUFaO0FBQ0Q7Ozs7MEJBRUlDLFcsRUFBYTtBQUNoQixVQUFJLEtBQUtDLFNBQUwsRUFBSixFQUFzQjtBQUNwQixhQUFLSCxLQUFMLEdBQWFJLE9BQU8sS0FBS0wsSUFBWixDQUFiO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTU0sYUFBYSxLQUFLTixJQUFMLENBQVVPLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUIsS0FBS1AsSUFBTCxDQUFVUSxNQUE3QixDQUFuQjtBQUNBLFlBQU1QLFFBQVFFLFlBQVlNLElBQVosQ0FBaUJILFVBQWpCLENBQWQ7QUFDQSxhQUFLTCxLQUFMLEdBQWFBLEtBQWI7QUFDRDtBQUNGOzs7c0NBRWlCRSxXLEVBQWE7QUFDN0IsVUFBSSxLQUFLQyxTQUFMLEVBQUosRUFBc0I7O0FBRXRCLFVBQU1KLE9BQU8sS0FBS0EsSUFBbEI7QUFDQSxVQUFNTSxhQUFhTixLQUFLTyxLQUFMLENBQVcsQ0FBWCxFQUFjUCxLQUFLUSxNQUFuQixDQUFuQjtBQUNBLFdBQUtOLElBQUwsR0FBWUMsWUFBWU8sT0FBWixDQUFvQkosVUFBcEIsQ0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixVQUFJLE9BQU8sS0FBS04sSUFBWixLQUFxQixRQUF6QixFQUFtQyxPQUFPLElBQVA7QUFDbkMsVUFBSSxLQUFLQSxJQUFMLENBQVUsQ0FBVixNQUFpQixHQUFyQixFQUEwQixPQUFPLElBQVA7QUFDMUIsYUFBTyxLQUFQO0FBQ0Q7Ozs7OztrQkE5QmtCRixJIiwiZmlsZSI6IkNlbGwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xmL2NvZGUvY2VsbHVsYXIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIHtcbiAgY29uc3RydWN0b3IoaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy50ZXh0ID0gbnVsbDtcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICB0aGlzLnJlZnMgPSBbXTtcbiAgfVxuXG4gIGV2YWwoaW50ZXJwcmV0ZXIpIHtcbiAgICBpZiAodGhpcy5pc0xpdGVyYWwoKSkge1xuICAgICAgdGhpcy52YWx1ZSA9IE51bWJlcih0aGlzLnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uID0gdGhpcy50ZXh0LnNsaWNlKDEsIHRoaXMudGV4dC5sZW5ndGgpO1xuICAgICAgY29uc3QgdmFsdWUgPSBpbnRlcnByZXRlci5ldmFsKGV4cHJlc3Npb24pO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJlc29sdmVSZWZlcmVuY2VzKGludGVycHJldGVyKSB7XG4gICAgaWYgKHRoaXMuaXNMaXRlcmFsKCkpIHJldHVybjtcblxuICAgIGNvbnN0IHRleHQgPSB0aGlzLnRleHQ7XG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IHRleHQuc2xpY2UoMSwgdGV4dC5sZW5ndGgpO1xuICAgIHRoaXMucmVmcyA9IGludGVycHJldGVyLmdldFJlZnMoZXhwcmVzc2lvbik7XG4gIH1cblxuICBpc0xpdGVyYWwoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnRleHQgPT09ICdudW1iZXInKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAodGhpcy50ZXh0WzBdICE9PSAnPScpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Parser2 = __webpack_require__(9);

var _Parser3 = _interopRequireDefault(_Parser2);

var _TokenTypes = __webpack_require__(0);

var _TokenTypes2 = _interopRequireDefault(_TokenTypes);

var _NumberParselet = __webpack_require__(13);

var _NumberParselet2 = _interopRequireDefault(_NumberParselet);

var _NameParselet = __webpack_require__(12);

var _NameParselet2 = _interopRequireDefault(_NameParselet);

var _BinaryOperatorParselet = __webpack_require__(11);

var _BinaryOperatorParselet2 = _interopRequireDefault(_BinaryOperatorParselet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Precedence = {
  SUM: 1,
  PRODUCT: 2
};

var CellularParser = function (_Parser) {
  _inherits(CellularParser, _Parser);

  function CellularParser(expressionString) {
    _classCallCheck(this, CellularParser);

    var _this = _possibleConstructorReturn(this, (CellularParser.__proto__ || Object.getPrototypeOf(CellularParser)).call(this, expressionString));

    _this.registerPrefixParselet(_TokenTypes2.default.NUMBER, new _NumberParselet2.default());
    _this.registerPrefixParselet(_TokenTypes2.default.NAME, new _NameParselet2.default());

    _this.infix(_TokenTypes2.default.PLUS, Precedence.SUM);
    _this.infix(_TokenTypes2.default.TIMES, Precedence.PRODUCT);
    return _this;
  }

  _createClass(CellularParser, [{
    key: 'infix',
    value: function infix(tokenType, precedence) {
      this.registerInfixParselet(tokenType, new _BinaryOperatorParselet2.default(precedence));
    }
  }]);

  return CellularParser;
}(_Parser3.default);

exports.default = CellularParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DZWxsdWxhclBhcnNlci5qcyJdLCJuYW1lcyI6WyJQcmVjZWRlbmNlIiwiU1VNIiwiUFJPRFVDVCIsIkNlbGx1bGFyUGFyc2VyIiwiZXhwcmVzc2lvblN0cmluZyIsInJlZ2lzdGVyUHJlZml4UGFyc2VsZXQiLCJOVU1CRVIiLCJOQU1FIiwiaW5maXgiLCJQTFVTIiwiVElNRVMiLCJ0b2tlblR5cGUiLCJwcmVjZWRlbmNlIiwicmVnaXN0ZXJJbmZpeFBhcnNlbGV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWE7QUFDakJDLE9BQUssQ0FEWTtBQUVqQkMsV0FBUztBQUZRLENBQW5COztJQUtxQkMsYzs7O0FBQ25CLDBCQUFZQyxnQkFBWixFQUE4QjtBQUFBOztBQUFBLGdJQUN0QkEsZ0JBRHNCOztBQUc1QixVQUFLQyxzQkFBTCxDQUE0QixxQkFBV0MsTUFBdkMsRUFBK0MsOEJBQS9DO0FBQ0EsVUFBS0Qsc0JBQUwsQ0FBNEIscUJBQVdFLElBQXZDLEVBQTZDLDRCQUE3Qzs7QUFFQSxVQUFLQyxLQUFMLENBQVcscUJBQVdDLElBQXRCLEVBQTRCVCxXQUFXQyxHQUF2QztBQUNBLFVBQUtPLEtBQUwsQ0FBVyxxQkFBV0UsS0FBdEIsRUFBNkJWLFdBQVdFLE9BQXhDO0FBUDRCO0FBUTdCOzs7OzBCQUVLUyxTLEVBQVdDLFUsRUFBWTtBQUMzQixXQUFLQyxxQkFBTCxDQUEyQkYsU0FBM0IsRUFBc0MscUNBQTJCQyxVQUEzQixDQUF0QztBQUNEOzs7Ozs7a0JBYmtCVCxjIiwiZmlsZSI6IkNlbGx1bGFyUGFyc2VyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9sZi9jb2RlL2NlbGx1bGFyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcnNlciBmcm9tICcuL1BhcnNlcic7XG5pbXBvcnQgVG9rZW5UeXBlcyBmcm9tICcuL1Rva2VuVHlwZXMnO1xuaW1wb3J0IE51bWJlclBhcnNlbGV0IGZyb20gJy4vcGFyc2VsZXRzL051bWJlclBhcnNlbGV0JztcbmltcG9ydCBOYW1lUGFyc2VsZXQgZnJvbSAnLi9wYXJzZWxldHMvTmFtZVBhcnNlbGV0JztcbmltcG9ydCBCaW5hcnlPcGVyYXRvclBhcnNlbGV0IGZyb20gJy4vcGFyc2VsZXRzL0JpbmFyeU9wZXJhdG9yUGFyc2VsZXQnO1xuXG5jb25zdCBQcmVjZWRlbmNlID0ge1xuICBTVU06IDEsXG4gIFBST0RVQ1Q6IDIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsdWxhclBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKGV4cHJlc3Npb25TdHJpbmcpIHtcbiAgICBzdXBlcihleHByZXNzaW9uU3RyaW5nKTtcblxuICAgIHRoaXMucmVnaXN0ZXJQcmVmaXhQYXJzZWxldChUb2tlblR5cGVzLk5VTUJFUiwgbmV3IE51bWJlclBhcnNlbGV0KCkpO1xuICAgIHRoaXMucmVnaXN0ZXJQcmVmaXhQYXJzZWxldChUb2tlblR5cGVzLk5BTUUsIG5ldyBOYW1lUGFyc2VsZXQoKSk7XG5cbiAgICB0aGlzLmluZml4KFRva2VuVHlwZXMuUExVUywgUHJlY2VkZW5jZS5TVU0pO1xuICAgIHRoaXMuaW5maXgoVG9rZW5UeXBlcy5USU1FUywgUHJlY2VkZW5jZS5QUk9EVUNUKTtcbiAgfVxuXG4gIGluZml4KHRva2VuVHlwZSwgcHJlY2VkZW5jZSkge1xuICAgIHRoaXMucmVnaXN0ZXJJbmZpeFBhcnNlbGV0KHRva2VuVHlwZSwgbmV3IEJpbmFyeU9wZXJhdG9yUGFyc2VsZXQocHJlY2VkZW5jZSkpO1xuICB9XG59XG4iXX0=

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CellularParser = __webpack_require__(7);

var _CellularParser2 = _interopRequireDefault(_CellularParser);

var _NumberExpression = __webpack_require__(2);

var _NumberExpression2 = _interopRequireDefault(_NumberExpression);

var _NameExpression = __webpack_require__(1);

var _NameExpression2 = _interopRequireDefault(_NameExpression);

var _OperatorExpression = __webpack_require__(3);

var _OperatorExpression2 = _interopRequireDefault(_OperatorExpression);

var _TokenTypes = __webpack_require__(0);

var _TokenTypes2 = _interopRequireDefault(_TokenTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Interpreter = function () {
  function Interpreter(sheet) {
    _classCallCheck(this, Interpreter);

    this.sheet = sheet;
  }

  _createClass(Interpreter, [{
    key: 'eval',
    value: function _eval(expression) {
      var parser = new _CellularParser2.default(expression);
      var ast = parser.parseExpression();
      return this.evalAst(ast);
    }
  }, {
    key: 'evalAst',
    value: function evalAst(node) {
      if (node instanceof _NumberExpression2.default) {
        return node.number;
      }

      if (node instanceof _NameExpression2.default) {
        var cell = this.sheet.getCell(node.name);
        return cell.value;
      }

      if (node instanceof _OperatorExpression2.default) {
        var left = this.evalAst(node.left);
        var right = this.evalAst(node.right);

        if (node.operator === _TokenTypes2.default.PLUS) {
          return left + right;
        }

        if (node.operator === _TokenTypes2.default.TIMES) {
          return left * right;
        }
      }

      throw new TypeError('Could not intrepret expression: ', node);
    }
  }, {
    key: 'getRefs',
    value: function getRefs(expression) {
      var parser = new _CellularParser2.default(expression);
      var ast = parser.parseExpression();
      var refs = [];
      this.evalRefs(ast, refs);
      return refs;
    }

    // Walk the AST, and collect references in refs

  }, {
    key: 'evalRefs',
    value: function evalRefs(node) {
      var refs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (node instanceof _NumberExpression2.default) {
        return;
      }

      if (node instanceof _NameExpression2.default) {
        refs.push(node.name);
        return;
      }

      if (node instanceof _OperatorExpression2.default) {
        this.evalRefs(node.left, refs);
        this.evalRefs(node.right, refs);
        return;
      }

      throw new TypeError('Could not intrepret expression: ', node);
    }
  }]);

  return Interpreter;
}();

exports.default = Interpreter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JbnRlcnByZXRlci5qcyJdLCJuYW1lcyI6WyJJbnRlcnByZXRlciIsInNoZWV0IiwiZXhwcmVzc2lvbiIsInBhcnNlciIsImFzdCIsInBhcnNlRXhwcmVzc2lvbiIsImV2YWxBc3QiLCJub2RlIiwibnVtYmVyIiwiY2VsbCIsImdldENlbGwiLCJuYW1lIiwidmFsdWUiLCJsZWZ0IiwicmlnaHQiLCJvcGVyYXRvciIsIlBMVVMiLCJUSU1FUyIsIlR5cGVFcnJvciIsInJlZnMiLCJldmFsUmVmcyIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUJBLFc7QUFDbkIsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7MEJBRUlDLFUsRUFBWTtBQUNmLFVBQU1DLFNBQVMsNkJBQW1CRCxVQUFuQixDQUFmO0FBQ0EsVUFBTUUsTUFBTUQsT0FBT0UsZUFBUCxFQUFaO0FBQ0EsYUFBTyxLQUFLQyxPQUFMLENBQWFGLEdBQWIsQ0FBUDtBQUNEOzs7NEJBRU9HLEksRUFBTTtBQUNaLFVBQUlBLDBDQUFKLEVBQXNDO0FBQ3BDLGVBQU9BLEtBQUtDLE1BQVo7QUFDRDs7QUFFRCxVQUFJRCx3Q0FBSixFQUFvQztBQUNsQyxZQUFNRSxPQUFPLEtBQUtSLEtBQUwsQ0FBV1MsT0FBWCxDQUFtQkgsS0FBS0ksSUFBeEIsQ0FBYjtBQUNBLGVBQU9GLEtBQUtHLEtBQVo7QUFDRDs7QUFFRCxVQUFJTCw0Q0FBSixFQUF3QztBQUN0QyxZQUFNTSxPQUFPLEtBQUtQLE9BQUwsQ0FBYUMsS0FBS00sSUFBbEIsQ0FBYjtBQUNBLFlBQU1DLFFBQVEsS0FBS1IsT0FBTCxDQUFhQyxLQUFLTyxLQUFsQixDQUFkOztBQUVBLFlBQUlQLEtBQUtRLFFBQUwsS0FBa0IscUJBQVdDLElBQWpDLEVBQXVDO0FBQ3JDLGlCQUFPSCxPQUFPQyxLQUFkO0FBQ0Q7O0FBRUQsWUFBSVAsS0FBS1EsUUFBTCxLQUFrQixxQkFBV0UsS0FBakMsRUFBd0M7QUFDdEMsaUJBQU9KLE9BQU9DLEtBQWQ7QUFDRDtBQUNGOztBQUVELFlBQU0sSUFBSUksU0FBSixDQUFjLGtDQUFkLEVBQWtEWCxJQUFsRCxDQUFOO0FBQ0Q7Ozs0QkFFT0wsVSxFQUFZO0FBQ2xCLFVBQU1DLFNBQVMsNkJBQW1CRCxVQUFuQixDQUFmO0FBQ0EsVUFBTUUsTUFBTUQsT0FBT0UsZUFBUCxFQUFaO0FBQ0EsVUFBTWMsT0FBTyxFQUFiO0FBQ0EsV0FBS0MsUUFBTCxDQUFjaEIsR0FBZCxFQUFtQmUsSUFBbkI7QUFDQSxhQUFPQSxJQUFQO0FBQ0Q7O0FBRUQ7Ozs7NkJBQ1NaLEksRUFBaUI7QUFBQSxVQUFYWSxJQUFXLHVFQUFKLEVBQUk7O0FBQ3hCLFVBQUlaLDBDQUFKLEVBQXNDO0FBQ3BDO0FBQ0Q7O0FBRUQsVUFBSUEsd0NBQUosRUFBb0M7QUFDbENZLGFBQUtFLElBQUwsQ0FBVWQsS0FBS0ksSUFBZjtBQUNBO0FBQ0Q7O0FBRUQsVUFBSUosNENBQUosRUFBd0M7QUFDdEMsYUFBS2EsUUFBTCxDQUFjYixLQUFLTSxJQUFuQixFQUF5Qk0sSUFBekI7QUFDQSxhQUFLQyxRQUFMLENBQWNiLEtBQUtPLEtBQW5CLEVBQTBCSyxJQUExQjtBQUNBO0FBQ0Q7O0FBRUQsWUFBTSxJQUFJRCxTQUFKLENBQWMsa0NBQWQsRUFBa0RYLElBQWxELENBQU47QUFDRDs7Ozs7O2tCQS9Ea0JQLFciLCJmaWxlIjoiSW50ZXJwcmV0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2xmL2NvZGUvY2VsbHVsYXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2VsbHVsYXJQYXJzZXIgZnJvbSAnLi9DZWxsdWxhclBhcnNlcic7XG5pbXBvcnQgTnVtYmVyRXhwcmVzc2lvbiBmcm9tICcuL2V4cHJlc3Npb25zL051bWJlckV4cHJlc3Npb24nO1xuaW1wb3J0IE5hbWVFeHByZXNzaW9uIGZyb20gJy4vZXhwcmVzc2lvbnMvTmFtZUV4cHJlc3Npb24nO1xuaW1wb3J0IE9wZXJhdG9yRXhwcmVzc2lvbiBmcm9tICcuL2V4cHJlc3Npb25zL09wZXJhdG9yRXhwcmVzc2lvbic7XG5pbXBvcnQgVG9rZW5UeXBlcyBmcm9tICcuL1Rva2VuVHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcnByZXRlciB7XG4gIGNvbnN0cnVjdG9yKHNoZWV0KSB7XG4gICAgdGhpcy5zaGVldCA9IHNoZWV0O1xuICB9XG5cbiAgZXZhbChleHByZXNzaW9uKSB7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IENlbGx1bGFyUGFyc2VyKGV4cHJlc3Npb24pO1xuICAgIGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZUV4cHJlc3Npb24oKTtcbiAgICByZXR1cm4gdGhpcy5ldmFsQXN0KGFzdCk7XG4gIH1cblxuICBldmFsQXN0KG5vZGUpIHtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIE51bWJlckV4cHJlc3Npb24pIHtcbiAgICAgIHJldHVybiBub2RlLm51bWJlcjtcbiAgICB9XG5cbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIE5hbWVFeHByZXNzaW9uKSB7XG4gICAgICBjb25zdCBjZWxsID0gdGhpcy5zaGVldC5nZXRDZWxsKG5vZGUubmFtZSk7XG4gICAgICByZXR1cm4gY2VsbC52YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIE9wZXJhdG9yRXhwcmVzc2lvbikge1xuICAgICAgY29uc3QgbGVmdCA9IHRoaXMuZXZhbEFzdChub2RlLmxlZnQpO1xuICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLmV2YWxBc3Qobm9kZS5yaWdodCk7XG5cbiAgICAgIGlmIChub2RlLm9wZXJhdG9yID09PSBUb2tlblR5cGVzLlBMVVMpIHtcbiAgICAgICAgcmV0dXJuIGxlZnQgKyByaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUub3BlcmF0b3IgPT09IFRva2VuVHlwZXMuVElNRVMpIHtcbiAgICAgICAgcmV0dXJuIGxlZnQgKiByaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDb3VsZCBub3QgaW50cmVwcmV0IGV4cHJlc3Npb246ICcsIG5vZGUpO1xuICB9XG5cbiAgZ2V0UmVmcyhleHByZXNzaW9uKSB7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IENlbGx1bGFyUGFyc2VyKGV4cHJlc3Npb24pO1xuICAgIGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZUV4cHJlc3Npb24oKTtcbiAgICBjb25zdCByZWZzID0gW107XG4gICAgdGhpcy5ldmFsUmVmcyhhc3QsIHJlZnMpO1xuICAgIHJldHVybiByZWZzO1xuICB9XG5cbiAgLy8gV2FsayB0aGUgQVNULCBhbmQgY29sbGVjdCByZWZlcmVuY2VzIGluIHJlZnNcbiAgZXZhbFJlZnMobm9kZSwgcmVmcyA9IFtdKSB7XG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBOdW1iZXJFeHByZXNzaW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBOYW1lRXhwcmVzc2lvbikge1xuICAgICAgcmVmcy5wdXNoKG5vZGUubmFtZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBPcGVyYXRvckV4cHJlc3Npb24pIHtcbiAgICAgIHRoaXMuZXZhbFJlZnMobm9kZS5sZWZ0LCByZWZzKTtcbiAgICAgIHRoaXMuZXZhbFJlZnMobm9kZS5yaWdodCwgcmVmcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ291bGQgbm90IGludHJlcHJldCBleHByZXNzaW9uOiAnLCBub2RlKTtcbiAgfVxufVxuIl19

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tokenizer = __webpack_require__(14);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parser = function () {
  function Parser(expressionString) {
    _classCallCheck(this, Parser);

    this.expressionString = expressionString;
    this.tokens = (0, _tokenizer.tokenize)(this.expressionString);

    this.currentIndex = 0;

    this.prefixParselets = new Map();
    this.infixParselets = new Map();
  }

  // returns the next token


  _createClass(Parser, [{
    key: 'consume',
    value: function consume() {
      if (this.currentIndex >= this.tokens.length) {
        throw new Error('Cannot consume. Index exceeds tokens length.');
      }
      var token = this.tokens[this.currentIndex];
      this.currentIndex += 1;
      return token;
    }

    // returns the upcoming token n spots ahead. lookAhead(1) returns the next token.

  }, {
    key: 'lookAhead',
    value: function lookAhead(n) {
      var i = this.currentIndex + n;
      if (i > this.tokens.length) {
        throw new Error('LookAhead is beyond the end of tokens');
      }
      return this.tokens[i];
    }
  }, {
    key: 'registerPrefixParselet',
    value: function registerPrefixParselet(tokenType, parselet) {
      this.prefixParselets.set(tokenType, parselet);
    }
  }, {
    key: 'registerInfixParselet',
    value: function registerInfixParselet(tokenType, parselet) {
      this.infixParselets.set(tokenType, parselet);
    }
  }, {
    key: 'getPrecedence',
    value: function getPrecedence() {
      var token = this.lookAhead(0);
      var parselet = this.infixParselets.get(token.type);
      if (parselet) return parselet.precedence;
      return 0;
    }
  }, {
    key: 'parseExpression',
    value: function parseExpression() {
      var precedence = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var leftToken = this.consume();
      var prefixParselet = this.prefixParselets.get(leftToken.type);
      if (!prefixParselet) {
        throw new TypeError('Could not parse token of type: ' + leftToken.type.toString());
      }

      var leftExpression = prefixParselet.parse(this, leftToken);

      while (precedence < this.getPrecedence()) {
        var rightToken = this.consume();
        var infixParselet = this.infixParselets.get(rightToken.type);
        leftExpression = infixParselet.parse(this, leftExpression, rightToken);
      }

      return leftExpression;
    }
  }]);

  return Parser;
}();

exports.default = Parser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9QYXJzZXIuanMiXSwibmFtZXMiOlsiUGFyc2VyIiwiZXhwcmVzc2lvblN0cmluZyIsInRva2VucyIsImN1cnJlbnRJbmRleCIsInByZWZpeFBhcnNlbGV0cyIsIk1hcCIsImluZml4UGFyc2VsZXRzIiwibGVuZ3RoIiwiRXJyb3IiLCJ0b2tlbiIsIm4iLCJpIiwidG9rZW5UeXBlIiwicGFyc2VsZXQiLCJzZXQiLCJsb29rQWhlYWQiLCJnZXQiLCJ0eXBlIiwicHJlY2VkZW5jZSIsImxlZnRUb2tlbiIsImNvbnN1bWUiLCJwcmVmaXhQYXJzZWxldCIsIlR5cGVFcnJvciIsInRvU3RyaW5nIiwibGVmdEV4cHJlc3Npb24iLCJwYXJzZSIsImdldFByZWNlZGVuY2UiLCJyaWdodFRva2VuIiwiaW5maXhQYXJzZWxldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztJQUlxQkEsTTtBQUNuQixrQkFBWUMsZ0JBQVosRUFBOEI7QUFBQTs7QUFDNUIsU0FBS0EsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLE1BQUwsR0FBYyx5QkFBUyxLQUFLRCxnQkFBZCxDQUFkOztBQUVBLFNBQUtFLFlBQUwsR0FBb0IsQ0FBcEI7O0FBRUEsU0FBS0MsZUFBTCxHQUF1QixJQUFJQyxHQUFKLEVBQXZCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixJQUFJRCxHQUFKLEVBQXRCO0FBQ0Q7O0FBRUQ7Ozs7OzhCQUNVO0FBQ1IsVUFBSSxLQUFLRixZQUFMLElBQXFCLEtBQUtELE1BQUwsQ0FBWUssTUFBckMsRUFBNkM7QUFDM0MsY0FBTSxJQUFJQyxLQUFKLENBQVUsOENBQVYsQ0FBTjtBQUNEO0FBQ0QsVUFBTUMsUUFBUSxLQUFLUCxNQUFMLENBQVksS0FBS0MsWUFBakIsQ0FBZDtBQUNBLFdBQUtBLFlBQUwsSUFBcUIsQ0FBckI7QUFDQSxhQUFPTSxLQUFQO0FBQ0Q7O0FBRUQ7Ozs7OEJBQ1VDLEMsRUFBRztBQUNYLFVBQU1DLElBQUksS0FBS1IsWUFBTCxHQUFvQk8sQ0FBOUI7QUFDQSxVQUFJQyxJQUFJLEtBQUtULE1BQUwsQ0FBWUssTUFBcEIsRUFBNEI7QUFDMUIsY0FBTSxJQUFJQyxLQUFKLENBQVUsdUNBQVYsQ0FBTjtBQUNEO0FBQ0QsYUFBTyxLQUFLTixNQUFMLENBQVlTLENBQVosQ0FBUDtBQUNEOzs7MkNBRXNCQyxTLEVBQVdDLFEsRUFBVTtBQUMxQyxXQUFLVCxlQUFMLENBQXFCVSxHQUFyQixDQUF5QkYsU0FBekIsRUFBb0NDLFFBQXBDO0FBQ0Q7OzswQ0FFcUJELFMsRUFBV0MsUSxFQUFVO0FBQ3pDLFdBQUtQLGNBQUwsQ0FBb0JRLEdBQXBCLENBQXdCRixTQUF4QixFQUFtQ0MsUUFBbkM7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUosUUFBUSxLQUFLTSxTQUFMLENBQWUsQ0FBZixDQUFkO0FBQ0EsVUFBTUYsV0FBVyxLQUFLUCxjQUFMLENBQW9CVSxHQUFwQixDQUF3QlAsTUFBTVEsSUFBOUIsQ0FBakI7QUFDQSxVQUFJSixRQUFKLEVBQWMsT0FBT0EsU0FBU0ssVUFBaEI7QUFDZCxhQUFPLENBQVA7QUFDRDs7O3NDQUUrQjtBQUFBLFVBQWhCQSxVQUFnQix1RUFBSCxDQUFHOztBQUM5QixVQUFNQyxZQUFZLEtBQUtDLE9BQUwsRUFBbEI7QUFDQSxVQUFNQyxpQkFBaUIsS0FBS2pCLGVBQUwsQ0FBcUJZLEdBQXJCLENBQXlCRyxVQUFVRixJQUFuQyxDQUF2QjtBQUNBLFVBQUksQ0FBQ0ksY0FBTCxFQUFxQjtBQUNuQixjQUFNLElBQUlDLFNBQUoscUNBQWdESCxVQUFVRixJQUFWLENBQWVNLFFBQWYsRUFBaEQsQ0FBTjtBQUNEOztBQUVELFVBQUlDLGlCQUFpQkgsZUFBZUksS0FBZixDQUFxQixJQUFyQixFQUEyQk4sU0FBM0IsQ0FBckI7O0FBRUEsYUFBT0QsYUFBYSxLQUFLUSxhQUFMLEVBQXBCLEVBQTBDO0FBQ3hDLFlBQU1DLGFBQWEsS0FBS1AsT0FBTCxFQUFuQjtBQUNBLFlBQU1RLGdCQUFnQixLQUFLdEIsY0FBTCxDQUFvQlUsR0FBcEIsQ0FBd0JXLFdBQVdWLElBQW5DLENBQXRCO0FBQ0FPLHlCQUFpQkksY0FBY0gsS0FBZCxDQUFvQixJQUFwQixFQUEwQkQsY0FBMUIsRUFBMENHLFVBQTFDLENBQWpCO0FBQ0Q7O0FBRUQsYUFBT0gsY0FBUDtBQUNEOzs7Ozs7a0JBN0RrQnhCLE0iLCJmaWxlIjoiUGFyc2VyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9sZi9jb2RlL2NlbGx1bGFyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgdG9rZW5pemUsXG59IGZyb20gJy4vdG9rZW5pemVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc2VyIHtcbiAgY29uc3RydWN0b3IoZXhwcmVzc2lvblN0cmluZykge1xuICAgIHRoaXMuZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmc7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbml6ZSh0aGlzLmV4cHJlc3Npb25TdHJpbmcpO1xuXG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuXG4gICAgdGhpcy5wcmVmaXhQYXJzZWxldHMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5pbmZpeFBhcnNlbGV0cyA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIC8vIHJldHVybnMgdGhlIG5leHQgdG9rZW5cbiAgY29uc3VtZSgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPj0gdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjb25zdW1lLiBJbmRleCBleGNlZWRzIHRva2VucyBsZW5ndGguJyk7XG4gICAgfVxuICAgIGNvbnN0IHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5jdXJyZW50SW5kZXhdO1xuICAgIHRoaXMuY3VycmVudEluZGV4ICs9IDE7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgLy8gcmV0dXJucyB0aGUgdXBjb21pbmcgdG9rZW4gbiBzcG90cyBhaGVhZC4gbG9va0FoZWFkKDEpIHJldHVybnMgdGhlIG5leHQgdG9rZW4uXG4gIGxvb2tBaGVhZChuKSB7XG4gICAgY29uc3QgaSA9IHRoaXMuY3VycmVudEluZGV4ICsgbjtcbiAgICBpZiAoaSA+IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMb29rQWhlYWQgaXMgYmV5b25kIHRoZSBlbmQgb2YgdG9rZW5zJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRva2Vuc1tpXTtcbiAgfVxuXG4gIHJlZ2lzdGVyUHJlZml4UGFyc2VsZXQodG9rZW5UeXBlLCBwYXJzZWxldCkge1xuICAgIHRoaXMucHJlZml4UGFyc2VsZXRzLnNldCh0b2tlblR5cGUsIHBhcnNlbGV0KTtcbiAgfVxuXG4gIHJlZ2lzdGVySW5maXhQYXJzZWxldCh0b2tlblR5cGUsIHBhcnNlbGV0KSB7XG4gICAgdGhpcy5pbmZpeFBhcnNlbGV0cy5zZXQodG9rZW5UeXBlLCBwYXJzZWxldCk7XG4gIH1cblxuICBnZXRQcmVjZWRlbmNlKCkge1xuICAgIGNvbnN0IHRva2VuID0gdGhpcy5sb29rQWhlYWQoMCk7XG4gICAgY29uc3QgcGFyc2VsZXQgPSB0aGlzLmluZml4UGFyc2VsZXRzLmdldCh0b2tlbi50eXBlKTtcbiAgICBpZiAocGFyc2VsZXQpIHJldHVybiBwYXJzZWxldC5wcmVjZWRlbmNlO1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcGFyc2VFeHByZXNzaW9uKHByZWNlZGVuY2UgPSAwKSB7XG4gICAgY29uc3QgbGVmdFRva2VuID0gdGhpcy5jb25zdW1lKCk7XG4gICAgY29uc3QgcHJlZml4UGFyc2VsZXQgPSB0aGlzLnByZWZpeFBhcnNlbGV0cy5nZXQobGVmdFRva2VuLnR5cGUpO1xuICAgIGlmICghcHJlZml4UGFyc2VsZXQpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYENvdWxkIG5vdCBwYXJzZSB0b2tlbiBvZiB0eXBlOiAke2xlZnRUb2tlbi50eXBlLnRvU3RyaW5nKCl9YCk7XG4gICAgfVxuXG4gICAgbGV0IGxlZnRFeHByZXNzaW9uID0gcHJlZml4UGFyc2VsZXQucGFyc2UodGhpcywgbGVmdFRva2VuKTtcblxuICAgIHdoaWxlIChwcmVjZWRlbmNlIDwgdGhpcy5nZXRQcmVjZWRlbmNlKCkpIHtcbiAgICAgIGNvbnN0IHJpZ2h0VG9rZW4gPSB0aGlzLmNvbnN1bWUoKTtcbiAgICAgIGNvbnN0IGluZml4UGFyc2VsZXQgPSB0aGlzLmluZml4UGFyc2VsZXRzLmdldChyaWdodFRva2VuLnR5cGUpO1xuICAgICAgbGVmdEV4cHJlc3Npb24gPSBpbmZpeFBhcnNlbGV0LnBhcnNlKHRoaXMsIGxlZnRFeHByZXNzaW9uLCByaWdodFRva2VuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVmdEV4cHJlc3Npb247XG4gIH1cbn1cbiJdfQ==

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sheet = undefined;

var _Sheet = __webpack_require__(5);

var _Sheet2 = _interopRequireDefault(_Sheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */
exports.Sheet = _Sheet2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJTaGVldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFQTtRQUVFQSxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9sZi9jb2RlL2NlbGx1bGFyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoZWV0IGZyb20gJy4vU2hlZXQnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5leHBvcnQge1xuICBTaGVldCxcbn07XG4iXX0=

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _OperatorExpression = __webpack_require__(3);

var _OperatorExpression2 = _interopRequireDefault(_OperatorExpression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BinaryOperatorParselet = function () {
  function BinaryOperatorParselet(precedence) {
    _classCallCheck(this, BinaryOperatorParselet);

    this.precedence = precedence;
  }

  _createClass(BinaryOperatorParselet, [{
    key: 'parse',
    value: function parse(parser, leftExpression, token) {
      var rightExpression = parser.parseExpression(this.precedence);
      return new _OperatorExpression2.default(leftExpression, token.type, rightExpression);
    }
  }]);

  return BinaryOperatorParselet;
}();

exports.default = BinaryOperatorParselet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYXJzZWxldHMvQmluYXJ5T3BlcmF0b3JQYXJzZWxldC5qcyJdLCJuYW1lcyI6WyJCaW5hcnlPcGVyYXRvclBhcnNlbGV0IiwicHJlY2VkZW5jZSIsInBhcnNlciIsImxlZnRFeHByZXNzaW9uIiwidG9rZW4iLCJyaWdodEV4cHJlc3Npb24iLCJwYXJzZUV4cHJlc3Npb24iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7OztJQUVxQkEsc0I7QUFDbkIsa0NBQVlDLFVBQVosRUFBd0I7QUFBQTs7QUFDdEIsU0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7OzswQkFFS0MsTSxFQUFRQyxjLEVBQWdCQyxLLEVBQU87QUFDbkMsVUFBTUMsa0JBQWtCSCxPQUFPSSxlQUFQLENBQXVCLEtBQUtMLFVBQTVCLENBQXhCO0FBQ0EsYUFBTyxpQ0FBdUJFLGNBQXZCLEVBQXVDQyxNQUFNRyxJQUE3QyxFQUFtREYsZUFBbkQsQ0FBUDtBQUNEOzs7Ozs7a0JBUmtCTCxzQiIsImZpbGUiOiJCaW5hcnlPcGVyYXRvclBhcnNlbGV0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9sZi9jb2RlL2NlbGx1bGFyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9wZXJhdG9yRXhwcmVzc2lvbiBmcm9tICcuLi9leHByZXNzaW9ucy9PcGVyYXRvckV4cHJlc3Npb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaW5hcnlPcGVyYXRvclBhcnNlbGV0IHtcbiAgY29uc3RydWN0b3IocHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBwYXJzZShwYXJzZXIsIGxlZnRFeHByZXNzaW9uLCB0b2tlbikge1xuICAgIGNvbnN0IHJpZ2h0RXhwcmVzc2lvbiA9IHBhcnNlci5wYXJzZUV4cHJlc3Npb24odGhpcy5wcmVjZWRlbmNlKTtcbiAgICByZXR1cm4gbmV3IE9wZXJhdG9yRXhwcmVzc2lvbihsZWZ0RXhwcmVzc2lvbiwgdG9rZW4udHlwZSwgcmlnaHRFeHByZXNzaW9uKTtcbiAgfVxuXG59XG4iXX0=

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NameExpression = __webpack_require__(1);

var _NameExpression2 = _interopRequireDefault(_NameExpression);

var _PrefixParselet2 = __webpack_require__(4);

var _PrefixParselet3 = _interopRequireDefault(_PrefixParselet2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NameParselet = function (_PrefixParselet) {
  _inherits(NameParselet, _PrefixParselet);

  function NameParselet() {
    _classCallCheck(this, NameParselet);

    return _possibleConstructorReturn(this, (NameParselet.__proto__ || Object.getPrototypeOf(NameParselet)).apply(this, arguments));
  }

  _createClass(NameParselet, [{
    key: 'parse',
    value: function parse(parser, token) {
      // eslint-disable-line class-methods-use-this
      return new _NameExpression2.default(token.value);
    }
  }]);

  return NameParselet;
}(_PrefixParselet3.default);

exports.default = NameParselet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYXJzZWxldHMvTmFtZVBhcnNlbGV0LmpzIl0sIm5hbWVzIjpbIk5hbWVQYXJzZWxldCIsInBhcnNlciIsInRva2VuIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7OzswQkFDYkMsTSxFQUFRQyxLLEVBQU87QUFBRztBQUN0QixhQUFPLDZCQUFtQkEsTUFBTUMsS0FBekIsQ0FBUDtBQUNEOzs7Ozs7a0JBSGtCSCxZIiwiZmlsZSI6Ik5hbWVQYXJzZWxldC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbGYvY29kZS9jZWxsdWxhciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYW1lRXhwcmVzc2lvbiBmcm9tICcuLi9leHByZXNzaW9ucy9OYW1lRXhwcmVzc2lvbic7XG5pbXBvcnQgUHJlZml4UGFyc2VsZXQgZnJvbSAnLi9QcmVmaXhQYXJzZWxldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hbWVQYXJzZWxldCBleHRlbmRzIFByZWZpeFBhcnNlbGV0IHtcbiAgcGFyc2UocGFyc2VyLCB0b2tlbikgeyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgcmV0dXJuIG5ldyBOYW1lRXhwcmVzc2lvbih0b2tlbi52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NumberExpression = __webpack_require__(2);

var _NumberExpression2 = _interopRequireDefault(_NumberExpression);

var _PrefixParselet2 = __webpack_require__(4);

var _PrefixParselet3 = _interopRequireDefault(_PrefixParselet2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberParselet = function (_PrefixParselet) {
  _inherits(NumberParselet, _PrefixParselet);

  function NumberParselet() {
    _classCallCheck(this, NumberParselet);

    return _possibleConstructorReturn(this, (NumberParselet.__proto__ || Object.getPrototypeOf(NumberParselet)).apply(this, arguments));
  }

  _createClass(NumberParselet, [{
    key: 'parse',
    value: function parse(parser, token) {
      // eslint-disable-line class-methods-use-this
      return new _NumberExpression2.default(Number(token.value));
    }
  }]);

  return NumberParselet;
}(_PrefixParselet3.default);

exports.default = NumberParselet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYXJzZWxldHMvTnVtYmVyUGFyc2VsZXQuanMiXSwibmFtZXMiOlsiTnVtYmVyUGFyc2VsZXQiLCJwYXJzZXIiLCJ0b2tlbiIsIk51bWJlciIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsYzs7Ozs7Ozs7Ozs7MEJBQ2JDLE0sRUFBUUMsSyxFQUFPO0FBQUc7QUFDdEIsYUFBTywrQkFBcUJDLE9BQU9ELE1BQU1FLEtBQWIsQ0FBckIsQ0FBUDtBQUNEOzs7Ozs7a0JBSGtCSixjIiwiZmlsZSI6Ik51bWJlclBhcnNlbGV0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9sZi9jb2RlL2NlbGx1bGFyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE51bWJlckV4cHJlc3Npb24gZnJvbSAnLi4vZXhwcmVzc2lvbnMvTnVtYmVyRXhwcmVzc2lvbic7XG5pbXBvcnQgUHJlZml4UGFyc2VsZXQgZnJvbSAnLi9QcmVmaXhQYXJzZWxldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlclBhcnNlbGV0IGV4dGVuZHMgUHJlZml4UGFyc2VsZXQge1xuICBwYXJzZShwYXJzZXIsIHRva2VuKSB7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICByZXR1cm4gbmV3IE51bWJlckV4cHJlc3Npb24oTnVtYmVyKHRva2VuLnZhbHVlKSk7XG4gIH1cbn1cbiJdfQ==

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenTypes = exports.Token = exports.tokenize = undefined;

var _TokenTypes = __webpack_require__(0);

var _TokenTypes2 = _interopRequireDefault(_TokenTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Token = function Token(type, value) {
  _classCallCheck(this, Token);

  this.type = type;
  this.value = value;
};

function tokenize(input) {
  var current = 0;
  var tokens = [];

  while (current < input.length) {
    var char = input[current];

    if (char === '(') {
      tokens.push(new Token(_TokenTypes2.default.LPAREN, '('));
      current += 1;
      continue;
    }

    if (char === ')') {
      tokens.push(new Token(_TokenTypes2.default.RPAREN, ')'));
      current += 1;
      continue;
    }

    var WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current += 1;
      continue;
    }

    if (char === ':') {
      tokens.push(new Token(_TokenTypes2.default.COLON, ':'));
      current += 1;
      continue;
    }

    if (char === ',') {
      tokens.push(new Token(_TokenTypes2.default.COMMA, ','));
      current += 1;
      continue;
    }

    if (char === '+') {
      tokens.push(new Token(_TokenTypes2.default.PLUS, '+'));
      current += 1;
      continue;
    }

    if (char === '*') {
      tokens.push(new Token(_TokenTypes2.default.TIMES, '*'));
      current += 1;
      continue;
    }

    if (char === '"') {
      var value = '';
      current += 1;
      char = input[current]; // skip opening "
      while (char !== '"') {
        value += char;
        current += 1;
        char = input[current];
      }
      current += 1;
      char = input[current]; // skip closing "
      tokens.push(new Token(_TokenTypes2.default.STRING, value));
      continue;
    }

    var ALPHA = /[a-z]/i;
    var ALPHANUM = /[a-z0-9]/i;
    if (ALPHA.test(char)) {
      var _value = '';
      while (char !== undefined && ALPHANUM.test(char)) {
        _value += char;
        current += 1;
        char = input[current];
      }
      tokens.push(new Token(_TokenTypes2.default.NAME, _value));
      continue;
    }

    var NUM = /[0-9]/i;
    var NUM_OR_DOT = /[0-9.]/i;
    if (NUM.test(char)) {
      var _value2 = '';
      var foundDot = false;
      while (char !== undefined && NUM_OR_DOT.test(char)) {
        var isDot = char === '.';
        if (foundDot && isDot) throw new TypeError('Invalid number format x.x.');
        if (isDot) foundDot = true;
        _value2 += char;
        current += 1;
        char = input[current];
      }
      tokens.push(new Token(_TokenTypes2.default.NUMBER, _value2));
      continue;
    }

    throw new TypeError('Unexpected character: ' + char + ' at ' + current + ' in \'' + input + '\'');
  }

  tokens.push(new Token(_TokenTypes2.default.EOF));
  return tokens;
}

exports.tokenize = tokenize;
exports.Token = Token;
exports.TokenTypes = _TokenTypes2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90b2tlbml6ZXIuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJ0eXBlIiwidmFsdWUiLCJ0b2tlbml6ZSIsImlucHV0IiwiY3VycmVudCIsInRva2VucyIsImxlbmd0aCIsImNoYXIiLCJwdXNoIiwiTFBBUkVOIiwiUlBBUkVOIiwiV0hJVEVTUEFDRSIsInRlc3QiLCJDT0xPTiIsIkNPTU1BIiwiUExVUyIsIlRJTUVTIiwiU1RSSU5HIiwiQUxQSEEiLCJBTFBIQU5VTSIsInVuZGVmaW5lZCIsIk5BTUUiLCJOVU0iLCJOVU1fT1JfRE9UIiwiZm91bmREb3QiLCJpc0RvdCIsIlR5cGVFcnJvciIsIk5VTUJFUiIsIkVPRiIsIlRva2VuVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFTUEsSyxHQUNKLGVBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQ3ZCLE9BQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNELEM7O0FBR0gsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkIsTUFBSUMsVUFBVSxDQUFkO0FBQ0EsTUFBTUMsU0FBUyxFQUFmOztBQUVBLFNBQU9ELFVBQVVELE1BQU1HLE1BQXZCLEVBQStCO0FBQzdCLFFBQUlDLE9BQU9KLE1BQU1DLE9BQU4sQ0FBWDs7QUFFQSxRQUFJRyxTQUFTLEdBQWIsRUFBa0I7QUFDaEJGLGFBQU9HLElBQVAsQ0FBWSxJQUFJVCxLQUFKLENBQVUscUJBQVdVLE1BQXJCLEVBQTZCLEdBQTdCLENBQVo7QUFDQUwsaUJBQVcsQ0FBWDtBQUNBO0FBQ0Q7O0FBRUQsUUFBSUcsU0FBUyxHQUFiLEVBQWtCO0FBQ2hCRixhQUFPRyxJQUFQLENBQVksSUFBSVQsS0FBSixDQUFVLHFCQUFXVyxNQUFyQixFQUE2QixHQUE3QixDQUFaO0FBQ0FOLGlCQUFXLENBQVg7QUFDQTtBQUNEOztBQUVELFFBQU1PLGFBQWEsSUFBbkI7QUFDQSxRQUFJQSxXQUFXQyxJQUFYLENBQWdCTCxJQUFoQixDQUFKLEVBQTJCO0FBQ3pCSCxpQkFBVyxDQUFYO0FBQ0E7QUFDRDs7QUFFRCxRQUFJRyxTQUFTLEdBQWIsRUFBa0I7QUFDaEJGLGFBQU9HLElBQVAsQ0FBWSxJQUFJVCxLQUFKLENBQVUscUJBQVdjLEtBQXJCLEVBQTRCLEdBQTVCLENBQVo7QUFDQVQsaUJBQVcsQ0FBWDtBQUNBO0FBQ0Q7O0FBRUQsUUFBSUcsU0FBUyxHQUFiLEVBQWtCO0FBQ2hCRixhQUFPRyxJQUFQLENBQVksSUFBSVQsS0FBSixDQUFVLHFCQUFXZSxLQUFyQixFQUE0QixHQUE1QixDQUFaO0FBQ0FWLGlCQUFXLENBQVg7QUFDQTtBQUNEOztBQUVELFFBQUlHLFNBQVMsR0FBYixFQUFrQjtBQUNoQkYsYUFBT0csSUFBUCxDQUFZLElBQUlULEtBQUosQ0FBVSxxQkFBV2dCLElBQXJCLEVBQTJCLEdBQTNCLENBQVo7QUFDQVgsaUJBQVcsQ0FBWDtBQUNBO0FBQ0Q7O0FBRUQsUUFBSUcsU0FBUyxHQUFiLEVBQWtCO0FBQ2hCRixhQUFPRyxJQUFQLENBQVksSUFBSVQsS0FBSixDQUFVLHFCQUFXaUIsS0FBckIsRUFBNEIsR0FBNUIsQ0FBWjtBQUNBWixpQkFBVyxDQUFYO0FBQ0E7QUFDRDs7QUFFRCxRQUFJRyxTQUFTLEdBQWIsRUFBa0I7QUFDaEIsVUFBSU4sUUFBUSxFQUFaO0FBQ0FHLGlCQUFXLENBQVg7QUFDQUcsYUFBT0osTUFBTUMsT0FBTixDQUFQLENBSGdCLENBR1E7QUFDeEIsYUFBT0csU0FBUyxHQUFoQixFQUFxQjtBQUNuQk4saUJBQVNNLElBQVQ7QUFDQUgsbUJBQVcsQ0FBWDtBQUNBRyxlQUFPSixNQUFNQyxPQUFOLENBQVA7QUFDRDtBQUNEQSxpQkFBVyxDQUFYO0FBQ0FHLGFBQU9KLE1BQU1DLE9BQU4sQ0FBUCxDQVZnQixDQVVRO0FBQ3hCQyxhQUFPRyxJQUFQLENBQVksSUFBSVQsS0FBSixDQUFVLHFCQUFXa0IsTUFBckIsRUFBNkJoQixLQUE3QixDQUFaO0FBQ0E7QUFDRDs7QUFFRCxRQUFNaUIsUUFBUSxRQUFkO0FBQ0EsUUFBTUMsV0FBVyxXQUFqQjtBQUNBLFFBQUlELE1BQU1OLElBQU4sQ0FBV0wsSUFBWCxDQUFKLEVBQXNCO0FBQ3BCLFVBQUlOLFNBQVEsRUFBWjtBQUNBLGFBQU9NLFNBQVNhLFNBQVQsSUFBc0JELFNBQVNQLElBQVQsQ0FBY0wsSUFBZCxDQUE3QixFQUFrRDtBQUNoRE4sa0JBQVNNLElBQVQ7QUFDQUgsbUJBQVcsQ0FBWDtBQUNBRyxlQUFPSixNQUFNQyxPQUFOLENBQVA7QUFDRDtBQUNEQyxhQUFPRyxJQUFQLENBQVksSUFBSVQsS0FBSixDQUFVLHFCQUFXc0IsSUFBckIsRUFBMkJwQixNQUEzQixDQUFaO0FBQ0E7QUFDRDs7QUFFRCxRQUFNcUIsTUFBTSxRQUFaO0FBQ0EsUUFBTUMsYUFBYSxTQUFuQjtBQUNBLFFBQUlELElBQUlWLElBQUosQ0FBU0wsSUFBVCxDQUFKLEVBQW9CO0FBQ2xCLFVBQUlOLFVBQVEsRUFBWjtBQUNBLFVBQUl1QixXQUFXLEtBQWY7QUFDQSxhQUFPakIsU0FBU2EsU0FBVCxJQUF1QkcsV0FBV1gsSUFBWCxDQUFnQkwsSUFBaEIsQ0FBOUIsRUFBc0Q7QUFDcEQsWUFBTWtCLFFBQVFsQixTQUFTLEdBQXZCO0FBQ0EsWUFBSWlCLFlBQVlDLEtBQWhCLEVBQXVCLE1BQU0sSUFBSUMsU0FBSixDQUFjLDRCQUFkLENBQU47QUFDdkIsWUFBSUQsS0FBSixFQUFXRCxXQUFXLElBQVg7QUFDWHZCLG1CQUFTTSxJQUFUO0FBQ0FILG1CQUFXLENBQVg7QUFDQUcsZUFBT0osTUFBTUMsT0FBTixDQUFQO0FBQ0Q7QUFDREMsYUFBT0csSUFBUCxDQUFZLElBQUlULEtBQUosQ0FBVSxxQkFBVzRCLE1BQXJCLEVBQTZCMUIsT0FBN0IsQ0FBWjtBQUNBO0FBQ0Q7O0FBRUQsVUFBTSxJQUFJeUIsU0FBSiw0QkFDdUJuQixJQUR2QixZQUNrQ0gsT0FEbEMsY0FDaURELEtBRGpELFFBQU47QUFHRDs7QUFFREUsU0FBT0csSUFBUCxDQUFZLElBQUlULEtBQUosQ0FBVSxxQkFBVzZCLEdBQXJCLENBQVo7QUFDQSxTQUFPdkIsTUFBUDtBQUNEOztRQUdHSCxRLEdBQUFBLFE7UUFDQUgsSyxHQUFBQSxLO1FBQ0E4QixVIiwiZmlsZSI6InRva2VuaXplci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbGYvY29kZS9jZWxsdWxhciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb2tlblR5cGVzIGZyb20gJy4vVG9rZW5UeXBlcyc7XG5cbmNsYXNzIFRva2VuIHtcbiAgY29uc3RydWN0b3IodHlwZSwgdmFsdWUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZShpbnB1dCkge1xuICBsZXQgY3VycmVudCA9IDA7XG4gIGNvbnN0IHRva2VucyA9IFtdO1xuXG4gIHdoaWxlIChjdXJyZW50IDwgaW5wdXQubGVuZ3RoKSB7XG4gICAgbGV0IGNoYXIgPSBpbnB1dFtjdXJyZW50XTtcblxuICAgIGlmIChjaGFyID09PSAnKCcpIHtcbiAgICAgIHRva2Vucy5wdXNoKG5ldyBUb2tlbihUb2tlblR5cGVzLkxQQVJFTiwgJygnKSk7XG4gICAgICBjdXJyZW50ICs9IDE7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhciA9PT0gJyknKSB7XG4gICAgICB0b2tlbnMucHVzaChuZXcgVG9rZW4oVG9rZW5UeXBlcy5SUEFSRU4sICcpJykpO1xuICAgICAgY3VycmVudCArPSAxO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY29uc3QgV0hJVEVTUEFDRSA9IC9cXHMvO1xuICAgIGlmIChXSElURVNQQUNFLnRlc3QoY2hhcikpIHtcbiAgICAgIGN1cnJlbnQgKz0gMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjaGFyID09PSAnOicpIHtcbiAgICAgIHRva2Vucy5wdXNoKG5ldyBUb2tlbihUb2tlblR5cGVzLkNPTE9OLCAnOicpKTtcbiAgICAgIGN1cnJlbnQgKz0gMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjaGFyID09PSAnLCcpIHtcbiAgICAgIHRva2Vucy5wdXNoKG5ldyBUb2tlbihUb2tlblR5cGVzLkNPTU1BLCAnLCcpKTtcbiAgICAgIGN1cnJlbnQgKz0gMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjaGFyID09PSAnKycpIHtcbiAgICAgIHRva2Vucy5wdXNoKG5ldyBUb2tlbihUb2tlblR5cGVzLlBMVVMsICcrJykpO1xuICAgICAgY3VycmVudCArPSAxO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGNoYXIgPT09ICcqJykge1xuICAgICAgdG9rZW5zLnB1c2gobmV3IFRva2VuKFRva2VuVHlwZXMuVElNRVMsICcqJykpO1xuICAgICAgY3VycmVudCArPSAxO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGNoYXIgPT09ICdcIicpIHtcbiAgICAgIGxldCB2YWx1ZSA9ICcnO1xuICAgICAgY3VycmVudCArPSAxO1xuICAgICAgY2hhciA9IGlucHV0W2N1cnJlbnRdOyAgLy8gc2tpcCBvcGVuaW5nIFwiXG4gICAgICB3aGlsZSAoY2hhciAhPT0gJ1wiJykge1xuICAgICAgICB2YWx1ZSArPSBjaGFyO1xuICAgICAgICBjdXJyZW50ICs9IDE7XG4gICAgICAgIGNoYXIgPSBpbnB1dFtjdXJyZW50XTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgKz0gMTtcbiAgICAgIGNoYXIgPSBpbnB1dFtjdXJyZW50XTsgIC8vIHNraXAgY2xvc2luZyBcIlxuICAgICAgdG9rZW5zLnB1c2gobmV3IFRva2VuKFRva2VuVHlwZXMuU1RSSU5HLCB2YWx1ZSkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY29uc3QgQUxQSEEgPSAvW2Etel0vaTtcbiAgICBjb25zdCBBTFBIQU5VTSA9IC9bYS16MC05XS9pO1xuICAgIGlmIChBTFBIQS50ZXN0KGNoYXIpKSB7XG4gICAgICBsZXQgdmFsdWUgPSAnJztcbiAgICAgIHdoaWxlIChjaGFyICE9PSB1bmRlZmluZWQgJiYgQUxQSEFOVU0udGVzdChjaGFyKSkge1xuICAgICAgICB2YWx1ZSArPSBjaGFyO1xuICAgICAgICBjdXJyZW50ICs9IDE7XG4gICAgICAgIGNoYXIgPSBpbnB1dFtjdXJyZW50XTtcbiAgICAgIH1cbiAgICAgIHRva2Vucy5wdXNoKG5ldyBUb2tlbihUb2tlblR5cGVzLk5BTUUsIHZhbHVlKSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb25zdCBOVU0gPSAvWzAtOV0vaTtcbiAgICBjb25zdCBOVU1fT1JfRE9UID0gL1swLTkuXS9pO1xuICAgIGlmIChOVU0udGVzdChjaGFyKSkge1xuICAgICAgbGV0IHZhbHVlID0gJyc7XG4gICAgICBsZXQgZm91bmREb3QgPSBmYWxzZTtcbiAgICAgIHdoaWxlIChjaGFyICE9PSB1bmRlZmluZWQgJiYgKE5VTV9PUl9ET1QudGVzdChjaGFyKSkpIHtcbiAgICAgICAgY29uc3QgaXNEb3QgPSBjaGFyID09PSAnLic7XG4gICAgICAgIGlmIChmb3VuZERvdCAmJiBpc0RvdCkgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBudW1iZXIgZm9ybWF0IHgueC4nKTtcbiAgICAgICAgaWYgKGlzRG90KSBmb3VuZERvdCA9IHRydWU7XG4gICAgICAgIHZhbHVlICs9IGNoYXI7XG4gICAgICAgIGN1cnJlbnQgKz0gMTtcbiAgICAgICAgY2hhciA9IGlucHV0W2N1cnJlbnRdO1xuICAgICAgfVxuICAgICAgdG9rZW5zLnB1c2gobmV3IFRva2VuKFRva2VuVHlwZXMuTlVNQkVSLCB2YWx1ZSkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgYFVuZXhwZWN0ZWQgY2hhcmFjdGVyOiAke2NoYXJ9IGF0ICR7Y3VycmVudH0gaW4gJyR7aW5wdXR9J2AsXG4gICAgKTtcbiAgfVxuXG4gIHRva2Vucy5wdXNoKG5ldyBUb2tlbihUb2tlblR5cGVzLkVPRikpO1xuICByZXR1cm4gdG9rZW5zO1xufVxuXG5leHBvcnQge1xuICAgIHRva2VuaXplLFxuICAgIFRva2VuLFxuICAgIFRva2VuVHlwZXMsXG59O1xuIl19

/***/ })
/******/ ]);
});