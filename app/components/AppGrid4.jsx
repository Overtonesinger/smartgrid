import React from 'react'
import ReactDataGrid from 'react-data-grid';

export default class AppGrid4 extends React.Component {
  constructor(props) {
    super(props);

    const { rows, columns, ...rest } = props;
    //this.props = ...rest;

    this.className = 'a4';
    this._rows = rows;
    this.columns = columns;

    //A rowGetter function is required by the grid to retrieve a row for a given index
    this.rowGetter = this.rowGetter.bind(this);
  }

  rowGetter(i) {
    return this._rows[i];
  }

  render() {
    return <ReactDataGrid
      columns={this.columns}
      rowGetter={this.rowGetter}
      rowsCount={this._rows.length}
      _rows={this._rows}
      minHeight={172}
      className={this.className} />;

    /* ---WORKAROUND wrong syntax-highlight STOPPER--- */
  }
}
