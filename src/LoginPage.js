import React from 'react';
import Bar from "./MenueBar.js";
import SideNavPage from "./SideNavigation"
import axios from 'axios';
import getBaseURL from "./const.js"
import { Redirect } from 'react-router-dom'
class LoginPage extends React.Component {

    state = {
        email: '',
        Password: '',
        test: '',
        wrongCred: false
       
    }

    trytoLogin = false;

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ 
            [name]: value, 
            [name]: value,
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            if(this.trytoLogin) {
                this.trytoLogin = false
                window.location.reload()
            }
        }, 1000);
        this.setState({
            wrongCred: sessionStorage.getItem('wrongcred')
        })
      }

    handleSubmit = event => {
        event.preventDefault();
        
        axios.post(getBaseURL() + `/api/users/login`, {
            email: this.state.email,
            password : this.state.Password,
        }).then(response => {
                console.log(response)
                if (response.status === 200) {
                    sessionStorage.setItem('token', String(response.data.token))
                    sessionStorage.setItem('isLoggedIn', true)
                    sessionStorage.setItem('user_id', response.data.user_id )
                    this.trytoLogin = true
                    this.props.history.push("/");
                } else {
                    this.props.history.push("/signin")
                }
        }).catch(response => {
            console.log(response)
            this.setState({wrongCred: true})
                this.props.history.push("/signin")
            }
        );
    }

    wrongCredant(wrongCred) {
       return wrongCred ? <h1 style={{textAlign:'center', fontSize:16, color:' #f10b51'}}> -- Username oder Password stimmen nicht --  </h1> : null
    }

    render() {
            if(!sessionStorage.getItem('isLoggedIn')) {
                return (
                    <div>
                        <Bar/>
                        <SideNavPage/>
                        <div style={{position:'absolute', top:100, color:'#fff', width:'60%', left:'20%'}}>
                            <h1 style={{textAlign:'center', fontFamily: 'Montserrat'}}> Anmelden</h1>
                            {this.wrongCredant(this.state.wrongCred)}
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
            } else {
                return <Redirect to='/' />
            }
    }
}

export default LoginPage 