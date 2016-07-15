'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _altContainer = require('alt-container');

var _altContainer2 = _interopRequireDefault(_altContainer);

var _chromeDebug = require('alt-utils/lib/chromeDebug');

var _chromeDebug2 = _interopRequireDefault(_chromeDebug);

var _alt = require('../../libs/alt');

var _alt2 = _interopRequireDefault(_alt);

var _setup = require('./setup');

var _setup2 = _interopRequireDefault(_setup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _setup2.default)(_alt2.default);
(0, _chromeDebug2.default)(_alt2.default);

_react2.default.Perf = require('react-addons-perf');

exports.default = function (_ref) {
	var children = _ref.children;
	return _react2.default.createElement(
		_altContainer2.default,
		{ flux: _alt2.default },
		children
	);
};