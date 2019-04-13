import SearchAppBar from "./MenueBar.js";
import SideNavPage from "./SideNavigation"
import React from "react";


export default class AppShow extends React.Component{
  render(){
    return (
    <div> 
      <SearchAppBar/>
      <SideNavPage/>
      <h1>Hallo</h1>
    </div>
    )
  }
} 