import React from 'react';
import uuid from 'uuid';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';
import NoteStore from '../stores/NoteStore';
import connect from '../decorators/connect';


export default ({LaneActions, lanes, ...props}) => {
	return <AppComponent
		LaneActions={LaneActions}
		lanes={lanes}
		{...props} />;
}
/*---WORKAROUND wrong syntax-highlight STOPPER---*/

//@connect(NoteStore)
class AppComponent extends React.Component {
	render() {
		// destructuring assignment which consumes some of the props, before passing ONLY the remaining
		// props down the tree. Doc: https://facebook.github.io/react/docs/transferring-props.html
		const {LaneActions, lanes, ...props} = this.props;

		return <div>
				<button
					className="add-lane"
					onClick={this.addLane} >+</button>
				<Lanes lanes={lanes} {...props} />
			</div>;
	}
	/* ------------wrong syntax-highlight STOPPER!------------- */

	addLane() {
		const {LaneActions, lanes, ...props} = this.props;

		LaneActions.create({
			id: uuid.v4(),
			name: 'New lane'
		});
	}
}
