import React from 'react'
import SearchAppBar from "./MenueBar.js";
import SideNavPage from "./SideNavigation"
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import getBaseURL from "./const.js"
import alt from './assets/ersatzbild.jpg';

class ChangeApp extends React.Component{

    isLoggedIn = false
    token = null
    user_id = 0

    state = {
        items: ["0"],
        appid: 0,
        appname: '',
        body: '',
        website: '',
        contectEmail: '',
        linkImg: '',
        typOfAccount: 'ST',
        Fakultaet: 'FK00',
    }
    
    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ 
            [name]: value, 
            [name]: value, 
            [name]: value, 
            [name]: value, 
            [name]: value, 
            [name]: value, 
            [name]: value, 
        });
    }
    componentWillMount() {
        this.isLoggedIn = sessionStorage.getItem("isLoggedIn")
        this.token = sessionStorage.getItem("token")
        this.user_id = Number(sessionStorage.getItem("user_id"))
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.defaults.headers.common['Authorization'] = `Token ${this.token}`
    axios.post(getBaseURL()+ `/api/apps/changeapp/`, {
        app_ID : this.state.appid,
        creator : this.user_id,
        appname: this.state.appname,   
        body: this.state.body,
        contectEmail: this.state.contectEmail,
        website: this.makeWebsite(this.state.website),
        linkImg: this.makeImgLink(this.state.linkImg),
    }).then(res => {
            if(res.status === 201) {
                sessionStorage.setItem('message', "Änderungen wurden gespeichert")
                this.props.history.push(`/myapp/change/${this.state.app_ID}`)
            } else if(res.status === 400) {
                sessionStorage.setItem('message', "Deine Eingabe konnte nicht gespeichtert werden überprüfe bitte ihre Gültigkeit")
                this.props.history.push(`/myapp/change/${this.state.app_ID}`)
            } else {
                sessionStorage.setItem('message', "Ein Problem ist aufgetretten")
            }
        });
    }

    makeWebsite(param){
        if(param.includes('http') || param.includes('https')){
            return param
        } else if (param === null || typeof param === "undefined"  || param.includes("null")  || param.toString().includes(" ") || param.toString().includes("") || param.toString().includes("null")) {
            return "http://www.hm.edu"
        } else {
            return "http://".concat(param)
        }
    }

    makeImgLink(param){
        if(param.includes('http') || param.includes('https')){
            return param
        } else if (param === null || typeof param === "undefined"  || param.includes("null")  || param.toString().includes(" ") || param.toString().includes("") || param.toString().includes("null")) {
            return getBaseURL() + alt
        } else {
            return "http://".concat(param)
        }
    }

  appID_ = this.props.match.params.appID
  
  componentDidMount() {
        axios.get(getBaseURL() + '/api/apps/' + (this.appID_)).then(res => {
            const datem = res.data;
            this.setState({items: [datem] })
            this.state.items.map(item => this.setState({
                appid: item.appID,
                appname: item.appname,
                body: item.body,
                website: item.website,
                contectEmail: item.contectEmail,
                linkImg: item.linkImg,
                typOfAccount: item.typOfAccount,
                Fakultaet: item.Fakultaet,
            }))
            this.defaultItemValue(this.state.items)
        }).catch(err => {
            console.error(err)
        })
    }

    defaultItemValue(items) {
        items.map(item => (
            document.getElementById('appname').defaultValue = item.appname,
            document.getElementById('body').defaultValue = item.body,
            document.getElementById('website').defaultValue = item.website,
            document.getElementById('contectEmail').defaultValue = item.contectEmail,
            document.getElementById('linkImg').defaultValue = item.linkImg
        ))
    }

    getMessage() {
        const message = sessionStorage.getItem('message')
        return  message ? message : ""
    }

    
    render() {
        const { items } = this.state;
        if (this.isLoggedIn) {
            return (
                <div>
                 {items.map(item => (
                <div>
                    <SearchAppBar/>
                    <SideNavPage/>
                    <div style={{position:'absolute', top:100, left:'15%', right:'15%', color:'#fff'}}>
                    <h1 style={{textAlign:'center', fontFamily: 'Montserrat'}}> App bearbeiten </h1>
                        <br></br>
                        <h3 style={{color:'#ACFA58', textAlign:'center'}}>{ this.getMessage() }</h3>
                        <br></br>
                        <form onSubmit={this.handleSubmit}>
                            <label style={{textAlign:'center', fontWeight:'bold', fontFamily: 'Montserrat'}}>Name der App</label>
                            <input id="appname" style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" name="appname" onChange={this.handleChange} required /><br></br><br></br>
                            <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>Beschreibung</label>
                            <input id="body" style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" name="body" onChange={this.handleChange}  required /><br></br><br></br>
                            <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>Deine Website</label>
                            <input id="website" style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" default="null" name="website" onChange={this.handleChange} /><br></br><br></br>
                            <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>Kontaktemail</label>
                            <input id="contectEmail" style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="email" name="contectEmail" onChange={this.handleChange}  requierd /><br></br><br></br>
                            <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>App-Icon</label>
                            <input id="linkImg" style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" name="linkImg" onChange={this.handleChange}  /><br></br><br></br>                        
                            <br></br><br></br>
                            <button style={{position:'absolute', width:'10%', left:'45%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)', fontWeight:'bold'}} type='submit'>Save</button><br></br><br></br>
                        </form>
                    </div>
                </div>
                ))}   
                </div> 
            );
        } else {
            return <Redirect to='/signin'  />
        }
    }
}

export default ChangeApp