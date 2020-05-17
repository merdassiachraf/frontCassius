import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReservationCard from "./ReservationCard"
 
import {
  MDBMask,
  MDBView,
 
} from "mdbreact";

class ReservationPage extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div id="classicformpage">
        <MDBView src="https://wallpaperplay.com/walls/full/1/b/1/289383.jpg">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
              <ReservationCard/>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(ReservationPage);
