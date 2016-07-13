import _ from 'lodash'
import mockData from './data-mock.js'

export function fetchAll(data = mockData) {
	const columns = _.map(data.schema, (item) => _.omit(item, 'datatype'));
	const names = _.pluck(data.schema, 'name');
	const rows = _.map(data.data, (values, id) => {
		const item = _.reduce(values, (acu, value, key) => {
			acu[names[key]] = value;
			return acu;
		}, {});
		return _.extend(item, {id: id.toString()});
	});

	return {rows, names};
}
