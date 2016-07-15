'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchAll = fetchAll;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _dataMock = require('./data-mock.js');

var _dataMock2 = _interopRequireDefault(_dataMock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchAll() {
	var data = arguments.length <= 0 || arguments[0] === undefined ? _dataMock2.default : arguments[0];

	var columns = _lodash2.default.map(data.schema, function (item) {
		return _lodash2.default.omit(item, 'datatype');
	});
	var names = _lodash2.default.pluck(data.schema, 'name');
	var rows = _lodash2.default.map(data.data, function (values, id) {
		var item = _lodash2.default.reduce(values, function (acu, value, key) {
			acu[names[key]] = value;
			return acu;
		}, {});
		return _lodash2.default.extend(item, { id: id.toString() });
	});

	return { rows: rows, names: names };
}