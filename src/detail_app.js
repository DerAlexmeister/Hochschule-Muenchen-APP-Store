import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';


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
    const {appID} = this.state
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