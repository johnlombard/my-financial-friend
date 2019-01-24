import React from 'react';
import budget from './budget.jpg'
import nyc from './nyc.jpg'
import portfolio from './portfolio.jpg'
const styles = {
    introduction: {
        backgroundColor: "green",
        height: "105%",
    },
    imgCol: {
        height: "75%",
        width: "100%",
    },

};




function Features(props) {
   
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md p-0">
                    <div style={styles.introduction} className="features">
                        <img style={styles.imgCol} src={budget} alt="Budget" />
                        <p className="toShow">My Financial Friend is the web application to track your stock portfolio! </p>

                    </div>
                </div>
                <div className="col-md p-0">
                    <div style={styles.introduction} className="features">
                        <img style={styles.imgCol} src={portfolio} alt="Portfolio Tracker" />
                        <p>Coming Soon! Budget Calculator </p>
                    </div>
                </div>
                <div className="col-md p-0">
                    <div  style={styles.introduction} className="features">
                        <img style={styles.imgCol} src={nyc} alt="Net Worth Tracker" />
                        <p>Coming Soon! Networth Calculator </p>

                    </div>
                </div>
            </div>
        </div>
    );
};


export default Features;
