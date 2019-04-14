import React from 'react'
import CreatorsApp from './creatorsapps.js'
import SearchAppBar from "./MenueBar.js";
import SideNavPage from "./SideNavigation"

export default class creatorsView extends React.Component{
    number = 0;

    componentWillMount() {
        const {creatorID} = this.props.match.params
        this.number = creatorID
    }

    render() {
        return (
            <div>
                <SearchAppBar/>
                <SideNavPage/>
                <img style={{position:"absolute", top:0, left:0, right:0, width:"100%", height:"60%", zIndex:-1}} src={this.logo} alt="Logo" />;
                <div style={{position:'absolute', top:100, left:'15%', right:'15%'}}>
                    <CreatorsApp style={{position:'absolute', top:100, paddingLeft:20, paddindRight:20,}} appID_={this.number} />
                </div>
            </div>
        );
    }
}