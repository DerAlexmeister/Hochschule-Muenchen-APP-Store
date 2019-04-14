import React from 'react'
import Appdetails from './detail_app.js';
import SearchAppBar from "./MenueBar.js";
import SideNavPage from "./SideNavigation"

export default class App_total_details extends React.Component{

    state = {
        _id: 4,
    }

    number = 0;
    logo = null

    componentWillMount() {
        const {appID} = this.props.match.params
        console.log('id:' + appID)
        this.setState({
            _id: appID
        })
        this.number = appID
        console.log(this.state._id)
    }

    render() {
        return (
            <div>
                <SearchAppBar/>
                <SideNavPage/>
                <img style={{position:"absolute", top:0, left:0, right:0, width:"100%", height:"60%", zIndex:-1}} src={this.logo} alt="Logo" />;
                <div style={{position:'absolute', top:100, left:'15%', right:'15%'}}>
                    <Appdetails style={{position:'absolute', top:100, paddingLeft:20, paddindRight:20,}} appID_={this.number} />
                </div>
            </div>
        );
    }
}
