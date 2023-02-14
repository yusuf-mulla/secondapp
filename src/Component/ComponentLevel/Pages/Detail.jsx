import React from 'react'
import { Button, Grid } from '@mui/material'
import { useLocation } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const Detail = () => {
const location=useLocation()
const data=location.state
console.log(data);
 



  return (
  <React.Fragment>
    <Grid container>
      <Grid item xs={6}>
        <img src={data.image} alt="" />
      </Grid>
      <Grid item xs={6}>
        <h1> Title : {data.title}</h1>
        <h3> Description:{data.description}</h3>
        <h4> Prise: $ {data.price}</h4>
        <h2><span ><RemoveIcon className='add-icone'

        /></span>
        {data.userQuantity}
        <span><AddIcon className='add-icone'
        /></span></h2>
        <Button variant='contained'>Add to Cart</Button>

      </Grid>
    </Grid>
  </React.Fragment>

  )
}
