import React, { Component } from "react";
import axios from "axios";

import API from "./utils/API"
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Dash from "./pages/Dash";

const styles = {
  app: {
    fontFamily: 'Noto Serif, SC serif'
  },
};

class App extends Component {
  state = {
    loggedIn: false,
  };

// Logs the user in therefore rendering the dash
  handleLogin = (event) => {
    event.preventDefault();
    console.log("Login clicked!");
    // When Log in is clicked this is being posted 
    axios.post("/login", {
      username: this.state.usernameInput,
      password: this.state.passwordInput
    })
      .then((response) => {
        console.log(response);
        this.setState({ loggedIn: true, username: response.data.username });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  // Changes the user name and password state
  handleFormLogin = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  // Logs out user, sets state
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
    // Check session data to see if user should be logged in
    axios.get("/user_data")
      .then(response => {
        if (response.data.loggedIn) {
          this.setState({ loggedIn: true, username: response.data.username })
        } else {
          console.log("No logged in user");
        }
      });
  };

  // Changing the state
  handleChange = event => {
    this.setState({ value: event.target.value });
  }

  // If the user is not logged in HOME is displayed, If User IS logged in personal dash is displayed 
  renderPage = () => {
    if (this.state.loggedIn === false) {
      return <Home />;
    } else {
      return (
      this.loadHoldings(),
      // this.loadAPIHoldings(),
      <Dash/>
      )
    }
  };

  // TRYING TO LOAD DATA FROM MONGO
  loadHoldings = () => {
    API.getHoldings()
      .then(res => this.setState({ holdings: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div style={styles.app} className="App">
        <Nav
          username={this.username}
          state={this.state}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          handleFormLogin={this.handleFormLogin}
        />
        {/* If Logged in, display User Dash */}
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
