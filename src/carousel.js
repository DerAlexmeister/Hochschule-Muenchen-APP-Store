import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { Link } from 'react-router-dom'
import React from "react";
import Carousel  from 'nuka-carousel';

 class SimpleSlider extends React.Component {
  
  state = {
    slideIndex: 0,
    items: [],
  };

  componentDidMount() {
    axios.get('http://localhost:8000/api/apps/mostdownloads').then(res => {
    const datem = res.data;
    this.setState({items: datem})
    })
  }

  render() {
    const{items}=this.state
    return (
      <Carousel
        slideIndex={this.state.slideIndex}
        afterSlide={slideIndex => this.setState({ slideIndex })}
      >
         <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
        <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
        <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
        <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
        <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
        <img
          src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
      </Carousel>
    );
  }
}
export default SimpleSlider;

/*
<div style={{ fontFamily: 'Montserrat',}}> 
{items.map(item => (
  <div style={{paddingLeft:30 }}>
      <Link to={`/app/${item.appID}`} style={{textDecoration: 'none'}}> 
      <Card>
        <CardContent key={item.appID}  style={{backgroundColor:'rgba(23, 26, 33, 1)', border:'2px solid  rgb(241, 11, 81)', width: 400, height: 300}}>
          <Typography>
          <h1><b><p style={{color:'#fff', fontSize:16, fontFamily: 'Montserrat',  textAlign:'center'}}>{item.appname}</p></b></h1>   
          </Typography>
          <img style={{paddingLeft: 60, width: 300, height: 230}} src={item.smallPic}  alt="This app has no Picture yet" />
        </CardContent> 
      </Card>
      </Link>        
    </div>
  ))}   
</div> */