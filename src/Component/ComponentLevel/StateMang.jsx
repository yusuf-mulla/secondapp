import React, { useState } from "react";

export const StateMang = () => {
  const [data,setData] = useState("Yusuf");
  const [data1,setData1] = useState("Yusuf");
  return (
    <div> <br />
    <label htmlFor="">First Name</label>
      <input type="text" onChange={(e)=>setData(e.target.value)} />
    <label htmlFor="">Last Name</label>
      <input type="text" onChange={(e)=>setData1(e.target.value)} />
      <h1>{`${data} ${data1}`}</h1>
      {/* <h1>{data}</h1> */}
      {/* <h1>{data1}</h1> */}
    </div>
  );
};
