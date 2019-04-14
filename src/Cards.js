import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { FaClock, FaArrowCircleRight} from 'react-icons/fa';
import { Link } from 'react-router-dom'
//import getBaseUrl from './consts.js'
//import CardMedia from '@material-ui/core/CardMedia';


const styles = {
  card: {
    width: 180,
    backgroundColor: '#ccc',
    paddingRight: 20,
  },
  media: {
    padding: 200,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    
  },
};

class SimpleCard extends React.Component{

  state = {
        items: [],
  };

  componentDidMount() {
    axios.get('http://localhost:8000/api/apps/newest').then(res => {
      const datem = res.data;
      this.setState({items: datem})
    })
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
                <Card style={{paddindRight:20}} className={styles.card}>
                <CardContent key={item.appID}  style={{backgroundColor:'#ccc', paddingRight:20}}>
                  <Typography className={styles.title} color="textSecondary">
                    <p style={{color:'#df0c0c', fontSize:30, fontFamily: 'Montserrat',  textAlign:'justify'}}>{item.appname}</p><br></br>
                  </Typography>
                  <div style={{display: 'flex', maxWidth: '80%', maxHeight: '5%'}}>
                  <Typography className={styles.pos} color="textSecondary">
                    <b style={{fontFamily: 'Montserrat'}}>{item.body}</b>
                  </Typography>
                  <Typography className={styles.media}>
                  <img style={{borderRadius:10, width: 100}} src={item.smallPic}  alt="hshshsdh!" />
                  </Typography>
                  </div>
                  <Typography component="p">
                  <br></br>
                  <FaClock style={{color:'#333'}}/>  {item.createdAt} 
                  </Typography>
                </CardContent> 
                <CardActions style={{backgroundColor:'#222'}}>
                <b style={{color:'#fff'}}>Beliebtheit: {item.downloads}</b> <b style={{color:'#fff'}}>|</b> <Link to={`/app/${item.appID}`} style={{color:'#df0c0c'}}>mehr Anzeigen <FaArrowCircleRight/></Link>             
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
}

//Link to={{ pathname:`/apps/${item.appID} `}}
//<img style={{borderRadius:'50%'}} src={item.smallPic}  alt="hshshsdh!" />

export default withStyles(styles)(SimpleCard);