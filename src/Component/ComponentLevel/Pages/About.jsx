import React, { useState } from "react";
import { SubAbout } from "./SubAbout";

export const About = () => {
  const [text,setText]=useState('Hello World')

const handleChnage=(value)=>{
  setText(value)
}

  return (
    <div>
      <h1>Parent Component</h1>
      <input type="text" value={text} 
      style={{width:"500px",padding:"20px"}}
      onChange={(e)=>setText(e.target.value)}
       />
      <SubAbout text={text} handleChnage={handleChnage}/>
    </div>
  );
};
