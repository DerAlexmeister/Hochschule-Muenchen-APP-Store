import React from 'react';
//import { Link } from 'react-router-dom';
import Bar from "./MenueBar.js";
import SideNavPage from "./SideNavigation"
import axios from 'axios';

class RegisterPage extends React.Component {

    state = {
        email: '',
        Password: '',

      }
    
    handleChange = event => {
        this.setState({ email: event.target.value, Password: event.target.value});
    }
    
    handleSubmit = event => {
        event.preventDefault();
    
    axios.post(`http://localhost:8000/api/users/new`, {
        email: this.state.email,
        Password : this.state.Password,
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
                <div style={{position:'absolute', top:100, left:100, color:'#fff'}}>
                    Registrieren
                    <form onSubmit={this.handleSubmit}>
                        <label>Username</label>
                        <input type="text" name="email" onChange={this.handleChange} />
                        <label>Password</label>
                        <input type="text" name="Password" onChange={this.handleChange} />
                        <button type='submit'>Create</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default RegisterPage;