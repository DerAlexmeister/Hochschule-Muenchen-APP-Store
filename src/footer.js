import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaXing, FaRegCopyright } from 'react-icons/fa';
import { DiDjango, DiPython, DiReact, DiHeroku  } from "react-icons/di";
import { IoIosHeartEmpty } from "react-icons/io";
import {FaMoneyBillAlt, FaAmazonPay, FaApplePay, FaCcPaypal, FaCcMastercard, FaCcAmex, FaCcDiscover, FaCcVisa, FaBitcoin, FaArrowRight, FaSocks, FaRegSmileWink} from 'react-icons/fa';

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
      <div style={{ position:'absolute', right:100, paddingTop:10}}>
        <br></br>
        <div style={{display:'Inline', paddingLeft:15, fontSize:20, color:'#fff'}}>Wir <span style={{color: '#df0c0c' }}><IoIosHeartEmpty/> </span> <FaArrowRight />  <span style={{color: '#f10b51', fontSize:30}}><DiDjango/> <DiPython />  <DiReact /> <DiHeroku /></span> aber trotzdem <span style={{color: '#f10b51' }}><FaRegCopyright /> </span> bei uns Alexander M. Westphal und Paul Schröder </div>
        <br></br>
        <div style={{display:'Inline', paddingLeft:15, fontSize:20, color:'#fff'}}>Anmerkung: Gegen <span style={{color: '#f10b51' }}><FaMoneyBillAlt /> </span> können wir noch mal drüber reden </div>
        <br></br>
        <div style={{display:'Inline', paddingLeft:15, fontSize:20, color:'#fff'}}>
        Wie nehmen: <span style={{color: '#f10b51' }}> <FaAmazonPay /> <FaApplePay /> <FaCcPaypal /> <FaCcMastercard /> <FaCcAmex /> <FaCcDiscover /> <FaCcVisa /> <FaBitcoin /> </span>
        </div>
        <br></br>
        <div style={{display:'Inline', paddingLeft:15, fontSize:20, color:'#fff'}}>
        Solltest du doch unseren Store kopieren klauen wir dir alle <span style={{color: '#f10b51' }}> <FaSocks />  </span> aber nur die rechten weil niemand mag Links 
        <span style={{color: '#f10b51' }}> <FaRegSmileWink />  </span>
        </div>
      </div>
      <div style={{fontFamily: 'Montserrat', fontSize:30}}>
      <br></br>
        <div><a style={{paddingLeft:30, color:'#ccc'}} target='blank' href="https://www.hm.edu/sekundaer_navigation/impressum/index.de.html">Impressum</a></div>
        <div><a style={{paddingLeft:30, color:'#ccc'}} target='blank'href="https://www.hm.edu/sekundaer_navigation/impressum/datenschutz/index.de.html">Datenschutz</a></div>
        <div><a style={{paddingLeft:30, color:'#ccc'}} target='blank' href="https://www.hm.edu/allgemein/kontakt/index.de.html">Kontakt</a></div>
      </div>
    </div>
    )
  }
}