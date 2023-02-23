import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export const Practice = () => {
  const [text,setText]=useState('')
  const [todo,setTodo]=useState([])

  const [copyTodo,setCopyTodo]=useState([])

  const [editIndex,setEditIndex]=useState(null)
  const [edit,setEdit]=useState(false)

  const handleAdd=()=>{
    if (edit){
      const EditTask=todo.map((elem,ind)=>ind===editIndex?text:elem)
      setTodo(EditTask)
      setCopyTodo(EditTask)
      setText('')
      setEdit(false)
    }else{

    if(!text.trim())return
    setTodo([...todo,text])
    setCopyTodo([...todo,text])
    setText('')
  }}
  const handleDelete=(item,index)=>{
    const reaminTask=todo.filter((elem,ind)=>index!=ind)
    setTodo(reaminTask)
  }
  const handleSearch=(value)=>{
      const searchTask=copyTodo.filter((elem)=>
      elem.toUpperCase().includes(value.toUpperCase()))
      setTodo(searchTask)
  }
  const handleEdit=(item,index)=>{
    setText(item)
    setEditIndex(index)
    setEdit(true)
  }

  return (
    <div>
      <TextField placeholder='Search here....' 
      onChange={(e)=>handleSearch(e.target.value)}
      />
      <TextField placeholder='To Do List' value={text}
      onChange={(e)=>setText(e.target.value)}
      />
      <Button variant='contained' color='secondary'
      onClick={()=>handleAdd()}
      >Add</Button>
    <ol >
      {todo.map((item,index)=>{
        return(
          <li>{item} 
          <Button color='secondary' onClick={()=>handleEdit(item,index)}>Edit</Button>
          <Button color='error' onClick={()=>handleDelete(item,index)}>Delete</Button>
          </li>
        )
      })}
    </ol>

    </div>
  )
}
