import React, {Component} from 'react';



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
