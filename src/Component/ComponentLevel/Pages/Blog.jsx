import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CounterTest } from "../Counter/CounterTest";
import { Decrement } from "./Decrement";
import { Increment } from "./Increment";

export const Blog=()=>{
    const select=useSelector((state)=>state)
    const count=select.CountReducer.count
    console.log(select.CountReducer.count);
    
    return(
        <div>
            <h1>Blog</h1>
            {/* <CounterTest/> */}
            <Increment/> <br />
            <h1>{count}</h1>
            <Decrement/>

        </div>
    )
}