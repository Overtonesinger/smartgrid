import React from 'react'
import Grid from './Grid'

export default ({grids}) => (

  <ul className='grids'>
    {grids.map(({id}) => <li key={id}>
                           <Grid className='grid' id={id} />
                         </li>
     )}
  </ul>
)
