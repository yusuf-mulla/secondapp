import React from "react";
import './NavBar.css'
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { red } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";

export const NavBar = () => {
const dispatch=useDispatch()
// console.log(select);
  const handleSearch=(e)=>{
    dispatch({
      type:'SEARCH_DATA_TAKE',
      payload:e.target.value
    })
  }
// console.log(select.ProductReducer.searchData);
  return (
     <div className="navbar">
      <div className="Logo-container">
        <h3>Career Next</h3>

      </div>
          <TextField placeholder=" search Bar" 
          onChange={handleSearch}
          />
        <div className="nav-container">
      
      <ul >
        <li> <Link to="/">Home</Link>  </li>
        <li> <Link to="/about">About</Link></li>
        <li> <Link to="blog">Blog</Link> </li>
        <li> <Link to="contact">Contact Us</Link> </li>
      </ul>
      </div>
    </div>
  );
};
