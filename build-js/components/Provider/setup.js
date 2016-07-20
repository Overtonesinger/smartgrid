'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _storage = require('../../libs/storage');

var _storage2 = _interopRequireDefault(_storage);

var _persist = require('../../libs/persist');

var _persist2 = _interopRequireDefault(_persist);

var _DaTabStore = require('../../stores/DaTabStore');

var _DaTabStore2 = _interopRequireDefault(_DaTabStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (alt) {
	alt.addStore('DaTabStore', _DaTabStore2.default);

	(0, _persist2.default)(alt, (0, _storage2.default)(localStorage), 'app');
};