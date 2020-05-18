import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";
import {connect} from "react-redux"

import PropTypes from "prop-types";

class ReservationsCard extends Component {
  render() {
    const { reservation } = this.props;
    return (
      <Link to={`/reservations/${reservation._id}`}>
        <div className="card-reservation p-4 m-4 align-items-center">
          <div className="d-flex justify-content-between">
            <h5>N°{reservation._id}</h5>
            {/* <MDBIcon className="green-text" size="lg" icon="check" /> */}
            {/* <MDBIcon className="text-danger" size="lg" icon="times" /> */}
            <MDBIcon className="text-warning" size="lg" icon="user-edit" />
          </div>
          <div className="d-flex">
            <h5>Car : {reservation.model + " " + reservation.brand}</h5>
          </div>
          <h5>Client Name:{reservation.agencyName}</h5>
          <h5>Total Price : {reservation.totalPrice}</h5>
          <h5>Total of Days : {reservation.totalOfDays}</h5>
        </div>
      </Link>
    );
  }
}

ReservationsCard.propTypes = {
  reservation: PropTypes.object.isRequired,
};


export default ReservationsCard;
