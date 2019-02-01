import React from 'react';

const Balance = (props) => {
    let style = {
        color: props.total > 0 ? 'green' : 'red'
    };

    return (
        <div>
            <h1>Balance</h1>
            <p style={style}>${props.total.toFixed(2)}</p>
        </div>
    )
};
export default Balance;
// ReactDOM.render(<Balance total={40}/>, document.getElementById('balance'))
