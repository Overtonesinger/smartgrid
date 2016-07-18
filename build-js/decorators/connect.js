'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import store from '../stores/NoteStore';
// +++ b/app/decorators/connect.js

var connect = function connect(TargetComponent, store) {
	var Connect = function (_React$Component) {
		_inherits(Connect, _React$Component);

		function Connect(props, context) {
			_classCallCheck(this, Connect);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Connect).call(this, props, context));

			var flux = context.flux;

			// XXX: it would be better to match using name so just pass a string
			// now i have to dig it and this will break in some browsers

			var fluxStore = flux.stores[store.name];

			_this.fluxStore = fluxStore;
			_this.storeChanged = _this.storeChanged.bind(_this);
			_this.state = fluxStore.getState();

			fluxStore.listen(_this.storeChanged);
			return _this;
		}

		_createClass(Connect, [{
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				_get(Object.getPrototypeOf(Connect.prototype), 'componentWillUnmount', this).call(this);
				this.fluxStore.unlisten(this.storeChanged);
			}
		}, {
			key: 'storeChanged',
			value: function storeChanged() {
				this.setState(this.fluxStore.getState());
				console.log('storeChanged() connect-decor.!');
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(TargetComponent, _extends({}, this.props, this.state));
			}
			/*----WORKAROUND wrong syntax-highlight STOPPER----*/

		}]);

		return Connect;
	}(_react2.default.Component);

	Connect.contextTypes = {
		flux: _react2.default.PropTypes.object.isRequired
	};

	return Connect;
};