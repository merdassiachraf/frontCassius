import React, { Component } from "react";

import {
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

class ReservationCardActions extends Component {
  state = {
    modal: false,
    actionType: "",
  };

  onClickClose = ()=>{
      this.toggle()
      this.setState({
          actionType:""
      })
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  onClickEdit = () => {
    this.toggle();
    this.setState({
      actionType: "Edit",
    });
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

  render() {
    const { actionType } = this.state;
    return (
      <div>
        <MDBBtn
          onClick={this.onClickEdit}
          color="yellow"
          className="white-text"
        >
          <MDBIcon icon="pen-alt" />
          &nbsp;Edit
        </MDBBtn>

        <MDBBtn onClick={this.onClickCancel} color="danger">
          <MDBIcon icon="times" />
          &nbsp;Cancel
        </MDBBtn>

        <MDBBtn onClick={this.onClickConfirm} color="success">
          <MDBIcon icon="clipboard-check" />
          &nbsp;Confirm
        </MDBBtn>

        {actionType === "Edit" ? (
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>
              Edit Reservation N°123456789
            </MDBModalHeader>
            <MDBModalBody></MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.onClickClose}>
                Close
              </MDBBtn>
              <MDBBtn color="primary">Confirm</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        ) 
        : 
        actionType === "Cancel" ? (
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>
              Cancel Reservation N°123456789
            </MDBModalHeader>
            <MDBModalBody>
              Cancel reservation of Toyota yaris from 12/12/2020 to 1201/20121 ,
              for 5280 dt to Merdassi Achraf?{" "}
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.onClickClose}>
                Close
              </MDBBtn>
              <MDBBtn color="primary">Confirm</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        ) 
        : 
        actionType === "Confirm" ? (
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>
              Confirm Reservation N°123456789
            </MDBModalHeader>
            <MDBModalBody>
              Confirm reservation of Toyota yaris from 12/12/2020 to 1201/20121
              , for 5280 dt to Merdassi Achraf?
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.onClickClose}>
                Close
              </MDBBtn>
              <MDBBtn color="primary">Confirm</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        ) : null}
      </div>
    );
  }
}
export default ReservationCardActions;
