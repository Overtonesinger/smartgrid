import React from 'react';
//import connect from '../decorators/connect';
import DaTable from './DaTable';


//@connect(NoteStore)
class AppComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		// destructuring assignment which consumes some of the props, before passing ONLY the remaining
		// props down the tree. Doc: https://facebook.github.io/react/docs/transferring-props.html
		const props = this.props;

		return <DaTable />;
	}
	/*---WORKAROUND wrong syntax-highlight STOPPER---*/
}
