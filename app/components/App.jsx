import React from 'react'
import AppGrid1 from './AppGrid1'
import AppGrid2 from './AppGrid2'
import AppGrid3 from './AppGrid3'
import AppGrid4 from './AppGrid4'
import AppGrid5 from './AppGrid5'

// App serves as a container to hold references of SmartGrids living inside of it.

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const {className, ...rest} = this.props;  //The rest of this.props goes to local const 'rest'

    return <div>
        <AppGrid1 />
        <AppGrid2 />
        <AppGrid3 />
        <AppGrid4 />
        <AppGrid5 />
      </div>;
  }
/* ---WORKAROUND wrong syntax-highlight STOPPER--- */

}
