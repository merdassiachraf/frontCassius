import React from "react";
import {connect} from "react-redux"

Spinner = () => {
  return (
    <div>
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
export default connect() (Spinner);
