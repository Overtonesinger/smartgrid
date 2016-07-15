'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (alt, storage, storageName) {
	try {
		alt.bootstrap(storage.get(storageName));
	} catch (e) {
		console.error('Failed to bootstrap data', e);
	}

	alt.FinalStore.listen(function () {
		if (!storage.get('debug')) {
			storage.set(storageName, alt.takeSnapshot());
		}
	});
};