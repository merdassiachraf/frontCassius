import React from "react";
import { MDBIcon } from "mdbreact";

export default function ReservationsCard() {
  return (
    <div className="card-reservation p-4 m-4 align-items-center">
      <div className="d-flex justify-content-between">
        <h5>N°12536985474</h5>
        {/* <MDBIcon className="green-text" size="lg" icon="check" /> */}
        {/* <MDBIcon className="text-danger" size="lg" icon="times" /> */}
        <MDBIcon className="text-warning" size="lg" icon="user-edit" />
      </div>
      <div className="d-flex">
        <h5>Car : </h5> <h5>Toyota Yaris</h5>
      </div>
      <h5>Client Name: Merdassi Achraf</h5>
      <h5>Total Price : 5258 dt</h5>
      <h5>Total of Days : 32 days</h5>
    </div>
  );
}
