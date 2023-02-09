import React from "react";
import { PropsComp1_2 } from "./PropsComp1_2";

export const PropsComp1_1=()=>{
const yName='Yusuf';
const Secondyname= 'Mulla'
const yAdress='Chinchpada Tal Navapur Dist Nandurbar'
const iName='Ibrahim';
const Secondiname= 'Dungariwala'
const iAdress='Visarwadi Tal Navapur Dist Nandurbar'
const kName='Khuzem';
const Secondkname= 'Shaikh'
const kAdress='Mangal dass park Tal Navapur Dist Nandurbar'
const sName='Sufiyan';
const Secondsname= 'Bardolia'
const sAdress='Memon gali Tal Navapur Dist Nandurbar'

  return (
    <div >
      <PropsComp1_2 name1={yName} name2={Secondyname} name3={yAdress}/>
      <PropsComp1_2 name1={iName} name2={Secondiname} name3={iAdress}/>
      <PropsComp1_2 name1={kName} name2={Secondkname} name3={kAdress}/>
      <PropsComp1_2 name1={sName} name2={Secondsname} name3={sAdress}/>
    </div>
  );
}
