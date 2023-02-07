import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from "react";

export const FormState = () => {
    const [data,setData] = useState();
    const [data1,setData1] = useState();
    const [data2,setData2] = useState();
    const [data3,setData3] = useState();
    const [data4,setData4] = useState();
    const [data5,setData5] = useState();
    const [data6,setData6] = useState();
    const [data7,setData7] = useState();
  return ( 
    <div>  <br />
    <Grid container spacing={3} >
       <Grid item xs={3}> <TextField label='First Name' type="text" onChange={(e)=>setData(e.target.value)}  ></TextField></Grid>
       <Grid item xs={3}> <TextField label='Last Name' type="text" onChange={(e)=>setData1(e.target.value)}></TextField></Grid>
       <Grid item xs={3}> <TextField label='Mobile Number' type='number'onChange={(e)=>setData2(e.target.value)} ></TextField></Grid>
       <Grid item xs={3}> <TextField label='Adress' onChange={(e)=>setData3(e.target.value)}></TextField></Grid>
       <Grid item xs={3}> <TextField label='Password' type='password' onChange={(e)=>setData4(e.target.value)} ></TextField></Grid>
       <Grid item xs={3}> <TextField label='Confirm Password' type="password" onChange={(e)=>setData5(e.target.value)(type="password")}></TextField></Grid>
       <Grid item xs={3}> <TextField label='Email Id' type='email' onChange={(e)=>setData6(e.target.value)}></TextField></Grid>
       <Grid item xs={3}> <TextField label='' type='date' onChange={(e)=>setData7(e.target.value)} ></TextField></Grid>

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
        <h1> First Name : {data}</h1>
        <h1> Last Name {data1}</h1>
        <h1> Mobile Number: {data2}</h1>
        <h1> Adress: {data3}</h1>
        <h1> Password : {data4}</h1>
        <h1> Confirm Password: {data5}</h1>
        <h1> Email ID: {data6}</h1>
        <h1>DOB: {data7}</h1>
      
    </div>
  )
}
