import React from "react";
import Sidebar from "react-sidebar";
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
          <div>
            <h1 style={{textDecoration:'underline'}}>Menu</h1><br></br>
            <a>Newest Apps</a>
            <a>Most Downloads</a>
            <br></br>
          
            
          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: {color:'#000', position:'fixed', zIndex:4000, width:300, backgroundColor: '#ccc', paddingTop:60, paddingLeft:100,} }}>
        <IconButton style={{position:'fixed', top:10, right:20,zIndex:3000, fontSize:56, color:'#fff', borderColor:'#fff',  borderWidth:0.5 }} onClick={() => this.onSetSidebarOpen(true)}>
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