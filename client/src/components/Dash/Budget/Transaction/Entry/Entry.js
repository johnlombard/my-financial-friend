import React from 'react';

const Entry = (props) => {
    let style = {
        color: props.transaction.amount > 0 ? 'green' : 'red'
    };

    return (
        <div>

            <p style={style}>$ {props.transaction.amount} {props.transaction.description}</p>
        </div>
    )
};

export default Entry;
