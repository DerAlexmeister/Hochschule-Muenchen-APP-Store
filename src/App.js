import Bar from "./MenueBar.js";
import Header from "./Banner.js"
import Bemobile from "./bemobile.js"
import SideNavPage from "./SideNavigation"
import Footerown from "./footer.js"
import SimpleSlider from "./carousel.js"
import React from "react";


export default class App extends React.Component{
  render(){
    return (
      <div> 
          <Bar/>
          <Header/>
          <SideNavPage/>
            <div style={{backgroundColor:'#282c34', width:'100%', height:'300px', borderBottom:'3px solid #f10b51', borderTop:'3px solid #f10b51'}}>
                  <h1 style={{textAlign: 'center', fontFamily: 'Montserrat', paddingTop: 110, color:'#fff'}}>Die einfachste Art die Zukunft vorherzusagen, ist sie zu implementieren.</h1>
                  <h4 style={{textAlign: 'center', fontFamily: 'Montserrat' , color:'#fff'}}><i><b>David Heinemeier Hansson – (RoR)</b></i></h4>
                  <br></br>
                </div>
                <div style={{backgroundColor:'#282c34', width:'100%', height:'300px',borderBottom:'3px solid #f10b51'}}>
                <br></br>
                <h1 style={{textAlign: 'center', fontFamily: 'Montserrat', paddingTop: 30, color: '#fff'}}>Finde die richtige App für <span style={{color:'#f10b51'}}>dich</span></h1>
                <ul style={{listStyle:'none', display:'flex', paddingTop: 50, justifyContent:'center'}}>
                  <li style={{paddingLeft:0, paddingTop:0}}><a href="#" style={{paddingLeft:'45%',color:'#df0c0c', border:'2px solid #f10b51', borderRadius:4, width:'100%', height:'100%', textAlign:'center', margin:'auto', padding:15 }}> newest Apps </a></li>
                  <li style={{paddingLeft:20, paddingTop:0}}><a href="#" style={{paddingLeft:'45%',color:'#df0c0c', border:'2px solid #f10b51', borderRadius:4, width:'100%', height:'100%', textAlign:'center', margin:'auto', padding:15 }}> older Apps </a></li>
                  <li style={{paddingLeft:20, paddingTop:0}}><a href="#" style={{paddingLeft:'45%',color:'#df0c0c', border:'2px solid #f10b51', borderRadius:4, width:'100%', height:'100%', textAlign:'center', margin:'auto', padding:15 }}> most downloaded Apps </a></li>
                  <li style={{paddingLeft:20, paddingTop:0}}><a href="#" style={{paddingLeft:'45%',color:'#df0c0c', border:'2px solid #f10b51', borderRadius:4, width:'100%', height:'100%', textAlign:'center', margin:'auto', padding:15 }}> less downloaded Apps </a></li>
                </ul>
                <br></br>
                </div>
                <Bemobile />
                <div style={{backgroundColor:'#171a21', width:'100%', height:'300px', borderBottom:'3px solid #f10b51', borderTop:'3px solid #f10b51'}}>
                <br></br>
                  <ul style={{listStyle:'none'}}>
                  <li><br></br><h1 style={{textAlign:'center', color:'#fff'}}>Du bist noch kein Mitglied</h1></li>
                  <li><h3 style={{textAlign:'center', color:'#fff'}}>Registiere dich jetzt und lade dir die passende App für deine Altag herunter</h3><br></br><br></br></li>
                  <li style={{paddingLeft:'45%'}}><a href='/signup' style={{paddingLeft:'45%',color:'#df0c0c', border:'2px solid #f10b51', borderRadius:4, width:'100%', height:'100%', textAlign:'center', margin:'auto', padding:15 }}>Jetzt Registieren</a></li>
                  </ul>
                  <br></br>
              </div>
          <Footerown />
      </div>
    )
  }
} 