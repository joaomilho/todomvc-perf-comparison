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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // TODO: focus on fields
	// TODO: routes
	// TODO: bug when click on toggle inside "Active" filter :/

	var _ = __webpack_require__(44);

	var _2 = _interopRequireDefault(_);

	var _processes = __webpack_require__(121);

	var _localStorage = __webpack_require__(131);

	var _localStorage2 = _interopRequireDefault(_localStorage);

	var _all = __webpack_require__(56);

	var _all2 = _interopRequireDefault(_all);

	var _any = __webpack_require__(58);

	var _any2 = _interopRequireDefault(_any);

	var _call = __webpack_require__(61);

	var _call2 = _interopRequireDefault(_call);

	var _filter = __webpack_require__(31);

	var _filter2 = _interopRequireDefault(_filter);

	var _identity = __webpack_require__(32);

	var _identity2 = _interopRequireDefault(_identity);

	var _lensProp = __webpack_require__(90);

	var _lensProp2 = _interopRequireDefault(_lensProp);

	var _map = __webpack_require__(6);

	var _map2 = _interopRequireDefault(_map);

	var _prop = __webpack_require__(36);

	var _prop2 = _interopRequireDefault(_prop);

	var _propEq = __webpack_require__(94);

	var _propEq2 = _interopRequireDefault(_propEq);

	var _reject = __webpack_require__(97);

	var _reject2 = _interopRequireDefault(_reject);

	var _set = __webpack_require__(98);

	var _set2 = _interopRequireDefault(_set);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var view = function view(_ref) {
	  var show = _ref.show;
	  var todos = _ref.todos;
	  return ['section.todoapp', todos.length ? [header, list(filters[show](todos)), footer(show, todos)] : [header]];
	};

	var header = function header() {
	  return ['header.header', [['h1', 'todos'], ['input.new-todo', { placeholder: 'What needs to be done?', autofocus: true, value: '',
	    keyup: { add: _processes.valueOnEnter, clear: _processes.onEsc } }]]];
	};

	var list = function list(todos) {
	  return ['section.main', [['input.toggle-all', { type: 'checkbox', change: { toggleAll: (0, _all2.default)((0, _prop2.default)('completed'), todos) } }], ['label', { for: 'toggle-all' }, 'Mark all as complete'], ['ul.todo-list', (0, _map2.default)(todo, todos)]]];
	};

	var todo = function todo(_todo) {
	  return _todo.editing ? editingTodo(_todo) : stdTodo(_todo);
	};

	var editingTodo = function editingTodo(todo) {
	  return ['li.editing', [['input.edit', { value: todo.title, autofocus: true,
	    keyup: { edit: (0, _processes.valueOnEnterAnd)({ id: todo.id }) },
	    blur: { edit: (0, _processes.valueAnd)({ id: todo.id }) } }]]];
	};

	var stdTodo = function stdTodo(todo) {
	  return ['li', { class: [[todo.completed, 'completed']] }, [['input.toggle', { type: 'checkbox', checked: todo.completed, click: { toggleCompleted: todo.id } }], ['label', { dblclick: { toggleEditing: todo.id } }, todo.title], ['button.destroy', { click: { remove: todo.id } }]]];
	};

	var footer = function footer(show, todos) {
	  return ['footer.footer', [['span.todo-count', (0, _call2.default)(function (_ref2) {
	    var length = _ref2.length;
	    return [['strong', length], ' ' + (length === 1 ? 'item' : 'items') + ' left'];
	  }, filters['Active'](todos))], ['ul.filters', (0, _map2.default)(filterItem(show), ['All', 'Active', 'Completed'])], (0, _any2.default)((0, _prop2.default)('completed'), todos) && ['button.clear-completed', { click: { clearCompleted: true } }, 'Clear completed']]];
	};

	var filterItem = function filterItem(show) {
	  return function (item) {
	    return ['li', [['a', { class: [[show === item, 'selected']], href: '#/active', click: { show: item } }, item]]];
	  };
	};

	var filters = {
	  All: _identity2.default,
	  Active: (0, _filter2.default)((0, _propEq2.default)('completed', false)),
	  Completed: (0, _filter2.default)((0, _propEq2.default)('completed', true))
	};

	var toggle = function toggle(id, prop, todos) {
	  return (0, _map2.default)(function (todo) {
	    return todo.id === id ? _extends({}, todo, _defineProperty({}, prop, !todo[prop])) : todo;
	  }, todos);
	};

	var reducer = function reducer(state, _ref3) {
	  var type = _ref3.type;
	  var payload = _ref3.payload;

	  switch (type) {
	    case 'add':
	      var uid = state.uid + 1;
	      return _extends({}, state, { uid: uid, todos: [].concat(_toConsumableArray(state.todos), [{ id: uid, title: payload, completed: false }]) });
	    case 'toggleCompleted':
	      return _extends({}, state, { todos: toggle(payload, 'completed', state.todos) });
	    case 'remove':
	      return _extends({}, state, { todos: (0, _reject2.default)((0, _propEq2.default)('id', payload), state.todos) });
	    case 'clearCompleted':
	      return _extends({}, state, { todos: filters['Active'](state.todos) });
	    case 'edit':
	      return _extends({}, state, { todos: (0, _map2.default)(function (todo) {
	          return todo.id === payload.id ? _extends({}, todo, { title: payload.value, editing: false }) : todo;
	        }, state.todos) });
	    case 'show':
	      return _extends({}, state, { show: payload });
	    case 'toggleAll':
	      return _extends({}, state, { todos: (0, _map2.default)((0, _set2.default)((0, _lensProp2.default)('completed'), !payload), state.todos) });
	    case 'toggleEditing':
	      return _extends({}, state, { todos: toggle(payload, 'editing', state.todos) });
	    default:
	      return state;
	  }
	};

	var model = { todos: [], uid: 1, show: 'All' };

	(0, _2.default)(view, { model: model, reducer: reducer, storage: _localStorage2.default });

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry1 = __webpack_require__(2);
	var _isPlaceholder = __webpack_require__(13);

	/**
	 * Optimized internal two-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curry2(fn) {
	  return function f2(a, b) {
	    switch (arguments.length) {
	      case 0:
	        return f2;
	      case 1:
	        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
	          return fn(a, _b);
	        });
	      default:
	        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
	          return fn(_a, b);
	        }) : _isPlaceholder(b) ? _curry1(function (_b) {
	          return fn(a, _b);
	        }) : fn(a, b);
	    }
	  };
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _isPlaceholder = __webpack_require__(13);

	/**
	 * Optimized internal one-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curry1(fn) {
	  return function f1(a) {
	    if (arguments.length === 0 || _isPlaceholder(a)) {
	      return f1;
	    } else {
	      return fn.apply(this, arguments);
	    }
	  };
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry1 = __webpack_require__(2);
	var curryN = __webpack_require__(30);

	/**
	 * Returns a curried equivalent of the provided function. The curried function
	 * has two unusual capabilities. First, its arguments needn't be provided one
	 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
	 * following are equivalent:
	 *
	 *   - `g(1)(2)(3)`
	 *   - `g(1)(2, 3)`
	 *   - `g(1, 2)(3)`
	 *   - `g(1, 2, 3)`
	 *
	 * Secondly, the special placeholder value `R.__` may be used to specify
	 * "gaps", allowing partial application of any combination of arguments,
	 * regardless of their positions. If `g` is as above and `_` is `R.__`, the
	 * following are equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (* -> a) -> (* -> a)
	 * @param {Function} fn The function to curry.
	 * @return {Function} A new, curried function.
	 * @see R.curryN
	 * @example
	 *
	 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
	 *
	 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
	 *      var f = curriedAddFourNumbers(1, 2);
	 *      var g = f(3);
	 *      g(4); //=> 10
	 */
	module.exports = _curry1(function curry(fn) {
	  return curryN(fn.length, fn);
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry1 = __webpack_require__(2);
	var _curry2 = __webpack_require__(1);
	var _isPlaceholder = __webpack_require__(13);

	/**
	 * Optimized internal three-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curry3(fn) {
	  return function f3(a, b, c) {
	    switch (arguments.length) {
	      case 0:
	        return f3;
	      case 1:
	        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
	          return fn(a, _b, _c);
	        });
	      case 2:
	        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
	          return fn(_a, b, _c);
	        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
	          return fn(a, _b, _c);
	        }) : _curry1(function (_c) {
	          return fn(a, b, _c);
	        });
	      default:
	        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
	          return fn(_a, _b, c);
	        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
	          return fn(_a, b, _c);
	        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
	          return fn(a, _b, _c);
	        }) : _isPlaceholder(a) ? _curry1(function (_a) {
	          return fn(_a, b, c);
	        }) : _isPlaceholder(b) ? _curry1(function (_b) {
	          return fn(a, _b, c);
	        }) : _isPlaceholder(c) ? _curry1(function (_c) {
	          return fn(a, b, _c);
	        }) : fn(a, b, c);
	    }
	  };
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	module.exports = isWidget;

	function isWidget(w) {
	    return w && w.type === "Widget";
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(1);
	var _dispatchable = __webpack_require__(7);
	var _map = __webpack_require__(78);
	var _reduce = __webpack_require__(23);
	var _xmap = __webpack_require__(84);
	var curryN = __webpack_require__(30);
	var keys = __webpack_require__(16);

	/**
	 * Takes a function and
	 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
	 * applies the function to each of the functor's values, and returns
	 * a functor of the same shape.
	 *
	 * Ramda provides suitable `map` implementations for `Array` and `Object`,
	 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
	 *
	 * Dispatches to the `map` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * Also treats functions as functors and will compose them together.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Functor f => (a -> b) -> f a -> f b
	 * @param {Function} fn The function to be called on every element of the input `list`.
	 * @param {Array} list The list to be iterated over.
	 * @return {Array} The new list.
	 * @see R.transduce, R.addIndex
	 * @example
	 *
	 *      var double = x => x * 2;
	 *
	 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
	 *
	 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
	 */
	module.exports = _curry2(_dispatchable('map', _xmap, function map(fn, functor) {
	  switch (Object.prototype.toString.call(functor)) {
	    case '[object Function]':
	      return curryN(functor.length, function () {
	        return fn.call(this, functor.apply(this, arguments));
	      });
	    case '[object Object]':
	      return _reduce(function (acc, key) {
	        acc[key] = fn(functor[key]);
	        return acc;
	      }, {}, keys(functor));
	    default:
	      return _map(fn, functor);
	  }
	}));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _isArray = __webpack_require__(22);
	var _isTransformer = __webpack_require__(77);
	var _slice = __webpack_require__(14);

	/**
	 * Returns a function that dispatches with different strategies based on the
	 * object in list position (last argument). If it is an array, executes [fn].
	 * Otherwise, if it has a function with [methodname], it will execute that
	 * function (functor case). Otherwise, if it is a transformer, uses transducer
	 * [xf] to return a new transformer (transducer case). Otherwise, it will
	 * default to executing [fn].
	 *
	 * @private
	 * @param {String} methodname property to check for a custom implementation
	 * @param {Function} xf transducer to initialize if object is transformer
	 * @param {Function} fn default ramda implementation
	 * @return {Function} A function that dispatches on object in list position
	 */
	module.exports = function _dispatchable(methodname, xf, fn) {
	  return function () {
	    var length = arguments.length;
	    if (length === 0) {
	      return fn();
	    }
	    var obj = arguments[length - 1];
	    if (!_isArray(obj)) {
	      var args = _slice(arguments, 0, length - 1);
	      if (typeof obj[methodname] === 'function') {
	        return obj[methodname].apply(obj, args);
	      }
	      if (_isTransformer(obj)) {
	        var transducer = xf.apply(null, args);
	        return transducer(obj);
	      }
	    }
	    return fn.apply(this, arguments);
	  };
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  init: function init() {
	    return this.xf['@@transducer/init']();
	  },
	  result: function result(_result) {
	    return this.xf['@@transducer/result'](_result);
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var version = __webpack_require__(10);

	module.exports = isVirtualNode;

	function isVirtualNode(x) {
	    return x && x.type === "VirtualNode" && x.version === version;
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	module.exports = "2";

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function _arity(n, fn) {
	  /* eslint-disable no-unused-vars */
	  switch (n) {
	    case 0:
	      return function () {
	        return fn.apply(this, arguments);
	      };
	    case 1:
	      return function (a0) {
	        return fn.apply(this, arguments);
	      };
	    case 2:
	      return function (a0, a1) {
	        return fn.apply(this, arguments);
	      };
	    case 3:
	      return function (a0, a1, a2) {
	        return fn.apply(this, arguments);
	      };
	    case 4:
	      return function (a0, a1, a2, a3) {
	        return fn.apply(this, arguments);
	      };
	    case 5:
	      return function (a0, a1, a2, a3, a4) {
	        return fn.apply(this, arguments);
	      };
	    case 6:
	      return function (a0, a1, a2, a3, a4, a5) {
	        return fn.apply(this, arguments);
	      };
	    case 7:
	      return function (a0, a1, a2, a3, a4, a5, a6) {
	        return fn.apply(this, arguments);
	      };
	    case 8:
	      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
	        return fn.apply(this, arguments);
	      };
	    case 9:
	      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
	        return fn.apply(this, arguments);
	      };
	    case 10:
	      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
	        return fn.apply(this, arguments);
	      };
	    default:
	      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function _has(prop, obj) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	module.exports = function _isPlaceholder(a) {
	       return a != null && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' && a['@@functional/placeholder'] === true;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * An optimized, private array `slice` implementation.
	 *
	 * @private
	 * @param {Arguments|Array} args The array or arguments object to consider.
	 * @param {Number} [from=0] The array index to slice from, inclusive.
	 * @param {Number} [to=args.length] The array index to slice to, exclusive.
	 * @return {Array} A new, sliced array.
	 * @example
	 *
	 *      _slice([1, 2, 3, 4, 5], 1, 3); //=> [2, 3]
	 *
	 *      var firstThreeArgs = function(a, b, c, d) {
	 *        return _slice(arguments, 0, 3);
	 *      };
	 *      firstThreeArgs(1, 2, 3, 4); //=> [1, 2, 3]
	 */
	module.exports = function _slice(args, from, to) {
	  switch (arguments.length) {
	    case 1:
	      return _slice(args, 0, args.length);
	    case 2:
	      return _slice(args, from, args.length);
	    default:
	      var list = [];
	      var idx = 0;
	      var len = Math.max(0, Math.min(args.length, to) - from);
	      while (idx < len) {
	        list[idx] = args[from + idx];
	        idx += 1;
	      }
	      return list;
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _curry1 = __webpack_require__(2);
	var _isArray = __webpack_require__(22);

	/**
	 * Tests whether or not an object is similar to an array.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.5.0
	 * @category Type
	 * @category List
	 * @sig * -> Boolean
	 * @param {*} x The object to test.
	 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
	 * @example
	 *
	 *      R.isArrayLike([]); //=> true
	 *      R.isArrayLike(true); //=> false
	 *      R.isArrayLike({}); //=> false
	 *      R.isArrayLike({length: 10}); //=> false
	 *      R.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
	 */
	module.exports = _curry1(function isArrayLike(x) {
	  if (_isArray(x)) {
	    return true;
	  }
	  if (!x) {
	    return false;
	  }
	  if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) !== 'object') {
	    return false;
	  }
	  if (x instanceof String) {
	    return false;
	  }
	  if (x.nodeType === 1) {
	    return !!x.length;
	  }
	  if (x.length === 0) {
	    return true;
	  }
	  if (x.length > 0) {
	    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
	  }
	  return false;
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry1 = __webpack_require__(2);
	var _has = __webpack_require__(12);
	var _isArguments = __webpack_require__(74);

	/**
	 * Returns a list containing the names of all the enumerable own properties of
	 * the supplied object.
	 * Note that the order of the output array is not guaranteed to be consistent
	 * across different JS platforms.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig {k: v} -> [k]
	 * @param {Object} obj The object to extract properties from
	 * @return {Array} An array of the object's own properties.
	 * @example
	 *
	 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
	 */
	module.exports = function () {
	  // cover IE < 9 keys issues
	  var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	  // Safari bug
	  var hasArgsEnumBug = function () {
	    'use strict';

	    return arguments.propertyIsEnumerable('length');
	  }();

	  var contains = function contains(list, item) {
	    var idx = 0;
	    while (idx < list.length) {
	      if (list[idx] === item) {
	        return true;
	      }
	      idx += 1;
	    }
	    return false;
	  };

	  return typeof Object.keys === 'function' && !hasArgsEnumBug ? _curry1(function keys(obj) {
	    return Object(obj) !== obj ? [] : Object.keys(obj);
	  }) : _curry1(function keys(obj) {
	    if (Object(obj) !== obj) {
	      return [];
	    }
	    var prop, nIdx;
	    var ks = [];
	    var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
	    for (prop in obj) {
	      if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
	        ks[ks.length] = prop;
	      }
	    }
	    if (hasEnumBug) {
	      nIdx = nonEnumerableProps.length - 1;
	      while (nIdx >= 0) {
	        prop = nonEnumerableProps[nIdx];
	        if (_has(prop, obj) && !contains(ks, prop)) {
	          ks[ks.length] = prop;
	        }
	        nIdx -= 1;
	      }
	    }
	    return ks;
	  });
	}();

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	module.exports = isThunk;

	function isThunk(t) {
	    return t && t.type === "Thunk";
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	module.exports = isHook;

	function isHook(hook) {
	  return hook && (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") || typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"));
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var version = __webpack_require__(10);

	module.exports = isVirtualText;

	function isVirtualText(x) {
	    return x && x.type === "VirtualText" && x.version === version;
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _curry = __webpack_require__(3);

	var _curry2 = _interopRequireDefault(_curry);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _curry2.default)(function (builder, handler, eventSource, next) {
	  eventSource(function (value) {
	    return builder(handler, next, value);
	  });
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(1);
	var _equals = __webpack_require__(70);

	/**
	 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
	 * cyclical data structures.
	 *
	 * Dispatches symmetrically to the `equals` methods of both arguments, if
	 * present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.15.0
	 * @category Relation
	 * @sig a -> b -> Boolean
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 * @example
	 *
	 *      R.equals(1, 1); //=> true
	 *      R.equals(1, '1'); //=> false
	 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
	 *
	 *      var a = {}; a.v = a;
	 *      var b = {}; b.v = b;
	 *      R.equals(a, b); //=> true
	 */
	module.exports = _curry2(function equals(a, b) {
	  return _equals(a, b, [], []);
	});

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Tests whether or not an object is an array.
	 *
	 * @private
	 * @param {*} val The object to test.
	 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
	 * @example
	 *
	 *      _isArray([]); //=> true
	 *      _isArray(null); //=> false
	 *      _isArray({}); //=> false
	 */
	module.exports = Array.isArray || function _isArray(val) {
	  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _xwrap = __webpack_require__(85);
	var bind = __webpack_require__(60);
	var isArrayLike = __webpack_require__(15);

	module.exports = function () {
	  function _arrayReduce(xf, acc, list) {
	    var idx = 0;
	    var len = list.length;
	    while (idx < len) {
	      acc = xf['@@transducer/step'](acc, list[idx]);
	      if (acc && acc['@@transducer/reduced']) {
	        acc = acc['@@transducer/value'];
	        break;
	      }
	      idx += 1;
	    }
	    return xf['@@transducer/result'](acc);
	  }

	  function _iterableReduce(xf, acc, iter) {
	    var step = iter.next();
	    while (!step.done) {
	      acc = xf['@@transducer/step'](acc, step.value);
	      if (acc && acc['@@transducer/reduced']) {
	        acc = acc['@@transducer/value'];
	        break;
	      }
	      step = iter.next();
	    }
	    return xf['@@transducer/result'](acc);
	  }

	  function _methodReduce(xf, acc, obj) {
	    return xf['@@transducer/result'](obj.reduce(bind(xf['@@transducer/step'], xf), acc));
	  }

	  var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
	  return function _reduce(fn, acc, list) {
	    if (typeof fn === 'function') {
	      fn = _xwrap(fn);
	    }
	    if (isArrayLike(list)) {
	      return _arrayReduce(fn, acc, list);
	    }
	    if (typeof list.reduce === 'function') {
	      return _methodReduce(fn, acc, list);
	    }
	    if (list[symIterator] != null) {
	      return _iterableReduce(fn, acc, list[symIterator]());
	    }
	    if (typeof list.next === 'function') {
	      return _iterableReduce(fn, acc, list);
	    }
	    throw new TypeError('reduce: list must be array or iterable');
	  };
	}();

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function _reduced(x) {
	  return x && x['@@transducer/reduced'] ? x : {
	    '@@transducer/value': x,
	    '@@transducer/reduced': true
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry1 = __webpack_require__(2);
	var _has = __webpack_require__(12);

	/**
	 * Converts an object into an array of key, value arrays. Only the object's
	 * own properties are used.
	 * Note that the order of the output array is not guaranteed to be consistent
	 * across different JS platforms.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.4.0
	 * @category Object
	 * @sig {String: *} -> [[String,*]]
	 * @param {Object} obj The object to extract from
	 * @return {Array} An array of key, value arrays from the object's own properties.
	 * @see R.fromPairs
	 * @example
	 *
	 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
	 */
	module.exports = _curry1(function toPairs(obj) {
	  var pairs = [];
	  for (var prop in obj) {
	    if (_has(prop, obj)) {
	      pairs[pairs.length] = [prop, obj[prop]];
	    }
	  }
	  return pairs;
	});

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	var nativeIsArray = Array.isArray;
	var toString = Object.prototype.toString;

	module.exports = nativeIsArray || isArray;

	function isArray(obj) {
	    return toString.call(obj) === "[object Array]";
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var topLevel = typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : {};
	var minDoc = __webpack_require__(132);

	if (typeof document !== 'undefined') {
	    module.exports = document;
	} else {
	    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

	    if (!doccy) {
	        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
	    }

	    module.exports = doccy;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	module.exports = function isObject(x) {
		return (typeof x === "undefined" ? "undefined" : _typeof(x)) === "object" && x !== null;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _arity = __webpack_require__(11);
	var _curry1 = __webpack_require__(2);
	var _curry2 = __webpack_require__(1);
	var _curryN = __webpack_require__(69);

	/**
	 * Returns a curried equivalent of the provided function, with the specified
	 * arity. The curried function has two unusual capabilities. First, its
	 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
	 * following are equivalent:
	 *
	 *   - `g(1)(2)(3)`
	 *   - `g(1)(2, 3)`
	 *   - `g(1, 2)(3)`
	 *   - `g(1, 2, 3)`
	 *
	 * Secondly, the special placeholder value `R.__` may be used to specify
	 * "gaps", allowing partial application of any combination of arguments,
	 * regardless of their positions. If `g` is as above and `_` is `R.__`, the
	 * following are equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @func
	 * @memberOf R
	 * @since v0.5.0
	 * @category Function
	 * @sig Number -> (* -> a) -> (* -> a)
	 * @param {Number} length The arity for the returned function.
	 * @param {Function} fn The function to curry.
	 * @return {Function} A new, curried function.
	 * @see R.curry
	 * @example
	 *
	 *      var sumArgs = (...args) => R.sum(args);
	 *
	 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
	 *      var f = curriedAddFourNumbers(1, 2);
	 *      var g = f(3);
	 *      g(4); //=> 10
	 */
	module.exports = _curry2(function curryN(length, fn) {
	  if (length === 1) {
	    return _curry1(fn);
	  }
	  return _arity(length, _curryN(length, [], fn));
	});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(1);
	var _dispatchable = __webpack_require__(7);
	var _filter = __webpack_require__(35);
	var _isObject = __webpack_require__(75);
	var _reduce = __webpack_require__(23);
	var _xfilter = __webpack_require__(82);
	var keys = __webpack_require__(16);

	/**
	 * Takes a predicate and a "filterable", and returns a new filterable of the
	 * same type containing the members of the given filterable which satisfy the
	 * given predicate.
	 *
	 * Dispatches to the `filter` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Filterable f => (a -> Boolean) -> f a -> f a
	 * @param {Function} pred
	 * @param {Array} filterable
	 * @return {Array}
	 * @see R.reject, R.transduce, R.addIndex
	 * @example
	 *
	 *      var isEven = n => n % 2 === 0;
	 *
	 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
	 *
	 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
	 */
	module.exports = _curry2(_dispatchable('filter', _xfilter, function (pred, filterable) {
	  return _isObject(filterable) ? _reduce(function (acc, key) {
	    if (pred(filterable[key])) {
	      acc[key] = filterable[key];
	    }
	    return acc;
	  }, {}, keys(filterable)) :
	  // else
	  _filter(pred, filterable);
	}));

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry1 = __webpack_require__(2);
	var _identity = __webpack_require__(72);

	/**
	 * A function that does nothing but return the parameter supplied to it. Good
	 * as a default or placeholder function.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig a -> a
	 * @param {*} x The value to return.
	 * @return {*} The input value, `x`.
	 * @example
	 *
	 *      R.identity(1); //=> 1
	 *
	 *      var obj = {};
	 *      R.identity(obj) === obj; //=> true
	 */
	module.exports = _curry1(_identity);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _isArray = __webpack_require__(22);
	var _slice = __webpack_require__(14);

	/**
	 * Similar to hasMethod, this checks whether a function has a [methodname]
	 * function. If it isn't an array it will execute that function otherwise it
	 * will default to the ramda implementation.
	 *
	 * @private
	 * @param {Function} fn ramda implemtation
	 * @param {String} methodname property to check for a custom implementation
	 * @return {Object} Whatever the return value of the method is.
	 */
	module.exports = function _checkForMethod(methodname, fn) {
	  return function () {
	    var length = arguments.length;
	    if (length === 0) {
	      return fn();
	    }
	    var obj = arguments[length - 1];
	    return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, _slice(arguments, 0, length - 1));
	  };
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _indexOf = __webpack_require__(73);

	module.exports = function _contains(a, list) {
	  return _indexOf(list, a, 0) >= 0;
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function _filter(fn, list) {
	  var idx = 0;
	  var len = list.length;
	  var result = [];

	  while (idx < len) {
	    if (fn(list[idx])) {
	      result[result.length] = list[idx];
	    }
	    idx += 1;
	  }
	  return result;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(1);

	/**
	 * Returns a function that when supplied an object returns the indicated
	 * property of that object, if it exists.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig s -> {s: a} -> a | Undefined
	 * @param {String} p The property name
	 * @param {Object} obj The object to query
	 * @return {*} The value at `obj.p`.
	 * @example
	 *
	 *      R.prop('x', {x: 100}); //=> 100
	 *      R.prop('x', {}); //=> undefined
	 */
	module.exports = _curry2(function prop(p, obj) {
	  return obj[p];
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry3 = __webpack_require__(4);
	var _reduce = __webpack_require__(23);

	/**
	 * Returns a single item by iterating through the list, successively calling
	 * the iterator function and passing it an accumulator value and the current
	 * value from the array, and then passing the result to the next call.
	 *
	 * The iterator function receives two values: *(acc, value)*. It may use
	 * `R.reduced` to shortcut the iteration.
	 *
	 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
	 * arrays), unlike the native `Array.prototype.reduce` method. For more details
	 * on this behavior, see:
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
	 *
	 * Dispatches to the `reduce` method of the third argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig ((a, b) -> a) -> a -> [b] -> a
	 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
	 *        current element from the array.
	 * @param {*} acc The accumulator value.
	 * @param {Array} list The list to iterate over.
	 * @return {*} The final, accumulated value.
	 * @see R.reduced, R.addIndex
	 * @example
	 *
	 *      var numbers = [1, 2, 3];
	 *      var add = (a, b) => a + b;
	 *
	 *      R.reduce(add, 10, numbers); //=> 16
	 */
	module.exports = _curry3(_reduce);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _checkForMethod = __webpack_require__(33);
	var _curry3 = __webpack_require__(4);

	/**
	 * Returns the elements of the given list or string (or object with a `slice`
	 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
	 *
	 * Dispatches to the `slice` method of the third argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.4
	 * @category List
	 * @sig Number -> Number -> [a] -> [a]
	 * @sig Number -> Number -> String -> String
	 * @param {Number} fromIndex The start index (inclusive).
	 * @param {Number} toIndex The end index (exclusive).
	 * @param {*} list
	 * @return {*}
	 * @example
	 *
	 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
	 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
	 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
	 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
	 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
	 */
	module.exports = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
	  return Array.prototype.slice.call(list, fromIndex, toIndex);
	}));

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var isObject = __webpack_require__(29);
	var isHook = __webpack_require__(18);

	module.exports = applyProperties;

	function applyProperties(node, props, previous) {
	    for (var propName in props) {
	        var propValue = props[propName];

	        if (propValue === undefined) {
	            removeProperty(node, propName, propValue, previous);
	        } else if (isHook(propValue)) {
	            removeProperty(node, propName, propValue, previous);
	            if (propValue.hook) {
	                propValue.hook(node, propName, previous ? previous[propName] : undefined);
	            }
	        } else {
	            if (isObject(propValue)) {
	                patchObject(node, props, previous, propName, propValue);
	            } else {
	                node[propName] = propValue;
	            }
	        }
	    }
	}

	function removeProperty(node, propName, propValue, previous) {
	    if (previous) {
	        var previousValue = previous[propName];

	        if (!isHook(previousValue)) {
	            if (propName === "attributes") {
	                for (var attrName in previousValue) {
	                    node.removeAttribute(attrName);
	                }
	            } else if (propName === "style") {
	                for (var i in previousValue) {
	                    node.style[i] = "";
	                }
	            } else if (typeof previousValue === "string") {
	                node[propName] = "";
	            } else {
	                node[propName] = null;
	            }
	        } else if (previousValue.unhook) {
	            previousValue.unhook(node, propName, propValue);
	        }
	    }
	}

	function patchObject(node, props, previous, propName, propValue) {
	    var previousValue = previous ? previous[propName] : undefined;

	    // Set attributes
	    if (propName === "attributes") {
	        for (var attrName in propValue) {
	            var attrValue = propValue[attrName];

	            if (attrValue === undefined) {
	                node.removeAttribute(attrName);
	            } else {
	                node.setAttribute(attrName, attrValue);
	            }
	        }

	        return;
	    }

	    if (previousValue && isObject(previousValue) && getPrototype(previousValue) !== getPrototype(propValue)) {
	        node[propName] = propValue;
	        return;
	    }

	    if (!isObject(node[propName])) {
	        node[propName] = {};
	    }

	    var replacer = propName === "style" ? "" : undefined;

	    for (var k in propValue) {
	        var value = propValue[k];
	        node[propName][k] = value === undefined ? replacer : value;
	    }
	}

	function getPrototype(value) {
	    if (Object.getPrototypeOf) {
	        return Object.getPrototypeOf(value);
	    } else if (value.__proto__) {
	        return value.__proto__;
	    } else if (value.constructor) {
	        return value.constructor.prototype;
	    }
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var document = __webpack_require__(28);

	var applyProperties = __webpack_require__(39);

	var isVNode = __webpack_require__(9);
	var isVText = __webpack_require__(19);
	var isWidget = __webpack_require__(5);
	var handleThunk = __webpack_require__(41);

	module.exports = createElement;

	function createElement(vnode, opts) {
	    var doc = opts ? opts.document || document : document;
	    var warn = opts ? opts.warn : null;

	    vnode = handleThunk(vnode).a;

	    if (isWidget(vnode)) {
	        return vnode.init();
	    } else if (isVText(vnode)) {
	        return doc.createTextNode(vnode.text);
	    } else if (!isVNode(vnode)) {
	        if (warn) {
	            warn("Item is not a valid virtual dom node", vnode);
	        }
	        return null;
	    }

	    var node = vnode.namespace === null ? doc.createElement(vnode.tagName) : doc.createElementNS(vnode.namespace, vnode.tagName);

	    var props = vnode.properties;
	    applyProperties(node, props);

	    var children = vnode.children;

	    for (var i = 0; i < children.length; i++) {
	        var childNode = createElement(children[i], opts);
	        if (childNode) {
	            node.appendChild(childNode);
	        }
	    }

	    return node;
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var isVNode = __webpack_require__(9);
	var isVText = __webpack_require__(19);
	var isWidget = __webpack_require__(5);
	var isThunk = __webpack_require__(17);

	module.exports = handleThunk;

	function handleThunk(a, b) {
	    var renderedA = a;
	    var renderedB = b;

	    if (isThunk(b)) {
	        renderedB = renderThunk(b, a);
	    }

	    if (isThunk(a)) {
	        renderedA = renderThunk(a, null);
	    }

	    return {
	        a: renderedA,
	        b: renderedB
	    };
	}

	function renderThunk(thunk, previous) {
	    var renderedThunk = thunk.vnode;

	    if (!renderedThunk) {
	        renderedThunk = thunk.vnode = thunk.render(previous);
	    }

	    if (!(isVNode(renderedThunk) || isVText(renderedThunk) || isWidget(renderedThunk))) {
	        throw new Error("thunk did not return a valid node");
	    }

	    return renderedThunk;
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var version = __webpack_require__(10);

	VirtualPatch.NONE = 0;
	VirtualPatch.VTEXT = 1;
	VirtualPatch.VNODE = 2;
	VirtualPatch.WIDGET = 3;
	VirtualPatch.PROPS = 4;
	VirtualPatch.ORDER = 5;
	VirtualPatch.INSERT = 6;
	VirtualPatch.REMOVE = 7;
	VirtualPatch.THUNK = 8;

	module.exports = VirtualPatch;

	function VirtualPatch(type, vNode, patch) {
	    this.type = Number(type);
	    this.vNode = vNode;
	    this.patch = patch;
	}

	VirtualPatch.prototype.version = version;
	VirtualPatch.prototype.type = "VirtualPatch";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _build = __webpack_require__(20);

	var _build2 = _interopRequireDefault(_build);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _build2.default)(function (constant, next) {
	  next(constant);
	}); /*
	     * `always` emits a single value for every value it receives. It's also known as
	     * `const` in the functional world.
	     *
	     * ```
	     * always(1)
	     * ```
	     * changes 1234567890
	     * emits   1111111111
	     *
	     */

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createElement = __webpack_require__(105);

	var _createElement2 = _interopRequireDefault(_createElement);

	var _diff = __webpack_require__(106);

	var _diff2 = _interopRequireDefault(_diff);

	var _patch = __webpack_require__(108);

	var _patch2 = _interopRequireDefault(_patch);

	var _jsonToVirtualDOM = __webpack_require__(48);

	var _jsonToVirtualDOM2 = _interopRequireDefault(_jsonToVirtualDOM);

	var _History = __webpack_require__(45);

	var _History2 = _interopRequireDefault(_History);

	var _map = __webpack_require__(6);

	var _map2 = _interopRequireDefault(_map);

	var _isArrayLike = __webpack_require__(15);

	var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

	var _toPairs = __webpack_require__(25);

	var _toPairs2 = _interopRequireDefault(_toPairs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultReducer = function defaultReducer(_, _ref) {
	  var payload = _ref.payload;
	  return payload;
	};
	var defaultStorage = { get: function get() {
	    return undefined;
	  }, set: function set() {} };

	/**
	 * Creates an Act application.
	 *
	 * @name main
	 * @kind function
	 * @memberof @act/main
	 * @param {string|json|function} view
	 * @param {object} params
	 */

	var main = function main(view) {
	  var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  var _ref2$historyClass = _ref2.historyClass;
	  var historyClass = _ref2$historyClass === undefined ? _History2.default : _ref2$historyClass;
	  var model = _ref2.model;
	  var _ref2$node = _ref2.node;
	  var node = _ref2$node === undefined ? document.body : _ref2$node;
	  var _ref2$reducer = _ref2.reducer;
	  var reducer = _ref2$reducer === undefined ? defaultReducer : _ref2$reducer;
	  var _ref2$sideEffects = _ref2.sideEffects;
	  var sideEffects = _ref2$sideEffects === undefined ? [] : _ref2$sideEffects;
	  var _ref2$storage = _ref2.storage;
	  var storage = _ref2$storage === undefined ? defaultStorage : _ref2$storage;
	  var _ref2$subscriptions = _ref2.subscriptions;
	  var subscriptions = _ref2$subscriptions === undefined ? {} : _ref2$subscriptions;

	  var previousTree = void 0;
	  var rootNode = void 0;

	  var render = function render(view, state) {
	    var json = typeof view === 'function' ? view(state, history) : view; // user may want to perform side-effects only

	    var tree = (0, _jsonToVirtualDOM2.default)(json, history);

	    previousTree ? rootNode = (0, _patch2.default)(rootNode, (0, _diff2.default)(previousTree, tree)) : node.insertBefore(rootNode = (0, _createElement2.default)(tree), node.firstChild);

	    return previousTree = tree;
	  };

	  var initialState = storage.get() || typeof model !== 'undefined' ? model : reducer(undefined, { type: '__probe' });

	  var rerender = function rerender(state) {
	    var dom = render(view, state);
	    storage.set(state);
	    return dom;
	  };

	  var history = new historyClass(initialState, reducer, rerender);

	  var dom = render(view, initialState);

	  (0, _map2.default)(function (_ref3) {
	    var _ref4 = _slicedToArray(_ref3, 2);

	    var typeOrAction = _ref4[0];
	    var subscription = _ref4[1];

	    var action = typeof typeOrAction === 'string' ? function (history, payload) {
	      return history.push({ type: typeOrAction, payload: payload });
	    } : typeOrAction;

	    subscription(function (payload) {
	      return action(history, payload);
	    });
	  }, (0, _isArrayLike2.default)(subscriptions) ? subscriptions : (0, _toPairs2.default)(subscriptions));

	  return { dom: dom, history: history };
	};

	exports.default = main;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reduce = __webpack_require__(37);

	var _reduce2 = _interopRequireDefault(_reduce);

	var _splitAt = __webpack_require__(99);

	var _splitAt2 = _interopRequireDefault(_splitAt);

	var _delay = __webpack_require__(46);

	var _delay2 = _interopRequireDefault(_delay);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var History = function () {
	  function History(state, reducer, rerender) {
	    var _this = this;

	    _classCallCheck(this, History);

	    this.reduce = (0, _reduce2.default)(reducer);
	    this.state = state;
	    this.delta = [];
	    this.rerender = function () {
	      return rerender(_this.state);
	    };
	  }

	  _createClass(History, [{
	    key: 'subscribe',
	    value: function subscribe() {
	      var _this2 = this;

	      return function (subscription) {
	        _this2.subscription = subscription;
	      };
	    }
	  }, {
	    key: 'concat',
	    value: function concat() {
	      this.state = this.reduce(this.state, this.delta);
	      var dom = this.rerender();
	      this.subscription && this.subscription(this.timeline);

	      this.delta = [];
	      return dom;
	    }
	  }, {
	    key: 'push',
	    value: function push(action) {
	      var _this3 = this;

	      this.delta.push(action);
	      return (0, _delay2.default)(function () {
	        return _this3.concat();
	      });
	    }
	  }]);

	  return History;
	}();

	exports.default = History;

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* globals cancelAnimationFrame requestAnimationFrame */
	var animationFrameId = void 0;

	// TODO: think on how to use fromAnimationFrame
	var delay = function delay(fn) {
	  if (typeof window === 'undefined') {
	    return fn();
	  }

	  if (animationFrameId) {
	    cancelAnimationFrame(animationFrameId);
	  }

	  animationFrameId = requestAnimationFrame(fn);
	};

	exports.default = delay;

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// A list of DOM events, split by use-case.

	var form = exports.form = ['reset', 'submit'];

	var input = exports.input = ['blur', 'change',
	// 'contextmenu', // not really supported
	'focus', 'input', 'invalid', 'search', 'select'];

	var keyboard = exports.keyboard = ['keydown', 'keypress', 'keyup'];

	var mouse = exports.mouse = ['click', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'scroll', 'wheel'];

	// TODO: create some example to understand the use case
	var clipboard = exports.clipboard = ['copy', 'cut', 'paste'];

	var media = exports.media = ['abort', 'canplay', 'canplaythrough', 'cuechange', 'durationchange', 'emptied', 'ended', 'error', 'loadeddata', 'loadedmetadata', 'loadstart', 'pause', 'play', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting'];

	var misc = exports.misc = ['show', // contextmenu
	'toggle' // <details> tag
	];

	exports.default = [].concat(form, input, keyboard, mouse, clipboard, media, misc);

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _h = __webpack_require__(107);

	var _h2 = _interopRequireDefault(_h);

	var _isArrayLike = __webpack_require__(15);

	var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

	var _map = __webpack_require__(6);

	var _map2 = _interopRequireDefault(_map);

	var _classLists = __webpack_require__(51);

	var _classLists2 = _interopRequireDefault(_classLists);

	var _signalHandler = __webpack_require__(49);

	var _signalHandler2 = _interopRequireDefault(_signalHandler);

	var _events = __webpack_require__(47);

	var _events2 = _interopRequireDefault(_events);

	var _intersection = __webpack_require__(86);

	var _intersection2 = _interopRequireDefault(_intersection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var isAts = function isAts(maybeAts) {
	  return (typeof maybeAts === 'undefined' ? 'undefined' : _typeof(maybeAts)) === 'object' && maybeAts !== null && !(0, _isArrayLike2.default)(maybeAts);
	};

	var processChildren = function processChildren(el, history, tag, children) {
	  var namespaces = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];

	  // To support the case where user does
	  // ```
	  // condition && ['div', ...]
	  // ```
	  // and `condition` is false
	  if (el === false) {
	    return [];
	  }

	  if ((0, _isArrayLike2.default)(el)) {
	    return jsonToVirtualDOM(el, history, namespaces);
	  }

	  var newChildren = void 0;
	  if (typeof el === 'function') {
	    var fn = el;
	    try {
	      newChildren = fn();
	      if (el.namespace) {
	        namespaces = [].concat(_toConsumableArray(namespaces), [el.namespace]);
	      }
	      return jsonToVirtualDOM(newChildren, history, namespaces);
	    } catch (e) {
	      var errorMessage = renderErrorMessage(tag, newChildren, e, fn);

	      //      if (globalErrorHandler) {
	      //        console.log(errorMessage)
	      //        console.trace()
	      //
	      //       return jsonToVirtualDOM(globalErrorHandler, history)
	      //     } else {
	      throw errorMessage;
	      //     }
	    }
	  }

	  return String(el);
	};

	var jsonToVirtualDOM = function jsonToVirtualDOM(json, history, namespaces) {
	  if (typeof json === 'string') {
	    return jsonToVirtualDOM(['span', json], history);
	  }

	  var _json = _slicedToArray(json, 3);

	  var tag = _json[0];
	  var maybeAtsOrChildren = _json[1];
	  var maybeChildren = _json[2];

	  var ats = {};
	  var children = [];

	  if (typeof maybeAtsOrChildren !== 'undefined') {
	    isAts(maybeAtsOrChildren) ? ats = maybeAtsOrChildren : children = maybeAtsOrChildren;
	  }

	  if (typeof maybeChildren !== 'undefined') {
	    children = maybeChildren;
	  }

	  if ((0, _isArrayLike2.default)(children)) {
	    children = (0, _map2.default)(function (el) {
	      return processChildren(el, history, tag, children, namespaces);
	    }, children);
	  } else if (typeof children === 'function') {
	    if (children.namespace) {
	      console.log('TODO namespace when function is single children');
	    }
	    var fn = children;
	    try {
	      children = (0, _map2.default)(function (el) {
	        return processChildren(el, history, tag, children, namespaces);
	      }, children());
	    } catch (e) {
	      var errorMessage = renderErrorMessage(tag, children, e, fn);
	      throw errorMessage;
	      //      if (globalErrorHandler) {
	      //        console.trace()
	      //        console.log(errorMessage)
	      //       children = jsonToVirtualDOM(globalErrorHandler, history, globalErrorHandler)
	      //    } else {
	      //    throw errorMessage
	      // }
	    }
	  } else if (children === false) {
	      children = undefined;
	    }

	  if (ats['class'] && typeof ats['class'] !== 'string') {
	    ats['class'] = _classLists2.default.apply(undefined, _toConsumableArray(ats['class']));
	  }

	  injectEventHandlers(ats, history, namespaces);
	  attributeToProperty(ats);

	  return (0, _h2.default)(tag, ats, children);
	};

	function attributeToProperty(ats) {
	  var transformableAts = (0, _intersection2.default)(Object.keys(ats), Object.keys(transform));

	  (0, _map2.default)(function (at) {
	    ats[transform[at]] = ats[at];
	    delete ats[at];
	  }, transformableAts);
	}

	function injectEventHandlers(ats, history, namespaces) {
	  var eventsInAts = (0, _intersection2.default)(Object.keys(ats), _events2.default);

	  (0, _map2.default)(function (event) {
	    ats[event + '-handler'] = (0, _signalHandler2.default)(ats[event], history, namespaces);
	  }, eventsInAts);
	}

	var renderErrorMessage = function renderErrorMessage(tag, children, e, fn) {
	  var error = e.toString();
	  if (error.match(/\[ACT\]/)) {
	    return '\n' + error + '\n\nThen the error propagated to:\n' + _e(tag, children, e, fn) + '\n';
	  } else {
	    return _e(tag, children, e, fn);
	  }
	};

	var _e = function _e(tag, children, e, fn) {
	  return '\n    [ACT] =========\n      There was an error inside \'' + tag + '\', when rendering:\n      ' + fn + '\n      ---\n      Children: ' + JSON.stringify(children) + '.\n      ---\n      Error message: ' + e.toString();
	};

	// from https://github.com/wayfair/tungstenjs/blob/42535b17e4894e866abf5711be2266458bc4d508/src/template/template_to_vdom.js#L118-L140
	var transform = {
	  // transformed name
	  'class': 'className',
	  'for': 'htmlFor'
	  // 'http-equiv': 'httpEquiv',
	  // case specificity
	  // 'accesskey': 'accessKey',
	  // 'autocomplete': 'autoComplete',
	  // 'autoplay': 'autoPlay',
	  // 'colspan': 'colSpan',
	  // 'contenteditable': 'contentEditable',
	  // 'contextmenu': 'contextMenu',
	  // 'enctype': 'encType',
	  // 'formnovalidate': 'formNoValidate',
	  // 'hreflang': 'hrefLang',
	  // 'novalidate': 'noValidate',
	  // 'readonly': 'readOnly',
	  // 'rowspan': 'rowSpan',
	  // 'spellcheck ': 'spellCheck',
	  // 'srcdoc': 'srcDoc',
	  // 'srcset': 'srcSet',
	  // 'tabindex': 'tabIndex'
	};

	exports.default = jsonToVirtualDOM;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _always = __webpack_require__(43);

	var _always2 = _interopRequireDefault(_always);

	var _fromEvent = __webpack_require__(130);

	var _fromEvent2 = _interopRequireDefault(_fromEvent);

	var _identity = __webpack_require__(127);

	var _identity2 = _interopRequireDefault(_identity);

	var _isArrayLike = __webpack_require__(15);

	var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

	var _map = __webpack_require__(6);

	var _map2 = _interopRequireDefault(_map);

	var _toPairs = __webpack_require__(25);

	var _toPairs2 = _interopRequireDefault(_toPairs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SignalHandler = function () {
	  function SignalHandler(events, history) {
	    var namespaces = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

	    _classCallCheck(this, SignalHandler);

	    if (typeof events === 'function' || typeof events === 'string') {
	      this.events = [[events, _identity2.default]];
	    } else if ((0, _isArrayLike2.default)(events)) {
	      this.events = (0, _isArrayLike2.default)(events[0]) ? events : [events];
	    } else if ((typeof events === 'undefined' ? 'undefined' : _typeof(events)) === 'object') {
	      this.events = (0, _toPairs2.default)(events);
	    } else {
	      this.events = [];
	    }

	    this.history = history;
	    this.namespaces = namespaces;
	    this.processes = {};
	    this.sources = {};
	  }

	  _createClass(SignalHandler, [{
	    key: 'hook',
	    value: function hook(node, propertyName) {
	      var _this = this;

	      var prop = propertyName.split('-')[0];
	      var index = 0;
	      (0, _map2.default)(function (_ref) {
	        var _ref2 = _slicedToArray(_ref, 2);

	        var typeOrAction = _ref2[0];
	        var processOrValue = _ref2[1];

	        var _ref3 = typeof typeOrAction === 'string' ? [typeOrAction, function (history, payload) {
	          return _this.history.push({ type: [].concat(_toConsumableArray(_this.namespaces), [type]).join('.'), payload: payload });
	        }] : [prop + '-' + ++index, typeOrAction];

	        var _ref4 = _slicedToArray(_ref3, 2);

	        var type = _ref4[0];
	        var action = _ref4[1];


	        if (typeof processOrValue === 'function') {
	          _this.processes[type] = processOrValue;
	        } else {
	          // TODO we need a nice way to name lambdas to debug properly :/
	          // const a = pipe(always(processOrValue))
	          // a.cname = 'foooo'

	          _this.processes[type] = (0, _always2.default)(processOrValue);
	        }

	        if (node['__act'] && node['__act'][prop]) {
	          if (node['__act'][prop].processes[type] === _this.processes[type]) {
	            return;
	          } else {
	            node['__act'][prop].sources[type].stop();
	          }
	        }

	        _this.sources[type] = (0, _fromEvent2.default)(node, prop);

	        _this.processes[type](_this.sources[type].start())(function (payload) {
	          action(_this.history, payload);
	        });
	      }, this.events);

	      // TODO: Think of a better struct for _this_ for better debugging
	      // cause now it's sources[type], processes[type] ...
	      // It may be better to have type.sources, type.processes ...
	      node['__act'] = node['__act'] ? _extends({}, node['__act'], _defineProperty({}, prop, this)) : _defineProperty({}, prop, this);
	    }
	  }]);

	  return SignalHandler;
	}();

	exports.default = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return new (Function.prototype.bind.apply(SignalHandler, [null].concat(args)))();
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";

	/*!
	 * Cross-Browser Split 1.1.1
	 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
	 * Available under the MIT License
	 * ECMAScript compliant, uniform cross-browser split method
	 */

	/**
	 * Splits a string into an array of strings using a regex or string separator. Matches of the
	 * separator are not included in the result array. However, if `separator` is a regex that contains
	 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
	 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
	 * cross-browser.
	 * @param {String} str String to split.
	 * @param {RegExp|String} separator Regex or string to use for separating the string.
	 * @param {Number} [limit] Maximum number of items to include in the result array.
	 * @returns {Array} Array of substrings.
	 * @example
	 *
	 * // Basic use
	 * split('a b c d', ' ');
	 * // -> ['a', 'b', 'c', 'd']
	 *
	 * // With limit
	 * split('a b c d', ' ', 2);
	 * // -> ['a', 'b']
	 *
	 * // Backreferences in result array
	 * split('..word1 word2..', /([a-z]+)(\d+)/i);
	 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
	 */
	module.exports = function split(undef) {

	  var nativeSplit = String.prototype.split,
	      compliantExecNpcg = /()??/.exec("")[1] === undef,

	  // NPCG: nonparticipating capturing group
	  self;

	  self = function self(str, separator, limit) {
	    // If `separator` is not a regex, use `nativeSplit`
	    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
	      return nativeSplit.call(str, separator, limit);
	    }
	    var output = [],
	        flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + ( // Proposed for ES6
	    separator.sticky ? "y" : ""),

	    // Firefox 3+
	    lastLastIndex = 0,

	    // Make `global` and avoid `lastIndex` issues by working with a copy
	    separator = new RegExp(separator.source, flags + "g"),
	        separator2,
	        match,
	        lastIndex,
	        lastLength;
	    str += ""; // Type-convert
	    if (!compliantExecNpcg) {
	      // Doesn't need flags gy, but they don't hurt
	      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
	    }
	    /* Values for `limit`, per the spec:
	     * If undefined: 4294967295 // Math.pow(2, 32) - 1
	     * If 0, Infinity, or NaN: 0
	     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
	     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
	     * If other: Type-convert, then use the above rules
	     */
	    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
	    limit >>> 0; // ToUint32(limit)
	    while (match = separator.exec(str)) {
	      // `separator.lastIndex` is not reliable cross-browser
	      lastIndex = match.index + match[0].length;
	      if (lastIndex > lastLastIndex) {
	        output.push(str.slice(lastLastIndex, match.index));
	        // Fix browsers whose `exec` methods don't consistently return `undefined` for
	        // nonparticipating capturing groups
	        if (!compliantExecNpcg && match.length > 1) {
	          match[0].replace(separator2, function () {
	            for (var i = 1; i < arguments.length - 2; i++) {
	              if (arguments[i] === undef) {
	                match[i] = undef;
	              }
	            }
	          });
	        }
	        if (match.length > 1 && match.index < str.length) {
	          Array.prototype.push.apply(output, match.slice(1));
	        }
	        lastLength = match[0].length;
	        lastLastIndex = lastIndex;
	        if (output.length >= limit) {
	          break;
	        }
	      }
	      if (separator.lastIndex === match.index) {
	        separator.lastIndex++; // Avoid an infinite loop
	      }
	    }
	    if (lastLastIndex === str.length) {
	      if (lastLength || !separator.test("")) {
	        output.push("");
	      }
	    } else {
	      output.push(str.slice(lastLastIndex));
	    }
	    return output.length > limit ? output.slice(0, limit) : output;
	  };

	  return self;
	}();

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/* global define */

	(function () {
	  'use strict';

	  function classLists() {
	    var classes = [];
	    var module = arguments[0].constructor === Object ? arguments[0] : null;

	    var i = 0;
	    while (i < arguments.length) {
	      var arg = arguments[i++];
	      if (!arg) continue;

	      if (typeof arg === 'string') {
	        classes.push(module && module[arg] || arg);
	      } else if (Array.isArray(arg) && arg.length <= 3) {
	        arg[0] ? typeof arg[1] === 'string' && classes.push(module && module[arg[1]] || arg[1]) : typeof arg[2] === 'string' && classes.push(module && module[arg[2]] || arg[2]);
	      }
	    }

	    return classes.join(' ');
	  }

	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = classLists;
	  } else if ("function" === 'function' && _typeof(__webpack_require__(27)) === 'object' && __webpack_require__(27)) {
	    // register as 'class-lists', consistent with npm package name
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return classLists;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    window.classLists = classLists;
	  }
	})();

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var OneVersionConstraint = __webpack_require__(54);

	var MY_VERSION = '7';
	OneVersionConstraint('ev-store', MY_VERSION);

	var hashKey = '__EV_STORE_KEY@' + MY_VERSION;

	module.exports = EvStore;

	function EvStore(elem) {
	    var hash = elem[hashKey];

	    if (!hash) {
	        hash = elem[hashKey] = {};
	    }

	    return hash;
	}

/***/ },
/* 53 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	/*global window, global*/

	var root = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

	module.exports = Individual;

	function Individual(key, value) {
	    if (key in root) {
	        return root[key];
	    }

	    root[key] = value;

	    return value;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Individual = __webpack_require__(53);

	module.exports = OneVersion;

	function OneVersion(moduleName, version, defaultValue) {
	    var key = '__INDIVIDUAL_ONE_VERSION_' + moduleName;
	    var enforceKey = key + '_ENFORCE_SINGLETON';

	    var versionValue = Individual(enforceKey, version);

	    if (versionValue !== version) {
	        throw new Error('Can only have one copy of ' + moduleName + '.\n' + 'You already have version ' + versionValue + ' installed.\n' + 'This means you cannot install version ' + version);
	    }

	    return Individual(key, defaultValue);
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(1);

	/**
	 * Adds two values.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Math
	 * @sig Number -> Number -> Number
	 * @param {Number} a
	 * @param {Number} b
	 * @return {Number}
	 * @see R.subtract
	 * @example
	 *
	 *      R.add(2, 3);       //=>  5
	 *      R.add(7)(10);      //=> 17
	 */
	module.exports = _curry2(function add(a, b) {
	  return Number(a) + Number(b);
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(1);
	var _dispatchable = __webpack_require__(7);
	var _xall = __webpack_require__(80);

	/**
	 * Returns `true` if all elements of the list match the predicate, `false` if
	 * there are any that don't.
	 *
	 * Dispatches to the `all` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> Boolean
	 * @param {Function} fn The predicate function.
	 * @param {Array} list The array to consider.
	 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
	 *         otherwise.
	 * @see R.any, R.none, R.transduce
	 * @example
	 *
	 *      var lessThan2 = R.flip(R.lt)(2);
	 *      var lessThan3 = R.flip(R.lt)(3);
	 *      R.all(lessThan2)([1, 2]); //=> false
	 *      R.all(lessThan3)([1, 2]); //=> true
	 */
	module.exports = _curry2(_dispatchable('all', _xall, function all(fn, list) {
	  var idx = 0;
	  while (idx < list.length) {
	    if (!fn(list[idx])) {
	      return false;
	    }
	    idx += 1;
	  }
	  return true;
	}));

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry1 = __webpack_require__(2);

	/**
	 * Returns a function that always returns the given value. Note that for
	 * non-primitives the value returned is a reference to the original value.
	 *
	 * This function is known as `const`, `constant`, or `K` (for K combinator) in
	 * other languages and libraries.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig a -> (* -> a)
	 * @param {*} val The value to wrap in a function
	 * @return {Function} A Function :: * -> val.
	 * @example
	 *
	 *      var t = R.always('Tee');
	 *      t(); //=> 'Tee'
	 */
	module.exports = _curry1(function always(val) {
	  return function () {
	    return val;
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(1);
	var _dispatchable = __webpack_require__(7);
	var _xany = __webpack_require__(81);

	/**
	 * Returns `true` if at least one of elements of the list match the predicate,
	 * `false` otherwise.
	 *
	 * Dispatches to the `any` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> Boolean
	 * @param {Function} fn The predicate function.
	 * @param {Array} list The array to consider.
	 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
	 *         otherwise.
	 * @see R.all, R.none, R.transduce
	 * @example
	 *
	 *      var lessThan0 = R.flip(R.lt)(0);
	 *      var lessThan2 = R.flip(R.lt)(2);
	 *      R.any(lessThan0)([1, 2]); //=> false
	 *      R.any(lessThan2)([1, 2]); //=> true
	 */
	module.exports = _curry2(_dispatchable('any', _xany, function any(fn, list) {
	  var idx = 0;
	  while (idx < list.length) {
	    if (fn(list[idx])) {
	      return true;
	    }
	    idx += 1;
	  }
	  return false;
	}));

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry3 = __webpack_require__(4);

	/**
	 * Makes a shallow clone of an object, setting or overriding the specified
	 * property with the given value. Note that this copies and flattens prototype
	 * properties onto the new object as well. All non-primitive properties are
	 * copied by reference.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Object
	 * @sig String -> a -> {k: v} -> {k: v}
	 * @param {String} prop the property name to set
	 * @param {*} val the new value
	 * @param {Object} obj the object to clone
	 * @return {Object} a new object similar to the original except for the specified property.
	 * @see R.dissoc
	 * @example
	 *
	 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
	 */
	module.exports = _curry3(function assoc(prop, val, obj) {
	  var result = {};
	  for (var p in obj) {
	    result[p] = obj[p];
	  }
	  result[prop] = val;
	  return result;
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _arity = __webpack_require__(11);
	var _curry2 = __webpack_require__(1);

	/**
	 * Creates a function that is bound to a context.
	 * Note: `R.bind` does not provide the additional argument-binding capabilities of
	 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
	 *
	 * @func
	 * @memberOf R
	 * @since v0.6.0
	 * @category Function
	 * @category Object
	 * @sig (* -> *) -> {*} -> (* -> *)
	 * @param {Function} fn The function to bind to context
	 * @param {Object} thisObj The context to bind `fn` to
	 * @return {Function} A function that will execute in the context of `thisObj`.
	 * @see R.partial
	 */
	module.exports = _curry2(function bind(fn, thisObj) {
	  return _arity(fn.length, function () {
	    return fn.apply(thisObj, arguments);
	  });
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _slice = __webpack_require__(14);
	var curry = __webpack_require__(3);

	/**
	 * Returns the result of calling its first argument with the remaining
	 * arguments. This is occasionally useful as a converging function for
	 * `R.converge`: the left branch can produce a function while the right branch
	 * produces a value to be passed to that function as an argument.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.9.0
	 * @category Function
	 * @sig (*... -> a),*... -> a
	 * @param {Function} fn The function to apply to the remaining arguments.
	 * @param {...*} args Any number of positional arguments.
	 * @return {*}
	 * @see R.apply
	 * @example
	 *
	 *      var indentN = R.pipe(R.times(R.always(' ')),
	 *                           R.join(''),
	 *                           R.replace(/^(?!$)/gm));
	 *
	 *      var format = R.converge(R.call, [
	 *                                  R.pipe(R.prop('indent'), indentN),
	 *                                  R.prop('value')
	 *                              ]);
	 *
	 *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
	 */
	module.exports = curry(function call(fn) {
	  return fn.apply(this, _slice(arguments, 1));
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(1);
	var _dispatchable = __webpack_require__(7);
	var _xfind = __webpack_require__(83);

	/**
	 * Returns the first element of the list which matches the predicate, or
	 * `undefined` if no element matches.
	 *
	 * Dispatches to the `find` method of the second argument, if present.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig (a -> Boolean) -> [a] -> a | undefined
	 * @param {Function} fn The predicate function used to determine if the element is the
	 *        desired one.
	 * @param {Array} list The array to consider.
	 * @return {Object} The element found, or `undefined`.
	 * @see R.transduce
	 * @example
	 *
	 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
	 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
	 *      R.find(R.propEq('a', 4))(xs); //=> undefined
	 */
	module.exports = _curry2(_dispatchable('find', _xfind, function find(fn, list) {
	  var idx = 0;
	  var len = list.length;
	  while (idx < len) {
	    if (fn(list[idx])) {
	      return list[idx];
	    }
	    idx += 1;
	  }
	}));

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry1 = __webpack_require__(2);
	var _slice = __webpack_require__(14);
	var curry = __webpack_require__(3);

	/**
	 * Returns a new function much like the supplied one, except that the first two
	 * arguments' order is reversed.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (a -> b -> c -> ... -> z) -> (b -> a -> c -> ... -> z)
	 * @param {Function} fn The function to invoke with its first two parameters reversed.
	 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
	 * @example
	 *
	 *      var mergeThree = (a, b, c) => [].concat(a, b, c);
	 *
	 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
	 *
	 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
	 */
	module.exports = _curry1(function flip(fn) {
	  return curry(function (a, b) {
	    var args = _slice(arguments);
	    args[0] = b;
	    args[1] = a;
	    return fn.apply(this, args);
	  });
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nth = __webpack_require__(91);

	/**
	 * Returns the first element of the given list or string. In some libraries
	 * this function is named `first`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> a | Undefined
	 * @sig String -> String
	 * @param {Array|String} list
	 * @return {*}
	 * @see R.tail, R.init, R.last
	 * @example
	 *
	 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
	 *      R.head([]); //=> undefined
	 *
	 *      R.head('abc'); //=> 'a'
	 *      R.head(''); //=> ''
	 */
	module.exports = nth(0);

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(1);

	/**
	 * Returns true if its arguments are identical, false otherwise. Values are
	 * identical if they reference the same memory. `NaN` is identical to `NaN`;
	 * `0` and `-0` are not identical.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.15.0
	 * @category Relation
	 * @sig a -> a -> Boolean
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 * @example
	 *
	 *      var o = {};
	 *      R.identical(o, o); //=> true
	 *      R.identical(1, 1); //=> true
	 *      R.identical(1, '1'); //=> false
	 *      R.identical([], []); //=> false
	 *      R.identical(0, -0); //=> false
	 *      R.identical(NaN, NaN); //=> true
	 */
	module.exports = _curry2(function identical(a, b) {
	  // SameValue algorithm
	  if (a === b) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return a !== 0 || 1 / a === 1 / b;
	  } else {
	    // Step 6.a: NaN == NaN
	    return a !== a && b !== b;
	  }
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _contains = __webpack_require__(34);

	// A simple Set type that honours R.equals semantics
	module.exports = function () {
	  function _Set() {
	    /* globals Set */
	    this._nativeSet = typeof Set === 'function' ? new Set() : null;
	    this._items = {};
	  }

	  _Set.prototype.add = function (item) {
	    return hasOrAdd(item, true, this);
	  };

	  _Set.prototype.has = function (item) {
	    return hasOrAdd(item, false, this);
	  };

	  /**
	   * Combines the logic for checking whether an item is a member of the set and
	   * for adding a new item to the set.
	   *
	   * @param item       The item to check or add to the Set instance.
	   * @param shouldAdd  If true, the item will be added to the set if it doesn't
	   *                   already exist.
	   * @param set        The set instance to check or add to.
	   * @return {boolean} When shouldAdd is true, this will return true when a new
	   *                   item was added otherwise false. When shouldAdd is false,
	   *                   this will return true if the item already exists, otherwise
	   *                   false.
	   */
	  function hasOrAdd(item, shouldAdd, set) {
	    var type = typeof item === 'undefined' ? 'undefined' : _typeof(item);
	    var prevSize, newSize;
	    switch (type) {
	      case 'string':
	      case 'number':
	        // distinguish between +0 and -0
	        if (item === 0 && !set._items['-0'] && 1 / item === -Infinity) {
	          if (shouldAdd) {
	            set._items['-0'] = true;
	          }
	          return shouldAdd;
	        }
	        // these types can all utilise Set
	        if (set._nativeSet !== null) {
	          if (shouldAdd) {
	            prevSize = set._nativeSet.size;
	            set._nativeSet.add(item);
	            newSize = set._nativeSet.size;
	            return newSize > prevSize;
	          } else {
	            return set._nativeSet.has(item);
	          }
	        } else {
	          if (!(type in set._items)) {
	            if (shouldAdd) {
	              set._items[type] = {};
	              set._items[type][item] = true;
	            }
	            return shouldAdd;
	          } else if (item in set._items[type]) {
	            return !shouldAdd;
	          } else {
	            if (shouldAdd) {
	              set._items[type][item] = true;
	            }
	            return shouldAdd;
	          }
	        }

	      case 'boolean':
	        // set._items['boolean'] holds a two element array
	        // representing [ falseExists, trueExists ]
	        if (type in set._items) {
	          var bIdx = item ? 1 : 0;
	          if (set._items[type][bIdx]) {
	            return !shouldAdd;
	          } else {
	            if (shouldAdd) {
	              set._items[type][bIdx] = true;
	            }
	            return shouldAdd;
	          }
	        } else {
	          if (shouldAdd) {
	            set._items[type] = item ? [false, true] : [true, false];
	          }
	          return shouldAdd;
	        }

	      case 'function':
	        // compare functions for reference equality
	        if (set._nativeSet !== null) {
	          if (shouldAdd) {
	            prevSize = set._nativeSet.size;
	            set._nativeSet.add(item);
	            newSize = set._nativeSet.size;
	            return newSize > prevSize;
	          } else {
	            return set._nativeSet.has(item);
	          }
	        } else {
	          if (!(type in set._items)) {
	            if (shouldAdd) {
	              set._items[type] = [item];
	            }
	            return shouldAdd;
	          }
	          if (!_contains(item, set._items[type])) {
	            if (shouldAdd) {
	              set._items[type].push(item);
	            }
	            return shouldAdd;
	          }
	        }
	        return !shouldAdd;

	      case 'undefined':
	        if (set._items[type]) {
	          return !shouldAdd;
	        } else {
	          if (shouldAdd) {
	            set._items[type] = true;
	          }
	          return shouldAdd;
	        }

	      case 'object':
	        if (item === null) {
	          if (!set._items['null']) {
	            if (shouldAdd) {
	              set._items['null'] = true;
	            }
	            return shouldAdd;
	          }
	          return !shouldAdd;
	        }
	      /* falls through */
	      default:
	        // reduce the search size of heterogeneous sets by creating buckets
	        // for each type.
	        type = Object.prototype.toString.call(item);
	        if (!(type in set._items)) {
	          if (shouldAdd) {
	            set._items[type] = [item];
	          }
	          return shouldAdd;
	        }
	        // scan through all previously applied items
	        if (!_contains(item, set._items[type])) {
	          if (shouldAdd) {
	            set._items[type].push(item);
	          }
	          return shouldAdd;
	        }
	        return !shouldAdd;
	    }
	  }
	  return _Set;
	}();

/***/ },
/* 67 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function _arrayFromIterator(iter) {
	  var list = [];
	  var next;
	  while (!(next = iter.next()).done) {
	    list.push(next.value);
	  }
	  return list;
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function _complement(f) {
	  return function () {
	    return !f.apply(this, arguments);
	  };
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _arity = __webpack_require__(11);
	var _isPlaceholder = __webpack_require__(13);

	/**
	 * Internal curryN function.
	 *
	 * @private
	 * @category Function
	 * @param {Number} length The arity of the curried function.
	 * @param {Array} received An array of arguments received thus far.
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curryN(length, received, fn) {
	  return function () {
	    var combined = [];
	    var argsIdx = 0;
	    var left = length;
	    var combinedIdx = 0;
	    while (combinedIdx < received.length || argsIdx < arguments.length) {
	      var result;
	      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
	        result = received[combinedIdx];
	      } else {
	        result = arguments[argsIdx];
	        argsIdx += 1;
	      }
	      combined[combinedIdx] = result;
	      if (!_isPlaceholder(result)) {
	        left -= 1;
	      }
	      combinedIdx += 1;
	    }
	    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
	  };
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _arrayFromIterator = __webpack_require__(67);
	var _functionName = __webpack_require__(71);
	var _has = __webpack_require__(12);
	var identical = __webpack_require__(65);
	var keys = __webpack_require__(16);
	var type = __webpack_require__(101);

	module.exports = function _equals(a, b, stackA, stackB) {
	  if (identical(a, b)) {
	    return true;
	  }

	  if (type(a) !== type(b)) {
	    return false;
	  }

	  if (a == null || b == null) {
	    return false;
	  }

	  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
	    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
	  }

	  switch (type(a)) {
	    case 'Arguments':
	    case 'Array':
	    case 'Object':
	      if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
	        return a === b;
	      }
	      break;
	    case 'Boolean':
	    case 'Number':
	    case 'String':
	      if (!((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === (typeof b === 'undefined' ? 'undefined' : _typeof(b)) && identical(a.valueOf(), b.valueOf()))) {
	        return false;
	      }
	      break;
	    case 'Date':
	      if (!identical(a.valueOf(), b.valueOf())) {
	        return false;
	      }
	      break;
	    case 'Error':
	      return a.name === b.name && a.message === b.message;
	    case 'RegExp':
	      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
	        return false;
	      }
	      break;
	    case 'Map':
	    case 'Set':
	      if (!_equals(_arrayFromIterator(a.entries()), _arrayFromIterator(b.entries()), stackA, stackB)) {
	        return false;
	      }
	      break;
	    case 'Int8Array':
	    case 'Uint8Array':
	    case 'Uint8ClampedArray':
	    case 'Int16Array':
	    case 'Uint16Array':
	    case 'Int32Array':
	    case 'Uint32Array':
	    case 'Float32Array':
	    case 'Float64Array':
	      break;
	    case 'ArrayBuffer':
	      break;
	    default:
	      // Values of other types are only equal if identical.
	      return false;
	  }

	  var keysA = keys(a);
	  if (keysA.length !== keys(b).length) {
	    return false;
	  }

	  var idx = stackA.length - 1;
	  while (idx >= 0) {
	    if (stackA[idx] === a) {
	      return stackB[idx] === b;
	    }
	    idx -= 1;
	  }

	  stackA.push(a);
	  stackB.push(b);
	  idx = keysA.length - 1;
	  while (idx >= 0) {
	    var key = keysA[idx];
	    if (!(_has(key, b) && _equals(b[key], a[key], stackA, stackB))) {
	      return false;
	    }
	    idx -= 1;
	  }
	  stackA.pop();
	  stackB.pop();
	  return true;
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function _functionName(f) {
	  // String(x => x) evaluates to "x => x", so the pattern may not match.
	  var match = String(f).match(/^function (\w*)/);
	  return match == null ? '' : match[1];
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function _identity(x) {
	  return x;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var equals = __webpack_require__(21);

	module.exports = function _indexOf(list, a, idx) {
	  var inf, item;
	  // Array.prototype.indexOf doesn't exist below IE9
	  if (typeof list.indexOf === 'function') {
	    switch (typeof a === 'undefined' ? 'undefined' : _typeof(a)) {
	      case 'number':
	        if (a === 0) {
	          // manually crawl the list to distinguish between +0 and -0
	          inf = 1 / a;
	          while (idx < list.length) {
	            item = list[idx];
	            if (item === 0 && 1 / item === inf) {
	              return idx;
	            }
	            idx += 1;
	          }
	          return -1;
	        } else if (a !== a) {
	          // NaN
	          while (idx < list.length) {
	            item = list[idx];
	            if (typeof item === 'number' && item !== item) {
	              return idx;
	            }
	            idx += 1;
	          }
	          return -1;
	        }
	        // non-zero numbers can utilise Set
	        return list.indexOf(a, idx);

	      // all these types can utilise Set
	      case 'string':
	      case 'boolean':
	      case 'function':
	      case 'undefined':
	        return list.indexOf(a, idx);

	      case 'object':
	        if (a === null) {
	          // null can utilise Set
	          return list.indexOf(a, idx);
	        }
	    }
	  }
	  // anything else not covered above, defer to R.equals
	  while (idx < list.length) {
	    if (equals(list[idx], a)) {
	      return idx;
	    }
	    idx += 1;
	  }
	  return -1;
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _has = __webpack_require__(12);

	module.exports = function () {
	  var toString = Object.prototype.toString;
	  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
	    return toString.call(x) === '[object Arguments]';
	  } : function _isArguments(x) {
	    return _has('callee', x);
	  };
	}();

/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function _isObject(x) {
	  return Object.prototype.toString.call(x) === '[object Object]';
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function _isString(x) {
	  return Object.prototype.toString.call(x) === '[object String]';
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function _isTransformer(obj) {
	  return typeof obj['@@transducer/step'] === 'function';
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function _map(fn, functor) {
	  var idx = 0;
	  var len = functor.length;
	  var result = Array(len);
	  while (idx < len) {
	    result[idx] = fn(functor[idx]);
	    idx += 1;
	  }
	  return result;
	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function _pipe(f, g) {
	  return function () {
	    return g.call(this, f.apply(this, arguments));
	  };
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(1);
	var _reduced = __webpack_require__(24);
	var _xfBase = __webpack_require__(8);

	module.exports = function () {
	  function XAll(f, xf) {
	    this.xf = xf;
	    this.f = f;
	    this.all = true;
	  }
	  XAll.prototype['@@transducer/init'] = _xfBase.init;
	  XAll.prototype['@@transducer/result'] = function (result) {
	    if (this.all) {
	      result = this.xf['@@transducer/step'](result, true);
	    }
	    return this.xf['@@transducer/result'](result);
	  };
	  XAll.prototype['@@transducer/step'] = function (result, input) {
	    if (!this.f(input)) {
	      this.all = false;
	      result = _reduced(this.xf['@@transducer/step'](result, false));
	    }
	    return result;
	  };

	  return _curry2(function _xall(f, xf) {
	    return new XAll(f, xf);
	  });
	}();

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(1);
	var _reduced = __webpack_require__(24);
	var _xfBase = __webpack_require__(8);

	module.exports = function () {
	  function XAny(f, xf) {
	    this.xf = xf;
	    this.f = f;
	    this.any = false;
	  }
	  XAny.prototype['@@transducer/init'] = _xfBase.init;
	  XAny.prototype['@@transducer/result'] = function (result) {
	    if (!this.any) {
	      result = this.xf['@@transducer/step'](result, false);
	    }
	    return this.xf['@@transducer/result'](result);
	  };
	  XAny.prototype['@@transducer/step'] = function (result, input) {
	    if (this.f(input)) {
	      this.any = true;
	      result = _reduced(this.xf['@@transducer/step'](result, true));
	    }
	    return result;
	  };

	  return _curry2(function _xany(f, xf) {
	    return new XAny(f, xf);
	  });
	}();

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(1);
	var _xfBase = __webpack_require__(8);

	module.exports = function () {
	  function XFilter(f, xf) {
	    this.xf = xf;
	    this.f = f;
	  }
	  XFilter.prototype['@@transducer/init'] = _xfBase.init;
	  XFilter.prototype['@@transducer/result'] = _xfBase.result;
	  XFilter.prototype['@@transducer/step'] = function (result, input) {
	    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
	  };

	  return _curry2(function _xfilter(f, xf) {
	    return new XFilter(f, xf);
	  });
	}();

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(1);
	var _reduced = __webpack_require__(24);
	var _xfBase = __webpack_require__(8);

	module.exports = function () {
	  function XFind(f, xf) {
	    this.xf = xf;
	    this.f = f;
	    this.found = false;
	  }
	  XFind.prototype['@@transducer/init'] = _xfBase.init;
	  XFind.prototype['@@transducer/result'] = function (result) {
	    if (!this.found) {
	      result = this.xf['@@transducer/step'](result, void 0);
	    }
	    return this.xf['@@transducer/result'](result);
	  };
	  XFind.prototype['@@transducer/step'] = function (result, input) {
	    if (this.f(input)) {
	      this.found = true;
	      result = _reduced(this.xf['@@transducer/step'](result, input));
	    }
	    return result;
	  };

	  return _curry2(function _xfind(f, xf) {
	    return new XFind(f, xf);
	  });
	}();

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(1);
	var _xfBase = __webpack_require__(8);

	module.exports = function () {
	  function XMap(f, xf) {
	    this.xf = xf;
	    this.f = f;
	  }
	  XMap.prototype['@@transducer/init'] = _xfBase.init;
	  XMap.prototype['@@transducer/result'] = _xfBase.result;
	  XMap.prototype['@@transducer/step'] = function (result, input) {
	    return this.xf['@@transducer/step'](result, this.f(input));
	  };

	  return _curry2(function _xmap(f, xf) {
	    return new XMap(f, xf);
	  });
	}();

/***/ },
/* 85 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
	  function XWrap(fn) {
	    this.f = fn;
	  }
	  XWrap.prototype['@@transducer/init'] = function () {
	    throw new Error('init not implemented on XWrap');
	  };
	  XWrap.prototype['@@transducer/result'] = function (acc) {
	    return acc;
	  };
	  XWrap.prototype['@@transducer/step'] = function (acc, x) {
	    return this.f(acc, x);
	  };

	  return function _xwrap(fn) {
	    return new XWrap(fn);
	  };
	}();

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _contains = __webpack_require__(34);
	var _curry2 = __webpack_require__(1);
	var _filter = __webpack_require__(35);
	var flip = __webpack_require__(63);
	var uniq = __webpack_require__(102);

	/**
	 * Combines two lists into a set (i.e. no duplicates) composed of those
	 * elements common to both lists.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig [*] -> [*] -> [*]
	 * @param {Array} list1 The first list.
	 * @param {Array} list2 The second list.
	 * @return {Array} The list of elements found in both `list1` and `list2`.
	 * @see R.intersectionWith
	 * @example
	 *
	 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
	 */
	module.exports = _curry2(function intersection(list1, list2) {
	  var lookupList, filteredList;
	  if (list1.length > list2.length) {
	    lookupList = list1;
	    filteredList = list2;
	  } else {
	    lookupList = list2;
	    filteredList = list1;
	  }
	  return uniq(_filter(flip(_contains)(lookupList), filteredList));
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(1);

	/**
	 * See if an object (`val`) is an instance of the supplied constructor. This
	 * function will check up the inheritance chain, if any.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category Type
	 * @sig (* -> {*}) -> a -> Boolean
	 * @param {Object} ctor A constructor
	 * @param {*} val The value to test
	 * @return {Boolean}
	 * @example
	 *
	 *      R.is(Object, {}); //=> true
	 *      R.is(Number, 1); //=> true
	 *      R.is(Object, 1); //=> false
	 *      R.is(String, 's'); //=> true
	 *      R.is(String, new String('')); //=> true
	 *      R.is(Object, new String('')); //=> true
	 *      R.is(Object, 's'); //=> false
	 *      R.is(Number, {}); //=> false
	 */
	module.exports = _curry2(function is(Ctor, val) {
	  return val != null && val.constructor === Ctor || val instanceof Ctor;
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry1 = __webpack_require__(2);
	var is = __webpack_require__(87);

	/**
	 * Returns the number of elements in the array by returning `list.length`.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.3.0
	 * @category List
	 * @sig [a] -> Number
	 * @param {Array} list The array to inspect.
	 * @return {Number} The length of the array.
	 * @example
	 *
	 *      R.length([]); //=> 0
	 *      R.length([1, 2, 3]); //=> 3
	 */
	module.exports = _curry1(function length(list) {
	  return list != null && is(Number, list.length) ? list.length : NaN;
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(1);
	var map = __webpack_require__(6);

	/**
	 * Returns a lens for the given getter and setter functions. The getter "gets"
	 * the value of the focus; the setter "sets" the value of the focus. The setter
	 * should not mutate the data structure.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Object
	 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	 * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
	 * @param {Function} getter
	 * @param {Function} setter
	 * @return {Lens}
	 * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
	 * @example
	 *
	 *      var xLens = R.lens(R.prop('x'), R.assoc('x'));
	 *
	 *      R.view(xLens, {x: 1, y: 2});            //=> 1
	 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
	 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
	 */
	module.exports = _curry2(function lens(getter, setter) {
	  return function (toFunctorFn) {
	    return function (target) {
	      return map(function (focus) {
	        return setter(focus, target);
	      }, toFunctorFn(getter(target)));
	    };
	  };
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry1 = __webpack_require__(2);
	var assoc = __webpack_require__(59);
	var lens = __webpack_require__(89);
	var prop = __webpack_require__(36);

	/**
	 * Returns a lens whose focus is the specified property.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.14.0
	 * @category Object
	 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	 * @sig String -> Lens s a
	 * @param {String} k
	 * @return {Lens}
	 * @see R.view, R.set, R.over
	 * @example
	 *
	 *      var xLens = R.lensProp('x');
	 *
	 *      R.view(xLens, {x: 1, y: 2});            //=> 1
	 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
	 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
	 */
	module.exports = _curry1(function lensProp(k) {
	  return lens(prop(k), assoc(k));
	});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(1);
	var _isString = __webpack_require__(76);

	/**
	 * Returns the nth element of the given list or string. If n is negative the
	 * element at index length + n is returned.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Number -> [a] -> a | Undefined
	 * @sig Number -> String -> String
	 * @param {Number} offset
	 * @param {*} list
	 * @return {*}
	 * @example
	 *
	 *      var list = ['foo', 'bar', 'baz', 'quux'];
	 *      R.nth(1, list); //=> 'bar'
	 *      R.nth(-1, list); //=> 'quux'
	 *      R.nth(-99, list); //=> undefined
	 *
	 *      R.nth(2, 'abc'); //=> 'c'
	 *      R.nth(3, 'abc'); //=> ''
	 */
	module.exports = _curry2(function nth(offset, list) {
	  var idx = offset < 0 ? list.length + offset : offset;
	  return _isString(list) ? list.charAt(idx) : list[idx];
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry3 = __webpack_require__(4);

	/**
	 * Returns the result of "setting" the portion of the given data structure
	 * focused by the given lens to the result of applying the given function to
	 * the focused value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category Object
	 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	 * @sig Lens s a -> (a -> a) -> s -> s
	 * @param {Lens} lens
	 * @param {*} v
	 * @param {*} x
	 * @return {*}
	 * @see R.prop, R.lensIndex, R.lensProp
	 * @example
	 *
	 *      var headLens = R.lensIndex(0);
	 *
	 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
	 */
	module.exports = function () {
	  // `Identity` is a functor that holds a single value, where `map` simply
	  // transforms the held value with the provided function.
	  var Identity = function Identity(x) {
	    return { value: x, map: function map(f) {
	        return Identity(f(x));
	      } };
	  };

	  return _curry3(function over(lens, f, x) {
	    // The value returned by the getter function is first transformed with `f`,
	    // then set as the value of an `Identity`. This is then mapped over with the
	    // setter function of the lens.
	    return lens(function (y) {
	      return Identity(f(y));
	    })(x).value;
	  });
	}();

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _arity = __webpack_require__(11);
	var _pipe = __webpack_require__(79);
	var reduce = __webpack_require__(37);
	var tail = __webpack_require__(100);

	/**
	 * Performs left-to-right function composition. The leftmost function may have
	 * any arity; the remaining functions must be unary.
	 *
	 * In some libraries this function is named `sequence`.
	 *
	 * **Note:** The result of pipe is not automatically curried.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Function
	 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
	 * @param {...Function} functions
	 * @return {Function}
	 * @see R.compose
	 * @example
	 *
	 *      var f = R.pipe(Math.pow, R.negate, R.inc);
	 *
	 *      f(3, 4); // -(3^4) + 1
	 */
	module.exports = function pipe() {
	  if (arguments.length === 0) {
	    throw new Error('pipe requires at least one argument');
	  }
	  return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry3 = __webpack_require__(4);
	var equals = __webpack_require__(21);
	var propSatisfies = __webpack_require__(95);

	/**
	 * Returns `true` if the specified object property is equal, in `R.equals`
	 * terms, to the given value; `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Relation
	 * @sig String -> a -> Object -> Boolean
	 * @param {String} name
	 * @param {*} val
	 * @param {*} obj
	 * @return {Boolean}
	 * @see R.equals, R.propSatisfies
	 * @example
	 *
	 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
	 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
	 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
	 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
	 *      var kids = [abby, fred, rusty, alois];
	 *      var hasBrownHair = R.propEq('hair', 'brown');
	 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
	 */
	module.exports = _curry3(function propEq(name, val, obj) {
	  return propSatisfies(equals(val), name, obj);
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry3 = __webpack_require__(4);

	/**
	 * Returns `true` if the specified object property satisfies the given
	 * predicate; `false` otherwise.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category Logic
	 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
	 * @param {Function} pred
	 * @param {String} name
	 * @param {*} obj
	 * @return {Boolean}
	 * @see R.propEq, R.propIs
	 * @example
	 *
	 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
	 */
	module.exports = _curry3(function propSatisfies(pred, name, obj) {
	  return pred(obj[name]);
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(1);

	/**
	 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
	 * order.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig [k] -> {k: v} -> [v]
	 * @param {Array} ps The property names to fetch
	 * @param {Object} obj The object to query
	 * @return {Array} The corresponding values or partially applied function.
	 * @example
	 *
	 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
	 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
	 *
	 *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
	 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
	 */
	module.exports = _curry2(function props(ps, obj) {
	  var len = ps.length;
	  var out = [];
	  var idx = 0;

	  while (idx < len) {
	    out[idx] = obj[ps[idx]];
	    idx += 1;
	  }

	  return out;
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _complement = __webpack_require__(68);
	var _curry2 = __webpack_require__(1);
	var filter = __webpack_require__(31);

	/**
	 * The complement of `filter`.
	 *
	 * Acts as a transducer if a transformer is given in list position.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig Filterable f => (a -> Boolean) -> f a -> f a
	 * @param {Function} pred
	 * @param {Array} filterable
	 * @return {Array}
	 * @see R.filter, R.transduce, R.addIndex
	 * @example
	 *
	 *      var isOdd = (n) => n % 2 === 1;
	 *
	 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
	 *
	 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
	 */
	module.exports = _curry2(function reject(pred, filterable) {
	  return filter(_complement(pred), filterable);
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry3 = __webpack_require__(4);
	var always = __webpack_require__(57);
	var over = __webpack_require__(92);

	/**
	 * Returns the result of "setting" the portion of the given data structure
	 * focused by the given lens to the given value.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category Object
	 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
	 * @sig Lens s a -> a -> s -> s
	 * @param {Lens} lens
	 * @param {*} v
	 * @param {*} x
	 * @return {*}
	 * @see R.prop, R.lensIndex, R.lensProp
	 * @example
	 *
	 *      var xLens = R.lensProp('x');
	 *
	 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
	 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
	 */
	module.exports = _curry3(function set(lens, v, x) {
	  return over(lens, always(v), x);
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry2 = __webpack_require__(1);
	var length = __webpack_require__(88);
	var slice = __webpack_require__(38);

	/**
	 * Splits a given list or string at a given index.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.19.0
	 * @category List
	 * @sig Number -> [a] -> [[a], [a]]
	 * @sig Number -> String -> [String, String]
	 * @param {Number} index The index where the array/string is split.
	 * @param {Array|String} array The array/string to be split.
	 * @return {Array}
	 * @example
	 *
	 *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
	 *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
	 *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
	 */
	module.exports = _curry2(function splitAt(index, array) {
	  return [slice(0, index, array), slice(index, length(array), array)];
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _checkForMethod = __webpack_require__(33);
	var slice = __webpack_require__(38);

	/**
	 * Returns all but the first element of the given list or string (or object
	 * with a `tail` method).
	 *
	 * Dispatches to the `slice` method of the first argument, if present.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> [a]
	 * @sig String -> String
	 * @param {*} list
	 * @return {*}
	 * @see R.head, R.init, R.last
	 * @example
	 *
	 *      R.tail([1, 2, 3]);  //=> [2, 3]
	 *      R.tail([1, 2]);     //=> [2]
	 *      R.tail([1]);        //=> []
	 *      R.tail([]);         //=> []
	 *
	 *      R.tail('abc');  //=> 'bc'
	 *      R.tail('ab');   //=> 'b'
	 *      R.tail('a');    //=> ''
	 *      R.tail('');     //=> ''
	 */
	module.exports = _checkForMethod('tail', slice(1, Infinity));

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry1 = __webpack_require__(2);

	/**
	 * Gives a single-word string description of the (native) type of a value,
	 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
	 * attempt to distinguish user Object types any further, reporting them all as
	 * 'Object'.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.8.0
	 * @category Type
	 * @sig (* -> {*}) -> String
	 * @param {*} val The value to test
	 * @return {String}
	 * @example
	 *
	 *      R.type({}); //=> "Object"
	 *      R.type(1); //=> "Number"
	 *      R.type(false); //=> "Boolean"
	 *      R.type('s'); //=> "String"
	 *      R.type(null); //=> "Null"
	 *      R.type([]); //=> "Array"
	 *      R.type(/[A-z]/); //=> "RegExp"
	 */
	module.exports = _curry1(function type(val) {
	  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var identity = __webpack_require__(32);
	var uniqBy = __webpack_require__(103);

	/**
	 * Returns a new list containing only one copy of each element in the original
	 * list. `R.equals` is used to determine equality.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category List
	 * @sig [a] -> [a]
	 * @param {Array} list The array to consider.
	 * @return {Array} The list of unique items.
	 * @example
	 *
	 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
	 *      R.uniq([1, '1']);     //=> [1, '1']
	 *      R.uniq([[42], [42]]); //=> [[42]]
	 */
	module.exports = uniqBy(identity);

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Set = __webpack_require__(66);
	var _curry2 = __webpack_require__(1);

	/**
	 * Returns a new list containing only one copy of each element in the original
	 * list, based upon the value returned by applying the supplied function to
	 * each list element. Prefers the first item if the supplied function produces
	 * the same value on two items. `R.equals` is used for comparison.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.16.0
	 * @category List
	 * @sig (a -> b) -> [a] -> [a]
	 * @param {Function} fn A function used to produce a value to use during comparisons.
	 * @param {Array} list The array to consider.
	 * @return {Array} The list of unique items.
	 * @example
	 *
	 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
	 */
	module.exports = _curry2(function uniqBy(fn, list) {
	  var set = new _Set();
	  var result = [];
	  var idx = 0;
	  var appliedItem, item;

	  while (idx < list.length) {
	    item = list[idx];
	    appliedItem = fn(item);
	    if (set.add(appliedItem)) {
	      result.push(item);
	    }
	    idx += 1;
	  }
	  return result;
	});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _curry1 = __webpack_require__(2);
	var keys = __webpack_require__(16);

	/**
	 * Returns a list of all the enumerable own properties of the supplied object.
	 * Note that the order of the output array is not guaranteed across different
	 * JS platforms.
	 *
	 * @func
	 * @memberOf R
	 * @since v0.1.0
	 * @category Object
	 * @sig {k: v} -> [v]
	 * @param {Object} obj The object to extract values from
	 * @return {Array} An array of the values of the object's own properties.
	 * @example
	 *
	 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
	 */
	module.exports = _curry1(function values(obj) {
	  var props = keys(obj);
	  var len = props.length;
	  var vals = [];
	  var idx = 0;
	  while (idx < len) {
	    vals[idx] = obj[props[idx]];
	    idx += 1;
	  }
	  return vals;
	});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var createElement = __webpack_require__(40);

	module.exports = createElement;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var diff = __webpack_require__(120);

	module.exports = diff;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var h = __webpack_require__(115);

	module.exports = h;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var patch = __webpack_require__(111);

	module.exports = patch;

/***/ },
/* 109 */
/***/ function(module, exports) {

	"use strict";

	// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
	// We don't want to read all of the DOM nodes in the tree so we use
	// the in-order tree indexing to eliminate recursion down certain branches.
	// We only recurse into a DOM node if we know that it contains a child of
	// interest.

	var noChild = {};

	module.exports = domIndex;

	function domIndex(rootNode, tree, indices, nodes) {
	    if (!indices || indices.length === 0) {
	        return {};
	    } else {
	        indices.sort(ascending);
	        return recurse(rootNode, tree, indices, nodes, 0);
	    }
	}

	function recurse(rootNode, tree, indices, nodes, rootIndex) {
	    nodes = nodes || {};

	    if (rootNode) {
	        if (indexInRange(indices, rootIndex, rootIndex)) {
	            nodes[rootIndex] = rootNode;
	        }

	        var vChildren = tree.children;

	        if (vChildren) {

	            var childNodes = rootNode.childNodes;

	            for (var i = 0; i < tree.children.length; i++) {
	                rootIndex += 1;

	                var vChild = vChildren[i] || noChild;
	                var nextIndex = rootIndex + (vChild.count || 0);

	                // skip recursion down the tree if there are no nodes down here
	                if (indexInRange(indices, rootIndex, nextIndex)) {
	                    recurse(childNodes[i], vChild, indices, nodes, rootIndex);
	                }

	                rootIndex = nextIndex;
	            }
	        }
	    }

	    return nodes;
	}

	// Binary search for an index in the interval [left, right]
	function indexInRange(indices, left, right) {
	    if (indices.length === 0) {
	        return false;
	    }

	    var minIndex = 0;
	    var maxIndex = indices.length - 1;
	    var currentIndex;
	    var currentItem;

	    while (minIndex <= maxIndex) {
	        currentIndex = (maxIndex + minIndex) / 2 >> 0;
	        currentItem = indices[currentIndex];

	        if (minIndex === maxIndex) {
	            return currentItem >= left && currentItem <= right;
	        } else if (currentItem < left) {
	            minIndex = currentIndex + 1;
	        } else if (currentItem > right) {
	            maxIndex = currentIndex - 1;
	        } else {
	            return true;
	        }
	    }

	    return false;
	}

	function ascending(a, b) {
	    return a > b ? 1 : -1;
	}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var applyProperties = __webpack_require__(39);

	var isWidget = __webpack_require__(5);
	var VPatch = __webpack_require__(42);

	var updateWidget = __webpack_require__(112);

	module.exports = applyPatch;

	function applyPatch(vpatch, domNode, renderOptions) {
	    var type = vpatch.type;
	    var vNode = vpatch.vNode;
	    var patch = vpatch.patch;

	    switch (type) {
	        case VPatch.REMOVE:
	            return removeNode(domNode, vNode);
	        case VPatch.INSERT:
	            return insertNode(domNode, patch, renderOptions);
	        case VPatch.VTEXT:
	            return stringPatch(domNode, vNode, patch, renderOptions);
	        case VPatch.WIDGET:
	            return widgetPatch(domNode, vNode, patch, renderOptions);
	        case VPatch.VNODE:
	            return vNodePatch(domNode, vNode, patch, renderOptions);
	        case VPatch.ORDER:
	            reorderChildren(domNode, patch);
	            return domNode;
	        case VPatch.PROPS:
	            applyProperties(domNode, patch, vNode.properties);
	            return domNode;
	        case VPatch.THUNK:
	            return replaceRoot(domNode, renderOptions.patch(domNode, patch, renderOptions));
	        default:
	            return domNode;
	    }
	}

	function removeNode(domNode, vNode) {
	    var parentNode = domNode.parentNode;

	    if (parentNode) {
	        parentNode.removeChild(domNode);
	    }

	    destroyWidget(domNode, vNode);

	    return null;
	}

	function insertNode(parentNode, vNode, renderOptions) {
	    var newNode = renderOptions.render(vNode, renderOptions);

	    if (parentNode) {
	        parentNode.appendChild(newNode);
	    }

	    return parentNode;
	}

	function stringPatch(domNode, leftVNode, vText, renderOptions) {
	    var newNode;

	    if (domNode.nodeType === 3) {
	        domNode.replaceData(0, domNode.length, vText.text);
	        newNode = domNode;
	    } else {
	        var parentNode = domNode.parentNode;
	        newNode = renderOptions.render(vText, renderOptions);

	        if (parentNode && newNode !== domNode) {
	            parentNode.replaceChild(newNode, domNode);
	        }
	    }

	    return newNode;
	}

	function widgetPatch(domNode, leftVNode, widget, renderOptions) {
	    var updating = updateWidget(leftVNode, widget);
	    var newNode;

	    if (updating) {
	        newNode = widget.update(leftVNode, domNode) || domNode;
	    } else {
	        newNode = renderOptions.render(widget, renderOptions);
	    }

	    var parentNode = domNode.parentNode;

	    if (parentNode && newNode !== domNode) {
	        parentNode.replaceChild(newNode, domNode);
	    }

	    if (!updating) {
	        destroyWidget(domNode, leftVNode);
	    }

	    return newNode;
	}

	function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
	    var parentNode = domNode.parentNode;
	    var newNode = renderOptions.render(vNode, renderOptions);

	    if (parentNode && newNode !== domNode) {
	        parentNode.replaceChild(newNode, domNode);
	    }

	    return newNode;
	}

	function destroyWidget(domNode, w) {
	    if (typeof w.destroy === "function" && isWidget(w)) {
	        w.destroy(domNode);
	    }
	}

	function reorderChildren(domNode, moves) {
	    var childNodes = domNode.childNodes;
	    var keyMap = {};
	    var node;
	    var remove;
	    var insert;

	    for (var i = 0; i < moves.removes.length; i++) {
	        remove = moves.removes[i];
	        node = childNodes[remove.from];
	        if (remove.key) {
	            keyMap[remove.key] = node;
	        }
	        domNode.removeChild(node);
	    }

	    var length = childNodes.length;
	    for (var j = 0; j < moves.inserts.length; j++) {
	        insert = moves.inserts[j];
	        node = keyMap[insert.key];
	        // this is the weirdest bug i've ever seen in webkit
	        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to]);
	    }
	}

	function replaceRoot(oldRoot, newRoot) {
	    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
	        oldRoot.parentNode.replaceChild(newRoot, oldRoot);
	    }

	    return newRoot;
	}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var document = __webpack_require__(28);
	var isArray = __webpack_require__(26);

	var render = __webpack_require__(40);
	var domIndex = __webpack_require__(109);
	var patchOp = __webpack_require__(110);
	module.exports = patch;

	function patch(rootNode, patches, renderOptions) {
	    renderOptions = renderOptions || {};
	    renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch ? renderOptions.patch : patchRecursive;
	    renderOptions.render = renderOptions.render || render;

	    return renderOptions.patch(rootNode, patches, renderOptions);
	}

	function patchRecursive(rootNode, patches, renderOptions) {
	    var indices = patchIndices(patches);

	    if (indices.length === 0) {
	        return rootNode;
	    }

	    var index = domIndex(rootNode, patches.a, indices);
	    var ownerDocument = rootNode.ownerDocument;

	    if (!renderOptions.document && ownerDocument !== document) {
	        renderOptions.document = ownerDocument;
	    }

	    for (var i = 0; i < indices.length; i++) {
	        var nodeIndex = indices[i];
	        rootNode = applyPatch(rootNode, index[nodeIndex], patches[nodeIndex], renderOptions);
	    }

	    return rootNode;
	}

	function applyPatch(rootNode, domNode, patchList, renderOptions) {
	    if (!domNode) {
	        return rootNode;
	    }

	    var newNode;

	    if (isArray(patchList)) {
	        for (var i = 0; i < patchList.length; i++) {
	            newNode = patchOp(patchList[i], domNode, renderOptions);

	            if (domNode === rootNode) {
	                rootNode = newNode;
	            }
	        }
	    } else {
	        newNode = patchOp(patchList, domNode, renderOptions);

	        if (domNode === rootNode) {
	            rootNode = newNode;
	        }
	    }

	    return rootNode;
	}

	function patchIndices(patches) {
	    var indices = [];

	    for (var key in patches) {
	        if (key !== "a") {
	            indices.push(Number(key));
	        }
	    }

	    return indices;
	}

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var isWidget = __webpack_require__(5);

	module.exports = updateWidget;

	function updateWidget(a, b) {
	    if (isWidget(a) && isWidget(b)) {
	        if ("name" in a && "name" in b) {
	            return a.id === b.id;
	        } else {
	            return a.init === b.init;
	        }
	    }

	    return false;
	}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var EvStore = __webpack_require__(52);

	module.exports = EvHook;

	function EvHook(value) {
	    if (!(this instanceof EvHook)) {
	        return new EvHook(value);
	    }

	    this.value = value;
	}

	EvHook.prototype.hook = function (node, propertyName) {
	    var es = EvStore(node);
	    var propName = propertyName.substr(3);

	    es[propName] = this.value;
	};

	EvHook.prototype.unhook = function (node, propertyName) {
	    var es = EvStore(node);
	    var propName = propertyName.substr(3);

	    es[propName] = undefined;
	};

/***/ },
/* 114 */
/***/ function(module, exports) {

	'use strict';

	module.exports = SoftSetHook;

	function SoftSetHook(value) {
	    if (!(this instanceof SoftSetHook)) {
	        return new SoftSetHook(value);
	    }

	    this.value = value;
	}

	SoftSetHook.prototype.hook = function (node, propertyName) {
	    if (node[propertyName] !== this.value) {
	        node[propertyName] = this.value;
	    }
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArray = __webpack_require__(26);

	var VNode = __webpack_require__(117);
	var VText = __webpack_require__(118);
	var isVNode = __webpack_require__(9);
	var isVText = __webpack_require__(19);
	var isWidget = __webpack_require__(5);
	var isHook = __webpack_require__(18);
	var isVThunk = __webpack_require__(17);

	var parseTag = __webpack_require__(116);
	var softSetHook = __webpack_require__(114);
	var evHook = __webpack_require__(113);

	module.exports = h;

	function h(tagName, properties, children) {
	    var childNodes = [];
	    var tag, props, key, namespace;

	    if (!children && isChildren(properties)) {
	        children = properties;
	        props = {};
	    }

	    props = props || properties || {};
	    tag = parseTag(tagName, props);

	    // support keys
	    if (props.hasOwnProperty('key')) {
	        key = props.key;
	        props.key = undefined;
	    }

	    // support namespace
	    if (props.hasOwnProperty('namespace')) {
	        namespace = props.namespace;
	        props.namespace = undefined;
	    }

	    // fix cursor bug
	    if (tag === 'INPUT' && !namespace && props.hasOwnProperty('value') && props.value !== undefined && !isHook(props.value)) {
	        props.value = softSetHook(props.value);
	    }

	    transformProperties(props);

	    if (children !== undefined && children !== null) {
	        addChild(children, childNodes, tag, props);
	    }

	    return new VNode(tag, props, childNodes, key, namespace);
	}

	function addChild(c, childNodes, tag, props) {
	    if (typeof c === 'string') {
	        childNodes.push(new VText(c));
	    } else if (typeof c === 'number') {
	        childNodes.push(new VText(String(c)));
	    } else if (isChild(c)) {
	        childNodes.push(c);
	    } else if (isArray(c)) {
	        for (var i = 0; i < c.length; i++) {
	            addChild(c[i], childNodes, tag, props);
	        }
	    } else if (c === null || c === undefined) {
	        return;
	    } else {
	        throw UnexpectedVirtualElement({
	            foreignObject: c,
	            parentVnode: {
	                tagName: tag,
	                properties: props
	            }
	        });
	    }
	}

	function transformProperties(props) {
	    for (var propName in props) {
	        if (props.hasOwnProperty(propName)) {
	            var value = props[propName];

	            if (isHook(value)) {
	                continue;
	            }

	            if (propName.substr(0, 3) === 'ev-') {
	                // add ev-foo support
	                props[propName] = evHook(value);
	            }
	        }
	    }
	}

	function isChild(x) {
	    return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x);
	}

	function isChildren(x) {
	    return typeof x === 'string' || isArray(x) || isChild(x);
	}

	function UnexpectedVirtualElement(data) {
	    var err = new Error();

	    err.type = 'virtual-hyperscript.unexpected.virtual-element';
	    err.message = 'Unexpected virtual child passed to h().\n' + 'Expected a VNode / Vthunk / VWidget / string but:\n' + 'got:\n' + errorString(data.foreignObject) + '.\n' + 'The parent vnode is:\n' + errorString(data.parentVnode);
	    '\n' + 'Suggested fix: change your `h(..., [ ... ])` callsite.';
	    err.foreignObject = data.foreignObject;
	    err.parentVnode = data.parentVnode;

	    return err;
	}

	function errorString(obj) {
	    try {
	        return JSON.stringify(obj, null, '    ');
	    } catch (e) {
	        return String(obj);
	    }
	}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var split = __webpack_require__(50);

	var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
	var notClassId = /^\.|#/;

	module.exports = parseTag;

	function parseTag(tag, props) {
	    if (!tag) {
	        return 'DIV';
	    }

	    var noId = !props.hasOwnProperty('id');

	    var tagParts = split(tag, classIdSplit);
	    var tagName = null;

	    if (notClassId.test(tagParts[1])) {
	        tagName = 'DIV';
	    }

	    var classes, part, type, i;

	    for (i = 0; i < tagParts.length; i++) {
	        part = tagParts[i];

	        if (!part) {
	            continue;
	        }

	        type = part.charAt(0);

	        if (!tagName) {
	            tagName = part;
	        } else if (type === '.') {
	            classes = classes || [];
	            classes.push(part.substring(1, part.length));
	        } else if (type === '#' && noId) {
	            props.id = part.substring(1, part.length);
	        }
	    }

	    if (classes) {
	        if (props.className) {
	            classes.push(props.className);
	        }

	        props.className = classes.join(' ');
	    }

	    return props.namespace ? tagName : tagName.toUpperCase();
	}

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var version = __webpack_require__(10);
	var isVNode = __webpack_require__(9);
	var isWidget = __webpack_require__(5);
	var isThunk = __webpack_require__(17);
	var isVHook = __webpack_require__(18);

	module.exports = VirtualNode;

	var noProperties = {};
	var noChildren = [];

	function VirtualNode(tagName, properties, children, key, namespace) {
	    this.tagName = tagName;
	    this.properties = properties || noProperties;
	    this.children = children || noChildren;
	    this.key = key != null ? String(key) : undefined;
	    this.namespace = typeof namespace === "string" ? namespace : null;

	    var count = children && children.length || 0;
	    var descendants = 0;
	    var hasWidgets = false;
	    var hasThunks = false;
	    var descendantHooks = false;
	    var hooks;

	    for (var propName in properties) {
	        if (properties.hasOwnProperty(propName)) {
	            var property = properties[propName];
	            if (isVHook(property) && property.unhook) {
	                if (!hooks) {
	                    hooks = {};
	                }

	                hooks[propName] = property;
	            }
	        }
	    }

	    for (var i = 0; i < count; i++) {
	        var child = children[i];
	        if (isVNode(child)) {
	            descendants += child.count || 0;

	            if (!hasWidgets && child.hasWidgets) {
	                hasWidgets = true;
	            }

	            if (!hasThunks && child.hasThunks) {
	                hasThunks = true;
	            }

	            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
	                descendantHooks = true;
	            }
	        } else if (!hasWidgets && isWidget(child)) {
	            if (typeof child.destroy === "function") {
	                hasWidgets = true;
	            }
	        } else if (!hasThunks && isThunk(child)) {
	            hasThunks = true;
	        }
	    }

	    this.count = count + descendants;
	    this.hasWidgets = hasWidgets;
	    this.hasThunks = hasThunks;
	    this.hooks = hooks;
	    this.descendantHooks = descendantHooks;
	}

	VirtualNode.prototype.version = version;
	VirtualNode.prototype.type = "VirtualNode";

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var version = __webpack_require__(10);

	module.exports = VirtualText;

	function VirtualText(text) {
	    this.text = String(text);
	}

	VirtualText.prototype.version = version;
	VirtualText.prototype.type = "VirtualText";

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var isObject = __webpack_require__(29);
	var isHook = __webpack_require__(18);

	module.exports = diffProps;

	function diffProps(a, b) {
	    var diff;

	    for (var aKey in a) {
	        if (!(aKey in b)) {
	            diff = diff || {};
	            diff[aKey] = undefined;
	        }

	        var aValue = a[aKey];
	        var bValue = b[aKey];

	        if (aValue === bValue) {
	            continue;
	        } else if (isObject(aValue) && isObject(bValue)) {
	            if (getPrototype(bValue) !== getPrototype(aValue)) {
	                diff = diff || {};
	                diff[aKey] = bValue;
	            } else if (isHook(bValue)) {
	                diff = diff || {};
	                diff[aKey] = bValue;
	            } else {
	                var objectDiff = diffProps(aValue, bValue);
	                if (objectDiff) {
	                    diff = diff || {};
	                    diff[aKey] = objectDiff;
	                }
	            }
	        } else {
	            diff = diff || {};
	            diff[aKey] = bValue;
	        }
	    }

	    for (var bKey in b) {
	        if (!(bKey in a)) {
	            diff = diff || {};
	            diff[bKey] = b[bKey];
	        }
	    }

	    return diff;
	}

	function getPrototype(value) {
	    if (Object.getPrototypeOf) {
	        return Object.getPrototypeOf(value);
	    } else if (value.__proto__) {
	        return value.__proto__;
	    } else if (value.constructor) {
	        return value.constructor.prototype;
	    }
	}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var isArray = __webpack_require__(26);

	var VPatch = __webpack_require__(42);
	var isVNode = __webpack_require__(9);
	var isVText = __webpack_require__(19);
	var isWidget = __webpack_require__(5);
	var isThunk = __webpack_require__(17);
	var handleThunk = __webpack_require__(41);

	var diffProps = __webpack_require__(119);

	module.exports = diff;

	function diff(a, b) {
	    var patch = { a: a };
	    walk(a, b, patch, 0);
	    return patch;
	}

	function walk(a, b, patch, index) {
	    if (a === b) {
	        return;
	    }

	    var apply = patch[index];
	    var applyClear = false;

	    if (isThunk(a) || isThunk(b)) {
	        thunks(a, b, patch, index);
	    } else if (b == null) {

	        // If a is a widget we will add a remove patch for it
	        // Otherwise any child widgets/hooks must be destroyed.
	        // This prevents adding two remove patches for a widget.
	        if (!isWidget(a)) {
	            clearState(a, patch, index);
	            apply = patch[index];
	        }

	        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b));
	    } else if (isVNode(b)) {
	        if (isVNode(a)) {
	            if (a.tagName === b.tagName && a.namespace === b.namespace && a.key === b.key) {
	                var propsPatch = diffProps(a.properties, b.properties);
	                if (propsPatch) {
	                    apply = appendPatch(apply, new VPatch(VPatch.PROPS, a, propsPatch));
	                }
	                apply = diffChildren(a, b, patch, apply, index);
	            } else {
	                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b));
	                applyClear = true;
	            }
	        } else {
	            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b));
	            applyClear = true;
	        }
	    } else if (isVText(b)) {
	        if (!isVText(a)) {
	            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b));
	            applyClear = true;
	        } else if (a.text !== b.text) {
	            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b));
	        }
	    } else if (isWidget(b)) {
	        if (!isWidget(a)) {
	            applyClear = true;
	        }

	        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b));
	    }

	    if (apply) {
	        patch[index] = apply;
	    }

	    if (applyClear) {
	        clearState(a, patch, index);
	    }
	}

	function diffChildren(a, b, patch, apply, index) {
	    var aChildren = a.children;
	    var orderedSet = reorder(aChildren, b.children);
	    var bChildren = orderedSet.children;

	    var aLen = aChildren.length;
	    var bLen = bChildren.length;
	    var len = aLen > bLen ? aLen : bLen;

	    for (var i = 0; i < len; i++) {
	        var leftNode = aChildren[i];
	        var rightNode = bChildren[i];
	        index += 1;

	        if (!leftNode) {
	            if (rightNode) {
	                // Excess nodes in b need to be added
	                apply = appendPatch(apply, new VPatch(VPatch.INSERT, null, rightNode));
	            }
	        } else {
	            walk(leftNode, rightNode, patch, index);
	        }

	        if (isVNode(leftNode) && leftNode.count) {
	            index += leftNode.count;
	        }
	    }

	    if (orderedSet.moves) {
	        // Reorder nodes last
	        apply = appendPatch(apply, new VPatch(VPatch.ORDER, a, orderedSet.moves));
	    }

	    return apply;
	}

	function clearState(vNode, patch, index) {
	    // TODO: Make this a single walk, not two
	    unhook(vNode, patch, index);
	    destroyWidgets(vNode, patch, index);
	}

	// Patch records for all destroyed widgets must be added because we need
	// a DOM node reference for the destroy function
	function destroyWidgets(vNode, patch, index) {
	    if (isWidget(vNode)) {
	        if (typeof vNode.destroy === "function") {
	            patch[index] = appendPatch(patch[index], new VPatch(VPatch.REMOVE, vNode, null));
	        }
	    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
	        var children = vNode.children;
	        var len = children.length;
	        for (var i = 0; i < len; i++) {
	            var child = children[i];
	            index += 1;

	            destroyWidgets(child, patch, index);

	            if (isVNode(child) && child.count) {
	                index += child.count;
	            }
	        }
	    } else if (isThunk(vNode)) {
	        thunks(vNode, null, patch, index);
	    }
	}

	// Create a sub-patch for thunks
	function thunks(a, b, patch, index) {
	    var nodes = handleThunk(a, b);
	    var thunkPatch = diff(nodes.a, nodes.b);
	    if (hasPatches(thunkPatch)) {
	        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch);
	    }
	}

	function hasPatches(patch) {
	    for (var index in patch) {
	        if (index !== "a") {
	            return true;
	        }
	    }

	    return false;
	}

	// Execute hooks when two nodes are identical
	function unhook(vNode, patch, index) {
	    if (isVNode(vNode)) {
	        if (vNode.hooks) {
	            patch[index] = appendPatch(patch[index], new VPatch(VPatch.PROPS, vNode, undefinedKeys(vNode.hooks)));
	        }

	        if (vNode.descendantHooks || vNode.hasThunks) {
	            var children = vNode.children;
	            var len = children.length;
	            for (var i = 0; i < len; i++) {
	                var child = children[i];
	                index += 1;

	                unhook(child, patch, index);

	                if (isVNode(child) && child.count) {
	                    index += child.count;
	                }
	            }
	        }
	    } else if (isThunk(vNode)) {
	        thunks(vNode, null, patch, index);
	    }
	}

	function undefinedKeys(obj) {
	    var result = {};

	    for (var key in obj) {
	        result[key] = undefined;
	    }

	    return result;
	}

	// List diff, naive left to right reordering
	function reorder(aChildren, bChildren) {
	    // O(M) time, O(M) memory
	    var bChildIndex = keyIndex(bChildren);
	    var bKeys = bChildIndex.keys;
	    var bFree = bChildIndex.free;

	    if (bFree.length === bChildren.length) {
	        return {
	            children: bChildren,
	            moves: null
	        };
	    }

	    // O(N) time, O(N) memory
	    var aChildIndex = keyIndex(aChildren);
	    var aKeys = aChildIndex.keys;
	    var aFree = aChildIndex.free;

	    if (aFree.length === aChildren.length) {
	        return {
	            children: bChildren,
	            moves: null
	        };
	    }

	    // O(MAX(N, M)) memory
	    var newChildren = [];

	    var freeIndex = 0;
	    var freeCount = bFree.length;
	    var deletedItems = 0;

	    // Iterate through a and match a node in b
	    // O(N) time,
	    for (var i = 0; i < aChildren.length; i++) {
	        var aItem = aChildren[i];
	        var itemIndex;

	        if (aItem.key) {
	            if (bKeys.hasOwnProperty(aItem.key)) {
	                // Match up the old keys
	                itemIndex = bKeys[aItem.key];
	                newChildren.push(bChildren[itemIndex]);
	            } else {
	                // Remove old keyed items
	                itemIndex = i - deletedItems++;
	                newChildren.push(null);
	            }
	        } else {
	            // Match the item in a with the next free item in b
	            if (freeIndex < freeCount) {
	                itemIndex = bFree[freeIndex++];
	                newChildren.push(bChildren[itemIndex]);
	            } else {
	                // There are no free items in b to match with
	                // the free items in a, so the extra free nodes
	                // are deleted.
	                itemIndex = i - deletedItems++;
	                newChildren.push(null);
	            }
	        }
	    }

	    var lastFreeIndex = freeIndex >= bFree.length ? bChildren.length : bFree[freeIndex];

	    // Iterate through b and append any new keys
	    // O(M) time
	    for (var j = 0; j < bChildren.length; j++) {
	        var newItem = bChildren[j];

	        if (newItem.key) {
	            if (!aKeys.hasOwnProperty(newItem.key)) {
	                // Add any new keyed items
	                // We are adding new items to the end and then sorting them
	                // in place. In future we should insert new items in place.
	                newChildren.push(newItem);
	            }
	        } else if (j >= lastFreeIndex) {
	            // Add any leftover non-keyed items
	            newChildren.push(newItem);
	        }
	    }

	    var simulate = newChildren.slice();
	    var simulateIndex = 0;
	    var removes = [];
	    var inserts = [];
	    var simulateItem;

	    for (var k = 0; k < bChildren.length;) {
	        var wantedItem = bChildren[k];
	        simulateItem = simulate[simulateIndex];

	        // remove items
	        while (simulateItem === null && simulate.length) {
	            removes.push(remove(simulate, simulateIndex, null));
	            simulateItem = simulate[simulateIndex];
	        }

	        if (!simulateItem || simulateItem.key !== wantedItem.key) {
	            // if we need a key in this position...
	            if (wantedItem.key) {
	                if (simulateItem && simulateItem.key) {
	                    // if an insert doesn't put this key in place, it needs to move
	                    if (bKeys[simulateItem.key] !== k + 1) {
	                        removes.push(remove(simulate, simulateIndex, simulateItem.key));
	                        simulateItem = simulate[simulateIndex];
	                        // if the remove didn't put the wanted item in place, we need to insert it
	                        if (!simulateItem || simulateItem.key !== wantedItem.key) {
	                            inserts.push({ key: wantedItem.key, to: k });
	                        }
	                        // items are matching, so skip ahead
	                        else {
	                                simulateIndex++;
	                            }
	                    } else {
	                        inserts.push({ key: wantedItem.key, to: k });
	                    }
	                } else {
	                    inserts.push({ key: wantedItem.key, to: k });
	                }
	                k++;
	            }
	            // a key in simulate has no matching wanted key, remove it
	            else if (simulateItem && simulateItem.key) {
	                    removes.push(remove(simulate, simulateIndex, simulateItem.key));
	                }
	        } else {
	            simulateIndex++;
	            k++;
	        }
	    }

	    // remove all the remaining nodes from simulate
	    while (simulateIndex < simulate.length) {
	        simulateItem = simulate[simulateIndex];
	        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key));
	    }

	    // If the only moves we have are deletes then we can just
	    // let the delete patch remove these items.
	    if (removes.length === deletedItems && !inserts.length) {
	        return {
	            children: newChildren,
	            moves: null
	        };
	    }

	    return {
	        children: newChildren,
	        moves: {
	            removes: removes,
	            inserts: inserts
	        }
	    };
	}

	function remove(arr, index, key) {
	    arr.splice(index, 1);

	    return {
	        from: index,
	        key: key
	    };
	}

	function keyIndex(children) {
	    var keys = {};
	    var free = [];
	    var length = children.length;

	    for (var i = 0; i < length; i++) {
	        var child = children[i];

	        if (child.key) {
	            keys[child.key] = i;
	        } else {
	            free.push(i);
	        }
	    }

	    return {
	        keys: keys, // A hash of key name to index
	        free: free // An array of unkeyed item indices
	    };
	}

	function appendPatch(apply, patch) {
	    if (apply) {
	        if (isArray(apply)) {
	            apply.push(patch);
	        } else {
	            apply = [apply, patch];
	        }

	        return apply;
	    } else {
	        return patch;
	    }
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formData = exports.naiveSerialize = exports.emit = exports.scroll = exports.scrollImmediate = exports.height = exports.breakpoint = exports.width = exports.dimensions = exports.y = exports.x = exports.positions = exports.yImmediate = exports.xImmediate = exports.positionsImmediate = exports.valueAnd = exports.valueOnEnterAnd = exports.count = exports.countWith = exports.andValue = exports.onEnter = exports.onEsc = exports.onKeyCode = exports.valueOnEnter = exports.valueAndKeyCode = exports.log = exports.keyCode = exports.value = undefined;

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* globals FormData */

	/*
	 * This file contains signal processes for many common use cases for web apps.
	 */

	var _map2 = __webpack_require__(128);

	var _map3 = _interopRequireDefault(_map2);

	var _filter = __webpack_require__(124);

	var _filter2 = _interopRequireDefault(_filter);

	var _distinct = __webpack_require__(123);

	var _distinct2 = _interopRequireDefault(_distinct);

	var _filterMap = __webpack_require__(125);

	var _filterMap2 = _interopRequireDefault(_filterMap);

	var _throttle = __webpack_require__(129);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _always = __webpack_require__(43);

	var _always2 = _interopRequireDefault(_always);

	var _fold = __webpack_require__(126);

	var _fold2 = _interopRequireDefault(_fold);

	var _pipe = __webpack_require__(122);

	var _pipe2 = _interopRequireDefault(_pipe);

	var _equals = __webpack_require__(21);

	var _equals2 = _interopRequireDefault(_equals);

	var _find = __webpack_require__(62);

	var _find2 = _interopRequireDefault(_find);

	var _toPairs = __webpack_require__(25);

	var _toPairs2 = _interopRequireDefault(_toPairs);

	var _head = __webpack_require__(64);

	var _head2 = _interopRequireDefault(_head);

	var _add = __webpack_require__(55);

	var _add2 = _interopRequireDefault(_add);

	var _values = __webpack_require__(104);

	var _values2 = _interopRequireDefault(_values);

	var _map4 = __webpack_require__(6);

	var _map5 = _interopRequireDefault(_map4);

	var _props = __webpack_require__(96);

	var _props2 = _interopRequireDefault(_props);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ENTER_KEY = 13;
	var ESC_KEY = 27;

	/*
	 * `value`
	 *
	 * Maps a DOM event to a value. Use on inputs.
	 *
	 */

	var value = exports.value = (0, _map3.default)(function (ev) {
	  return ev.target.value;
	});

	/*
	 * `keyCode`
	 *
	 * Maps a DOM event to a keyCode. Use on input's keyup and keydown events.
	 *
	 */

	var keyCode = exports.keyCode = (0, _map3.default)(function (ev) {
	  return ev.keyCode;
	});

	var log = exports.log = (0, _map3.default)(function (value) {
	  console.log('[ACT] Processor log:', value);
	  return value;
	});

	var valueAndKeyCode = exports.valueAndKeyCode = (0, _map3.default)(function (ev) {
	  return [ev.target.value, ev.keyCode];
	});

	// TODO find a way to only
	// accept this on keyup
	var valueOnEnter = exports.valueOnEnter = (0, _pipe2.default)((0, _filterMap2.default)(function (ev) {
	  return ev.keyCode === ENTER_KEY && ev.target.value.trim();
	}));

	var onKeyCode = exports.onKeyCode = function onKeyCode(code) {
	  return (0, _pipe2.default)(keyCode, (0, _filter2.default)((0, _equals2.default)(code)));
	};

	var onEsc = exports.onEsc = onKeyCode(ESC_KEY);
	var onEnter = exports.onEnter = onKeyCode(ENTER_KEY);

	var andValue = exports.andValue = function andValue(otherValue) {
	  return (0, _map3.default)(function (value) {
	    return _extends({ value: value }, otherValue);
	  });
	};

	var and = function and(processor) {
	  return function (otherValue) {
	    return (0, _pipe2.default)(processor, andValue(otherValue));
	  };
	};

	var countWith = exports.countWith = function countWith() {
	  var amount = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	  return (0, _pipe2.default)((0, _always2.default)(amount), (0, _fold2.default)(_add2.default, 0));
	};

	var count = exports.count = (0, _pipe2.default)((0, _always2.default)(1), (0, _fold2.default)(_add2.default, 0));

	var valueOnEnterAnd = exports.valueOnEnterAnd = and(valueOnEnter);
	var valueAnd = exports.valueAnd = and(value);

	/*
	 * mouse
	 */

	var positionsImmediate = exports.positionsImmediate = (0, _map3.default)(function (ev) {
	  return [ev.pageX, ev.pageY];
	});

	var xImmediate = exports.xImmediate = (0, _map3.default)(function (ev) {
	  return ev.pageX;
	});

	var yImmediate = exports.yImmediate = (0, _map3.default)(function (ev) {
	  return ev.pageY;
	});

	var positions = exports.positions = (0, _pipe2.default)((0, _throttle2.default)(300), positionsImmediate, _distinct2.default);

	var x = exports.x = (0, _pipe2.default)((0, _throttle2.default)(300), xImmediate, _distinct2.default);

	var y = exports.y = (0, _pipe2.default)((0, _throttle2.default)(300), yImmediate, _distinct2.default);

	/*
	 * window
	 */

	var dimensions = exports.dimensions = (0, _map3.default)(function (ev) {
	  return [ev.target.innerWidth, ev.target.innerHeight];
	});

	var width = exports.width = (0, _map3.default)(function (ev) {
	  return ev.target.innerWidth;
	});

	// from http://foundation.zurb.com/sites/docs/media-queries.html
	var defaultBreakpoints = {
	  xxlarge: 1440,
	  xlarge: 1200,
	  large: 1024,
	  medium: 640,
	  small: 0
	};

	var breakpoint = exports.breakpoint = function breakpoint() {
	  var config = arguments.length <= 0 || arguments[0] === undefined ? defaultBreakpoints : arguments[0];
	  return (0, _pipe2.default)(width, (0, _map3.default)(function (width) {
	    return (0, _head2.default)((0, _find2.default)(function (_ref) {
	      var _ref2 = _slicedToArray(_ref, 2);

	      var breakpoint = _ref2[0];
	      var max = _ref2[1];
	      return width > max;
	    }, (0, _toPairs2.default)(config)));
	  }), _distinct2.default);
	};

	var height = exports.height = (0, _map3.default)(function (ev) {
	  return ev.target.innerHeight;
	});

	var scrollImmediate = exports.scrollImmediate = (0, _map3.default)(function (ev) {
	  return window.pageYOffset || document.body.scrollTop;
	});

	var scroll = exports.scroll = (0, _pipe2.default)(scrollImmediate, (0, _throttle2.default)(300), _distinct2.default);

	/*
	 * sockets
	 */

	var emit = exports.emit = function emit(socket, event) {
	  return (0, _map3.default)(function (value) {
	    return socket.emit(event, value);
	  });
	};

	// forms
	var naiveSerialize = exports.naiveSerialize = (0, _pipe2.default)((0, _map3.default)(function (ev) {
	  return (0, _values2.default)(ev.target);
	}), (0, _map3.default)(function (fields) {
	  return (0, _map5.default)((0, _props2.default)(['name', 'value']), fields);
	}));

	var formData = exports.formData = (0, _map3.default)(function (ev) {
	  return new FormData(ev.target);
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _pipe = __webpack_require__(93);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_pipe).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _curry = __webpack_require__(3);

	var _curry2 = _interopRequireDefault(_curry);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _curry2.default)(function (eventSource, next) {
	  var lastValue = void 0;

	  eventSource(function (value) {
	    if (lastValue !== value) {
	      next(lastValue = value);
	    }
	  });
	}); /*
	     * `distinct` remembers the previous emited value and only emits a new one if
	     * it changes.
	     *
	     * ```
	     * distinct
	     * ```
	     * changes 1122234556
	     * emits   1-2--345-6
	     *
	     */

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _build = __webpack_require__(20);

	var _build2 = _interopRequireDefault(_build);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _build2.default)(function (handler, next, value) {
	  if (handler(value)) next(value);
	}); /*
	     * `filter` gets the current value in the process and pass it along if a given
	     * condition is satisfied.
	     *
	     * ```
	     * map(eq(5))
	     * ```
	     * changes 1234565432123456
	     * emits   ----5-5-------5-
	     *
	     */

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _build = __webpack_require__(20);

	var _build2 = _interopRequireDefault(_build);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _build2.default)(function (predicate, next, value) {
	  var result = predicate(value);
	  if (result) next(result);
	}); /*
	     * `filterMap` differ from `filter` in that it doesn't pass the received value
	     * but the value it returns, unless it's falsey.
	     *
	     * ```
	     * filterMap(eq(5))
	     * ```
	     * changes 1234565432123456
	     * emits   ----T-T-------T-
	     *
	     */

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _curry = __webpack_require__(3);

	var _curry2 = _interopRequireDefault(_curry);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _curry2.default)(function (step, initial, eventSource, next) {
	  var accumulated = initial;
	  eventSource(function (value) {
	    return next(accumulated = step(accumulated, value));
	  });
	}); /*
	     * `fold` accumulates the received values. Also known as `reduce` or `inject`
	     * elsewhere. It gets a second parameter that represents the initial value to
	     * be accumulated.
	     *
	     * ```
	     * fold(add, 0)
	     * ```
	     * changes 110120211
	     * emits   122355789
	     *
	     */

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _curry = __webpack_require__(3);

	var _curry2 = _interopRequireDefault(_curry);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _curry2.default)(function (eventSource, next) {
	  eventSource(next);
	}); /*
	     * `identity` simply passes along the value received. Analog to `id` in Haskell
	     * and other languages.
	     *
	     * ```
	     * identity
	     * ```
	     * changes 1234567890
	     * emits   1234567890
	     *
	     */

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _build = __webpack_require__(20);

	var _build2 = _interopRequireDefault(_build);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _build2.default)(function (handler, next, value) {
	  next(handler(value));
	}); /*
	     * `map` gets the current value in the process and returns a new one.
	     *
	     * ```
	     * map(add(1))
	     * ```
	     * changes 12345678
	     * emits   23456789
	     *
	     */

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _curry = __webpack_require__(3);

	var _curry2 = _interopRequireDefault(_curry);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _curry2.default)(function (ms, eventSource, next) {
	  console.log('thr', ms, '|', eventSource, next);
	  var last = void 0,
	      timer = void 0;

	  eventSource(function (value) {
	    var now = performance.now();

	    if (timer) {
	      clearTimeout(timer);
	    }

	    if (!last || now - last > ms) {
	      last = now;
	      next(value);
	    } else {
	      timer = setTimeout(function () {
	        next(value);
	      }, ms - (now - last));
	    }
	  });
	}); /* globals performance */

	/*
	 * `throttle` buffers emitting the value for a given amount of time, in
	 * milliseconds.
	 *
	 * throttle 3000 (assuming each change happens in 1s)
	 * changes 123456789012345678---
	 * emits   1---5---9---3---7---8
	 *
	 */

/***/ },
/* 130 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FromEvent = function () {
	  function FromEvent(node, event, useCapture) {
	    _classCallCheck(this, FromEvent);

	    this.node = node;
	    this.event = event;
	    this.useCapture = useCapture;
	    this.stopped = false;
	  }

	  _createClass(FromEvent, [{
	    key: "start",
	    value: function start(initialValue) {
	      var _this = this;

	      return function (next) {
	        if (_this.stopped) {
	          return;
	        }

	        _this.next = next;
	        _this.node.addEventListener(_this.event, _this.next, !!_this.useCapture);
	        if (initialValue) {
	          _this.next(initialValue);
	        }
	      };
	    }
	  }, {
	    key: "stop",
	    value: function stop() {
	      this.stopped = true;
	      this.node.removeEventListener(this.event, this.next, !!this.useCapture);
	    }
	  }]);

	  return FromEvent;
	}();

	exports.default = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return new (Function.prototype.bind.apply(FromEvent, [null].concat(args)))();
	};

/***/ },
/* 131 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Stores and loads current state in applications.
	 *
	 * Only accepts JSON, so beware of simple strings & numbers.
	 * Used as an argument to `main`.
	 * @example
	 *   import localStorage from '@act/core/storages/localStorage'
	 *
	 *   main(view, { storage: localStorage }
	 */

	// TODO: check if localStorage is unique by tab/domain
	// else would have to improve storage key

	/**
	 * Gets the currently stored JSON
	 *
	 * @returns {json}
	 */
	var get = function get() {
	  return JSON.parse(window.localStorage.getItem('__act'));
	};

	/**
	 * Sets the stored JSON
	 *
	 * @params {json} json
	 */
	var set = function set(json) {
	  return window.localStorage.setItem('__act', JSON.stringify(json));
	};

	exports.default = { get: get, set: set };

/***/ },
/* 132 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ }
/******/ ]);