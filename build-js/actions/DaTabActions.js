'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _alt = require('../libs/alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _alt2.default.generateActions('create', 'update', 'delete', 'attachToLane', 'detachFromLane', 'move');