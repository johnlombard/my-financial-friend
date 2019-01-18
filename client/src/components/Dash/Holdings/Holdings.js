import React, { Component } from 'react';
import axios from 'axios';
import { Input, FormBtn } from './Search/Search';
import {List, ListItem} from './List';

const styles = {
  Holdings: {
    backgroundColor: "red"

  },
};
class Holdings extends Component {
  // companyName, symbol, latestPrice, change, week52High "week52Low" "ytdChange": 
  state = {
    StockTicker: "", //What is typed in input line
    stock: "", //Response from external API
    holdings: [],
    companyName: "",
    symbol: "",
    latestPrice: null,
    change: null,
    week52High: null,
    week52Low: null,
    ytdChange: null,

  };

  // FORM SUBMIT
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
  };

  // Stock Search
  // Changing the state for Stock Search
  handleStockChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  // Handling the API for the stock search
  handleStockSearch = event => {
    axios
      .get("https://api.iextrading.com/1.0/stock/" + this.state.StockTicker + "/quote")
      .then((response) => {
        console.log(response.data);
        // companyName, symbol, latestPrice, change, week52High "week52Low" "ytdChange": 
  
        this.setState({ stock: response.data.companyName });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Get User Holding
  loadHoldings = () => {
    axios.get("/holdings")
    .then(response => {
      console.log(response);
        this.setState({ holdings: response.data })
      
    });
    // API.getHoldings()
    //   .then(res => this.setState({ holdings: res.data }))
    //   .catch(err => console.log(err));
  };

  render() {
    let stock = this.state.stock;
    // let quantity = this.state.QuantityOwned;
    return (
      <div style={styles.Holdings} className="Holding">
        {/* ---------------------FORM SUBMITTING------------------------ */}
        <form onSubmit={this.handleSubmit}>
          <Input
            value={this.state.StockTicker}
            onChange={this.handleStockChange}
            name="StockTicker"
            placeholder="Enter Ticker"
          />
          <FormBtn
            // disabled={!(this.state.author && this.state.title)}
            onClick={this.handleStockSearch}
          ></FormBtn>
          <button onClick={this.loadHoldings}>LOAD HOLDINGS</button>
        </form>

        <h1>You  of {stock}</h1>

        <List> {this.state.holdings.map(holding => (
          <ListItem key={holding._id}>
            <h1 href={"/holdings/" + holding._id}>
              <strong>
               You own {holding.quantity} shares of {holding.ticker}  
              </strong>
            </h1>

          </ListItem>
        ))}
        </List>
      </div>
    );
  }
}

export default Holdings;