import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

class App extends Component {

  state = {
    loggedIn: false
  };

  handleLogin = (event) => {
    event.preventDefault();
    console.log("Login clicked!");
    axios.post("/login", {
      username: 'postworked',
      password: 'password'
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    // this.setState({loggedIn: true});
  }
  componentDidMount() {
    console.log("componentDidMount life cycle ran");
    axios.get("allusers")
      .then(response => { console.log(response) });
  }

  render() {

    let banner = this.state.loggedIn ? "You're logged in!" : "UNAUTHORIZED USER"
    return (
      <div className="App">
        <h1>{banner}</h1>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My Financial Friend!</h2>
        </div>
        <p className="App-intro">
          <button onClick={this.handleLogin}> Log In</button>

        </p>
      </div>
    );
  }
}

export default App;
