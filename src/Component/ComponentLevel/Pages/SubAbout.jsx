import React from 'react'

export const SubAbout = (props) => {
    const {text,handleChnage} =props
  return (
    <div>
        <h1>Child</h1>
        <input type="text" 
        style={{width:"500px",padding:"20px"}}
        onChange={(e)=>handleChnage(e.target.value)}
        value={text}
        />
    </div>
  )
}
