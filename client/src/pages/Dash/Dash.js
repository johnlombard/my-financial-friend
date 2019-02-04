import React, { Component } from 'react';
import Budget from '../../components/Dash/Budget';
import Compounding from '../../components/Dash/Compounding'
import Portfolio from '../../components/Dash/Portfolio'
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
        const styles = {
            compounding: {
                backgroundColor: 'rgb(53, 58, 64)',
                color:'rgb(75, 166, 69)'
            }
        }
        return (
            <div className="dash">
                <div className="container">
                    <Portfolio />
                    <div className="row">
                        <div style={styles.compounding} className="col-6"><Compounding /></div>
                        <div className="col-6"><Budget /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dash;


