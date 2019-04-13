import SearchAppBar from "./MenueBar.js";
import SideNavPage from "./SideNavigation"
import SimpleCard from "./Cards"
import React from "react";

export default class AppShow extends React.Component{
  render(){
    return (
    <div> 
      <SearchAppBar/>
      <SideNavPage/>
      <SimpleCard/>  
    </div>
    )
  }
} 