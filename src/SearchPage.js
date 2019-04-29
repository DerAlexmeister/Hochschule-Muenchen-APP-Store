import React from 'react';
import Bar from "./MenueBar.js";
import SideNavPage from "./SideNavigation"
import axios from 'axios';
import { Link } from 'react-router-dom'

class SearchPage extends React.Component {

    state = {
        items: [],
        term: ""
  };

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
    axios.post('http://localhost:8000/api/apps/search/',{
    term: this.state.term}
    ).then(res => {
  const datem = res.data;
  this.setState({items: datem})
    })}


    render() {
        console.log("items: " + this.state.items)
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
                        <Link to="#" items_={this.items}>
                        <button style={{position:'absolute', width:'10%', left:'45%', borderRadius: 10, border: '2px solid #f10b51',color:'#fff', backgroundColor:'rgba(23, 26, 33, 1)', fontWeight:'bold'}} 
                            >Suche</button>
                        </Link>
                        <br></br><br></br>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchPage 