'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _connect = require('../libs/connect');

var _connect2 = _interopRequireDefault(_connect);

var _NoteActions = require('../actions/NoteActions');

var _NoteActions2 = _interopRequireDefault(_NoteActions);

var _LaneActions = require('../actions/LaneActions');

var _LaneActions2 = _interopRequireDefault(_LaneActions);

var _Editable = require('./Editable');

var _Editable2 = _interopRequireDefault(_Editable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _connect2.default)(function () {
	return {};
}, {
	NoteActions: _NoteActions2.default,
	LaneActions: _LaneActions2.default
})(function (_ref) {
	var lane = _ref.lane;
	var LaneActions = _ref.LaneActions;
	var NoteActions = _ref.NoteActions;

	var props = _objectWithoutProperties(_ref, ['lane', 'LaneActions', 'NoteActions']);

	var addNote = function addNote(e) {
		e.stopPropagation();
		var noteId = _uuid2.default.v4();

		NoteActions.create({
			id: noteId,
			task: 'New task'
		});
		LaneActions.attachToLane({
			laneId: lane.id,
			noteId: noteId
		});
	};

	var activateLaneEdit = function activateLaneEdit() {
		LaneActions.update({
			id: lane.id,
			editing: true
		});
	};

	var editName = function editName(name) {
		LaneActions.update({
			id: lane.id,
			name: name,
			editing: false
		});
	};

	var deleteLane = function deleteLane(e) {
		e.stopPropagation(); // Avoid bubbling to edit
		LaneActions.delete(lane.id);
	};

	return _react2.default.createElement(
		'div',
		_extends({ className: 'lane-header', onClick: activateLaneEdit }, props),
		_react2.default.createElement(
			'div',
			{ className: 'lane-add-note' },
			_react2.default.createElement(
				'button',
				{ onClick: addNote },
				'+'
			)
		),
		_react2.default.createElement(_Editable2.default, { className: 'lane-name', editing: lane.editing,
			value: lane.name, onEdit: editName }),
		_react2.default.createElement(
			'div',
			{ className: 'lane-delete' },
			_react2.default.createElement(
				'button',
				{ onClick: deleteLane },
				'x'
			)
		)
	);
});