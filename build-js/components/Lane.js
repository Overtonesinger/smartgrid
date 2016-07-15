'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactDnd = require('react-dnd');

var _itemTypes = require('../constants/itemTypes');

var _itemTypes2 = _interopRequireDefault(_itemTypes);

var _connect = require('../libs/connect');

var _connect2 = _interopRequireDefault(_connect);

var _NoteActions = require('../actions/NoteActions');

var _NoteActions2 = _interopRequireDefault(_NoteActions);

var _LaneActions = require('../actions/LaneActions');

var _LaneActions2 = _interopRequireDefault(_LaneActions);

var _Notes = require('./Notes');

var _Notes2 = _interopRequireDefault(_Notes);

var _LaneHeader = require('./LaneHeader');

var _LaneHeader2 = _interopRequireDefault(_LaneHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Lane = function Lane(_ref) {
	var connectDropTarget = _ref.connectDropTarget;
	var lane = _ref.lane;
	var notes = _ref.notes;
	var LaneActions = _ref.LaneActions;
	var NoteActions = _ref.NoteActions;

	var props = _objectWithoutProperties(_ref, ['connectDropTarget', 'lane', 'notes', 'LaneActions', 'NoteActions']);

	var editNote = function editNote(id, task) {
		NoteActions.update({ id: id, task: task, editing: false });
	};

	var deleteNote = function deleteNote(noteId, e) {
		e.stopPropagation();

		LaneActions.detachFromLane({
			laneId: lane.id,
			noteId: noteId
		});
		NoteActions.delete(noteId);
	};

	var activateNoteEdit = function activateNoteEdit(id) {
		NoteActions.update({ id: id, editing: true });
	};

	return connectDropTarget(_react2.default.createElement(
		'div',
		props,
		_react2.default.createElement(_LaneHeader2.default, { lane: lane }),
		_react2.default.createElement(_Notes2.default, {
			notes: selectNotesByIds(notes, lane.notes),
			onNoteClick: activateNoteEdit,
			onEdit: editNote,
			onDelete: deleteNote })
	));
};
/*---WORKAROUND wrong syntax-highlight STOPPER---*/

function selectNotesByIds(allNotes) {
	var noteIds = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	// "reduce" is a powerful method that allows us to
	// fold data. You can implement 'filter' and 'map'
	// through it. Here we are using it to concatenate
	// notes matching to the ids.
	return noteIds.reduce(function (notes, id) {
		return(
			// Concatenate possible matching ids to the result
			notes.concat(allNotes.filter(function (note) {
				return note.id === id;
			}))
		);
	}, []);
}

var noteTarget = {
	hover: function hover(targetProps, monitor) {
		var sourceProps = monitor.getItem();
		var sourceId = sourceProps.id;

		// If the target lane doesn't have notes,
		// attach the note to it.
		//
		// 'attachToLane' performs necessarly
		// cleanup by default and it guarantees
		// a note can belong only to a single lane
		// at a time.
		if (!targetProps.lane.notes.length) {
			_LaneActions2.default.attachToLane({
				laneId: targetProps.lane.id,
				noteId: sourceId
			});
		}
	}
};

exports.default = (0, _redux.compose)((0, _reactDnd.DropTarget)(_itemTypes2.default.NOTE, noteTarget, function (connect) {
	return {
		connectDropTarget: connect.dropTarget()
	};
}), (0, _connect2.default)(function (_ref2) {
	var notes = _ref2.notes;
	return {
		notes: notes
	};
}, {
	NoteActions: _NoteActions2.default,
	LaneActions: _LaneActions2.default
}))(Lane);