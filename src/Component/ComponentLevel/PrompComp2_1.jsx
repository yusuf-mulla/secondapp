import React from "react"
import { PrompComp2_2 } from "./PrompComp2_2"

export const PrompComp2_1 =()=> {
 const cName='Audi'
 const cModel='Q7'
 const cColor='Asphalt White'
 const cType='XUV'


  return (
    <div >
      <PrompComp2_2 cName={cName} cModel={cModel} cColor={cColor} cType={cType}/>
     
    </div>
  );
}
