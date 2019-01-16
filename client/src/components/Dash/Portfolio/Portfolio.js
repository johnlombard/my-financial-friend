import React, { Component } from 'react';
import axios from 'axios';
import OwnedStocks from './Ownedstocks';
import { Input, FormBtn } from './StockSearch/StockSearch';


const styles = {
  Portfolio: {
    backgroundColor: "red"

  },

};
class Portfolio extends Component {

  state = {
    value: "",
    stock: "",
    Quantity: 0
  };

  // -----------------------------------------------------------------------
  // FORM SUBMIT
  handleSubmit = event => {
    event.preventDefault();
    console.log('clicked')
  };


  // -----------------------------------------------------------------------
  // Stock Search
    // Changing the state for Stock Search
  handleStockChange = event => {
    this.setState({ value: event.target.value });
  };

  // Handling the API for the stock search
  handleStockSearch = event => {
    axios
      .get("https://api.iextrading.com/1.0/stock/" + this.state.value + "/company")
      .then((response) => {
        console.log(response.data.website);
        this.setState({ stock: response.data.website });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // -----------------------------------------------------------------------
  // Quant Update
  handleQuantityChange = event => {
    this.setState({ Quantity: event.target.quantity });
  };
  handleQuantitySubmit = event => {
   console.log("hello" + event)
  };




  // -----------------------------------------------------------------------

  // -----------------------------------------------------------------------



  render() {
    let stock = this.state.stock;

    return (
      <div style={styles.Portfolio} className="Portfolio">

        {/* ---------------------FORM SUBMITTING------------------------ */}

        <form onSubmit={this.handleSubmit}>
          <Input
            value={this.state.value}
            onChange={this.handleStockChange}
            name="Stock Ticker"
            placeholder="Enter Ticker"

          />
          <FormBtn
            // disabled={!(this.state.author && this.state.title)}
            onClick={this.handleStockSearch}
          ></FormBtn>

          <Input
            // value={this.state.Quantity}
            onChange={this.handleQuantityChange}
            name="Quantity"
            type="number"
            placeholder="Add to your portfolio"

          />
          <FormBtn
           
            onClick={this.handleQuantitySubmit}
          ></FormBtn>
        </form>


        <h1>You  of {stock}</h1>

        {/* ---------------------API ----------------------------------- */}

        <OwnedStocks />

      </div>
    );
  }
}

export default Portfolio;
