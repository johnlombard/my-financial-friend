import React, { Component } from "react";
import axios from "axios";

// import API from "./utils/API"
import "./App.css";
// import Portfolio from "./components/PortfolioContainer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Dash from "./components/Dash";



const styles = {
  app: {
    fontFamily: "'Josefin Sans', sans-serif"

  },
  
};
class App extends Component {

  state = {
    loggedIn: false
  };




  handleLogin = (event) => {
    event.preventDefault();
    console.log("Login clicked!");

    // When Log in is clicked this is being posted 
    axios.post("/login", {
      username: 'admin',
      password: 'password'
    })
      .then((response) => {
        console.log(response);
        this.setState({ loggedIn: true, username: response.data.username });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  handleLogout = (event) => {
    event.preventDefault();
    console.log("Log out clicked!");
    axios.get("/logout", {

    })
      .then((response) => {
        console.log(response);
        this.setState({ loggedIn: false, username: undefined });
      })
      .catch(function (error) {
        console.log(error);
      })

  }
  componentDidMount() {
    console.log("componentDidMount life cycle ran");

    // axios.get("allusers")
    //   .then(response => { console.log(response) });
    // Check session data to see if user should be logged in

    axios.get("/user_data")
      .then(response => {
        console.log(response);
        if (response.data.loggedIn) {
          this.setState({ loggedIn: true, username: response.data.username })
        } else {
          console.log("No logged in user");
        }
      });
  };

  renderPage = () => {
    if (this.state.loggedIn === false) {
      return <Home />;
    } else {
      return <Dash />;
    }
  };


  
  render() {

    let banner = this.state.loggedIn ? `Welcome ${this.state.username}` : "Please Login in or Sign Up"
    return (
      <div style={styles.app} className="App">
        <h1>{banner}</h1>
        <div className="App-header">
          <h2>Welcome to My Financial Friend!</h2> 

            
        </div>
        <p className="App-intro">
          {/* IF Not logged in display log in button */}
          {!this.state.loggedIn ?
            (<button onClick={this.handleLogin}> Log In</button>) : ""}
          {this.state.loggedIn ?
            (<button onClick={this.handleLogout}>Log Out</button>) : ""}
        </p>
<Nav/>
{this.renderPage()}
        {/* <Portfolio/>   */}
      </div>
    );
  }
}

export default App;
