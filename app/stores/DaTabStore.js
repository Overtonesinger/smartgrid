import update from 'react-addons-update';
import DaTabActions from '../actions/DaTabActions';


export default class DaTabStore {
	constructor() {
		this.bindActions(DaTabActions);
		this.lanes = [];
	}

	create(lane) {
		lane.notes = lane.notes || [];	// If no 'notes' provided, default to empty array.

		this.setState({
			lanes: this.lanes.concat(lane)
		});
	}

	update(updatedLane) {
		this.setState({
			lanes: this.lanes.map(lane => {
				if(lane.id === updatedLane.id) {
					return Object.assign({}, lane, updatedLane);
				}
				return lane;
			})
		});
	}

	delete(id) {
		this.setState({
			lanes: this.lanes.filter(lane => lane.id !== id)
		});
	}

	attachToLane({laneId, noteId}) {
		this.setState({
			lanes: this.lanes.map(lane => {
				if(lane.notes.includes(noteId)) {
					lane.notes = lane.notes.filter(note => note !== noteId);
				}
				if(lane.id === laneId) {
					lane.notes = lane.notes.concat([noteId]);
				}
				return lane;
			})
		});
	}

	detachFromLane({laneId, noteId}) {
		this.setState({
			lanes: this.lanes.map(lane => {
				if(lane.id === laneId) {
					lane.notes = lane.notes.filter(note => note !== noteId);
				}
				return lane;
			})
		});
	}

	move({sourceId, targetId}) {
		const lanes = this.lanes;
		const sourceLane = lanes.filter(lane => lane.notes.includes(sourceId))[0];
		const targetLane = lanes.filter(lane => lane.notes.includes(targetId))[0];
		const sourceNoteIndex: number = sourceLane.notes.indexOf(sourceId);
		const targetNoteIndex: number = targetLane.notes.indexOf(targetId);

		if(sourceLane === targetLane) {
			// move at once to avoid complications
			sourceLane.notes = update(sourceLane.notes, {
				$splice: [
					[sourceNoteIndex, 1],
					[targetNoteIndex, 0, sourceId]
				]
			});
		}
		else {
			sourceLane.notes.splice(sourceNoteIndex, 1);	// get rid of the source
			targetLane.notes.splice(targetNoteIndex, 0, sourceId);	// and move it to the target
		}

		this.setState({lanes});
	}
}
