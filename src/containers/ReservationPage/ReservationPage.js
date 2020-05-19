import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReservationCard from "./ReservationCard";

import Spinner from "../Common/Spinner";

import { getReservationById } from "../../actions/reservationActions";

import { MDBMask, MDBView } from "mdbreact";

class ReservationPage extends Component {
  componentDidMount = () => {
    if (this.props.match.params._id) {
      this.props.getReservationById(this.props.match.params._id);
    }
  };

  render() {
    const { reservation, loading } = this.props.reservation;

    let reservationContent;

    if (loading) {
      reservationContent = <Spinner />;
    } else if (reservation === null) {
      reservationContent = (
        <div className="d-flex flex-column align-items-center">
          <h1 className="not-found">ERROR:404 </h1>
          <h1 className="not-found">Reservation not found </h1>
        </div>
      );
    } else {
      reservationContent = <ReservationCard reservation={reservation} />;
    }

    return (
      <div id="classicformpage">
        <MDBView src="https://wallpaperplay.com/walls/full/1/b/1/289383.jpg">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            {reservationContent}
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

ReservationPage.propTypes = {
  reservation: PropTypes.object.isRequired,
  getReservationById: PropTypes.func.isRequired,
};

const mapStatToProps = (state) => ({
  reservation: state.reservation,
});

export default connect(mapStatToProps, { getReservationById })(ReservationPage);
