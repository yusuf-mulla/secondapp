import React, { useState } from "react";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { NearMeTwoTone } from "@mui/icons-material";

export const SchoolForm = () => {
  const [name, setName] = useState();
  const [mobile, setMobile] = useState();
  const [emailid, setEmailid] = useState();
  const [password, setPassword] = useState();

  const [data, setData] = useState([]);
  const handleSubmit = () => {
    const obj = {
      Firstname: name,
      Mobile: mobile,
      Emailid: emailid,
      Password: password,
    };

    setData([...data, obj]);
  };
  const handleDelete=(index)=>{
    const deleteData=data.filter((item,ind)=>ind!=index)
    setData(deleteData)
  }



  return (
    <div>
      <h1>School Registretion Form</h1>
      <Grid container spacing={10}>
        <Grid item xs={12} md={3}>
          <TextField label="Name" onChange={(e) => setName(e.target.value)} />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Mobile"
            type="number"
            onChange={(e) => setMobile(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Email id"
            type="email"
            onChange={(e) => setEmailid(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={6}></Grid>
        <Grid>
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>

      <Grid container>
        {data.map((item,index) => {
          return (
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <h3>Name :{item.Firstname}</h3>
                  <h3>Mobile No :{item.Mobile}</h3>
                  <h3>Email id : {item.Emailid}</h3>
                  <h3>Password: {item.Password}</h3>
                  <Button 
                  variant="contained" 
                  color="error" 
                  onClick={()=>handleDelete(index)}>
                    Delete</Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
