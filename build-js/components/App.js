'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Lanes = require('./Lanes');

var _Lanes2 = _interopRequireDefault(_Lanes);

var _LaneActions = require('../actions/LaneActions');

var _LaneActions2 = _interopRequireDefault(_LaneActions);

var _redux = require('redux');

var _reactDnd = require('react-dnd');

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _AppComponent = require('./AppComponent');

var _AppComponent2 = _interopRequireDefault(_AppComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.compose)((0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default))(_AppComponent2.default);
//import connect from '../libs/connect';