import { fetchAll } from './collections'

export const rows = fetchAll().rows

export const columns = [
  {
    name: 'id',
    title: '#',
    width: 50,
    textAlign: 'right',
    render(value) {
      return (parseInt(value) + 1).toString()
    }
  },
  {
    name: 'Model Id',
    title: 'Model Id',
    width: 120,
    textAlign: 'right',
    className: 'datagrid-column'
  },

  {
    name: 'Name',
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  },

  {
    name: 'Short Name',
    title: 'Short Name',
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  },

  {
    name: 'Dynamics',
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  },

  {
    name: 'Description',
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  },

  {
    name: 'Version',
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  },

  {
    name: 'Complexity',
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  },

  {
    name: 'Model Type',
    title: 'Model Type',
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  },

  {
    name: 'Organization',
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  },

  {
    name: 'Status',
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  },

  {
    name: 'Last Changed By',
    title: 'Last Changed By',
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  },

  {
    name: 'Last Changed Date',
    title: 'Last Changed Date',
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  },

  {
    name: 'Model Dev LOB',
    title: 'Model Dev LOB',
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  },

  {
    name: 'Vendor',
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  },

  {
    name: 'Risk Rating',
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  },

  {
    name: 'Basel Flag',
    title: 'Basel Flag',
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  },

  {
    name: 'Country',
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  },

  {
    name: 'EST Flag',
    title: 120,
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  },

  {
    name: 'Validation Ready Date',
    title: 'Validation Ready Date',
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  },

  {
    name: 'Last Model Update Date',
    title: 'Last Model Update Date',
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  },

  {
    name: 'Restricted',
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  },

  {
    name: 'MRM',
    width: 120,
    textAlign: 'left',
    className: 'datagrid-column',
    render(value) {
      return value
    }
  }
]
