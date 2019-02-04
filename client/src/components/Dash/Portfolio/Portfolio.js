import React, { Component } from 'react';

import axios from 'axios';
import API from '../../../utils/API';
import DeleteBtn from "./DeleteBtn";
import { Input, FormBtn, AddQuantityToHoldingsForm, AddQuantityToHoldingsButton } from './Search'
import { List, ListItem } from './List';
import SeeBtn from './SeeBtn';


class Portfolio extends Component {
    state = {
        StockTicker: "", //What is typed in input line
        stock: "", //Response from external API
        holdings: [],
        bgColor: "gray"
    }
    componentDidMount() {
        this.loadDBHoldings();
        // Check session data to see if user should be logged in
        // API.getUsers().then(res =>
        //     this.setState({ holdings: res.data })
        // )
        //     .catch(err => console.log(err));
    };

    // Stock Search
    // Changing the state for Stock Search
    handleStockChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    loadHoldings = () => {
        API.getHoldings()
            .then(res => this.setState({ holdings: res.data }))
            .catch(err => console.log(err));
    }
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

    // If percent is positive change green
    percentageColor = (props) => {
        if (this.state.searchChange.includes("-")) {
            this.setState({ bgColor: 'red' })
            // alert("negative")
        } else {
            this.setState({ bgColor: 'green' })
            // alert("posotive")
        }
    }

    // Get User Holdings from DB
    loadDBHoldings = () => {
        API.getHoldings().then(res =>
            this.setState({ holdings: res.data })
        )
            .catch(err => console.log(err));
    };

    // Save Holding to DB
    addHoldingToDb = (event) => {
        event.preventDefault();
        API.saveHolding({
            ticker: this.state.searchSymbol,
            quantity: this.state.quantity
        })
            .then(this.loadDBHoldings())
    }

    // Delete Holding from DB
    deleteHolding = (id) => {
        API.deleteHolding(id)
            .then(res => this.loadDBHoldings())
            .catch(err => console.log(err));
    }

