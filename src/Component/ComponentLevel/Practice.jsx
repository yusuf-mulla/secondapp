import { Button, TextField } from "@mui/material"
import React, { useState } from "react"

export const Practice=()=>{
    const [text,setText]=useState('')
    const [toDo,setToDo]=useState([])

    const [copyToDo,setCopyToDo]=useState([])

    const handleSubmit=()=>{
        if (!text.trim())return
        setCopyToDo([...toDo,text])
        setToDo([...toDo,text])
        setText("")
         }

        const handleDelete=((item,index)=>{
            const remainTask=toDo.filter((elem,ind)=>index!=ind)
            setToDo(remainTask)
            setText('')
        })
       const handleSearch=(value)=>{
        const searchItem=copyToDo.filter((elem)=>elem.toUpperCase().includes(value.toUpperCase()))
        setToDo(searchItem)
       }

    return(
        <div>
            <h1>To do list</h1>
            <TextField placeholder="Search Here...." type="text"
            onChange={(e)=>handleSearch(e.target.value)}
            />
            <TextField placeholder="To Do List" type="text"
            onChange={(e)=>setText(e.target.value)}
            value={text}
            />
            <Button variant="contained" color="success"
            onClick={()=>handleSubmit()}
            >Add</Button>

            <ol>
                {toDo.map((item,index)=>{
                    return(
                        <li>{item}{''} 
                        <Button color="error" 
                        onClick={()=>handleDelete(item,index)}
                        >Delete</Button> </li>
                    )
                })}
            </ol>
        </div>
    )
}