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
    }
    
};
function Features(props) {
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-md p-0">
                    <div style={styles.introduction} className="features">
                    <img style={styles.imgCol} src={budget} alt="Budget"/>
                    <p>My Financial Friend is the web application to track your portfolio, net worth, and a monthly budget </p>

                    </div>
                </div>
                <div className="col-md p-0">
                    <div style={styles.introduction} className="features">
                    <img style={styles.imgCol} src={portfolio} alt="Portfolio Tracker" />
                       <p>My Financial Friend is the web application to track your portfolio, net worth, and a monthly budget </p>
                    </div>
                </div>
                <div className="col-md p-0">
                    <div style={styles.introduction} className="features">
                    <img style={styles.imgCol} src={nyc} alt="Net Worth Tracker"/>
                    <p>My Financial Friend is the web application to track your portfolio, net worth, and a monthly budget </p>
               
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Features;
