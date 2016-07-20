import React from 'react'
import AppComponent1 from './AppComponent1'

// App serves as a container to hold references of SmartGrids living inside of it.

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {className, ...props} = this.props;  //The rest of this.props goes to local const 'props'

    return (
      <div>
        <AppComponent1
          className={className}
          {...props} />
      </div>
    );
  }
}
