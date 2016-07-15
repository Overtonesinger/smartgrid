'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _storage = require('../../libs/storage');

var _storage2 = _interopRequireDefault(_storage);

var _persist = require('../../libs/persist');

var _persist2 = _interopRequireDefault(_persist);

var _NoteStore = require('../../stores/NoteStore');

var _NoteStore2 = _interopRequireDefault(_NoteStore);

var _LaneStore = require('../../stores/LaneStore');

var _LaneStore2 = _interopRequireDefault(_LaneStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (alt) {
	alt.addStore('NoteStore', _NoteStore2.default);
	alt.addStore('LaneStore', _LaneStore2.default);

	(0, _persist2.default)(alt, (0, _storage2.default)(localStorage), 'app');
};