import React from 'react'
import uuid from 'uuid'
import DataGrid from 'react-datagrid'

export default class DaTable extends React.Component {
  constructor (props) {
    super(props)
    this.props.id = uuid.v4()
  }

  render () {
    return <DataGrid
             columns={this.props.columns}
             dataSource={this.props.rows}
             idProperty={this.props.id}
             style={this.props.style} />
  }
}
