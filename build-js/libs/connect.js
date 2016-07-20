'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (state, actions) {
	if (typeof state === 'function' || (typeof state === 'undefined' ? 'undefined' : _typeof(state)) === 'object' && Object.keys(state).length) {
		return function (target) {
			return connect(state, actions, target);
		};
	}

	return function (target) {
		return function (props) {
			return _react2.default.createElement('target', _extends({}, props, actions));
		};
	};
};
/*---WORKAROUND wrong syntax-highlight STOPPER---*/

// See AltContainer and connect-alt for optimized solutions.


function connect() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? function () {} : arguments[0];
	var actions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	var target = arguments[2];

	var Connect = function (_React$Component) {
		_inherits(Connect, _React$Component);

		function Connect() {
			var _Object$getPrototypeO;

			var _temp, _this, _ret;

			_classCallCheck(this, Connect);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Connect)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleChange = function () {
				_this.forceUpdate();
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(Connect, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var flux = this.context.flux;


				flux.FinalStore.listen(this.handleChange);
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				var flux = this.context.flux;


				flux.FinalStore.unlisten(this.handleChange);
			}
		}, {
			key: 'render',
			value: function render() {
				var flux = this.context.flux;

				var stores = flux.stores;
				var composedStores = composeStores(stores);

				return _react2.default.createElement(target, _extends({}, this.props, state(composedStores), actions));
			}
		}]);

		return Connect;
	}(_react2.default.Component);

	Connect.contextTypes = {
		flux: _react2.default.PropTypes.object.isRequired
	};

	return Connect;
}

// Transform {store: <AltStore>} to {<store>: store.getState()}
function composeStores(stores) {
	var ret = {};

	Object.keys(stores).forEach(function (k) {
		var store = stores[k];

		// Combine store state
		ret = _extends({}, ret, store.getState());
	});

	return ret;
}