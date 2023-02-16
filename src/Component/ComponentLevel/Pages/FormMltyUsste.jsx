import { Button, Table, TextField } from '@mui/material'
import React, { useState } from 'react'

export const FormMltyUsste = () => {
const [fName,setFname]=useState('')
const [lName,setLname]=useState('')
const [fullName,setFullname]=useState('')
const [number,setNum]=useState('')
const [dob,setDob]=useState('')
const [adress,setAdress]=useState('')

const [tableData,setTableData]=useState([])

const handleSubmit=()=>{

  setTableData([...tableData,{fName,lName,fullName,number,dob,adress}])
  
  setFname('')
  setLname('')
  setFullname('')
  setNum('')
  setDob('')
  setAdress('')
}

  return (
    <div >
      <TextField variant='filled' label="First Name"
       value={fName}
      onChange={(e)=>setFname(e.target.value)}
      />
      <TextField variant='filled' label="Last Name" 
      value={lName}
      onChange={(e)=>setLname(e.target.value)}
      />
      <TextField variant='filled' label="Full Name" 
      value={fullName}
      onChange={(e)=>setFullname(e.target.value)}
      />
      <TextField variant='filled' label="Number"
      value={number}
      onChange={(e)=>setNum(e.target.value)}
      />
      <TextField variant='filled' label="DOB"
      value={dob}
      onChange={(e)=>setDob(e.target.value)}
      />
      <TextField variant='filled' label="Adress"
      value={adress} 
      onChange={(e)=>setAdress(e.target.value)}
      />

      <Button variant='contained'
      onClick={()=>handleSubmit()}
      >Submit</Button>

        <Table border={2}> 
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Full Name</th>
            <th>Number</th>
            <th>DOB</th>
            <th>Adress</th>
          </tr>
              {tableData.map((item)=>{
                return(
            <tr> 
              <td>{item.tableData}</td>
              <td>{item.lName}</td>
              <td>{item.fullName}</td>
              <td>{item.number}</td>
              <td>{item.dob}</td>
              <td>{item.adress}</td>
              
            </tr>
             )
          })} 
        </Table>

    </div>
  )
}
