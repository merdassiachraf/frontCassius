import React from "react";

import ReservationCardActions from "./ReservationCardActions";

export default function ReservationCard() {
  return (
      <div className="reservation-card d-flex flex-column align-items-center ">
        <h3 className="mt-3">Reservation N°{Math.random()}</h3>
        <div className="d-flex align-items-center">
          <div className="m-5">
            <h6>Client name : MERDASSI Achraf</h6>
            <h6>E-mail : charouff9@gmail.com</h6>
            <h6>Adress : 104 cité hached</h6>
            <h6>Bizerte , Tunisia</h6>
            <h6>+216 54070138</h6>
          </div>
          <div className="m-5">
            <h6>Agency : Hertz rent car</h6>
            <h6>E-mail :hertzrent@gmail.com</h6>
            <h6>Adress : 104 cité hached</h6>
            <h6>Bizert , Tunis</h6>
            <h6>+216 54070138</h6>
          </div>
          <div className="m-5 d-flex">
            <h6>Status : </h6>
            <h6>Waiting for confirmation</h6>
          </div>
        </div>
        <div className="d-flex align-items-start ">
          <div className="ml-5 mr-5 mb-5">
            <h6>Brand : Toyota</h6>
            <h6>Model : Yaris</h6>
            <h6>Fuel : Gasoline</h6>
            <h6>Transmission : Manuel</h6>
            <h6>Price Per Day : 160 dt/day</h6>
          </div>
          <div className="ml-5 mr-5 ">
            <h6>Start Date : 12/05/2020</h6>
            <h6>Start Time : 08:00</h6>
            <h6>Return Date : 12/06/2020</h6>
            <h6>Return Time : 08:00</h6>
            <h6>Total of Days :31 days</h6>
            <h6>Total Price : 5230 dt</h6>
          </div>
          <ReservationCardActions />
        </div>
      </div>
  );
}
