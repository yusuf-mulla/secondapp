import React from "react";
import './NavBar.css'

export const NavBar = () => {
  return (
     <div className="navbar">
      <div className="Logo-container">
        <h3>Career Next</h3>
      </div>
        <div className="nav-container">
      
      <ul >
        <li><a href="">Home</a> </li>
        <li> <a href="">About</a> </li>
        <li> <a href="">Blog</a> </li>
        <li> <a href="">Contact Us</a> </li>
      </ul>
      </div>
    </div>
  );
};
