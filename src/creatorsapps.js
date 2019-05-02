import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {FaRegEnvelope, FaRegCompass, FaStreetView, FaRegCopyright, FaCheckCircle,
    FaFacebookF, FaTwitter, FaInstagram, FaXing, FaLinkedinIn, FaGithub, FaYoutube
        } from "react-icons/fa"
import { IoIosSchool } from "react-icons/io";
import { FiUser } from "react-icons/fi";

const styles = {
    card: {
      width: 180,
      backgroundColor: '#ccc',
      paddingRight:20
    },
    bullet: {
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };
  
class CreatorsApp extends React.Component{
  
    state = {
        user: ["0"],
        items: ["0"]
    };
  
    appID_ = this.props.appID_
  
    
    componentDidMount() {
          console.log("This is the APPID we got: "+ this.appID_)
          axios.get('http://localhost:8000/api/apps/creator/c/' + (this.appID_)).then(res => {
              const datem = res.data;
              console.log(datem)
              this.setState({items: datem })
          }).catch(err => {
              console.error(err)
          })
    }

    getImage(param1, param2) {
        console.log(param1, param2)
        if(param1) {
            return "http://localhost:8000" + param1
        } else if (param2) {
            return "" + param2
        } else {
            return "http://localhost:8000/media/ersatzbild.jpg"
        }
    }
  
    render() {
      const { items } = this.state;
      console.log(items)
        return (
            <ul style={{marginRight:20, paddingLeft:20, paddindRight:20, listStyleType: "none",  justifyContent: 'center',  alignItems: 'center', fontFamily: 'Montserrat',}}> 
              { items.map(item => (
                <div>
                  <div style={{display:'flex'}}>
                    <img style={{borderRadius:50, width:200, height:200}} src={this.getImage(item.smallPic, item.linkImg)}  alt="hshshsdh!" />
                    <h1 style={{color:'#fff', paddingLeft:40, paddingTop:150}}> {item.nickname}</h1>
                    <div style={{paddingTop:158, paddingLeft:20, maxHeight:300, maxWidth:300 }}>
                    { this.isVerified(item.verified) }
                    </div>
                    <br></br>
                  </div>
                  <hr style={{backgroundColor:'#fff', width:'100%', height:1}}></hr>
                  <p style={{color:'#fff'}}><h5><b>Kontakt</b></h5><br></br>
                    <ul style={{paddingLeft:0, display:'flex', listStyle:'none'}}>
                      <li style={{paddingLeft:0}}><b>Email</b><br></br><a style={{color:'#f10b51', fontSize:26, paddingLeft: 6}} href={"mailto:" + item.email}><FaRegEnvelope/></a></li>
                      {this.hasWebsite(item.website)}
                    </ul>
                  </p>
                  <hr style={{backgroundColor:'#fff'}}></hr>
                  <p style={{color:'#fff'}}><h5><b>Soziale Medien</b></h5><br></br>
                    <ul style={{paddingLeft:0, display:'flex', listStyle:'none'}}>
                      {this.hasFb(item.fb, item)}
                      {this.hasTwitter(item.twitter, item)}
                      {this.hasYoutube(item.youtube, item)}
                      {this.hasinsta(item.insta, item)}
                      {this.hasXing(item.xing, item)}
                      {this.hasLinkedin(item.linkedin, item)}
                      {this.hasGithub(item.github, item)}
                    </ul>
                  </p>
                  <hr style={{backgroundColor:'#fff'}}></hr>
                  <p style={{color:'#fff'}}><h5><b>Univeritätsintern</b></h5><br></br>
                    <ul style={{paddingLeft:0, display:'flex', listStyle:'none'}}>
                    <li style={{paddingLeft:0}}><b>Fakultät</b><br></br>{item.Fakultaet} <IoIosSchool style={{color:'#f10b51'}} /></li>
                    <li style={{paddingLeft:20}}><b>Typ</b><br></br>{this.getype(item.typOfAccount)}</li>
                    </ul>
                  </p>
                  <hr style={{backgroundColor:'#fff'}}></hr>
                  <h6 style={{color:'#fff'}}>Copyright <FaRegCopyright /> Appmon</h6>
                </div>
            ))}
            </ul>
        );
      }

    hasWebsite(it) {
        if(it) {
            return <li style={{paddingLeft:20}}><b>Web</b><br></br><a style={{color:'#f10b51', fontSize:26, paddingLeft:6}} href={"" + it}><FaRegCompass/></a></li>
        } else {
            return <li style={{paddingLeft:20}}><b>Web</b><br></br><a style={{color:'#ccc', fontSize:26, paddingLeft:6}} href='#'><FaRegCompass/></a></li>
        }
    }

    getype(it) {
        if (it === 'ST') {
            return  <div>Student\in <FiUser style={{color:'#f10b51'}} /></div>
        }
        else if (it === 'SA') {
            return  <div>Mitarbeiter\in <FiUser style={{color:'#f10b51'}} /></div>
        }
        else if (it === 'Fr') {
            return  <div>Externer(e) Student\in <FiUser style={{color:'#f10b51'}} /></div>
        } else {
            return  <div>Professor\in <FiUser style={{color:'#f10b51'}} /></div>
        }
    }

    isVerified(boo) {
        if (boo) {
            return <FaCheckCircle style={{color:'#32CD32', fontSize:30}}/>
        } else {
            return <FaCheckCircle style={{color:'#FF0000', fontSize:30}} />
        }
    }

    hasFb(boo, item) {
        if (boo) {
            return <li style={{paddingLeft:0}}><b>Facebook</b><br></br><a style={{color:'#f10b51', fontSize:26, paddingLeft: 6}} href={"" + item.fb}><FaFacebookF style={{paddingLeft: 15, fontSize:35}}/></a></li>
        } else {
            return <li style={{paddingLeft:0}}><b>Facebook</b><br></br><a style={{color:'#ccc', fontSize:26, paddingLeft: 6}} href="#"><FaFacebookF style={{paddingLeft: 15, fontSize:35}}/></a></li>
        }
    }

    hasTwitter(boo, item) {
        if (boo) {
            return <li style={{paddingLeft:30}}><b>Twitter</b><br></br><a style={{color:'#f10b51', fontSize:26, paddingLeft:6}} href={"" + item.twitter}><FaTwitter style={{paddingLeft: 8, fontSize:40}} /></a></li>
        } else {
            return <li style={{paddingLeft:30}}><b>Twitter</b><br></br><a style={{color:'#ccc', fontSize:26, paddingLeft:6}} href='#'><FaTwitter style={{paddingLeft: 8, fontSize:40}}/></a></li>
        }
    }

    hasXing(boo, item) {
        if (boo) {
            return <li style={{paddingLeft:30}}><b>Xing</b><br></br><a style={{color:'#f10b51', fontSize:26, paddingLeft: 6}} href={"" + item.xing}><FaXing/></a></li>
        } else {
            return <li style={{paddingLeft:30}}><b>Xing</b><br></br><a style={{color:'#ccc', fontSize:26, paddingLeft: 6}} href='#'><FaXing/></a></li>
        }
    }

    hasLinkedin(boo, item) {
        if (boo) {
            return <li style={{paddingLeft:30}}><b>LinkedIn</b><br></br><a style={{color:'#f10b51', fontSize:26, paddingLeft:6}} href={"" + item.linkedin}><FaLinkedinIn style={{paddingLeft: 10, fontSize:40}}/></a></li>
        } else {
            return <li style={{paddingLeft:30}}><b>LinkedIn</b><br></br><a style={{color:'#ccc', fontSize:26, paddingLeft: 6}} href='#'><FaLinkedinIn style={{paddingLeft: 10, fontSize:40}} /></a></li>
        }
    }

    hasYoutube(boo, item) {
        if (boo) {
            return <li style={{paddingLeft:30}}><b>YouTube</b><br></br><a style={{color:'#f10b51', fontSize:26, paddingLeft:6}} href={"" + item.youtube}><FaYoutube style={{paddingLeft: 10, fontSize:40}}/></a></li>
        } else {
            return <li style={{paddingLeft:30}}><b>YouTube</b><br></br><a style={{color:'#ccc', fontSize:26, paddingLeft: 6}} href='#'><FaYoutube style={{paddingLeft: 10, fontSize:40}} /></a></li>
        }
    }

    hasGithub(boo, item) {
        if (boo) {
            return <li style={{paddingLeft:30}}><b>GitHub</b><br></br><a style={{color:'#f10b51', fontSize:26, paddingLeft:6}} href={"" + item.github}><FaGithub style={{paddingLeft: 10, fontSize:40}} /></a></li>
        } else {
            return <li style={{paddingLeft:30}}><b>GitHub</b><br></br><a style={{color:'#ccc', fontSize:26, paddingLeft: 6}} href='#'><FaGithub style={{paddingLeft: 10, fontSize:40}} /></a></li>
        }
    }

    hasinsta(boo, item) {
        if (boo) {
            return <li style={{paddingLeft:30}}><b>Instagram</b><br></br><a style={{color:'#f10b51', fontSize:26, paddingLeft:6}} href={"" + item.insta}><FaInstagram style={{paddingLeft: 10, fontSize:40}} /></a></li>
        } else {
            return <li style={{paddingLeft:30}}><b>Instagram</b><br></br><a style={{color:'#ccc', fontSize:26, paddingLeft: 6}} href='#'><FaInstagram style={{paddingLeft: 10, fontSize:40}} /></a></li>
        }
    }
}

export default withStyles(styles)(CreatorsApp);