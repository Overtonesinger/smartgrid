'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _LaneActions = require('../actions/LaneActions');

var _LaneActions2 = _interopRequireDefault(_LaneActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LaneStore = function () {
	function LaneStore() {
		_classCallCheck(this, LaneStore);

		this.bindActions(_LaneActions2.default);
		this.lanes = [];
	}

	_createClass(LaneStore, [{
		key: 'create',
		value: function create(lane) {
			lane.notes = lane.notes || []; // If no 'notes' provided, default to empty array.

			this.setState({
				lanes: this.lanes.concat(lane)
			});
		}
	}, {
		key: 'update',
		value: function update(updatedLane) {
			this.setState({
				lanes: this.lanes.map(function (lane) {
					if (lane.id === updatedLane.id) {
						return _extends({}, lane, updatedLane);
					}
					return lane;
				})
			});
		}
	}, {
		key: 'delete',
		value: function _delete(id) {
			this.setState({
				lanes: this.lanes.filter(function (lane) {
					return lane.id !== id;
				})
			});
		}
	}, {
		key: 'attachToLane',
		value: function attachToLane(_ref) {
			var laneId = _ref.laneId;
			var noteId = _ref.noteId;

			this.setState({
				lanes: this.lanes.map(function (lane) {
					if (lane.notes.indexOf(noteId) !== -1) {
						lane.notes = lane.notes.filter(function (note) {
							return note !== noteId;
						});
					}
					if (lane.id === laneId) {
						lane.notes = lane.notes.concat([noteId]);
					}
					return lane;
				})
			});
		}
	}, {
		key: 'detachFromLane',
		value: function detachFromLane(_ref2) {
			var laneId = _ref2.laneId;
			var noteId = _ref2.noteId;

			this.setState({
				lanes: this.lanes.map(function (lane) {
					if (lane.id === laneId) {
						lane.notes = lane.notes.filter(function (note) {
							return note !== noteId;
						});
					}
					return lane;
				})
			});
		}
	}, {
		key: 'move',
		value: function move(_ref3) {
			var sourceId = _ref3.sourceId;
			var targetId = _ref3.targetId;

			var lanes = this.lanes;
			var sourceLane = lanes.filter(function (lane) {
				return lane.notes.indexOf(sourceId) !== -1;
			})[0];
			var targetLane = lanes.filter(function (lane) {
				return lane.notes.indexOf(targetId) !== -1;
			})[0];
			var sourceNoteIndex = sourceLane.notes.indexOf(sourceId);
			var targetNoteIndex = targetLane.notes.indexOf(targetId);

			if (sourceLane === targetLane) {
				// move at once to avoid complications
				sourceLane.notes = (0, _reactAddonsUpdate2.default)(sourceLane.notes, {
					$splice: [[sourceNoteIndex, 1], [targetNoteIndex, 0, sourceId]]
				});
			} else {
				sourceLane.notes.splice(sourceNoteIndex, 1); // get rid of the source
				targetLane.notes.splice(targetNoteIndex, 0, sourceId); // and move it to the target
			}

			this.setState({ lanes: lanes });
		}
	}]);

	return LaneStore;
}();

exports.default = LaneStore;