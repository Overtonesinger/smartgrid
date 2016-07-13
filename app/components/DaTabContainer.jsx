import React from 'react'
import DaTable from './DataTable'

export default class DaTabContainer extends React.Component {
	render() {
		const styles = {height: 500, width: '100%', border: '1px solid gray'};
		return
		  <div>
				<DaTable columns={this.props.columns}
						rows={this.props.rows}
						style={styles}/>
			</div>;
	}
}
