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

    this.gridCount = 5;  // We have five (Datagrid) components here

    this.columns1 = [
      {
        key: 'id',
        name: 'ID'
      },
      {
        key: 'title',
        name: 'Title'
      },
      {
        key: 'count',
        name: 'Count'
      }
    ];
    this.columns2 = [
      {
        key: 'id',
        name: 'ID_G2'
      },
      {
        key: 'title',
        name: 'Title_G2'
      },
      {
        key: 'count',
        name: 'Count'
      }
    ];
    this.columns3 = [
      {
        key: 'id',
        name: 'ID_G3'
      },
      {
        key: 'title',
        name: 'Title_G3'
      },
      {
        key: 'count',
        name: 'Count'
      }
    ];
    this.columns4 = [
      {
        key: 'id',
        name: 'ID_G4'
      },
      {
        key: 'title',
        name: 'Title_G4'
      },
      {
        key: 'count',
        name: 'Count'
      }
    ];
    this.columns5 = [
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

    // Rows - init
    this._rows = [];
    for (let i = 0; i < this.gridCount + 1; i++) {
      this._rows[i] = [];
    }
    this.initRows(1, 10 + 1);
    this.initRows(2, 20 + 1);
    this.initRows(3, 3 + 1);
    this.initRows(4, 4 + 1);
    this.initRows(5, 5 + 1);
  }

  initRows(idx, rowsCnt) {
    for (let i = 1; i < rowsCnt; i++) {
      this._rows[idx].push({
        id: i,
        title: 'Title ' + i,
        count: i * 1000
      });
    }
  }

  render() {
    //const {className, ...rest} = this.props;  //The rest of this.props goes to local const 'rest'

    return <div>
        <AppGrid1 columns={this.columns1} rows={this._rows[1]} />
        <AppGrid2 columns={this.columns2} rows={this._rows[2]} />
        <AppGrid3 columns={this.columns3} rows={this._rows[3]} />
        <AppGrid4 columns={this.columns4} rows={this._rows[4]} />
        <AppGrid5 columns={this.columns5} rows={this._rows[5]} />
      </div>;
  }

}
