import React from 'react';
//import { Link } from 'react-router-dom';
import Bar from "./MenueBar.js";
import SideNavPage from "./SideNavigation"
import axios from 'axios';
import { Redirect } from 'react-router-dom'

class LoginPage extends React.Component {

    state = {
        email: '',
        Password: '',
        test: '',
    }
    
    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ 
            [name]: value, 
            [name]: value,
        });
    }
    
    handleSubmit = event => {
        console.log(this.state.email)
        console.log(this.state.Password)
        event.preventDefault();
    
    axios.post(`http://localhost:8000/api/users/login`, {
        email: this.state.email,
        password : this.state.Password,
    }).then(response => {
            if (response.status == 200) {
                sessionStorage.setItem('token', String(response.data.token))
                sessionStorage.setItem('isLoggedIn', true)
                sessionStorage.setItem('user_id', response.data.user_id )
                
            } else {
                console.log(response);
                console.log(response.data.token);
            }
            this.setState({
                test: sessionStorage.getItem('isLoggedIn')
            })
        });
    }

    render() {
        return (
            <div>
                <Bar/>
                <SideNavPage/>
                <div style={{position:'absolute', top:100, left:100, color:'#fff', width:'60%', left:'20%'}}>
                    <h1 style={{textAlign:'center', fontFamily: 'Montserrat'}}> Anmelden</h1>
                    <br></br>
                    <form onSubmit={this.handleSubmit}>
                        <label style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>Email</label>
                        <input 
                            style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} 
                            type="text" name="email" onChange={this.handleChange} required />
                        <br></br><br></br>
                        <label 
                            style={{textAlign:'center', fontWeight:'bold',fontFamily: 'Montserrat'}}>
                            Password
                        </label>
                        <input 
                            style={{position:'absolute', width:'70%', left:'15%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)'}} 
                            type="text" name="Password" onChange={this.handleChange} required />
                        <br></br><br></br>
                        <button style={{position:'absolute', width:'10%', left:'45%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)', fontWeight:'bold'}} 
                            type='submit'>Anmelden</button>
                        <br></br><br></br>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginPage 