'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BaseComponent = require('./BaseComponent');

var _BaseComponent2 = _interopRequireDefault(_BaseComponent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _log = require('../decorators/log');

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // this._bind() ....... the "mass-binder"


exports.default = function (_ref) {
	var editing = _ref.editing;
	var value = _ref.value;
	var onEdit = _ref.onEdit;
	var className = _ref.className;

	var props = _objectWithoutProperties(_ref, ['editing', 'value', 'onEdit', 'className']);

	if (editing) {
		return _react2.default.createElement(Edit, _extends({
			className: className,
			value: value,
			onEdit: onEdit
		}, props));
	}
	/*---WORKAROUND wrong syntax-highlight STOPPER---*/

	// if NOT editing...
	return _react2.default.createElement(
		'span',
		_extends({ className: (0, _classnames2.default)('value', className) }, props),
		value
	);
};
/*---WORKAROUND wrong syntax-highlight STOPPER---*/

var Edit = (_class = function (_Base) {
	_inherits(Edit, _Base);

	function Edit() {
		var _Object$getPrototypeO;

		var _temp, _this, _ret;

		_classCallCheck(this, Edit);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Edit)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.checkEnter = function (e) {
			if (e.key === 'Enter') {
				_this.finishEdit(e);
			}
		}, _initDefineProp(_this, 'finishEdit', _descriptor, _this), _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Edit, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var className = _props.className;
			var value = _props.value;
			var onEdit = _props.onEdit;

			var props = _objectWithoutProperties(_props, ['className', 'value', 'onEdit']);

			return _react2.default.createElement('input', _extends({
				type: 'text',
				className: (0, _classnames2.default)('edit', className),
				autoFocus: true,
				defaultValue: value,
				onBlur: this.finishEdit,
				onKeyPress: this.checkEnter
			}, props));
		}
		/*---WORKAROUND wrong syntax-highlight STOPPER---*/

	}]);

	return Edit;
}(_BaseComponent2.default), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'finishEdit', [_log2.default], {
	enumerable: true,
	initializer: function initializer() {
		var _this2 = this;

		return function (e) {
			var value = e.target.value;

			if (_this2.props.onEdit) {
				_this2.props.onEdit(value);
			}
		};
	}
})), _class);