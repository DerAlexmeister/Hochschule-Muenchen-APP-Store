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

  
  componentDidMount() {
    const {appID} = this.props.match.params
        console.log(appID)
        axios.get('http://localhost:8000/api/apps/' + (appID)).then(res => {
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
          <ul style={{marginRight:20, paddingLeft:20, paddindRight:20, listStyleType: "none",  justifyContent: 'center',  alignItems: 'center', fontFamily: 'Montserrat',}}> 
            { items.map(item => (
              <li style={{color:'#fff'}}>{item.appID}</li>
          ))}
      </ul>
      );
    }
}

//Link to={{ pathname:`/apps/${item.appID} `}}

export default withStyles(styles)(Appdetails);