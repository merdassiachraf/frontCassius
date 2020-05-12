import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { deleteContactInformation } from "../../actions/profileActions";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBIcon,
} from "mdbreact";

class ContactInformation extends Component {
  state = {
    modal12: false,
  };
  onDeleteClick = (id) => {
    this.props.deleteContactInformation(id);
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    const contactInformation = this.props.contactInformation.map((contact) => (
      <tr key={contact.id} >
        <td>{contact.adress}</td>
        <td>{contact.state}</td>
        <td>{contact.country}</td>
        <td>{(contact.countryCode, contact.phoneNumber)}</td>
        <td>
          <MDBBtn color="yellow" onClick={this.toggle(12)}>
            <MDBIcon icon="edit" />
          </MDBBtn>
          <MDBModal
            isOpen={this.state.modal12}
            toggle={this.toggle(12)}
            backdrop={false}
          >
            <MDBModalHeader toggle={this.toggle(12)}>
              Edit contact information
            </MDBModalHeader>
            <MDBModalBody></MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle(12)}>
                Cancel
              </MDBBtn>
              <MDBBtn color="primary">Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
          <MDBBtn
            className="black-text"
            color="danger"
            onClick={this.onDeleteClick.bind(this, contact._id)}
          >
            <MDBIcon icon="trash-alt" />
          </MDBBtn>
        </td>
      </tr>
    ));
    return (
      <div >
        <h4 className="mb-4 white-text"><MDBIcon icon="file-contract" />&nbsp;&nbsp;Agency contact :</h4>
        <table className="table bg-white">
          <thread>
            <tr>
              <th>Adress</th>
              <th>State</th>
              <th>Country</th>
              <th>Phone number</th>
            </tr>
            <tbody>{contactInformation}</tbody>
          </thread>
        </table>
      </div>
    );
  }
}

ContactInformation.propTypes = {
  deleteContactInformation: PropTypes.func.isRequired,
};

export default connect(null, { deleteContactInformation })(ContactInformation);
