import React from 'react';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';

import {compose} from 'redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
//import connect from '../libs/connect';
import App from './AppComponent';

export default compose(
  DragDropContext(HTML5Backend)
)(App)
