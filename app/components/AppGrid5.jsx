import React from 'react'
import ReactDataGrid from 'react-data-grid';

export default class AppGrid5 extends React.Component {
  constructor(props) {
    super(props);

    this._rows = [];
    this.initRows(5);

    this.columns = [
      {
        key: 'id',
        name: 'ID_G5'
      },
      {
        key: 'title',
        name: 'Title_G5'
      },
      {
        key: 'count',
        name: 'Count'
      }
      ];

    //A rowGetter function is required by the grid to retrieve a row for a given index
    this.rowGetter = this.rowGetter.bind(this);
  }

  rowGetter(i) {
    return this._rows[i];
  }

  initRows(rows) {
    for (let i = 1; i < rows; i++) {
      this._rows.push({
        id: i,
        title: 'Title ' + i,
        count: i * 1000
      });
    }
  }

  render() {
    return <ReactDataGrid
      columns={this.columns}
      rowGetter={this.rowGetter}
      rowsCount={this._rows.length}
      _rows={this._rows}
      minHeight={172} />;
  }
}
