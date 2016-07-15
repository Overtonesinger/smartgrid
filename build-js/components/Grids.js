'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('./Grid');

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var grids = _ref.grids;
	return _react2.default.createElement(
		'ul',
		{ className: 'grids' },
		grids.map(function (_ref2) {
			var id = _ref2.id;
			return _react2.default.createElement(
				'li',
				{ key: id },
				_react2.default.createElement(_Grid2.default, { className: 'grid', id: id })
			);
		})
	);
};