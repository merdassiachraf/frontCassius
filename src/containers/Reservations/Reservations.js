import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ReservationsCard from "./ReservationsCard";

import { MDBMask, MDBView } from "mdbreact";

class Reservations extends Component {
  render() {
    return (
      <div id="classicformpage">
        <MDBView src="https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <div className="d-flex flex-column reservations-page align-items-center">
              <h1 className="white-text">Reservation List</h1>
              <div className="d-flex flex-wrap  reservations-list">
                <ReservationsCard />
                <ReservationsCard />
                <ReservationsCard />
                <ReservationsCard />
                <ReservationsCard />
                <ReservationsCard />
                <ReservationsCard />
                <ReservationsCard />
                <ReservationsCard />
              </div>
            </div>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default Reservations;
