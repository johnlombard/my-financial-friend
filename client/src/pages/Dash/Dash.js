import React, { Component } from 'react';
import Budget from '../../components/Dash/Budget';
import Compounding from '../../components/Dash/Compounding'
import Portfolio from '../../components/Dash/Portfolio'

class Dash extends Component {
    render() {
        const styles = {
            compounding: {
                backgroundColor: 'rgb(53, 58, 64)',
                color: 'rgb(75, 166, 69)'
            }
        }
        return (
            <div className="dash">
                <div className="container">
                    {/* Portfolio */}
                    <Portfolio />
                    <div className="row">
                        {/*Compound Interest */}
                        <div style={styles.compounding} className="col-lg-6 col-md-12"><Compounding /></div>
                        {/* Budget */}
                        <div className="col-lg-6 col-md-12"><Budget /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dash;


