import React from "react";

import ReservationCardActions from "./ReservationCardActions";
import { MDBIcon } from "mdbreact";
const ReservationCard = ({ reservation, editReservation }) => {
  return (
    <div>
      <div className="reservation-card d-flex flex-column align-items-center ">
        <h3 className="mt-3">Reservation N°{reservation._id}</h3>
        <div className="d-flex align-items-center">
          <div className="m-5">
            <h6>Client name : {reservation.clientName}</h6>
            <h6>E-mail : {reservation.clientEmail}</h6>
            <h6>Adress : {reservation.clientAdress}</h6>
            <h6>
              {reservation.clientState + " , " + reservation.clientCountry}
            </h6>
            <h6>
              {reservation.clientCountryCode +
                " " +
                reservation.clientPhoneNumber}
            </h6>
          </div>
          <div className="m-5">
            <h6>Agency : {reservation.agencyName}</h6>
            <h6>E-mail : {reservation.agencyEmail}</h6>
            <h6>Adress : {reservation.agencyAdress}</h6>
            <h6>
              {reservation.agencyState + " , " + reservation.agencyCountry}
            </h6>
            <h6>
              {reservation.agencyCountryCode +
                " " +
                reservation.agencyPhoneNumber}
            </h6>
          </div>
          <div className="m-5 d-flex">
            <h6>Status : </h6>
            <h6>
              {" "}
              {reservation.status}{" "}
              {reservation.status === "Changed and waiting for confirmation" ? (
                <MDBIcon className="text-warning" size="lg" icon="tools" />
              ) : reservation.status === "Waiting for confirmation" ? (
                <MDBIcon className="text-warning" size="lg" icon="user-edit" />
              ) : reservation.status === "Confirmed" ? (
                <MDBIcon className="green-text" size="lg" icon="check" />
              ) : (
                <MDBIcon className="text-danger" size="lg" icon="times" />
              )}
            </h6>
          </div>
        </div>
        <div className="d-flex align-items-start ">
          <div className="ml-5 mr-5 mb-5">
            <h6>Brand : {reservation.brand}</h6>
            <h6>Model : {reservation.model}</h6>
            <h6>Fuel : {reservation.fuel}</h6>
            <h6>Transmission : {reservation.transmission}</h6>
            <h6>Price Per Day : {reservation.pricePerDay}</h6>
          </div>
          <div className="ml-5 mr-5 ">
            <h6>Start Date : {reservation.startDate}</h6>
            <h6>Start Time : {reservation.startTime}</h6>
            <h6>Return Date : {reservation.returnDate}</h6>
            <h6>Return Time : {reservation.returnTime}</h6>
            <h6>Total of Days: {reservation.totalDays} days</h6>
            <h6>Total Price : {reservation.totalPrice}</h6>
          </div>
          <ReservationCardActions
            editReservation={editReservation}
            reservation={reservation}
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
