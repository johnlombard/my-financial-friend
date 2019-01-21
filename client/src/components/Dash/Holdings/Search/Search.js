import React from 'react';



export function Input(props) {
    return (
      <div className="form">
        <input className="form-control" {...props} />
      </div>
    );
  }

export function FormBtn(props) {
  return (
    <button {...props} className="btn btn-success">Submit
     
    </button>
  );
}

export function AddQuantityToHoldingsForm(props) {
  return (
    <div className="form">
    <h1>Db on my flex</h1>
      <input type="number" name="quantity" min="1" className="form" {...props} />
    </div>
  );
}

export function AddQuantityToHoldingsButton(props) {
  return (
      <button type="submit" {...props} className="btn btn-success">Add to your Portfolio
     </button>
  );
}