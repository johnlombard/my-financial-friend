import React, { Component } from "react";
import axios from "axios";

import API from "./utils/API"
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Dash from "./pages/Dash";




const styles = {
  app: {
    fontFamily: "'Josefin Sans', sans-serif"
  },
};

class App extends Component {

  state = {
    loggedIn: false,
    

  };
  handleLogin = (event) => {
    event.preventDefault();
    console.log("Login clicked!");
    // When Log in is clicked this is being posted 
    axios.post("/login", {
      username: 'Jawn',
      password: 'Safety'
    })
      .then((response) => {
        console.log(response);
        this.setState({ loggedIn: true, username: response.data.username });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  handleUsername = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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


  // -----------------------------------------------------------------------
  // FORM SUBMIT
  handleSubmit = event => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  };

  // Changing the state
  handleChange = event => {
    this.setState({ value: event.target.value });
  }

  // -----------------------------------------------------------------------



  // -----------------------------------------------------------------------
  // Handling the API
  handleAPI = event => {
    axios
      .get("https://api.iextrading.com/1.0/stock/aapl/company")
      .then((response) => {
        console.log(response.data.website);
        // this.setState({stock: response.data});
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // -----------------------------------------------------------------------



  renderPage = () => {
    if (this.state.loggedIn === false) {
      return <Home />;
    } else {
      return <Dash />;
    }
  };

  // Can remove this once sign up form is completed TODO
  handleClick = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

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
          handleClick={this.handleClick}
          handleUsername={this.handleUsername}
        />

        {/* If Logged in, display User Dash */}
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
