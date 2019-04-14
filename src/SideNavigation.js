import React from "react";
import Sidebar from "react-sidebar";
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './assets/logo_with_name.png';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaXing, FaRegCopyright } from 'react-icons/fa';

class SideNavPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  render() {
    return (
      <Sidebar
        sidebar={
          <div style={{width:'100%', height:'100%', paddingRight:20, fontFamily: 'Montserrat'}}>
            <img style={{width:180, height:60, zIndex:10}} src={logo} alt="Logo" />
            <hr style={{backgroundColor:'#fff'}}></hr>
            <div style={{width:'100%', paddingLeft:0,}}>
              <h2 style={{width:'100%', textAlign: 'center', color:'#ccc'}}><u>Menu</u></h2>
              <ul style={{listStyleType: "none", color:'#ccc', textAlign: 'center', paddingLeft: 0}}>
                <li><a style={{listStyleType: "none", color:'#ccc'}} href="/">Home</a></li>
                <li><a style={{listStyleType: "none", color:'#ccc'}} href="/apps">Apps</a></li>
                <li><a style={{listStyleType: "none", color:'#ccc'}} href="/">Profil</a></li>
                <li><a style={{listStyleType: "none", color:'#ccc'}} target='blank' href="https://www.hm.edu/sekundaer_navigation/impressum/index.de.html">Impressum</a></li>
                <li><a style={{listStyleType: "none", color:'#ccc'}} target='blank'href="https://www.hm.edu/sekundaer_navigation/impressum/datenschutz/index.de.html">Datenschutz</a></li>
                <li><a style={{listStyleType: "none", color:'#ccc'}} target='blank' href="https://www.hm.edu/allgemein/kontakt/index.de.html">Kontakt</a></li>
              </ul>
              <br></br>
            </div>
            <hr style={{backgroundColor:'#fff'}}></hr>
            <div style={{color:'#fff'}}>
            <InputBase style={{color:'#fff', paddingLeft: 22.5}}placeholder="Search…" /> <SearchIcon />
            </div>
            <hr style={{backgroundColor:'#fff'}}></hr>
            <div>
                <ul>
                  <li style={{display:'Inline', paddingLeft:30 }}><a style={{color:'#ccc'}} target='blank' href="https://www.facebook.com/HochschuleMuenchen"><FaFacebookF/></a></li>
                  <li style={{display:'Inline', paddingLeft:10 }}><a style={{color:'#ccc'}} target='blank' href="https://twitter.com/HAW_Muenchen"><FaTwitter/></a></li>
                  <li style={{display:'Inline', paddingLeft:10 }}><a style={{color:'#ccc'}} target='blank' href="https://www.youtube.com/user/HochschuleMuenchen1"><FaYoutube/></a></li>
                  <li style={{display:'Inline', paddingLeft:10 }}><a style={{color:'#ccc'}} target='blank' href="https://www.linkedin.com/school/hochschule-muenchen"><FaLinkedinIn/></a></li>
                  <li style={{display:'Inline', paddingLeft:10 }}><a style={{color:'#ccc'}} target='blank' href="https://www.xing.com/communities/groups/hochschule-muenchen-hochschule-fuer-angewandte-wissenschaften-1073062"><FaXing/></a></li>
                </ul>
            </div>
            <div style={{position: 'absolute', bottom: 20, paddingLeft: 0, width: 280, textAlign: 'center', color:'#fff', fontFamily: 'Montserrat', fontSize:14}}>
            Copyright <FaRegCopyright /> Appmon
            </div>
          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: {color:'#000', position:'fixed', zIndex:4500, width:300, backgroundColor: '#171a21', paddingTop:20, paddingLeft:10, paddingRight:10} }}>
        <IconButton style={{position:'fixed', top:10, left:20, zIndex:3000, fontSize:56, color:'#fff', borderColor:'#fff',  borderWidth:0.5 }} onClick={() => this.onSetSidebarOpen(true)}>
            <MenuIcon />
          </IconButton>
      </Sidebar>
    );
  }
}
 
const styles = theme => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden"
  },
  sidebar: {
    zIndex: -1,
    position: "absolute",
    top: 0,
    bottom: 0,
    transition: "transform .3s ease-out",
    WebkitTransition: "-webkit-transform .3s ease-out",
    willChange: "transform",
    overflowY: "auto"
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    transition: "left .3s ease-out, right .3s ease-out"
  },
  overlay: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: "hidden",
    transition: "opacity .3s ease-out, visibility .3s ease-out",
    backgroundColor: "rgba(0,0,0,.5)"
  },
  dragHandle: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    bottom: 0
  }
});

export default withStyles(styles)(SideNavPage);