import assert from 'assert';
import _ from 'underscore'

var pizzas = [
  { title: 'Four cheese', vegetarian: true },
  { title: 'Margherita', vegetarian: true },
  { title: 'Pepperoni', vegetarian: false },
  { title: 'Hawaiian', vegetarian: false }
]

function vegetarianPizza () {
  return _.findWhere(pizzas, {vegetarian: true})
}

//Destructuring function arguments (ES2015)
function Destructuring_F_Arguments({ text1, text2, text3 }) {
  return String.concat(text1, text2, text3);
}

describe('add', function() {
  it('adds', function() {
    assert.equal(1 + 1, 2);
  });
});

describe('findWhere', function() {
  it('finds vegePizza', function() {
    assert.deepEqual( vegetarianPizza(), { title: 'Four cheese', vegetarian: true } );
  });
});
