import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { FaArrowCircleRight, FaTrash, FaFileSignature} from 'react-icons/fa';
import { Link } from 'react-router-dom'
import getBaseURL from "./const.js"


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

class DeleteChangeApp extends React.Component{

    state = {
          items: [],
    };
  
    reload = false
    isLoggedIn = false
    token = null
    user_id = 0
    token_s = ""

    componentWillMount() {
        this.isLoggedIn = sessionStorage.getItem("isLoggedIn")
        this.token = sessionStorage.getItem("token")
        this.user_id = Number(sessionStorage.getItem("user_id"))
        sessionStorage.setItem('message', "")
    }

    componentDidMount() {
      axios.get(getBaseURL() + '/api/apps/creator/' + this.user_id).then(res => {
        const datem = res.data;
        this.setState({items: datem})
      })
    }
    
    getString(token_) {
      return "Authorization: Token" + token_.toString();
    }

    deleteApp(app_id, token_) {
      this.reload = true;
      this.token_s = "Token ".concat(token_)
      axios.defaults.headers.common['Authorization'] = `Token ${token_}`
      axios.post(getBaseURL() + '/api/apps/delete', {
        creator : this.user_id,
        app_Id: app_id,   
        token: token_,
      }).then(
          this.setState({reload:true})
          //this.props.history.push("/myapps")
      );
    }

    getImage(param1, param2) {
      console.log(param1, param2)
      if(param1) {
          return getBaseURL() + param1
      } else if (typeof param2 !== 'undefined' && param2 !== null) {
          return "" + param2
      } else {
          return getBaseURL() + "/media/ersatzbild.jpg"
      }
  }


    render() {
        const { items } = this.state
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
                    <img style={{borderRadius:20, width: 150, height: 150}} src={this.getImage(item.smallPic, item.linkImg)} alt="" />
                    </Typography>
                    </div>
                    </div>
                  </CardContent> 
                  <CardActions style={{backgroundColor:'rgba(23, 26, 33, 1)', border:'2px solid #df0c0c', borderTop:'0px solid #fff'}}>
                    <span style={{color:'#fff'}}>Beliebtheit: {item.downloads}</span> <b style={{color:'#fff'}}>|</b> 
                      <span ><Link to='#' style={{color:'#fff'}} onClick={() => this.deleteApp(item.appID, this.token)}><FaTrash style={{color:'#f10b51'}} /> Delete</Link></span>  <b style={{color:'#fff'}}>|</b>
                      <span ><Link to={`/myapp/change/${item.appID}`} style={{color:'#fff'}}><FaFileSignature style={{color:'#f10b51'}} /> Change</Link></span>  <b style={{color:'#fff'}}>|</b>   
                      <Link to={`/app/${item.appID}`} style={{color:'#df0c0c'}}>meine App zeigen <FaArrowCircleRight/></Link>             
                  </CardActions>
              </Card>
              <br></br><br></br>
                </div>
            ))}
        </ul>
        );
    }
}

export default DeleteChangeApp