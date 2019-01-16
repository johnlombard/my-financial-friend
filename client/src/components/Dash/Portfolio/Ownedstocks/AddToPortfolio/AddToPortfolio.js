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
      {props.children}
    </button>
  );
}

{/* <div className="OwnedStocks">
                <form>
                    <input
                        name='quantity'
                        type='number'
                        value={this.state.Quantity}
                        onChange={this.handleChange}
                    />
                    <button
                        type="submit"
                        value="Add to Portfolio"
                        onClick={this.handleSubmit}> Add to Portfolio</button>


                </form>

            </div>
        ); */}