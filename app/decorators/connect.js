/* @flow */

import React from 'react';
import NoteStore from '../stores/NoteStore';
import AppComponent from '../components/AppComponent';


const connect = (TargetComponent: AppComponent, store: NoteStore) => {
	return class Connect extends React.Component {
		constructor(props) {
			super(props);

			this.storeChanged = this.storeChanged.bind(this);

			if (typeof store === 'function') this.state = store(props).value;
			else { this.state = store.getState(); }

			store.listen(this.storeChanged);
		}

		componentWillUnmount() {
			super.componentWillUnmount();
			store.unlisten(this.storeChanged);
		}
		storeChanged() {
			this.setState(store.getState());
			console.log('storeChanged() connect-decor.!');
		}
		render() {
			return <TargetComponent {...this.props} {...this.state} />;
		}
	};
};
/*----WORKAROUND wrong syntax-highlight STOPPER----*/

export default (store: NoteStore) => {
	return (target: AppComponent) => connect(target, store);
};
