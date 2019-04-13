import SearchAppBar from "./MenueBar.js";
import Header from "./Banner.js"
import Bemobile from "./bemobile.js"
import SideNavPage from "./SideNavigation"
import Footerown from "./footer.js"
import React, { Component } from "react";


export default class App extends React.Component{
  render(){
    return (
    <div> 
      <SearchAppBar/>
      <Header/>
      <SideNavPage/>
      <div style={{backgroundColor:'#fff', position:'absolute', top:'100%', width:'100%', height:'300px'}}>
        <br></br>
        <h1 style={{alignContent:'center'}}>Ausergewöhnliche Software überall</h1>
        <br></br>
      </div>
      <div style={{backgroundColor:'#ccc', position:'absolute', top:'130%', width:'100%', height:'300px'}}>
        <br></br>
        <h1 style={{alignContent:'center'}}>Ausergewöhnliche Software überall</h1>
        <br></br>
      </div>
      <div style={{backgroundColor:'#fff', position:'absolute', top:'160%', width:'100%', height:'300px'}}>
        <br></br>
        <h1 style={{alignContent:'center'}}>Ausergewöhnliche Software überall</h1>
        <br></br>
      </div>
      <Bemobile />
      <div style={{backgroundColor:'#fff', position:'absolute', top:'243%', width:'100%', height:'300px'}}>
        <br></br>
        <h1 style={{alignContent:'center'}}>Ausergewöhnliche Software überall</h1>
        <br></br>
      </div>
      <Footerown />
    </div>
    )
  }
} 