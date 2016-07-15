'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _Lanes = require('./Lanes');

var _Lanes2 = _interopRequireDefault(_Lanes);

var _LaneActions = require('../actions/LaneActions');

var _LaneActions2 = _interopRequireDefault(_LaneActions);

var _NoteStore = require('../stores/NoteStore');

var _NoteStore2 = _interopRequireDefault(_NoteStore);

var _connect = require('../decorators/connect');

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
	var LaneActions = _ref.LaneActions;
	var lanes = _ref.lanes;

	var props = _objectWithoutProperties(_ref, ['LaneActions', 'lanes']);

	return _react2.default.createElement(AppComponent, _extends({
		LaneActions: LaneActions,
		lanes: lanes
	}, props));
};
/*---WORKAROUND wrong syntax-highlight STOPPER---*/

var AppComponent = (_dec = (0, _connect2.default)(_NoteStore2.default), _dec(_class = function (_React$Component) {
	_inherits(AppComponent, _React$Component);

	function AppComponent() {
		_classCallCheck(this, AppComponent);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AppComponent).apply(this, arguments));
	}

	_createClass(AppComponent, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var LaneActions = _props.LaneActions;
			var lanes = _props.lanes;

			var props = _objectWithoutProperties(_props, ['LaneActions', 'lanes']); // destructuring assignment which consumes some of the props, before passing ONLY the remaining props down the line (to children).  /// React doc.: https://facebook.github.io/react/docs/transferring-props.html

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'button',
					{
						className: 'add-lane',
						onClick: this.addLane },
					'+'
				),
				_react2.default.createElement(_Lanes2.default, _extends({ lanes: lanes }, props))
			);
		}
		/* ------------wrong syntax-highlight STOPPER!------------- */

	}, {
		key: 'addLane',
		value: function addLane() {
			var _props2 = this.props;
			var LaneActions = _props2.LaneActions;
			var lanes = _props2.lanes;

			var props = _objectWithoutProperties(_props2, ['LaneActions', 'lanes']);

			LaneActions.create({
				id: _uuid2.default.v4(),
				name: 'New lane'
			});
		}
	}]);

	return AppComponent;
}(_react2.default.Component)) || _class);