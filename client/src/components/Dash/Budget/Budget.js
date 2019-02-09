import React from 'react';
import Add from './Add';
import Balance from './Balance';
import Transaction from './Transaction';
const dataSet = [
    {amount: -10, description: 'Chipotle'},
    {amount: 1000, description: 'Paycheck'},
    {amount: -4.50, description: 'Coffee'}
];
class Budget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.data = dataSet;
        this.state.total = 0;
    }
    componentWillMount() {
        this.setState({
            data: dataSet,
            total: dataSet.reduce( (a,b) => {
                return a + b.amount;
            }, 0)
        })
    }

    add(description, amount) {
        // Ajax post request
    }
    render() {
        return (
            <div>
            <h1>Budget COMING SOON</h1>
            <Add onAdd={this.add}/>
            <Transaction transactions= {this.state.data}/>
            <Balance total={this.state.total}/>
            </div>
        );
    }
}
export default Budget;
