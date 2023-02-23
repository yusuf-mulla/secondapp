import React from "react";
import { useSelector } from "react-redux";
import './App.css'
import { Loader } from "./Component/ComponentLevel/Loader.js";
import { Practice } from "./Component/ComponentLevel/Practice";
import { SchoolForm } from "./Component/ComponentLevel/SchoolForm";
import { RouteData } from "./Component/RouteData";
import { ToDo1 } from "./ToDo1";



function App() {
  const select=useSelector((state)=>state)
  const loader=select.ProductReducer.loader
  console.log(select);

  return (
    <div >
    {/* {loader && <Loader/>} */}
    {/* <RouteData/> */}

    {/* <SchoolForm/> */}
    <Practice/>
    {/* <ToDo1/> */}
    </div>
  );
}

export default App;
