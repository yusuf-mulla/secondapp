import { Button, Checkbox, Grid, Radio, TextField, Typography } from '@mui/material'
import React from 'react'

export const MaterialForm = () => {
  return (
    <div><br />
    <Grid container spacing={3} >
        <Grid item xs={3} ><TextField label="First Name" /></Grid>
        <Grid item xs={3} ><TextField label="Last Name" /></Grid>
        <Grid item xs={3} ><TextField label="Mobile No" type="number" />    </Grid>
        <Grid item xs={3}><TextField label="Email ID" /></Grid>
        <Grid item xs={3}><TextField label="Adress" /></Grid>
        <Grid item xs={3}><TextField label="Pin Code" type="number" /></Grid>
        <Grid item xs={3}><TextField label="City" /></Grid>
        <Grid item xs={3}><TextField label="State" /></Grid>
        <Grid item xs={2}>
            <Typography>Gender</Typography>
            <Radio name='gender'/><Typography variant='span'>Male</Typography> <br /> <br />
            <Radio name='gender'/><Typography variant='span'>Female</Typography> <br /> <br />
            <Radio name='gender'/><Typography variant='span'>Other</Typography>
            </Grid>
            <Grid item xs={10}></Grid>
        <Grid item xs={5}><Checkbox/>
            <Typography variant='span'>Please Accept T&C</Typography></Grid>
            <Grid item xs={7}></Grid>
            <Grid item xs={3}></Grid>
        <Grid item xs={3}><Button variant="contained" color='error'>Reset</Button></Grid>
        <Grid item xs={3}><Button variant="contained" color='success'>Submit</Button></Grid>
        <Grid item xs={3}></Grid></Grid>
        
  
    
    </div>
  )
}
