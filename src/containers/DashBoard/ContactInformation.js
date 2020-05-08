import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { deleteContactInformation } from "../../actions/profileActions";

class ContactInformation extends Component {
  onDeleteClick = (id) => {
    this.props.deleteContactInformation(id);
  };

  render() {
    const contactInformation = this.props.contactInformation.map((contact) => (
      <tr key={contact.id}>
        <td>{contact.adress}</td>
        <td>{contact.state}</td>
        <td>{contact.country}</td>
        <td>{(contact.countryCode, contact.phoneNumber)}</td>
        <td>
          <button className="btn btn-danger" onClick={this.onDeleteClick.bind(this,contact._id)}>
            X
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Contact Informations</h4>
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
