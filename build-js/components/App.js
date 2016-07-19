'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = App;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppComponent = require('./AppComponent');

var _AppComponent2 = _interopRequireDefault(_AppComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// App serves as a container to hold references of SmartGrids living inside of it.
function App() {
	return _react2.default.createElement(_AppComponent2.default, null);
}