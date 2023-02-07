import React, { Component } from "react";
import FirstComp from "./FirstComp";

class ClassComp extends Component {
  render() {
    return <div>Hello Class Component
      <FirstComp/>
    </div>;
  }
}
export default ClassComp;
