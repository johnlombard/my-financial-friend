import React, { Component } from 'react';

class OwnedStocks extends Component {

    state = {
        Owned: false,
        Quantity: 0
    };

    // FORM SUBMIT
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    };

    // Changing the state
    handleChange = event => {
        event.preventDefault();
        // const { quantity } = event.target.value;
        this.setState({
            Owned: true,
            Quantity: event.target.value
        })
    };
    // -----------------------------------------------------------------------

    render() {
        return (
            <div className="OwnedStocks">
                <form>
                    <input
                        name='quantity'
                        type='number'
                        value={this.state.Quantity}
                        onChange={this.handleChange}
                    />
                    <button
                        type="submit"
                        value="Add to Portfolio"
                        onClick={this.handleSubmit}> Add to Portfolio</button>


                </form>

            </div>
        );
    }
}

export default OwnedStocks;