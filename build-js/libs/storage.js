"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (storage) {
	return {
		get: function get(k) {
			try {
				return JSON.parse(storage.getItem(k));
			} catch (e) {
				return null;
			}
		},
		set: function set(k, v) {
			storage.setItem(k, JSON.stringify(v));
		}
	};
};