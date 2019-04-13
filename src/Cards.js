import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
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
          <ul style={{marginRight:20, paddingLeft:20, paddindRight:20, listStyleType: "none",  justifyContent: 'center',  alignItems: 'center'}}> 
            {items.map(item => (
              <div >
                <Card style={{paddindRight:20}} className={styles.card}>
                <CardContent key={item.appID}  style={{backgroundColor:'#ccc', paddingRight:20}}>
                  <Typography className={styles.title} color="textSecondary">
                    {item.appname}
                  </Typography>
                  <Typography className={styles.pos} color="textSecondary">
                    Tag
                  </Typography>
                  <Typography component="p">
                    {item.body}
                  </Typography>
                </CardContent>
                <CardActions style={{backgroundColor:'#222'}}>
                  <Button style={{color:'#fff'}} size="small">Download</Button>
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

export default withStyles(styles)(SimpleCard);