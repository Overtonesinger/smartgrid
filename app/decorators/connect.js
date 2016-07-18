import React from 'react';
// import store from '../stores/NoteStore';
		// +++ b/app/decorators/connect.js

const connect = (TargetComponent, store) => {
	class Connect extends React.Component {
		constructor(props, context) {
			super(props, context);
 
			const {flux} = context;

			// XXX: it would be better to match using name so just pass a string
			// now i have to dig it and this will break in some browsers
			const fluxStore = flux.stores[store.name];

			this.fluxStore = fluxStore;
			this.storeChanged = this.storeChanged.bind(this);
			this.state = fluxStore.getState();

			fluxStore.listen(this.storeChanged);
		}

		componentWillUnmount() {
			super.componentWillUnmount();
			this.fluxStore.unlisten(this.storeChanged);
		}

		storeChanged() {
			this.setState(this.fluxStore.getState());
			console.log('storeChanged() connect-decor.!');
		}

		render() {
			return <TargetComponent {...this.props} {...this.state} />;
		}
		/*----WORKAROUND wrong syntax-highlight STOPPER----*/

	}
	Connect.contextTypes = {
		flux: React.PropTypes.object.isRequired
	};

	return Connect;
};
