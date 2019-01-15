import React, { Component } from 'react';

const styles = {
    introduction: {
        backgroundColor: "green",
    },
};
function Features(props) {
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-md p-0">
                    <div style={styles.introduction} className="features">
                        <h1>FEATURES OUTLINEality—crafting iconic experiences, building customer loyalty, and delivering business results.</h1>
                    </div>
                </div>
                <div className="col-md p-0">
                    <div style={styles.introduction} className="features">
                        <h1>FEATURES OUTLINEality—crafting iconic experiences, building customer loyalty, and delivering business results.</h1>
                    </div>
                </div>
                <div className="col-md p-0">
                    <div style={styles.introduction} className="features">
                        <h1>FEATURES OUTLINEality—crafting iconic experiences, building customer loyalty, and delivering business results.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Features;
