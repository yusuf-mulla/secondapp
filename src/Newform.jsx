import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'

export const Newform = () => {
  return ( 
    <div>  <br />
    <Grid container spacing={3} >
       <Grid item xs={3}> <TextField label='First Name' type="text" className='inpt' ></TextField></Grid>
       <Grid item xs={3}> <TextField label='Last Name' type="text" className='inpt'></TextField></Grid>
       <Grid item xs={3}> <TextField label='Mobile Number' type='number' className='inpt' ></TextField></Grid>
       <Grid item xs={3}> <TextField label='Adress' className='inpt'></TextField></Grid>
       <Grid item xs={3}> <TextField label='Password' type='password' className='inpt' ></TextField></Grid>
       <Grid item xs={3}> <TextField label='Confirm Password' type="password" className='inpt'></TextField></Grid>
       <Grid item xs={3}> <TextField label='Email Id' type='email' className='inpt'></TextField></Grid>
       <Grid item xs={3}> <TextField label='' type='date' className='db' ></TextField></Grid>
       <Grid item xs={3}> <TextField label='Pincode' type='number' className='inpt'></TextField></Grid>
       <Grid item xs={3}> <TextField label='City' type="text" className='inpt'></TextField></Grid>
       <Grid item xs={3}> <TextField label='State' type="text" className='inpt'></TextField></Grid>
       <Grid item xs={3}> <TextField label='Country' type="text" className='inpt'></TextField></Grid>
       <Grid item xs={12}><FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup row>
        <FormControlLabel value="ABC" control={<Radio />} label="Male" />
        <FormControlLabel value="abc" control={<Radio />} label="Female" />
        <FormControlLabel value="123" control={< Radio />} label="Other" /> 
      </RadioGroup>
    </FormControl></Grid>
        <Grid item xs={12}><Typography><Checkbox/> I Accept Term And Condition </Typography></Grid>       
        <Grid item xs={12}><Button variant="contained" color="success"> Success </Button> <span></span>
        <Button variant="contained" color="error"> Reset </Button></Grid>
        </Grid>
    </div>
  )
}
