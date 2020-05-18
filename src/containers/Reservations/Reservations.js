import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getMyReservations } from "../../actions/reservationActions";

import ReservationsCard from "./ReservationsCard";
import Spinner from "../Common/Spinner";

import { MDBMask, MDBView } from "mdbreact";

class Reservations extends Component {
  componentDidMount = () => {
    this.props.getMyReservations();
  };

  render() {
    const { my_reservations, loading } = this.props.reservation;

    let myReservationsContent;

    if (my_reservations === null || loading === true) {
      myReservationsContent = <Spinner />;
    } else if (my_reservations.length > 0) {
      myReservationsContent = (
        <div className="d-flex flex-wrap  reservations-list">
        {my_reservations.map((reservation) => (
              <ReservationsCard
                key={reservation._id}
                reservation={reservation}
              />
          ))}
        </div>
      );
    }

    return (
      <div id="classicformpage">
        <MDBView src="https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <div className="d-flex flex-column reservations-page align-items-center">
              <h1 className="white-text">Reservation List</h1>
              {myReservationsContent}
            </div>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

Reservations.propTypes = {
  getMyReservations: PropTypes.func.isRequired,
  reservation: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  reservation: state.reservation,
});

export default connect(mapStateToProps, { getMyReservations })(Reservations);
