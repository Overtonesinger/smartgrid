'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Provider = require('./components/Provider');

var _Provider2 = _interopRequireDefault(_Provider);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pizzas = [{ title: 'Four cheese', vegetarian: true }, { title: 'Margherita', vegetarian: true }, { title: 'Pepperoni', vegetarian: false }, { title: 'Hawaiian', vegetarian: false }];

function vegetarianPizzas() {
	return _underscore2.default.findWhere(pizzas, { vegetarian: true });
}

console.log('DEBUG TEST of library _ :');
console.log(vegetarianPizzas()); // DEBUG and testing only!

_reactDom2.default.render(_react2.default.createElement(
	_Provider2.default,
	null,
	_react2.default.createElement(_App2.default, null)
), document.getElementById('app'));