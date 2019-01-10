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
    // this.setState({loggedIn: true});
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
  }

  render() {

    let banner = this.state.loggedIn ? `Welcome ${this.state.username}` : "UNAUTHORIZED USER"
    return (
      <div className="App">
        <h1>{banner}</h1>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My Financial Friend!</h2>
        </div>
        <p className="App-intro">
          {/* IF Not logged in display log in button */}
          {!this.state.loggedIn ?
            (<button onClick={this.handleLogin}> Log In</button>) : ""}

        </p>
      </div>
    );
  }
}

export default App;
