/* @flow */
import _ from 'underscore';

var pizzas = [
	{ title: 'Margherita', vegetarian: true },
	{ title: 'Pepperoni', vegetarian: false },
	{ title: 'Four cheese', vegetarian: true },
	{ title: 'Hawaiian', vegetarian: false },
];

export default function vegetarianPizzas() {
	return _.findWhere(pizzas, {vegetarian: true});
}
