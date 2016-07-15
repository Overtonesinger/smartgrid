'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NoteActions = require('../actions/NoteActions');

var _NoteActions2 = _interopRequireDefault(_NoteActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NoteStore = function () {
	function NoteStore() {
		_classCallCheck(this, NoteStore);

		this.bindActions(_NoteActions2.default);
		this.notes = [];
	}

	_createClass(NoteStore, [{
		key: 'create',
		value: function create(note) {
			this.setState({
				notes: this.notes.concat(note)
			});
		}
	}, {
		key: 'update',
		value: function update(updatedNote) {
			this.setState({
				notes: this.notes.map(function (note) {
					if (note.id === updatedNote.id) {
						return _extends({}, note, updatedNote);
					}

					return note;
				})
			});
		}
	}, {
		key: 'delete',
		value: function _delete(id) {
			this.setState({
				notes: this.notes.filter(function (note) {
					return note.id !== id;
				})
			});
		}

		//getState() {
		//	return this.state;
		//}

	}]);

	return NoteStore;
}();

exports.default = NoteStore;