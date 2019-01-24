import React from 'react';



export function Input(props) {
    return (
        <input className="form-inline" {...props} />  
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