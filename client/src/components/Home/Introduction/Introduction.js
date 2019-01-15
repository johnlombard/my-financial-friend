import React, { Component } from 'react';

const styles = {
    introduction: {
        backgroundColor: "red",
    },
};

class Introduction extends Component {
    render() {
        return (
            <div style={styles.introduction} className="introduction">
                <h1>Hero Digital is the independent customer experience agency that turns vision into reality—crafting iconic experiences, building customer loyalty, and delivering business results.</h1>

            </div>
        );
    }
}

export default Introduction;
