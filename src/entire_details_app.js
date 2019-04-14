import React from 'react'
import Appdetails from './detail_app.js';

export default class App_total_details extends React.Component{

    state = {
        _id: 4,
    }

    number = 0

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
            <Appdetails appID_={this.number} />
        );
    }
}
