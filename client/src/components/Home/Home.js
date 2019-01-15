import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Introduction from './Introduction';
import Features from './Features';
class Home extends Component {
    render() {
        return (
            <div className="home">
                <h1>This is the home page. You are not logged in</h1>
                <Header />
                <Introduction/>
                <Features/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
