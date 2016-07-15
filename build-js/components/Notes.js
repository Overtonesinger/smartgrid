'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Note = require('./Note');

var _Note2 = _interopRequireDefault(_Note);

var _Editable = require('./Editable');

var _Editable2 = _interopRequireDefault(_Editable);

var _LaneActions = require('../actions/LaneActions');

var _LaneActions2 = _interopRequireDefault(_LaneActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var notes = _ref.notes;
	var _ref$onNoteClick = _ref.onNoteClick;
	var onNoteClick = _ref$onNoteClick === undefined ? function () {} : _ref$onNoteClick;
	var _ref$onEdit = _ref.onEdit;
	var onEdit = _ref$onEdit === undefined ? function () {} : _ref$onEdit;
	var _ref$onDelete = _ref.onDelete;
	var onDelete = _ref$onDelete === undefined ? function () {} : _ref$onDelete;
	return _react2.default.createElement(
		'ul',
		{ className: 'notes' },
		notes.map(function (_ref2) {
			var id = _ref2.id;
			var editing = _ref2.editing;
			var task = _ref2.task;
			return _react2.default.createElement(
				'li',
				{ key: id },
				_react2.default.createElement(
					_Note2.default,
					{ className: 'note', id: id,
						editing: editing,
						onClick: onNoteClick.bind(null, id),
						onMove: _LaneActions2.default.move },
					_react2.default.createElement(_Editable2.default, { editing: editing, value: task, onEdit: onEdit.bind(null, id) }),
					_react2.default.createElement(
						'button',
						{
							className: 'delete',
							onClick: onDelete.bind(null, id) },
						'x'
					)
				)
			);
		})
	);
};