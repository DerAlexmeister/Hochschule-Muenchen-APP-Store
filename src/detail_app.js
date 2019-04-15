import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {FaRegEnvelope, FaRegCompass, FaStreetView, FaRegCopyright} from "react-icons/fa"
import { IoMdDownload, IoMdTime, IoIosPerson, IoIosSchool } from "react-icons/io";
import { Link } from 'react-router-dom'

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

class Appdetails extends React.Component{

  state = {
        items: ["0"]
  };

  appID_ = this.props.appID_

  
  componentDidMount() {
        console.log("This is the APPID we got: "+ this.appID_)
        axios.get('http://localhost:8000/api/apps/' + (this.appID_)).then(res => {
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
          <ul style={{marginRight:20, paddingLeft:20, paddindRight:20, listStyleType: "none",  justifyContent: 'center',  alignItems: 'center', fontFamily: 'Montserrat'}}> 
            {items.map(item => (
              <div>
                <div style={{display:'flex'}}>
                  <img style={{borderRadius:50, width:200, height:200}} src={"http://localhost:8000" + item.smallPic}  alt="hshshsdh!" />
                  <h1 style={{color:'#fff', paddingLeft:40, paddingTop:150}}> {item.appname}</h1>
                  <div style={{paddingTop:170, paddingLeft:500, maxHeight:300, maxWidth:300 }}>
                    <a style={{color:'#df0c0c', border:'2px solid #f10b51', borderRadius:4, width:'100%', height:'100%', textAlign:'center', margin:'auto', padding:15 }} href="">Download</a>
                  </div>
                </div>
                <hr style={{backgroundColor:'#fff', width:'100%', height:1}}></hr>
                <br></br>
                <p style={{color:'#fff'}}><h5><b>Beschreibung</b></h5>
                  {item.body}
                </p>
                <br></br>
                <hr style={{backgroundColor:'#fff',width:'100%', height:1}}></hr>
                <p style={{color:'#fff'}}><h5><b>Informationen</b></h5><br></br>
                  <ul style={{paddingLeft:0, display:'flex', listStyle:'none'}}>
                    <li style={{paddingLeft:0}}><b style={{color: '#df0c0c'}}>Downloads</b> <br></br><IoMdDownload /> {item.downloads}</li>
                    <li style={{paddingLeft:20}}><b style={{color: '#df0c0c'}}>Userempfehlung</b> <br></br><IoIosPerson /> {item.typOfAccount}</li>
                    <li style={{paddingLeft:20}}><b style={{color: '#df0c0c'}}>Fakultät</b> <br></br><IoIosSchool /> {item.Fakultaet}</li>
                    <li style={{paddingLeft:20}}><b style={{color: '#df0c0c'}}>Created at</b> <br></br><IoMdTime /> {item.createdAt}</li>
                  </ul>
                </p>
                <hr style={{backgroundColor:'#fff'}}></hr>
                <p style={{color:'#fff'}}><h5><b>Kontakt</b></h5><br></br>
                  <ul style={{paddingLeft:0, display:'flex', listStyle:'none'}}>
                    <li style={{paddingLeft:0}}><b>Email</b><br></br><a style={{color:'#f10b51', fontSize:26, paddingLeft: 6}} href={"mailto:" + item.contectEmail}><FaRegEnvelope/></a></li>
                    <li style={{paddingLeft:20}}><b>Web</b><br></br><a style={{color:'#f10b51', fontSize:26, paddingLeft:6}} href={"" + item.website}><FaRegCompass/></a></li>
                    <li style={{paddingLeft:20}}><b>Creator</b><br></br><Link to={`/creator/${item.creator}`} style={{color:'#f10b51', fontSize:26, paddingLeft:14}}><FaStreetView/></Link></li>
                  </ul>
                </p>
                <hr style={{backgroundColor:'#fff', width:'100%', height:1}}></hr>
                <h6 style={{color:'#fff'}}>Copyright <FaRegCopyright /> Appmon</h6>
              </div>
          ))}
          </ul>
      );
    }
}

export default withStyles(styles)(Appdetails);