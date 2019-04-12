import SearchAppBar from "./MenueBar.js";
import Header from "./Banner.js"
import SideNavPage from "./SideNavigation"
import React, { Component } from "react";


export default class App extends React.Component{
  render(){
    return (
    <div> 
      <SearchAppBar/>
      <Header/>
      <SideNavPage/>
    </div>
    )
  }
}