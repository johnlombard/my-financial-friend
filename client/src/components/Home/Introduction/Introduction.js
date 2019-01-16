import React from 'react';

const styles = {
    introduction: {
        backgroundColor: "white",
        textAlign: "left",
        height: "25%"

    },
    introText: {
        marginLeft: 0,
    }
};
function Introduction(props) {
    return (
    <div className="introduction">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div style={styles.introduction} >
                        <h1 style={styles.introText}>My Financial Friend is the web application to track your portfolio, net worth, and a monthly budget </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};


export default Introduction;
