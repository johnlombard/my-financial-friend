import React from 'react';

class Add extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: 'Description',
            amount: 'Amount'
        }
        this.add = this.add.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleChangeAmt = this.handleChangeAmt.bind(this);
    }

    // Change state to description
    handleChangeDesc(e) {
        this.setState({
            description: e.target.value
        });
    }

    // Change state to amount
    handleChangeAmt(e) {
        this.setState({
            amount: e.target.value
        });
    }

    // Add New item to Budget
    add() {
        this.props.onAdd(this.state.description, this.state.amount)
    }
    render() {
        return (
            <div>
               <input type="text" value={this.state.description} onChange={this.handleChangeDesc}/>
               <input type="text" value={this.state.amount} onChange={this.handleChangeAmt}/>
                <button onClick={this.add}>Add</button>
            </div>
        );
    }
}
export default Add;
