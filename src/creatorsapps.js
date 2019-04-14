import React from 'react'
import SearchAppBar from "./MenueBar.js";
import SideNavPage from "./SideNavigation"
import axios from 'axios';
import {FaRegEnvelope, FaRegCompass, FaStreetView, FaRegCopyright} from "react-icons/fa"
import { IoMdDownload, IoMdTime, IoIosPerson, IoIosSchool } from "react-icons/io";

export default class CreatorsApp extends React.Component{
    state = {
        items: ["0"]
  };

  appID_ = this.props.appID_

  
  componentDidMount() {
        console.log("This is the APPID we got: "+ this.appID_)
        axios.get('http://localhost:8000/api/apps/creator/' + (this.appID_)).then(res => {
            const datem = res.data;
            console.log(datem)
            this.setState({items: [datem] })
        }).catch(err => {
            console.error(err)
        })
    }


    render() {
        const {items } = this.state;
    console.log(items)
      return (
          <ul style={{marginRight:20, paddingLeft:20, paddindRight:20, listStyleType: "none",  justifyContent: 'center',  alignItems: 'center', fontFamily: 'Montserrat',}}> 
            { items.map(item => (
              <div>
                <div style={{display:'flex'}}>
                  <img style={{borderRadius:50, width:200, height:200}} src={"http://localhost:8000" + item.smallPic}  alt="hshshsdh!" />
                  <h1 style={{color:'#fff', paddingLeft:40, paddingTop:150}}> {item.appname}</h1>
                  <div style={{paddingTop:170, paddingLeft:500, maxHeight:300, maxWidth:300 }}>
                    <a style={{color:'#df0c0c', border:'2px solid #f10b51', borderRadius:4, width:'100%', height:'100%', textAlign:'center', margin:'auto', padding:15 }} href="">Download</a>
                  </div>
                </div>
                <h6 style={{color:'#fff'}}>Copyright <FaRegCopyright /> Appmon</h6>
              </div>
          ))}
          </ul>
      );
    }
}