import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  deleteContactInformation,
  editContactInformation,
} from "../../actions/profileActions";

import TextFieldGroup from "../Common/TextFieldGroup";
import SelectListGoup from "../Common/SelectListGoup";
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
    modal: false,
    adress: "",
    state: "",
    country: "",
    countryCode: "",
    phoneNumber: "",
    errors: {},
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps) {
      this.setState({ errors: nextProps });
    }
  };

  onDeleteClick = (id) => {
    this.props.deleteContactInformation(id);
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onSubmit = (id) => {

    const contactInformationData = {
      adress: this.state.adress,
      state: this.state.state,
      country: this.state.country,
      countryCode: this.state.countryCode,
      phoneNumber: this.state.phoneNumber,
    };
    this.props.editContactInformation(id,
      contactInformationData,
      this.props.history
    );
  };

  render() {
    const { errors } = this.state;
    const { contact } = this.props;

    // Select options for adress

    const optionsStateTunisia = [
      { label: "Select State", value: "", className: "tunisia flag" },
      { label: "Ariana", value: "Ariana", className: "tunisia flag" },
      { label: "Béja", value: "Béja", className: "tunisia flag" },
      { label: "Ben Arous", value: "Ben Arous", className: "tunisia flag" },
      { label: "Bizerte", value: "Bizerte", className: "tunisia flag" },
      { label: "Gabés", value: "Gabés", className: "tunisia flag" },
      { label: "Gafsa", value: "Gafsa", className: "tunisia flag" },
      { label: "Jendouba", value: "Jendouba", className: "tunisia flag" },
      { label: "Kairouan", value: "Kairouan", className: "tunisia flag" },
      { label: "Kasserine", value: "Kasserine", className: "tunisia flag" },
      { label: "Kebili", value: "Kebili", className: "tunisia flag" },
      { label: "Kef", value: "Kef", className: "tunisia flag" },
      { label: "Mahdia", value: "Mahdia", className: "tunisia flag" },
      { label: "Mannouba", value: "Mannouba", className: "tunisia flag" },
      { label: "Medenine", value: "Medenine", className: "tunisia flag" },
      { label: "Monastir", value: "Monastir", className: "tunisia flag" },
      { label: "Nabeul", value: "Nabeul", className: "tunisia flag" },
      { label: "Sfax", value: "Sfax", className: "tunisia flag" },
      { label: "Sidi Bouzid", value: "Sidi Bouzid", className: "tunisia flag" },
      { label: "Siliana", value: "Siliana", className: "tunisia flag" },
      { label: "Sousse", value: "Sousse", className: "tunisia flag" },
      { label: "Tataouine", value: "Tataouine", className: "tunisia flag" },
      { label: "Tozeur", value: "Tozeur", className: "tunisia flag" },
      { label: "Tunis", value: "Tunis", className: "tunisia flag" },
      { label: "Zaghouan", value: "Zaghouan", className: "tunisia flag" },
    ];

    const optionsAgencyCountry = [
      { label: "Choose country", value: "" },
      { label: "Tunisia", value: "Tunisia", className: "tunisia flag" },
    ];

    const optionsError = [{ label: "Select country first", value: "" }];

    const optionsAgencyCountryCode = [
      { label: "Choose country code", value: "" },
      { label: "+216", value: "+216", className: "tunisia flag" },
    ];
    const contactInformation = this.props.contactInformation.map((contact) => (
      <tr key={contact.id}>
        <td>{contact.adress}</td>
        <td>{contact.state}</td>
        <td>{contact.country}</td>
        <td>{(contact.countryCode, contact.phoneNumber)}</td>
        <td>
          <MDBBtn
            color="yellow"
            onClick={() => {
              this.toggle();
              this.setState({
                adress: contact.adress,
                state: contact.state,
                country: contact.country,
                countryCode: contact.countryCode,
                phoneNumber: contact.phoneNumber,
              });
            }}
          >
            <MDBIcon icon="edit" />
          </MDBBtn>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>
              Edit contact information
            </MDBModalHeader>
            <MDBModalBody>
              <form onSubmit={this.onSubmit} className="form-group mt-5">
                <TextFieldGroup
                  size="large"
                  placeholder="Agency Adress"
                  name="adress"
                  type="text"
                  value={this.state.adress}
                  onChange={(e) => this.setState({ adress: e.target.value })}
                  error={errors.adress}
                />
                <SelectListGoup
                  size="large"
                  placeholder="Country"
                  name="country"
                  value={this.state.country}
                  onChange={(value) => this.setState({ country: value })}
                  error={errors.country}
                  options={optionsAgencyCountry}
                />

                {this.state.country === "Tunisia" ? (
                  <SelectListGoup
                    size="large"
                    placeholder="State"
                    value={this.state.state}
                    onChange={(value) => this.setState({ state: value })}
                    error={errors.state}
                    options={optionsStateTunisia}
                  />
                ) : (
                  <SelectListGoup
                    size="large"
                    placeholder="State"
                    name="state"
                    value={this.state.state}
                    onChange={(value) => this.setState({ state: value })}
                    error={errors.state}
                    options={optionsError}
                  />
                )}
                <SelectListGoup
                  size="large"
                  placeholder="Country phone code"
                  name="countryCode"
                  value={this.state.countryCode}
                  onChange={(value) => this.setState({ countryCode: value })}
                  error={errors.countryCode}
                  options={optionsAgencyCountryCode}
                />
                <TextFieldGroup
                  size="large"
                  placeholder="Agency phone number"
                  name="phoneNumber"
                  type="text"
                  value={this.state.phoneNumber}
                  onChange={(e) =>
                    this.setState({ phoneNumber: e.target.value })
                  }
                  error={errors.phoneNumber}
                />
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle}>
                Cancel
              </MDBBtn>
              <MDBBtn
                value="submit"
                className="black-text font-weight-bold mt-5 "
                onClick={this.onSubmit(contact._id)}
                color="amber"
              >
                Submit&nbsp;&nbsp;
                <MDBIcon size="lg" icon="hdd" />
              </MDBBtn>
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
      <div>
        <h4 className="mb-4 white-text">
          <MDBIcon icon="file-contract" />
          &nbsp;&nbsp;Agency contact :
        </h4>
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
  editContactInformation: PropTypes.func.isRequired,
  deleteContactInformation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {
  deleteContactInformation,
  editContactInformation,
})(ContactInformation);
