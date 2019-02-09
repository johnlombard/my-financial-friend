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

    // Sets state for inputs of form
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // Formula for compound interest
    calculate(event) {
        event.preventDefault();
        let p = this.state.amount; //Intial amount
        let n = this.state.compounding; // no. of compoundings per year
        let t = this.state.years; // no. of years
        let r = this.state.rate; //Interest Rate

        // The equation is A = p * [[1 + (r/n)] ^ nt]
        let A = (p * Math.pow((1 + (r / (n * 100))), (n * t)));

        // Total amount after time period
        let result = A.toFixed(2);
        // Interest Earned
        let interest = (A.toFixed(2) - p).toFixed(2)

        this.setState({
            result: result,
            interest: interest
        })
        console.log(result)
    }

    render() {
        return (
            <div className="container">
                <h1>Compound Interest</h1>
                {/* Input form */}
                <div className="row">
                    <form onSubmit={this.calculate}>
                        {/* Intial amount */}
                        <div className="row">
                            <div className="col-6">
                                <label>Amount:</label>
                            </div>
                            <div className="col-6">
                                <input name="amount" type="number" value={this.state.amount} onChange={this.handleChange} />
                            </div>
                        </div>

                        {/* Intrest Rate */}
                        <div className="row">
                            <div className="col-6">
                                <label>Rate (%):</label>
                            </div>
                            <div className="col-6">
                                <input name="rate" type="number" value={this.state.rate} onChange={this.handleChange} />
                            </div>
                        </div>

                        {/* Number of Years */}
                        <div className="row">
                            <div className="col-6">
                                <label>No. of Years:</label>
                            </div>
                            <div className="col-6">
                                <input name="years" min="0" type="number" value={this.state.years} onChange={this.handleChange} />
                            </div>
                        </div>

                        {/* Compounding per year */}
                        <div className="row">
                            <div className="col-6">
                                <label>Compounding Times Per Year:</label>
                            </div>
                            <div className="col-6">
                                <input name="compounding" min="0" type="number" value={this.state.compounding} onChange={this.handleChange} />
                            </div>
                        </div>
                        <input className="btn btn-success" type="submit" value="Submit" />
                    </form>
                </div>

                {/* Interest and Total Amount Col */}
                <div className="col-lg-3">
                    <h3>Total Amount: {this.state.result}</h3>
                    <h3>Interest: {this.state.interest}</h3>
                </div>
            </div>
        );
    }
}
export default Compounding;
