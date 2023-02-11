import { Card, CardContent, Grid } from '@mui/material';
import React, { useState } from 'react';

export const Practice = () => {

  const [inputs, setInputs] = useState({
    fname: "",
    lname: ""
  })

  const changeHandle = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const submitHandle = e => {
    // const obj = {
    //     FirstName: [e.target.name],
    //     LastName: [e.target.value]

    //   };
    //   setInputs([...inputs, obj]);
    e.preventDefault()
    console.log(inputs)
  }
  
  return (
    <form onSubmit={submitHandle}>
      <input type="text" name="fname" value={inputs.fname} onChange={changeHandle} />
      <input type="text " name="lname" value={inputs.lname} onChange={changeHandle} />
      <button type="submit">Submit</button>
      
      <Grid container>
        {inputs.map((item,index) => {
          return (
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <h3>Name :{item.inputs}</h3>
                  {/* <h3>Mobile No :{item.LastName}</h3> */}
                
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    
    </form>
  );
}