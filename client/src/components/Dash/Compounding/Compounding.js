import React from 'react';

class Compounding extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.calculate = this.calculate.bind(this)

    }
    state = {
        amount: "",
        rate: "",
        years: "",
        compounding: "",
        result: "",
    };


    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    calculate(event) {
        event.preventDefault();
        let p = this.state.amount;
        let n = this.state.compounding; // no. of compoundings per year
        let t = this.state.years; // no. of years
        let r = this.state.rate;

        // The equation is A = p * [[1 + (r/n)] ^ nt]
        let A = (p * Math.pow((1 + (r / (n * 100))), (n * t)));

        let result = A.toFixed(2);
        let interest = (A.toFixed(2) - p).toFixed(2)

        this.setState({
            result: result,
            interest: interest
        })


        // toFixed is used for rounding the amount with two decimal places.
        // result.innerHTML = "The total amount is " + A.toFixed(2);

        // result.innerHTML += "<br> The interest is " + (A.toFixed(2) - p).toFixed(2);
        console.log(result)
    }

    render() {
        return (
            <div className="row">
            <div className="col-8">
                <form onSubmit={this.calculate}>
                    <label>
                        Amount:
              <input name="amount" type="number" value={this.state.amount} onChange={this.handleChange} />
                    </label>
                    <label>
                        Rate (%):
              <input name="rate" type="number" value={this.state.rate} onChange={this.handleChange} />
                    </label>
                    <label>
                        No. of Years:
              <input name="years" min="0" type="number" value={this.state.years} onChange={this.handleChange} />
                    </label>
                    <label>
                        Compounding Times Per Year:
              <input name="compounding" min="0" type="number" value={this.state.compounding} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <h3>Total Amount: {this.state.result}</h3>
                <h3>Interest: {this.state.interest}</h3>
                </div>
            </div>
        );
    }
}
export default Compounding;
