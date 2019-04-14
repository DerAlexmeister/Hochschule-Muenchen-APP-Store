import Bar from "./MenueBar.js";
import SideNavPage from "./SideNavigation"
import React from "react";


export default class myProfil extends React.Component {
  render(){
    return (
      <div> 
          <Bar/>
          <SideNavPage/>
      </div>
    )
  }
} 