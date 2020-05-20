import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBBtn,
  MDBIcon,
} from "mdbreact";

class EditPost extends Component {
  render() {
    return (
      <div id="">
        <MDBView src="https://images.pexels.com/photos/3631711/pexels-photo-3631711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="rgba-blue-grey-light d-flex justify-content-center align-items-center gradient">
<h>Edit Post</h>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}


export default connect(null)(EditPost);
