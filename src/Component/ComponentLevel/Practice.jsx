import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export const Practice = () => {
    const [count,setCount]=useState(0)

    const handleIncrese=(val)=>{
        setCount(count+val)
    }

  return (
    <div>
        <h1>Counter</h1>

        <Button variant='contained' color='success'
        onClick={()=>handleIncrese(+1)}
        >Increse</Button>
        <h1>{count}</h1>
        <Button variant='contained' color='error'
        onClick={()=>handleIncrese(-1)}
        disabled={count == 0}
        >Decrese</Button>

    </div>
  )
}
