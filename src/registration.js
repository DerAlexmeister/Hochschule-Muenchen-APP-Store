import React from 'react';
//import { Link } from 'react-router-dom';
import Bar from "./MenueBar.js";
import SideNavPage from "./SideNavigation"
import axios from 'axios';

class RegisterPage extends React.Component {

    state = {
        email: '',
        Password: '',
        nickname: '',
        fb: '',
        twitter: '',
        github: '',
        insta: '',
        youtube:'',
        xing: '',
        linkedin: '',
        website: '',
        linkImg: '',
        typOfAccount: '',
        Fakultaet: '',
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
            [name]: value,
            [name]: value,
            [name]: value,
            [name]: value,
            [name]: value,
            [name]: value,
            [name]: value,
        });
    }
    
    handleSubmit = event => {
        event.preventDefault();
    
    axios.post(`http://localhost:8000/api/users/new`, {
        email: this.state.email,
        password : this.state.Password,
        nickname: this.state.nickname,
        fb: this.state.fb,
        twitter: this.state.twitter,
        github: this.state.github,
        insta: this.state.insta,
        youtube:this.state.youtube,
        xing: this.state.xing,
        linkedin: this.state.linkedin,
        website: this.state.website,
        linkImg: this.state.linkImg,
        typOfAccount: this.state.typOfAccount,
        Fakultaet: this.state.Fakultaet,
    }).then(res => {
            console.log(res);
            console.log(res.data);
        });
    }

    render() {
        return (
            <div >
                <Bar/>
                <SideNavPage/>
                <div style={{position:'absolute', top:100, left:100, color:'#fff', width:'60%', left:'20%'}}>
                    <h1 style={{textAlign:'center', fontFamily: 'Montserrat'}}> Registrieren</h1>
                    <br></br>
                    <form onSubmit={this.handleSubmit}>
                        <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>Email</label>
                        <input style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" name="email" onChange={this.handleChange} required /><br></br><br></br>
                        <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>Password</label>
                        <input style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" name="Password" onChange={this.handleChange} required /><br></br><br></br>
                        <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>Nickname</label>
                        <input style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" default="null" name="nickname" onChange={this.handleChange} /><br></br><br></br>
                        <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>Facebook</label>
                        <input style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" name="fb" onChange={this.handleChange} /><br></br><br></br>
                        <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>Twitter</label>
                        <input style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" name="twitter" onChange={this.handleChange} /><br></br><br></br>
                        <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>Github</label>
                        <input style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" name="github" onChange={this.handleChange} /><br></br><br></br>
                        <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>Instagram</label>
                        <input style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" name="insta" onChange={this.handleChange} /><br></br><br></br>
                        <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>YouTube</label>
                        <input style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" name="youtube" onChange={this.handleChange} /><br></br><br></br>
                        <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>Xing</label>
                        <input style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" name="xing" onChange={this.handleChange} /><br></br><br></br>
                        <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>LinkedIn</label>
                        <input style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" name="linkedin" onChange={this.handleChange} /><br></br><br></br>
                        <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>Website</label>
                        <input style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" name="website" onChange={this.handleChange} /><br></br><br></br>
                        <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>Profilbild (Link)</label>
                        <input style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} type="text" name="linkImg" onChange={this.handleChange} /><br></br><br></br>
                        <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>
                            Was bist du:
                            </label>
                            <select value={this.state.typOfAccount} onChange={(e) => this.setState({typOfAccount: e.target.value})} 
                                    style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} >
                                <option value="ST">Student</option>
                                <option value="PR">Professor</option>
                                <option value="Fr">Externer Student (TUM/LMU) </option>
                            </select>
                            <br></br><br></br>
                            <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>
                                Deine Fakultät:
                                </label>
                                <select value={this.state.Fakultaet} onChange={(e) => this.setState({Fakultaet: e.target.value})} 
                                    style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} >
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
    }
}


export default RegisterPage;