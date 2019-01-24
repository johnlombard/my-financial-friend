import React, { Component } from 'react';

import axios from 'axios';
import API from '../../../utils/API'
import { Input, FormBtn, AddQuantityToHoldingsForm, AddQuantityToHoldingsButton } from './Search/Search';
import { List, ListItem } from './List';
import Chart from './Chart'



// const styles = {
//   Holdings: {
//     backgroundColor: "red"
//   },
// };

// TODO:
// -2 decimal places 
// -map through arrays 
// Add percent change (currently only have price Change)


class Holdings extends Component {
  // companyName, symbol, latestPrice, change, week52High "week52Low" "ytdChange": 
  state = {
    StockTicker: "", //What is typed in input line
    stock: "", //Response from external API
    holdings: [],

    // Searched Stock Information
    searchCompanyName: null,
    searchSymbol: null,
    searchLatestPrice: null,
    searchChange: null,
    searchWeek52High: null,
    searchWeek52Low: "",
    searchYtdChange: "",

    // Holdings from DB Linked to IEX
    apiCompanyName: null,
    apiSymbol: null,
    apiLatestPrice: null,
    apiChange: null,
    apiWeek52High: null,
    apiWeek52Low: null,
    apiYtdChange: null,

    // Positive or Negative Background of search 
    bgColor: "gray"
  };
  componentDidMount() {
    // Check session data to see if user should be logged in
    this.loadDBHoldings();
  };
  // FORM SUBMIT
  // handleSubmit = event => {
  //   event.preventDefault();
  //   API.saveHolding({
  //     id: 
  //     ticker: this.state.searchSymbol,
  //     quantity: this.state.quantity
  //   })
  //     .then(res => this.loadDBHoldings())
  //     .catch(err => console.log(err));
  // };

  handleSeeState = event => {
    console.log(this.state);
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
    event.preventDefault();
    axios
      .get("https://api.iextrading.com/1.0/stock/" + this.state.StockTicker + "/quote")
      .then((response) => {
        console.log(`********************** ${response.data}`);
        // companyName, symbol, latestPrice, change, week52High "week52Low" "ytdChange": 
        this.setState({
          searchCompanyName: response.data.companyName,
          searchSymbol: response.data.symbol,
          searchLatestPrice: Number(response.data.latestPrice).toFixed(2),
          searchChange: (Number(response.data.change).toFixed(2)),
          searchWeek52High: Number(response.data.week52High).toFixed(2),
          searchWeek52Low: Number(response.data.week52Low).toFixed(2),
          searchYtdChange: `${(Number(response.data.ytdChange).toFixed(2) * 100)}% `
        });
        this.percentageColor()
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // TODO Change percentages to be 2 decimal
  // Change positive and negative to red or green

  // Get User Holdings from DB
  loadDBHoldings = () => {
    API.getHoldings().then(res =>
      this.setState({ holdings: res.data })
    )
      .catch(err => console.log(err));
  };

  // TODO Change percentages to be 2 decimal
  // Change positive and negative to red or green
  // Get User Holdings from API
  loadAPIHoldings = (event) => {
    event.preventDefault();
    let holdingTickers = this.state.holdings.map(holding => holding.ticker).join();
    console.log(holdingTickers)
    axios
      // https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,f&types=quote
      .get("https://api.iextrading.com/1.0/stock/market/batch?symbols=" + holdingTickers + ",&types=quote")
      .then((response) => {
        this.setState({
          apiHoldings: response.data
          // apiCompanyName: response.data.companyName,
          // apiSymbol: response.data.symbol,
          // apiLatestPrice: response.data.latestPrice,
          // apiChange: response.data.change,
          // apiWeek52High: response.data.week52High,
          // apiWeek52Low: response.data.week52Low,
          // apiYtdChange: response.data.ytdChange
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  addHoldingToDb = (event) => {
    event.preventDefault();
    API.saveHolding({
      ticker: this.state.searchSymbol,
      quantity: this.state.quantity
    })
      .then(this.loadDBHoldings())
  }

  // If percent is positive change green
  // searchChange is currently a STRING*******
  percentageColor = (props) => {
    if (this.state.searchChange.includes("-")) {
      this.setState({bgColor: 'red'})
      // alert("negative")
    } else {
      this.setState({bgColor: 'green'})
      // alert("posotive")
    }
  }




  render() {


    let searchResults = [
      this.state.searchCompanyName,
      this.state.searchSymbol,
      this.state.searchLatestPrice,
      this.state.searchChange,
      this.state.searchWeek52High,
      this.state.searchWeek52Low,
      this.state.searchYtdChange
    ];

    // let apiHolding = 
      
    //   this.state.apiHoldings
    //   // this.state.apiCompanyName,
    //   // this.state.apiSymbol,
    //   // this.state.apiLatestPrice,
    //   // this.state.apiChange,
    //   // this.state.apiWeek52High,
    //   // this.state.apiWeek52Low,
    //   // this.state.apiYtdChange
    // ;


    return (
      <div style={{ backgroundColor: this.state.bgColor }} className="Holding">
        {/* ---------------------Search BEGINs------------------------ */}
        <form >
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
          {/* <button onClick={this.loadAPIHoldings}>LOAD API HOLDINGS</button> */}
        </form>

        
        {/* CHANGE TO MODAL MAP THROUGH */}
        <h1>Company: {searchResults[0]}</h1>
        <h1>Ticker: {searchResults[1]}</h1>
        <h1>Price: {searchResults[2]}</h1>
        <h1>Price Change: {searchResults[3]}</h1>
        <h1>52 Week High: {searchResults[4]}</h1>
        <h1>52 Week Low: {searchResults[5]}</h1>
        <h1>YTD Change: {searchResults[6]}</h1>

        <AddQuantityToHoldingsForm value={this.state.AddedQuantity} onChange={this.handleStockChange} />
        <AddQuantityToHoldingsButton onClick={this.addHoldingToDb} />
        
        {/* ---------------------Search ENDS------------------------ */}
       

        {/* ---------------------USER HOLDINGS BEGIN ------------------------ */}
        <List> {this.state.holdings.map(holding => (
          <ListItem key={holding._id}>
            <h1 href={"/holdings/" + holding._id}>
              <strong>
                You own {holding.quantity} shares of {holding.ticker}
                <br />
                {/* This position is worth {this.state.apiHoldings} */}
                {/* {Number(holding.quantity * apiHolding[2]).toFixed(2)} */}
              </strong>
            </h1>
            {/* MAP THROUGH THIS  Holding QTY * PRICE WILL NOT LOAD UNTIL HOLDINGS ARE LOADED*/}
          </ListItem>

        ))}


        </List>
        {/* ---------------------USER HOLDINGS END ------------------------ */}

        <h1> Your Portfolio {console.log(this.state.holdings)}</h1>

        {/* --------------------- HOLDINGS CHART BEGIN ------------------------ */}
        <Chart holdings={this.state.holdings} />
        {/* --------------------- HOLDINGS CHART END ------------------------ */}





        {/* <button onClick={this.percentageColor}>color</button> */}
        <button onClick={this.handleSeeState}>SEE STATE</button>

      </div>
    );
  }
}

export default Holdings;