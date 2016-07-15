'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = log;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function log(target, name, descriptor) {
	var oldValue = descriptor.value;

	descriptor.value = function () {
		console.log('Calling "' + name + '" with', arguments);

		return oldValue.apply(null, arguments);
	};

	return descriptor;
}