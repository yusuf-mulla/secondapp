import { Button, Card, CardContent, Grid, Pagination } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ContactUs=()=>{
    const select=useSelector((state)=>state)
    const dispatch=useDispatch()
    const carData=select.carReducer.carData
    const [data,setData]=useState([])
    const [page,setPage]=useState(8)

    const getCartData=async()=>{
        const res = await axios.get("https://myfakeapi.com/api/cars/")
        dispatch({
            type:"ADD_CAR_DATA",
            payload:res.data.cars
        })
        // console.log(res);
        // console.log(res.data.cars);
    }

    useEffect(()=>{
        setData(carData)
    },[carData])

    useEffect(()=>{
        getCartData()
    },[])
    return(
        <div>
           <h1>Contact Us</h1> 
           <Grid container spacing={5}>
          {data
          .slice(page-8,page)
          .map((item)=>{
            return(
              <Grid item xs={3}>
                <Card>
                  <CardContent 
                  
                  sx = {{backgroundColor:`${item.car_color}`
                  
                  }}>
                    <h2>Car Name: {item.car}</h2>
                    <h4>Car Price :{item.price}</h4>
                    <Button disabled={!item.availability} 
                    variant="contained" 
                    color="success">Buy Now</Button>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
          <Pagination count={Math.round(data.length/8)} 
          onChange={(e,value)=>setPage(value*8)}
          color="secondary" />
        </Grid>
        </div>
    )
}