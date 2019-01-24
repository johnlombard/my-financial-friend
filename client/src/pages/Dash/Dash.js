import React, { Component } from 'react';
// import Budget from './Budget';
import Holdings from '../../components/Dash/Holdings';
// import API from '../../utils/API'
// import Networth from './Networth';

class Dash extends Component {
    componentDidMount() {
        // Check session data to see if user should be logged in
        // API.getUsers().then(res =>
        //     this.setState({ holdings: res.data })
        // )
        //     .catch(err => console.log(err));
    };



render() {
    return (
        <div className="dash">
            <Holdings
            // data={this.state.holdings}
            />
        </div>
    );
}
}

export default Dash;


