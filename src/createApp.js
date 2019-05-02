import React from 'react'
import SearchAppBar from "./MenueBar.js";
import SideNavPage from "./SideNavigation"
import { Redirect } from 'react-router-dom'
import axios from 'axios';

export default class CreateApp extends React.Component{

    isLoggedIn = false
    token = null
    user_id = 0

    state = {
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

    makeWebsite(param){
        if(param.includes('http') || param.includes('https')){
            return param
        } else {
            return "http://".concat(param)
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.defaults.headers.common['Authorization'] = `Token ${this.token}`
    axios.post(`http://localhost:8000/api/apps/new`, {
        creator : this.user_id,
        appname: this.state.appname,   
        body: this.state.body,
        contectEmail: this.state.contectEmail,
        website: this.makeWebsite(this.state.website),
        linkImg: this.makeWebsite(this.state.linkImg),
        typOfAccount: this.state.typOfAccount,
        Fakultaet: this.state.Fakultaet,
    }).then(res => {
            console.log(res);
            console.log(res.data);
            window.location.reload()
        });
    }

    render() {
        if (this.isLoggedIn) {
            return (
                <div>
                    <SearchAppBar/>
                    <SideNavPage/>
                    <div style={{position:'absolute', top:100, left:'15%', right:'15%', color:'#fff'}}>
                    <h1 style={{textAlign:'center', fontFamily: 'Montserrat'}}> App erstellen</h1>
                        <br></br>
                        <form onSubmit={this.handleSubmit}>
                            <label style={{textAlign:'center', fontWeight:'bold', fontFamily: 'Montserrat'}}>Name der App</label>
                            <input style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" name="appname" onChange={this.handleChange} required /><br></br><br></br>
                            <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>Beschreibung</label>
                            <input style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" name="body" onChange={this.handleChange} required /><br></br><br></br>
                            <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>Deine Website</label>
                            <input style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" default="null" name="website" onChange={this.handleChange} /><br></br><br></br>
                            <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>Kontaktemail</label>
                            <input style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" name="contectEmail" onChange={this.handleChange} requierd /><br></br><br></br>
                            <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>App-Icon</label>
                            <input style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" name="linkImg" onChange={this.handleChange} /><br></br><br></br>                        <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>
                                Für wenn:
                                </label>
                                <select value={this.state.typOfAccount} onChange={(e) => this.setState({typOfAccount: e.target.value})} 
                                        style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} >
                                    <option value="ST">Student</option>
                                    <option value="PR">Professor</option>
                                    <option value="Fr">Externer Student (TUM/LMU) </option>
                                </select>
                                <br></br><br></br>
                                <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>
                                    Welche Fakultät:
                                    </label>
                                    <select value={this.state.Fakultaet} onChange={(e) => this.setState({Fakultaet: e.target.value})} 
                                        style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} >
                                        <option value="FK00">Fakultät 00 (Für Alle)</option>
                                        <option value="FK01">Fakultät 01</option>
                                        <option value="FK02">Fakultät 02</option>
                                        <option value="FK03">Fakultät 03</option>
                                        <option value="FK04">Fakultät 04</option>
                                        <option value="FK05">Fakultät 05</option>
                                        <option value="FK06">Fakultät 06</option>
                                        <option value="FK07">Fakultät 07</option>
                                        <option value="FK08">Fakultät 08</option>
                                        <option value="FK09">Fakultät 09</option>
                                        <option value="FK10">Fakultät 10</option>
                                        <option value="FK11">Fakultät 11</option>
                                        <option value="FK12">Fakultät 12</option>
                                        <option value="FK13">Fakultät 13</option>
                                        <option value="FK14">Fakultät 14</option>
                                    </select>
                            <br></br><br></br>
                            <button style={{position:'absolute', width:'10%', left:'45%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)', fontWeight:'bold'}} type='submit'>Create</button><br></br><br></br>
                        </form>
                    </div>
                </div>
            );
        } else {
            return <Redirect to='/signin'  />
        }
    }
}