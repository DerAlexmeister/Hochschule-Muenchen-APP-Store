import SearchAppBar from "./MenueBar.js";
import SideNavPage from "./SideNavigation"
import SimpleCard from "./Cards"
import ButtonDrop from "./ButtonDropdown"
import React from "react";

export default class AppShow extends React.Component{
  render(){
    return (
    <div> 
      <SearchAppBar/>
      <SideNavPage/>
      <ButtonDrop/>  
      <div style = {{position: "absolute", top: 200, left: 150}}>
      <SimpleCard/> 
      </div>
       
    </div>
    )
  }
} 