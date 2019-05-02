import React from 'react'
import SearchAppBar from "./MenueBar.js";
import SideNavPage from "./SideNavigation"
import { Redirect } from 'react-router-dom'
import axios from 'axios';

class ChangeApp extends React.Component{

    isLoggedIn = false
    token = null
    user_id = 0

    state = {
        items: ["0"],
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
    axios.post(`http://localhost:8000/api/apps/changeapp/`, {
        creator : this.user_id,
        appname: this.state.appname,   
        body: this.state.body,
        contectEmail: this.state.contectEmail,
        website: this.makeWebsite(this.state.website),
        linkImg: this.makeWebsite(this.state.linkImg),
        token: this.token
    }).then(res => {
            console.log(res);
            console.log(res.data);
        });
    }


    makeWebsite(param){
        if(param.includes('http') || param.includes('https')){
            return param
        } else if (!param) {
            return null
        } else {
            return "http://".concat(param)
        }
    }

  appID_ = this.props.match.params.appID
  
  componentDidMount() {
        axios.get('http://localhost:8000/api/apps/' + (this.appID_)).then(res => {
            const datem = res.data;
            this.setState({items: [datem] })
            this.state.items.map(item => this.setState({
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