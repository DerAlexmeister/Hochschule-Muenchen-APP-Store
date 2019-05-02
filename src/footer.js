import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaXing} from 'react-icons/fa';
export default class Footerown extends React.Component{
  render(){
    return ( 
    <div style={{backgroundColor: '#171a21', width:'100%', height:'300px'}}>
      <br></br>
      <div style={{display:'Inline', paddingLeft:30, fontSize:30}}><a style={{color:'#ccc'}} target='blank' href="https://www.facebook.com/HochschuleMuenchen"><FaFacebookF/></a></div>
      <div style={{display:'Inline', paddingLeft:15, fontSize:30}}><a style={{color:'#ccc'}} target='blank' href="https://twitter.com/HAW_Muenchen"><FaTwitter/></a></div>
      <div style={{display:'Inline', paddingLeft:15, fontSize:30}}><a style={{color:'#ccc'}} target='blank' href="https://www.youtube.com/user/HochschuleMuenchen1"><FaYoutube/></a></div>
      <div style={{display:'Inline', paddingLeft:15, fontSize:30}}><a style={{color:'#ccc'}} target='blank' href="https://www.linkedin.com/school/hochschule-muenchen"><FaLinkedinIn/></a></div>
      <div style={{display:'Inline', paddingLeft:15, fontSize:30}}><a style={{color:'#ccc'}} target='blank' href="https://www.xing.com/communities/groups/hochschule-muenchen-hochschule-fuer-angewandte-wissenschaften-1073062"><FaXing/></a></div>

      <div style={{fontFamily: 'Montserrat', fontSize:30}}>
      <br></br>
        <div><a style={{paddingLeft:30, color:'#ccc', textDecoration: "none"}} target='blank' href="https://www.hm.edu/sekundaer_navigation/impressum/index.de.html">Impressum</a></div>
        <div><a style={{paddingLeft:30, color:'#ccc', textDecoration: "none"}} target='blank'href="https://www.hm.edu/sekundaer_navigation/impressum/datenschutz/index.de.html">Datenschutz</a></div>
        <div><a style={{paddingLeft:30, color:'#ccc',textDecoration: "none"}} target='blank' href="https://www.hm.edu/allgemein/kontakt/index.de.html">Kontakt</a></div>
      </div>
    </div>
    )
  }
}