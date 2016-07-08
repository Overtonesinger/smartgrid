import React from 'react';
import uuid from 'uuid';

import {compose} from 'redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import connect from '../libs/connect';


const App = ({grids}) => {

	return (
		<div>
			<Grids grids={grids} />
		</div>
	);
};
/* ------------wrong syntax-highlight STOPPER!------------- */


export default connect({grids}) => ({
    grids
  })
(App)
