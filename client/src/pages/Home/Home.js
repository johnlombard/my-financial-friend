import React, { Component } from 'react';
import Header from '../../components/Home/Header'
import Footer from '../../components/Home/Footer'
import Introduction from '../../components/Home/Introduction';
import Features from '../../components/Home/Features';


  
class Home extends Component {
    state = {
        isHovered: false,
      };

    render() {
        return (
            <div className="home">
                <Header />
                <Introduction/>
                <Features isHovered={this.state.isHovered}/>
                <Footer/>

               
            </div>
        );
    }
}

export default Home;
