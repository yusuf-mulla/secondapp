import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from "react";

export const FormButtn = () => {
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [mobileNumber,setMobileNumber] = useState();
    const [email,setEmail] = useState();
    const [adress,setAdtress] = useState();
    const [pinCode,setPincode] = useState();
    const [city,setCity] = useState();
    const [state,setState] = useState();

    const handleSubmit=()=>{
        const obj={
            Fname:firstName,
            Lname:lastName,
            MobileNo:mobileNumber,
            EmailId:email,
            Adressid:adress,
            Pincode:pinCode,
            City:city,
            State:state ,
        }
        console.log(obj)
    }
  return ( 
    <div>  <br />
    <Grid container spacing={3} >
       <Grid item xs={3}> <TextField label='First Name' type="text" onChange={(e)=>setFirstName(e.target.value)}  ></TextField></Grid>
       <Grid item xs={3}> <TextField label='Last Name' type="text" onChange={(e)=>setLastName(e.target.value)}></TextField></Grid>
       <Grid item xs={3}> <TextField label='Mobile Number' type='number'onChange={(e)=>setMobileNumber(e.target.value)} ></TextField></Grid>
       <Grid item xs={3}> <TextField label='Email Id' type='email' onChange={(e)=>setEmail(e.target.value)}></TextField></Grid>
       <Grid item xs={3}> <TextField label='Adress'  onChange={(e)=>setAdtress(e.target.value)} ></TextField></Grid>
       <Grid item xs={3}> <TextField label='Pin code' type={"number"} onChange={(e)=>setPincode(e.target.value)}></TextField></Grid>
       <Grid item xs={3}> <TextField label='City' type='text' onChange={(e)=>setCity(e.target.value)}></TextField></Grid>
       <Grid item xs={3}> <TextField label='State' type='text' onChange={(e)=>setState(e.target.value)} ></TextField></Grid>

       {/* <Grid item xs={12}><FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup row>
        <FormControlLabel value="ABC" control={<Radio />} label="Male" />
        <FormControlLabel value="abc" control={<Radio />} label="Female" />
        <FormControlLabel value="123" control={< Radio />} label="Other" /> 
      </RadioGroup>
    </FormControl></Grid> */}
        {/* <Grid item xs={12}><Typography><Checkbox/> I Accept Term And Condition </Typography></Grid>        */}
        <Grid item xs={12}><Button variant="contained" color="success" onClick={handleSubmit}> Success </Button> <span></span>
        <Button variant="contained" color="error"> Reset </Button></Grid>
        </Grid>
        {/* <h1> First Name : {firstName}</h1>
        <h1> Last Name {lastName}</h1>
        <h1> Mobile Number: {mobileNumber}</h1>
        <h1> Email: {email}</h1>
        <h1> Adress : {adress}</h1>
        <h1> Pincode: {pinCode}</h1>
        <h1> City: {city}</h1>
        <h1> State: {state}</h1> */}
      
    </div>
  )
}
