import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Input } from "antd";

import {
  editReservation,
  confirmReservation,
  cancelReservation,
} from "../../actions/reservationActions";

import {
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBAlert,
} from "mdbreact";

class ReservationCardActions extends Component {
  state = {
    modal: false,
    startDate: "",
    returnDate: "",
    startTime: "",
    returnTime: "",
    totalDays: "",
    totalPrice: "",
    brand: "",
    model: "",
    fuel: "",
    transmission: "",
    adress: "",
    state: "",
    country: "",
    pricePerDay: "",
    actionTypes: "",
    errors: {},
  };

  onClickClose = () => {
    this.toggle();
    this.setState({
      actionType: "",
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClickCancel = () => {
    this.toggle();
    this.setState({
      actionType: "Cancel",
    });
  };
  onClickConfirm = () => {
    this.toggle();
    this.setState({
      actionType: "Confirm",
    });
  };

  onConfirmEdit = (id) => {
    const reservationData = {
      startDate: this.state.startDate,
      returnDate: this.state.returnDate,
      startTime: this.state.startTime,
      returnTime: this.state.startTime,
      totalDays: this.state.totalDays.toString(10),
      totalPrice: this.state.totalPrice,
    };
    this.props.editReservation(id, reservationData);
    window.location.reload(false);
  };

  render() {
    const fdate = new Date(this.state.startDate);
    const ldate = new Date(this.state.returnDate);

    const diff = (ldate - fdate) / 86400000;

    const { actionType } = this.state;
    const { reservation } = this.props;
    const { role } = this.props.auth.user;

    const onClickEdit = () => {
      this.toggle();
      this.setState({
        actionType: "Edit",
        startDate: reservation.startDate,
        returnDate: reservation.returnDate,
        startTime: reservation.startTime,
        returnTime: reservation.returnTime,
        totalDays: reservation.totalDays,
        totalPrice: reservation.totalPrice,
        brand: reservation.brand,
        model: reservation.model,
        fuel: reservation.fuel,
        transmission: reservation.transmission,
        pricePerDay: reservation.pricePerDay,
      });
    };

    const onClickCalcul = () => {
      this.setState({
        totalPrice: (
          this.state.totalDays * parseInt(reservation.pricePerDay, 10)
        ).toString(10),
      });
    };

    return (
      <div>
        {role === "Client" &&
        reservation.status !== "Confirmed" &&
        reservation.status !== "Canceled" ? (
          <MDBBtn onClick={onClickEdit} color="yellow" className="white-text">
            <MDBIcon icon="pen-alt" />
            &nbsp;Edit
          </MDBBtn>
        ) : null}
        {reservation.status !== "Confirmed" &&
        reservation.status !== "Canceled" ? (
          <MDBBtn onClick={this.onClickCancel} color="danger">
            <MDBIcon icon="times" />
            &nbsp;Cancel
          </MDBBtn>
        ) : null}

        {role === "Agency" &&
        reservation.status !== "Confirmed" &&
        reservation.status !== "Canceled" ? (
          <MDBBtn onClick={this.onClickConfirm} color="success">
            <MDBIcon icon="clipboard-check" />
            &nbsp;Confirm
          </MDBBtn>
        ) : null}

        {actionType === "Edit" ? (
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>
              Edit Reservation N°{reservation._id}
            </MDBModalHeader>
            <MDBModalBody>
              <MDBAlert className="alert-notice" color="success">
                <h5 className="alert-heading">
                  <MDBIcon icon="exclamation-triangle" />
                  &nbsp;&nbsp; Important
                </h5>
                <hr />
                <p className="mb-0">
                  Whenever you need to, be sure to use margin utilities to keep
                  things nice and tidy.
                </p>
              </MDBAlert>
              <label className="reservation-label">Start Date :</label>
              <Input
                value={this.state.startDate}
                type="date"
                size="large"
                name="startDate"
                onChange={this.onChange}
                placeholder="large size"
                prefix={<MDBIcon icon="calendar-alt" />}
              />

              <label className="reservation-label">Return Date :</label>
              <Input
                value={this.state.returnDate}
                type="date"
                size="large"
                name="returnDate"
                onChange={this.onChange}
                placeholder="large size"
                prefix={<MDBIcon icon="calendar-alt" />}
              />

              <label className="reservation-label">Start Time :</label>
              <Input
                value={this.state.startTime}
                type="time"
                size="large"
                name="startTime"
                onChange={this.onChange}
                placeholder="large size"
                prefix={<MDBIcon icon="clock" />}
              />

              <label className="reservation-label">Return Time :</label>
              <Input
                value={this.state.startTime}
                type="time"
                size="large"
                name="returnTime"
                onChange={this.onChange}
                placeholder="large size"
                prefix={<MDBIcon icon="clock" />}
              />

              <label className="reservation-label">Total of Days :</label>
              <div className="d-flex">
                <Input
                  readOnly
                  value={this.state.totalDays}
                  type="text"
                  size="large"
                  name="totalDays"
                  placeholder={"Total of Days"}
                  prefix={<MDBIcon icon="calendar-day" />}
                />
                <MDBBtn
                  rounded
                  className="white-text"
                  onClick={() => {
                    if (diff >= 0) this.setState({ totalDays: diff });
                  }}
                  color="light-blue"
                  size="sm"
                >
                  calcul total of days
                </MDBBtn>
              </div>
              <label className="reservation-label">Price Per Day :</label>
              <Input
                readOnly
                value={reservation.pricePerDay}
                type="text"
                size="large"
                prefix={<MDBIcon icon="dollar-sign" />}
              />
              <label className="reservation-label">Total Price :</label>
              <div className="d-flex">
                <Input
                  readOnly
                  value={this.state.totalPrice}
                  type="text"
                  size="large"
                  placeholder="Total price"
                  prefix={<MDBIcon icon="credit-card" />}
                />
                <MDBBtn
                  rounded
                  className="white-text"
                  onClick={onClickCalcul}
                  color="light-blue"
                  size="sm"
                >
                  calcul total price
                </MDBBtn>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.onClickClose}>
                Close
              </MDBBtn>
              <MDBBtn
                color="primary"
                onClick={this.onConfirmEdit.bind(this, reservation._id)}
              >
                Confirm
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        ) : actionType === "Cancel" ? (
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>
              Cancel Reservation N°{reservation._id}
            </MDBModalHeader>
            <MDBModalBody>
              Cancel reservation of {reservation.brand} {reservation.model} from
              {reservation.startDate} to {reservation.returnDate} , for
              {reservation.totalPrice} dt to {reservation.clientName}?
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.onClickClose}>
                Close
              </MDBBtn>
              <MDBBtn
                color="primary"
                onClick={this.props.cancelReservation.bind(
                  this,
                  reservation._id
                )}
              >
                Confirm
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        ) : actionType === "Confirm" ? (
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>
              Confirm Reservation N°123456789
            </MDBModalHeader>
            <MDBModalBody>
              Confirm reservation of {reservation.brand} {reservation.model}{" "}
              from
              {reservation.startDate} to {reservation.returnDate} , for
              {reservation.totalPrice} dt to {reservation.clientName}?
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.onClickClose}>
                Close
              </MDBBtn>
              <MDBBtn
                color="primary"
                onClick={this.props.confirmReservation.bind(
                  this,
                  reservation._id
                )}
              >
                Confirm
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        ) : null}
      </div>
    );
  }
}

ReservationCardActions.propTypes = {
  getReservationById: PropTypes.func.isRequired,
  confirmReservation: PropTypes.func.isRequired,
  cancelReservation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  editReservation,
  confirmReservation,
  cancelReservation,
})(ReservationCardActions);
