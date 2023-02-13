import { Button, TextField } from "@mui/material"
import React, { useState } from "react"

export const ToDo1=()=>{
  const [text,setText]=useState('')
  const [toDo,setToDo]=useState([])
  const [copyToDo,setCopyToDo]=useState([])
  const [selectIndex,setSelectIndex]=useState(null)
  const [edit,setEdit]=useState(false)

  const handleAddTask=()=>{
      if(edit){
        const editedTask=toDo.map((elem,index)=>index=== selectIndex?text:elem)
        setToDo(editedTask);
        setCopyToDo(editedTask);
        setText("");
        setEdit(false)
        }else{
        if (!text.trim()) return
          setToDo([...toDo,text]);
          setCopyToDo([...toDo,text])
          setText("");
  }}
  const handleDeleteTask=(item,index)=>{
      const remainTask=toDo.filter((elem,ind)=>index !=ind)
      setToDo(remainTask);
  }
  const handleSerachTask=(value)=>{
    const searchItem=copyToDo.filter((elem)=>
    elem.toUpperCase().includes(value.toUpperCase()))
    setToDo(searchItem)
  }
const handleEditTask=(item,ind)=>{
    setText(item)
    setSelectIndex(ind)
    setEdit(true)

}

  return(
    <div>
      <h1>Its a TO DO LIST</h1>
      <TextField type="text" placeholder="search here..."
      onChange={(e)=>handleSerachTask(e.target.value)}
      />
      <TextField type="text" placeholder="To Do List" 
      value={text}
      onChange={(e)=>setText(e.target.value)}
      /> {''}

      <Button variant="contained" color="success"
      onClick={()=>handleAddTask()}
      >{edit ? "Edit" : "Add"} Task </Button>
     <ol>
      {toDo.map((item,index)=>{
        return(
          <li key={index}>
              {item} {""}
              <Button color="success" 
              onClick={()=>handleEditTask(item,index)}
              >Edit</Button>
              <Button  color="success" 
              onClick={()=>handleDeleteTask(item,index)}
              >Delete</Button>
          </li>
        )
      })}
     
     </ol>

    </div>
  )
}