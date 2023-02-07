import { CardContent, Grid, TextField } from '@mui/material';
import React, {useState} from 'react'

export const Data10Class=()=>{
    const [clss,setClss]= useState();
    const [clss1,setClss1]= useState();
    const [clss2,setClss2]= useState();
    return(
        <div>
            <br />
        <h1>School Form</h1>
        <h4>10 Class Student</h4>
        <Grid container spacing={3}>
        <Grid item xs={4}> 
        <TextField label='Name of Student' type="text" onChange={(e)=>setClss(e.target.value)}  ></TextField> </Grid>
        <Grid item xs={4}> <TextField label='Grade Of Student' type="text" onChange={(e)=>setClss1(e.target.value)}></TextField> </Grid>
        <Grid item xs={4}> <TextField label='Roll Number' type='number'onChange={(e)=>setClss2(e.target.value)} ></TextField></Grid>
        </Grid> <br />
            <CardContent style={{ backgroundColor: "gray" }} className='bx'>
        <Grid container>
        <Grid item xs={4}> <h3> Name of Student: {clss}</h3></Grid>
        <Grid item xs={4}> <h3> Grade of Student : {clss1}</h3></Grid>
        <Grid item xs={4}> <h3> Roll Number : {clss2}</h3></Grid></Grid>
        </CardContent> <hr /> <u></u>
        </div>
    )
}