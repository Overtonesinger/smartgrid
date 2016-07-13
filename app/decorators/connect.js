import React from 'react';
// import store from '../stores/NoteStore';

const connect = (TargetComponent, store) => {
	return class Connect extends React.Component {
		constructor(props) {
			super(props);

			this.storeChanged = this.storeChanged.bind(this);
			this.state = store.getState();

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

export default (store) => {
	return (target) => connect(target, store);
};
