import React from 'react';
import Bar from "./MenueBar.js";
import SideNavPage from "./SideNavigation"
import axios from 'axios';
import { FaArrowCircleRight} from 'react-icons/fa';
import { IoIosSchool } from "react-icons/io";
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FiUser } from "react-icons/fi";
import getBaseURL from "./const.js"
import alt from './assets/ersatzbild.jpg';

class SearchPage extends React.Component {

    styles = {
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

    state = {
        items: [],
        term: ""
  };

  reloadSide = false
  hasSearchResult = false
  message = false
  text = null

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ 
        [name]: value, 
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.post(getBaseURL() + '/api/apps/search/',{
        term: this.state.term}
    ).then(res => {
        this.message = true
        if(res.status === 204) {this.text = res.data; this.message = false}
        const datem = res.data;
        this.reloadSide = true

    this.setState({items: datem})
    }).catch(res => {
        this.message = true
        this.text = res.data
    } )
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

    returnSearch() {
        if (typeof this.state.items !== 'undefined' && this.state.items.length > 0) {
            const { items } = this.state
            return <ul style={{marginRight:20, paddingLeft:20, paddindRight:20, listStyleType: "none",  justifyContent: 'center',  alignItems: 'center', fontFamily: 'Montserrat',}}> 
                        {items.map(item => (
                        <div >
                            <Card className={this.styles.card}>
                            <CardContent key={item.appID}  style={{backgroundColor:'rgba(23, 26, 33, 1)', paddingRight:20, border:'2px solid  rgb(241, 11, 81)', borderBottom:'0px solid #fff'}}>
                            <Typography className={this.styles.title}>
                            <h1><b><p style={{color:'#fff', fontSize:30, fontFamily: 'Montserrat',  textAlign:'justify'}}>{item.appname}</p></b></h1>   
                            </Typography>
                            <div style={{display: 'flex'}}>
                            <div style={{maxWidth: '80%', minWidth: '80%'}}>
                            <Typography className={this.styles.pos}>
                                <br></br><br></br>
                                <div style={{color: '#fff', fontFamily: 'Montserrat'}}>{item.body}</div>
                            </Typography>
                            </div>
                            <div style={{paddingLeft: 10}}>
                            <Typography>
                            <img style={{borderRadius:40, width: 150, height: 150}}  src={this.getImage(item.smallPic, item.linkImg)} alt="This app has no Pic yet" />
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
        } else if ( this.state.items.length === 0 && this.message){
           return <div style={{textAlign:'center', color:'#f10b51'}}>
                        <h1>Entschuldige wir haben leider nichts gefunden!</h1> 
                        <h3>auch wenn wir überall gesucht haben</h3>
                        <br></br>
                        <img style={{borderRadius:25}} alt="nothing found" src="https://media.giphy.com/media/8vQSQ3cNXuDGo/giphy.gif" ></img>
                        <br></br><br></br>
                        <span style={{color:'#fff'}}>Copyright &copy; by Giphy</span>
                        <br></br><br></br>
                </div>
        } 
        else {
            return <h1 style={{textAlign:'center', fontSize:20, color:'#f10b51', fontWeight:'bold'}}>Hier kannst du etwas suchen!</h1>
        }
    }

    render() {
        return (
            <div>
                <Bar/>
                <SideNavPage/>
                <div style={{position:'absolute', top:100, color:'#fff', width:'60%', left:'20%'}}>
                    <h1 style={{textAlign:'center', fontFamily: 'Montserrat'}}> App Suche</h1>
                    <br></br>
                    <form onSubmit={this.handleSubmit}>
                        <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}></label>
                        <input 
                            style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} 
                            type="text" name="term" onChange={this.handleChange} required />
                        <br></br><br></br>
                        <button type="submit" style={{position:'absolute', width:'10%', left:'45%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)', fontWeight:'bold'}} 
                            >Suche</button>
                        <br></br><br></br>
                    </form>
                    <br></br><br></br>
                    <label style={{fontSize:20, color: '#f10b51'}}>Suchergebnisse</label>
                    <hr style={{ border: '1px solid #ccc'}}></hr>
                    <br></br><br></br>
                    {this.returnSearch()}

                </div>
            </div>
        );
    }
}

export default SearchPage 