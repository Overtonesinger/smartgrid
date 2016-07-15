'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = vegetarianPizzas;

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pizzas = [{ title: 'Margherita', vegetarian: true }, { title: 'Pepperoni', vegetarian: false }, { title: 'Four cheese', vegetarian: true }, { title: 'Hawaiian', vegetarian: false }];

function vegetarianPizzas() {
	return _underscore2.default.findWhere(pizzas, { vegetarian: true });
}