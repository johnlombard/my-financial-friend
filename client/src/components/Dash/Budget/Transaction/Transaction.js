import React from 'react';
import Entry from './Entry';


const Transaction = (props) => {
    const entryList = props.transactions.map( (transaction, idx) => (
        <Entry transaction={transaction} key={idx}/>
    ))
    return (
        <div>
            <h1>Transactions</h1>
            <div>
                {entryList}
            </div>
        </div>
    )
};
export default Transaction;
