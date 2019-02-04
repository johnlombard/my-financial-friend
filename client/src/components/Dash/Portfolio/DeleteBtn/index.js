import React from "react";

// Used to Delete Holding
function DeleteBtn(props) {
  return (
    <span className="btn-danger btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;
