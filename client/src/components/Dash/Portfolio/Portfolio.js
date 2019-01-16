import React, { Component } from 'react';
import axios from 'axios';
import { Input, FormBtn } from './StockSearch/StockSearch';


const styles = {
  Portfolio: {
    backgroundColor: "red"

  },

};
class Portfolio extends Component {

  state = {
    StockTicker: "", //What is typed in input line
    stock: "", //Response from external API
    // amountToAdd: null,
    // QuantityOwned: null,
    // OwnedStocks: []
  };

  // -----------------------------------------------------------------------
  // FORM SUBMIT
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
  };


  // -----------------------------------------------------------------------
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
      .get("https://api.iextrading.com/1.0/stock/" + this.state.StockTicker + "/company")
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
  // handleQuantityChange = event => {
  //   console.log(event.target.quantity);
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  //   // this.setState({ amountToAdd: event.target.value });
  // };
  // handleQuantitySubmit = event => {
  //  console.log(this.state )
  //  this.setState({ QuantityOwned: this.state.amountToAdd});
  // };




  // -----------------------------------------------------------------------

  // -----------------------------------------------------------------------



  render() {
    let stock = this.state.stock;
// let quantity = this.state.QuantityOwned;
    return (
      <div style={styles.Portfolio} className="Portfolio">

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

          {/* <Input
            value={this.state.amountToAdd}
            onChange={this.handleQuantityChange}
            name="amountToAdd"
            type="number"
            placeholder="Add to your portfolio"

          />
          <FormBtn
            onClick={this.handleQuantitySubmit}
          ></FormBtn> */}
        </form>


        <h1>You  of {stock}</h1>

        {/* ---------------------API ----------------------------------- */}

       

      </div>
    );
  }
}

export default Portfolio;
