import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { FaArrowCircleRight} from 'react-icons/fa';
import { IoIosSchool } from "react-icons/io";
import { Link } from 'react-router-dom'
import { FiUser } from "react-icons/fi";
import getBaseURL from "./const.js"
import alt from './assets/ersatzbild.jpg';

const styles = {
  card: {
    width: 180,
    paddingRight: 20,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class SimpleCardOld extends React.Component{

  state = {
        items: [],
  };

  componentDidMount() {
    axios.get(getBaseURL() + '/api/apps/oldest').then(res => {
      const datem = res.data;
      this.setState({items: datem})
    })
  }

  getImage(param1, param2) {
    if (param1) {
        return "" + param1
    } else if (param2) {
        return "" + param2
    } else if (typeof param2 !== 'undefined' && param2 !== null) {
        return "" + param2
    } else {
        return getBaseURL() + alt
    }
  }

  render() {
    const {items, error, isLoaded}  = this.state;
    console.log("items: " + this.state.items)
      console.log("isLoaded: " + this.state.isLoaded)
      console.log("error: " + this.state.error)
    if (error) {
      return <h1>Error</h1>
    } else if (isLoaded) {
      return <h1>loading</h1>
    } else if (typeof items !== 'undefined') {
      return (
          <ul style={{marginRight:20, paddingLeft:20, paddindRight:20, listStyleType: "none",  justifyContent: 'center',  alignItems: 'center', fontFamily: 'Montserrat',}}> 
            {items.map(item => (
              <div >
                <Card className={styles.card}>
                <CardContent key={item.appID}  style={{backgroundColor:'rgba(23, 26, 33, 1)', paddingRight:20, border:'2px solid  rgb(241, 11, 81)', borderBottom:'0px solid #fff'}}>
                  <Typography className={styles.title}>
                  <h1><b><p style={{color:'#fff', fontSize:30, fontFamily: 'Montserrat',  textAlign:'justify'}}>{item.appname}</p></b></h1>   
                  </Typography>
                  <div style={{display: 'flex'}}>
                  <div style={{maxWidth: '80%', minWidth: '80%'}}>
                  <Typography className={styles.pos}>
                    <br></br><br></br>
                    <div style={{color: '#fff', fontFamily: 'Montserrat'}}>{item.body}</div>
                  </Typography>
                  </div>
                  <div style={{paddingLeft: 100}}>
                  <Typography>
                  <img style={{borderRadius:20, width: 150, height: 150}} src={item.linkImg}  alt="This app has no graphic yet" />
                  </Typography>
                  </div>
                  </div>
                </CardContent> 
                <CardActions style={{backgroundColor:'rgba(23, 26, 33, 1)', border:'2px solid #df0c0c', borderTop:'0px solid #fff'}}>
                  <span style={{color:'#fff'}}>Beliebtheit: {item.downloads}</span> <b style={{color:'#fff'}}>|</b> 
                    <span style={{color:'#fff'}}><IoIosSchool style={{color:'#f10b51'}} /> {item.Fakultaet}</span>  <b style={{color:'#fff'}}>|</b>
                    <span style={{color:'#fff'}}> {this.getype(item.typOfAccount)}</span>  <b style={{color:'#fff'}}>|</b>   
                    <Link to={`/app/${item.appID}`} style={{color:'#df0c0c'}}>mehr Anzeigen <FaArrowCircleRight/></Link>             
                </CardActions>
            </Card>
            <br></br><br></br>
              </div>
          ))}
          
      </ul>
      );
    } else {
      return <h1 style={{color:'#fff'}}>undefined</h1>
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
    }
    else if (it === 'All') {
      return  <div>Jeden <FiUser style={{color:'#f10b51'}} /></div>
  } else {
        return  <div>Professor\in <FiUser style={{color:'#f10b51'}} /></div>
    }
}
}

export default withStyles(styles)(SimpleCardOld);