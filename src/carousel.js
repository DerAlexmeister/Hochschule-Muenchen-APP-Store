import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Slider from "react-slick";
import { Link } from 'react-router-dom'

class SimpleSlider extends React.Component {

  state = {
    items: [],
  };

  componentDidMount() {
    axios.get('http://localhost:8000/api/apps/mostdownloads').then(res => {
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
      <Slider className={styles.settings}>
        <div style={{ fontFamily: 'Montserrat',}}> 
        <ul style={{display:'flex'}}>
        {items.map(item => (
          <li style={{paddingLeft:30 }}>
              <Link to={`/app/${item.appID}`} style={{textDecoration: 'none'}}> 
              <Card>
                <CardContent key={item.appID}  style={{backgroundColor:'rgba(23, 26, 33, 1)', border:'2px solid  rgb(241, 11, 81)', width: 400, height: 300}}>
                  <Typography className={styles.title}>
                  <h1><b><p style={{color:'#fff', fontSize:16, fontFamily: 'Montserrat',  textAlign:'center'}}>{item.appname}</p></b></h1>   
                  </Typography>
                  <img style={{paddingLeft: 60, width: 300, height: 230}} src={item.smallPic}  alt="This app has no Picture yet" />
                </CardContent> 
              </Card>
              </Link>        
            </li>
          ))}   
        </ul>
        </div>
      </Slider>
    );
  } else {
    return <h1 style={{color:'#fff'}}>undefined</h1>
  }
  }
}



const styles = {
  settings: {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 20,
    slidesToScroll: 1,
  },
  title: {
    fontSize: 14,
  },
};

export default withStyles(styles)(SimpleSlider);