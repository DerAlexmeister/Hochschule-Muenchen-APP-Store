import React from 'react'
import SearchAppBar from "./MenueBar.js";
import SideNavPage from "./SideNavigation"

export default class CreateApp extends React.Component{

    state = {
        token: '',
        itLoggedIn: false,
    }

    componentWillMount() {
        //this.setState({})
    }

    render() {
        return (
            <div>
                <SearchAppBar/>
                <SideNavPage/>
                <div style={{position:'absolute', top:100, left:'15%', right:'15%'}}>
                    
                </div>
            </div>
        );
    }
}