import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";


export const CounterTest = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state);
  const ProductReducer = select.ProductReducer;
    const [count,setCount]=useState(select.ProductReducer.counterNew)

    const handleCounter=(val)=>{
        setCount(count+val)
        dispatch({
          type: "ADD_COUNTER",
          payload: (count+val),
        });

    }
  return (
    <div>
        

        <Button variant='contained' color='success'
        
        onClick={()=>handleCounter(+1)}
        >Increment</Button>
        <h1>{count}</h1>

        <Button variant='contained' color='error'
        disabled={count <= 0}
        onClick={()=>handleCounter(-1)}
        >Decrement</Button>
    </div>
  )
}
