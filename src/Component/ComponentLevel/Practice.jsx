import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export const Practice = () => {
    const [text,setText]=useState('')
    const [toDo,setToDo]=useState([])

    const [copyToDo,setCopyToDo]=useState([])



        const handleAddTask=()=>{
            if (!text.trim())return
            setToDo([...toDo,text])
            setCopyToDo([...toDo,text])
            setText('')
        }

        const handleDelete=((item,index)=>{
            const remainTask=toDo.filter((elem,ind)=> index!=ind)
            setToDo(remainTask)
        })
  return (
    <div>
        <TextField placeholder='To Do List'
        onChange={(e)=>setText(e.target.value)}
        value={text}
        />
        <Button variant='contained' color='success'
        onClick={()=>handleAddTask()}
        >Add Task</Button>


        <ol>
            {toDo.map((item,index)=>{
                return(
                    <li>{item}{' '} 
                    <Button color='error'
                    onClick={()=>handleDelete(item,index)}
                    >Delete</Button></li>
                )
            })}
        </ol>
    </div>
  )
}
