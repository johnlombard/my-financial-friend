
import React from 'react';



export function Input(props) {
    return (
        <input className="form" {...props} />  
    );
  }

export function FormBtn(props) {
  return (
    <button {...props} className="btn btn-success ">Submit
    </button>
  );
}

export function AddQuantityToHoldingsForm(props) {
  return (
  
   
      <input type="number" name="quantity" min="1" className="form" {...props} />
   
  );
}

export function AddQuantityToHoldingsButton(props) {
  return (
      <button type="submit" {...props} className="btn btn-success col-4">Add to your Portfolio
     </button>
  );
}