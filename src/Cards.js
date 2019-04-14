import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { FaClock, FaArrowCircleRight} from 'react-icons/fa';
import { Link } from 'react-router-dom'

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
                <Card className={styles.card}>
                <CardContent key={item.appID}  style={{backgroundColor:'#666666', paddingRight:20}}>
                  <Typography className={styles.title}>
                  <h1><b><p style={{color:'#fff', fontSize:30, fontFamily: 'Montserrat',  textAlign:'justify'}}>{item.appname}</p></b></h1>   
                  </Typography>
                  <div style={{display: 'flex'}}>
                  <div style={{maxWidth: '80%', minWidth: '80%'}}>
                  <Typography className={styles.pos}>
                    <div style={{color: '#fff', fontFamily: 'Montserrat'}}>{item.body}</div>
                  </Typography>
                  </div>
                  <div style={{paddingLeft: 100}}>
                  <Typography>
                  <img style={{borderRadius:10, width: 150, height: 150}} src={item.smallPic}  alt="No Pic found!" />
                  </Typography>
                  </div>
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

export default withStyles(styles)(SimpleCard);