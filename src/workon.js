import SearchAppBar from "./MenueBar.js";
import SideNavPage from "./SideNavigation"
import DeleteChangeApp from './delete_change_app.js'
import React from "react";

export default class Workon extends React.Component{
  render(){
    return (
    <div> 
      <SearchAppBar/>
      <SideNavPage/>
      <div style = {{position: "absolute", top:150, left:'15%', right:'15%'}}>
        <h1 style={{textAlign: 'center', fontFamily: 'Montserrat', paddingTop: 0, color:'#fff'}}>Meine Apps</h1>
            <br></br><br></br>
            <DeleteChangeApp />
      </div> 
    </div>
    )
  }
} 