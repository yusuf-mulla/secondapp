import React from "react";
import { useSelector } from "react-redux";
import './App.css'
import { Loader } from "./Component/ComponentLevel/Loader.js";
import { Practice } from "./Component/ComponentLevel/Practice";
import { SchoolForm } from "./Component/ComponentLevel/SchoolForm";
import { RouteData } from "./Component/RouteData";
import { ToDo1 } from "./ToDo1";
import {RowPagination} from "./Component/ComponentLevel/RowPagination"
import { ApiPagination  } from "./Component/ComponentLevel/ApiPagination ";


function App() {
  const select=useSelector((state)=>state)
  const loader=select.ProductReducer.loader


  return (
    <div >
    {/* {loader && <Loader/>} */}
    <RouteData/>
      {/* <RowPagination/> */}
      {/* <ApiPagination /> */}
    {/* <SchoolForm/> */}
    {/* <Practice/> */}
    {/* <ToDo1/> */}
    </div>
  );
}

export default App;
