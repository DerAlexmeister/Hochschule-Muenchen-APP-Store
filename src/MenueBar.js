import React from "react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import logo from './assets/logo_with_name.png';
import { FiUser, FiPlusSquare } from "react-icons/fi"; 
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#898989',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});



class  Bar extends React.Component{

    isLoggedIn = false
    token = null

    componentWillMount() {
      this.isLoggedIn = sessionStorage.getItem("isLoggedIn")
      this.token = sessionStorage.getItem("token")
      console.log(this.token)
      console.log(this.isLoggedIn)
      console.log(sessionStorage.getItem("token"))
    }

    render(){
      console.log(this.isLoggedIn)
      return (
        <div className={styles.root}>
          <AppBar style={{position:'static'}}>
            <Toolbar style={{position:'fixed',width:'100%', backgroundColor: '#171a21', color:'#fff',  zIndex:2000}}>
            <span style={{position:'absolute', left:100, top: 8, fontSize:30, color:'#fff'}}>|</span>
            {this.canCreate(this.isLoggedIn)}
            <FiUser style={{position:'absolute', left:120, fontSize:20, top: 24, color:'#fff'}}/>
            <img style={{position:'absolute', right:10, width:180, height:60, zIndex:10}} src={logo} alt="Logo" />
            </Toolbar>
          </AppBar>
        </div>
      );
    }

    canCreate(stateOfLoggedIn) {
      if (stateOfLoggedIn) {
        return <Link to="/createapp/"><IoIosAddCircleOutline style={{position:'absolute', left:160, top: 24, fontSize:24, color:'#fff'}} /></Link>
      } else {
        return <Link to="/signin"><IoIosAddCircleOutline style={{position:'absolute', left:160, top: 24, fontSize:24, color:'#666'}} /></Link>
      }
    }
}



Bar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bar);