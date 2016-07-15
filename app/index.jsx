import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Provider from './components/Provider';

import _ from 'underscore';


var pizzas = [
	{ title: 'Four cheese', vegetarian: true },
	{ title: 'Margherita', vegetarian: true },
	{ title: 'Pepperoni', vegetarian: false },
	{ title: 'Hawaiian', vegetarian: false }
];

function vegetarianPizzas() {
	return _.findWhere(pizzas, {vegetarian: true});
}


console.log('DEBUG TEST of library _ :');
console.log( vegetarianPizzas() );  // DEBUG and testing only!


ReactDOM.render(
	<Provider><App /></Provider>,
	document.getElementById('app')
);
