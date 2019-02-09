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
        // Load Data from DB
        this.loadDBHoldings();
    };

    // Stock Search
    // Changing the state for Stock Search
    handleStockChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // Hits DB to get user holdings
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

    // Hit API For Current value of Stock in DB
    seeCurrentValue = (event) => {
        event.preventDefault();
        console.log(this.state.holdings)
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
                borderRadius: 5,
                marginBottom: 10
            },
            form: {
                marginTop: 5
            },
            addToDBForm: {
                marginRight: 5,
                marginBottom: 15
            },
            addtoDBBtn: {
                marginBottom: 15
            }
        }
        return (
            <div className="portfolio">
                <div className="row">

                    {/* Stock Search */}
                    <div style={styles.search} className="search col-lg-6 col-md-12">
                        <h1>Enter a Stock Ticker</h1>
                        <hr />
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
                            <AddQuantityToHoldingsButton style={styles.addtoDBBtn} className="col-4" onClick={this.addHoldingToDb} />
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