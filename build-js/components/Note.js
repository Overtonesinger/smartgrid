'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactDnd = require('react-dnd');

var _itemTypes = require('../constants/itemTypes');

var _itemTypes2 = _interopRequireDefault(_itemTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Note = function Note(_ref) {
	var connectDragSource = _ref.connectDragSource;
	var connectDropTarget = _ref.connectDropTarget;
	var isDragging = _ref.isDragging;
	var isOver = _ref.isOver;
	var onMove = _ref.onMove;
	var id = _ref.id;
	var editing = _ref.editing;
	var children = _ref.children;

	var props = _objectWithoutProperties(_ref, ['connectDragSource', 'connectDropTarget', 'isDragging', 'isOver', 'onMove', 'id', 'editing', 'children']);

	// Pass through if we are editing
	var dragSource = editing ? function (a) {
		return a;
	} : connectDragSource;

	return (0, _redux.compose)(dragSource, connectDropTarget)(_react2.default.createElement(
		'div',
		_extends({ style: {
				opacity: isDragging || isOver ? 0 : 1
			} }, props),
		children
	));
};
/* ------------wrong syntax-highlight STOPPER!------------- */

var noteSource = {
	beginDrag: function beginDrag(props) {
		return {
			id: props.id
		};
	}
};

var noteTarget = {
	hover: function hover(targetProps, monitor) {
		var targetId = targetProps.id;
		var sourceProps = monitor.getItem();
		var sourceId = sourceProps.id;

		if (sourceId !== targetId) {
			targetProps.onMove({ sourceId: sourceId, targetId: targetId });
		}
	}
};

exports.default = (0, _redux.compose)((0, _reactDnd.DragSource)(_itemTypes2.default.NOTE, noteSource, function (connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	};
}), (0, _reactDnd.DropTarget)(_itemTypes2.default.NOTE, noteTarget, function (connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver()
	};
}))(Note);