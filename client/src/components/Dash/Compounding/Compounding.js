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
            <div className="">
                <h1>Compound Interest Calculator</h1>
                <div className="row">
                    {/* Input form */}
                    <div className="col-lg-9">
                        <form onSubmit={this.calculate}>
                            <label>Amount:</label>
                            <input name="amount" type="number" value={this.state.amount} onChange={this.handleChange} />
                            <label>Rate (%):</label>
                            <input name="rate" type="number" value={this.state.rate} onChange={this.handleChange} />
                            <label>No. of Years:</label>
                            <input name="years" min="0" type="number" value={this.state.years} onChange={this.handleChange} />
                            <label>Compounding Times Per Year:</label>
                            <input name="compounding" min="0" type="number" value={this.state.compounding} onChange={this.handleChange} />
                            <input className="btn btn-success" type="submit" value="Submit" />
                        </form>
                    </div>
                    {/* Interest and Total Amount Col */}
                    <div className="col-lg-3">
                        <h3>Total Amount: {this.state.result}</h3>
                        <h3>Interest: {this.state.interest}</h3>
                    </div>
                </div>
            </div>

        );
    }
}
export default Compounding;
