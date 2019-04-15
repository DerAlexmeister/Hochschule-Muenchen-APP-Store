import Bar from "./MenueBar.js";
import Header from "./Banner.js"
import Bemobile from "./bemobile.js"
import SideNavPage from "./SideNavigation"
import Footerown from "./footer.js"
import React from "react";


export default class App extends React.Component{
  render(){
    return (
      <div> 
          <Bar/>
          <Header/>
          <SideNavPage/>
            <div style={{backgroundColor:'#fff', width:'100%', height:'300px'}}>
                  <h1 style={{textAlign: 'center', fontFamily: 'Montserrat', paddingTop: 110}}>Die einfachste Art die Zukunft vorherzusagen, ist sie zu implementieren.</h1>
                  <h4 style={{textAlign: 'center', fontFamily: 'Montserrat'}}><i><b>David Heinemeier Hansson – (RoR)</b></i></h4>
                  <br></br>
                </div>
                <div style={{backgroundColor:'#282c34', width:'100%', height:'300px'}}>
                  <h1 style={{textAlign: 'center', fontFamily: 'Montserrat', paddingTop: 20, color:'#fff'}}>Beliebte Apps</h1>
                  <br></br>
                </div>
                <div style={{backgroundColor:'#fff', width:'100%', height:'300px'}}>
                  <br></br>
                  <h1 style={{alignContent:'center'}}>Ausergewöhnliche Software überall</h1>
                  <br></br>
                </div>
                <Bemobile />
                <div style={{backgroundColor:'#fff', width:'100%', height:'300px'}}>
                  <br></br>
                  <h1 style={{alignContent:'center'}}>Ausergewöhnliche Software überall</h1>
                  <br></br>
            </div>
          <Footerown />
      </div>
    )
  }
} 