'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Lane = require('./Lane');

var _Lane2 = _interopRequireDefault(_Lane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var lanes = _ref.lanes;
	return _react2.default.createElement(
		'div',
		{ className: 'lanes' },
		lanes.map(function (lane) {
			return _react2.default.createElement(_Lane2.default, { className: 'lane', key: lane.id, lane: lane });
		})
	);
};