    seeCurrentValue = (event) => {
        event.preventDefault();
        console.log(this.state.holdings)
        // axios
        //     .get("https://api.iextrading.com/1.0/stock/" + this.holding.ticker + "/quote")
        //     .then((response) => {
        //         console.log(`********************** ${response.data}`);
        //         // companyName, symbol, latestPrice, change, week52High "week52Low" "ytdChange": 

        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
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
        const styles = {
            search: {
                backgroundColor: this.state.bgColor,
                borderRadius: 5
            },
            form: {
                marginTop: 5
            },
            addToDBForm: {
                marginRight: 5
            }
        }
        return (
            <div className="portfolio">
            <div className="row">
                {/* Stock Search */}
                
                <div style={styles.search} className="search col-lg-6 col-md-12">
                    <h1>Enter a Stock Ticker</h1>
                    <hr/>
                    <form style={styles.form} className="form-row justify-content-md-center">
                        <Input
                            className="form-control col-6"
                            value={this.state.StockTicker}
                            onChange={this.handleStockChange}
                            name="StockTicker"
                            placeholder="Enter Ticker"
                        />
                        <FormBtn className="col-6" onClick={this.handleStockSearch}></FormBtn>
                    </form>
                    <div className="col-lg-12 col-md-12">
                        <h3>Company: {searchResults[0]}</h3>
                        <h3>Ticker: {searchResults[1]}</h3>
                        <h3>Price: {searchResults[2]}</h3>
                        <h3>Price Change: {searchResults[3]}</h3>
                        <h3>52 Week High: {searchResults[4]}</h3>
                        <h3>52 Week Low: {searchResults[5]}</h3>
                        <h3>YTD Change: {searchResults[6]}</h3>
                    </div>
                    <div className="row justify-content-md-center">
                    <AddQuantityToHoldingsForm style={styles.addToDBForm} className="form-control col-4" placeholder="How Many Shares?" value={this.state.AddedQuantity} onChange={this.handleStockChange} />
                    <AddQuantityToHoldingsButton className="col-4"  onClick={this.addHoldingToDb} />
                    </div>
                </div>

                {/* List Through The DB */}
                <div className="col-lg-6 col-md-12">
                    <List> {this.state.holdings.map(holding => (
                        <ListItem key={holding._id}>
                            <h3 href={"/holdings/" + holding._id}>
                                <strong>
                                    {holding.quantity} shares of {holding.ticker}
                                    <br />
                                    {/* This position is worth {this.state.apiHoldings} */}
                                    {/* {Number(holding.quantity * apiHolding[2]).toFixed(2)} */}
                                </strong>
                                <SeeBtn onClick={this.seeCurrentValue} />
                                <DeleteBtn onClick={() => this.deleteHolding(holding._id)} />
                            </h3>
                            {/* MAP THROUGH THIS  Holding QTY * PRICE WILL NOT LOAD UNTIL HOLDINGS ARE LOADED*/}
                        </ListItem>
                    ))}
                    </List>
                </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;






// const styles = {
                    //   searchForm: {
                    //     margin: 15
                    //   },
                    //   chartRow: {
                    //     backgroundColor: "rgb(53, 58, 64)",

                    //     paddingBottom: 100
                    //   },
                    //   chartTitle: {
                    //     color: "rgb(53, 58, 64)",
                    //     margin: 15,
                    //   },

                    // };



                    // class Holdings extends Component {
                    //     // companyName, symbol, latestPrice, change, week52High "week52Low" "ytdChange": 
                    //     state = {
                    //         StockTicker: "", //What is typed in input line
                    //         stock: "", //Response from external API
                    //         holdings: [],

                    //         // Searched Stock Information
                    //         searchCompanyName: null,
                    //         searchSymbol: null,
                    //         searchLatestPrice: null,
                    //         searchChange: null,
                    //         searchWeek52High: null,
                    //         searchWeek52Low: "",
                    //         searchYtdChange: "",

                    //         // Positive or Negative Background of search 
                    //         bgColor: "gray"
                    //     };
                    //     componentDidMount() {
                    //         // Check session data to see if user should be logged in
                    //         this.loadDBHoldings();
                    //     };
                    //     // FORM SUBMIT
                    //     // handleSubmit = event => {
                    //     //   event.preventDefault();
                    //     //   API.saveHolding({
                    //     //     id: 
                    //     //     ticker: this.state.searchSymbol,
                    //     //     quantity: this.state.quantity
                    //     //   })
                    //     //     .then(res => this.loadDBHoldings())
                    //     //     .catch(err => console.log(err));
                    //     // };









                    //     // TODO Change percentages to be 2 decimal
                    //     // Change positive and negative to red or green
                    //     // Get User Holdings from API
                    //     loadAPIHoldings = (event) => {
                    //         event.preventDefault();
                    //         let holdingTickers = this.state.holdings.map(holding => holding.ticker).join();
                    //         console.log(holdingTickers)
                    //         axios
                    //             // https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,f&types=quote
                    //             .get("https://api.iextrading.com/1.0/stock/market/batch?symbols=" + holdingTickers + ",&types=quote")
                    //             .then((response) => {
                    //                 this.setState({
                    //                     apiHoldings: response.data
                    //                     // apiCompanyName: response.data.companyName,
                    //                     // apiSymbol: response.data.symbol,
                    //                     // apiLatestPrice: response.data.latestPrice,
                    //                     // apiChange: response.data.change,
                    //                     // apiWeek52High: response.data.week52High,
                    //                     // apiWeek52Low: response.data.week52Low,
                    //                     // apiYtdChange: response.data.ytdChange
                    //                 });
                    //             })
                    //             .catch(function (error) {
                    //                 console.log(error);
                    //             });
                    //     };








                    //     render() {


                    //         let searchResults = [
                    //             this.state.searchCompanyName,
                    //             this.state.searchSymbol,
                    //             this.state.searchLatestPrice,
                    //             this.state.searchChange,
                    //             this.state.searchWeek52High,
                    //             this.state.searchWeek52Low,
                    //             this.state.searchYtdChange
                    //         ];

                    //         // let apiHolding = 

                    //         //   this.state.apiHoldings
                    //         //   // this.state.apiCompanyName,
                    //         //   // this.state.apiSymbol,
                    //         //   // this.state.apiLatestPrice,
                    //         //   // this.state.apiChange,
                    //         //   // this.state.apiWeek52High,
                    //         //   // this.state.apiWeek52Low,
                    //         //   // this.state.apiYtdChange
                    //         // ;


                    //         return (
                    //             <div className="Holding">
                    //                 {/* ---------------------Search BEGINs------------------------ */}
                    //                 <div className="row">


                    //                     {/* CHANGE TO MODAL MAP THROUGH */}
                    //                     <div className=" searchResults">
                    //                         <h3>Company: {searchResults[0]}</h3>
                    //                         <h3>Ticker: {searchResults[1]}</h3>
                    //                         <h3>Price: {searchResults[2]}</h3>
                    //                         <h3>Price Change: {searchResults[3]}</h3>
                    //                         <h3>52 Week High: {searchResults[4]}</h3>
                    //                         <h3>52 Week Low: {searchResults[5]}</h3>
                    //                         <h3>YTD Change: {searchResults[6]}</h3>
                    //                     </div>

                    //                     <div style={styles.searchForm} className="row justify-content-md-center">
                    //                         <AddQuantityToHoldingsForm placeholder="How Many Shares?" value={this.state.AddedQuantity} onChange={this.handleStockChange} />
                    //                         <AddQuantityToHoldingsButton onClick={this.addHoldingToDb} />
                    //                     </div>
                    //                 </div>
                    //                 x