'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _reactDatagrid = require('react-datagrid');

var _reactDatagrid2 = _interopRequireDefault(_reactDatagrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DaTable = function (_React$Component) {
	_inherits(DaTable, _React$Component);

	function DaTable(props) {
		_classCallCheck(this, DaTable);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DaTable).call(this, props));

		_this.props.id = _uuid2.default.v4();
		return _this;
	}

	_createClass(DaTable, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_reactDatagrid2.default, { columns: this.props.columns,
				dataSource: this.props.rows,
				idProperty: this.props.id,
				style: this.props.style });
		}
	}]);

	return DaTable;
}(_react2.default.Component);

exports.default = DaTable;