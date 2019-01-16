import React, { Component } from "react";
import axios from "axios";

// import API from "./utils/API"
import "./App.css";
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
    loggedIn: false,
    // value: "",
    // stock: ""
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
  // handleSubmit = event => {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // };

  // // Changing the state
  // handleChange = event => {
  //   this.setState({ value: event.target.value });
  // }

  // -----------------------------------------------------------------------

  // -----------------------------------------------------------------------
  // Handling the API
  // handleAPI = event => {
  //   axios
  //     .get("https://api.iextrading.com/1.0/stock/aapl/company")
  //     .then( (response) => {

  //       console.log(response.data.website);

  //       // this.setState({stock: response.data});
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
  // -----------------------------------------------------------------------



  renderPage = () => {
    if (this.state.loggedIn === false) {
      return <Home />;
    } else {
      return <Dash />;
    }
  };



  render() {
let stock = this.state.stock;
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



        {/* ---------------------FORM SUBMITTING------------------------ */}
        {/* <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form> */}
        {/* ---------------------FORM SUBMITTING------------------------ */}

        {/* ---------------------API ----------------------------------- */}
        {/* <button onClick={this.handleAPI}>API BUTTON</button>
        <h1>This is the stock{stock}</h1> */}
        {/* ---------------------API ----------------------------------- */}


        <Nav handleLogin={this.handleLogin} loggedIn={this.state.loggedIn} />
        {this.renderPage()}
        {/* <Portfolio/>   */}
      </div>
    );
  }
}

export default App;
