import React from "react";

import ReservationCardActions from "./ReservationCardActions";

const ReservationCard = ({ reservation }) => {
  return (
    <div>
      <div className="reservation-card d-flex flex-column align-items-center ">
        <h3 className="mt-3">Reservation N°{reservation._id}</h3>
        <div className="d-flex align-items-center">
          <div className="m-5">
            <h6>Client name :{reservation.client}</h6>
            <h6>E-mail : {reservation.clientEmail}</h6>
            <h6>Adress : {reservation.clientAdress}</h6>
            <h6>
              {reservation.clientState + " , " + reservation.clientCountry}
            </h6>
            <h6>
              {reservation.clientCodePhone +
                " " +
                reservation.clientPhoneNumber}
            </h6>
          </div>
          <div className="m-5">
            <h6>Agency :{reservation.agency}</h6>
            <h6>E-mail : {reservation.agencyEmail}</h6>
            <h6>Adress : {reservation.agencyAdress}</h6>
            <h6>
              {reservation.agencyState + " , " + reservation.agencyCountry}
            </h6>
            <h6>
              {reservation.agencyCodePhone +
                " " +
                reservation.agencyPhoneNumber}
            </h6>
          </div>
          <div className="m-5 d-flex">
            <h6>Status : </h6>
            <h6>{reservation.status}</h6>
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
            <h6>Return Time :{reservation.returnTime}</h6>
            <h6>Total of Days {reservation.totalOfDays}</h6>
            <h6>Total Price : {reservation.totalPrice}</h6>
          </div>
          <ReservationCardActions />
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
