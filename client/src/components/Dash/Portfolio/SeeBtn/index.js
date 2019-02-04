import React from "react";

// Used to Delete Holding
function SeeBtn(props) {
  return (
    <div className="btn-success btn" {...props} role="button" tabIndex="0">
      See Current Value
    </div>
  );
}

export default SeeBtn;
