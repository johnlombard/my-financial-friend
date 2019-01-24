import React, { Component } from 'react';

import axios from 'axios';
import API from '../../../utils/API'
import { Input, FormBtn, AddQuantityToHoldingsForm, AddQuantityToHoldingsButton } from './Search/Search';
import { List, ListItem } from './List';
import Chart from './Chart'



const styles = {
  searchForm: {
    margin: 15
  },
  chartRow: {
    backgroundColor: "rgb(53, 58, 64)",
    
    paddingBottom: 100
  },
  chartTitle: {
    color: "rgb(53, 58, 64)",
    margin: 15,
  },

};

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
      this.setState({ bgColor: 'red' })
      // alert("negative")
    } else {
      this.setState({ bgColor: 'green' })
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
      <div className="Holding">
        {/* ---------------------Search BEGINs------------------------ */}
        <div className="row">
          <div className="col-6" style={{ backgroundColor: this.state.bgColor, borderRadius: 5 }}>
            <form style={styles.searchForm} className="row justify-content-md-center">
              <Input
                className="col-3"
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
            <div className=" searchResults">
              <h3>Company: {searchResults[0]}</h3>
              <h3>Ticker: {searchResults[1]}</h3>
              <h3>Price: {searchResults[2]}</h3>
              <h3>Price Change: {searchResults[3]}</h3>
              <h3>52 Week High: {searchResults[4]}</h3>
              <h3>52 Week Low: {searchResults[5]}</h3>
              <h3>YTD Change: {searchResults[6]}</h3>
            </div>

            <div style={styles.searchForm} className="row justify-content-md-center">
              <AddQuantityToHoldingsForm  placeholder="How Many Shares?" value={this.state.AddedQuantity} onChange={this.handleStockChange} />
              <AddQuantityToHoldingsButton onClick={this.addHoldingToDb} />
            </div>
          </div>
          {/* ---------------------Search ENDS------------------------ */}


          {/* ---------------------USER HOLDINGS BEGIN ------------------------ */}

          <div className="col-6">
            <List> {this.state.holdings.map(holding => (
              <ListItem key={holding._id}>
                <h3 href={"/holdings/" + holding._id}>
                  <strong>
                    {holding.quantity} shares of {holding.ticker}
                    <br />
                    {/* This position is worth {this.state.apiHoldings} */}
                    {/* {Number(holding.quantity * apiHolding[2]).toFixed(2)} */}
                  </strong>
                </h3>
                {/* MAP THROUGH THIS  Holding QTY * PRICE WILL NOT LOAD UNTIL HOLDINGS ARE LOADED*/}
              </ListItem>
            ))}
            </List>
          </div>
        </div>
        {/* ---------------------USER HOLDINGS END ------------------------ */}
        <div style={styles.chartRow} className="row chartRow">
          <div className="col-12">
            <h1 className="text-success" style={styles.chartTitle}> Your Portfolio: {console.log(this.state.holdings)}</h1>
          </div>
          {/* --------------------- HOLDINGS CHART BEGIN ------------------------ */}

          <div  className="col-12">
            <Chart holdings={this.state.holdings} />
          </div>
          {/* --------------------- HOLDINGS CHART END ------------------------ */}

        </div>




        {/* <button onClick={this.percentageColor}>color</button> */}
        {/* <button onClick={this.handleSeeState}>SEE STATE</button> */}

      </div>
    );
  }
}

export default Holdings;