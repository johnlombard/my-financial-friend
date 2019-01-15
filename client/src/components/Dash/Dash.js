import React, { Component } from 'react';
import Budget from './Budget';
import Portfolio from './Portfolio';
import Networth from './Networth';

class Dash extends Component {
    render() {
        return (
            <div className="dash">
            <h1>This is the Dash page. You ARE logged in</h1>
            <Budget/>
            <Portfolio/>
            <Networth/>
            </div>
        );
    }
}

export default Dash;
