import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import {
  MDBMask,
  MDBView,
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

import TextFieldGroup from "../Common/TextFieldGroup"

import InputGoup from "../Common/InputGoup";
import SelectListGoup from "../Common/SelectListGoup";
import ProfilePicture from "./ProfilePicture";

import { createProfile } from "../../actions/profileActions";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      dateOfBirth: "",
      youtube: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      instagram: "",
      adress: "",
      state: "",
      country: "",
      countryCode: "",
      phoneNumber: "",
      errors: {},
      success:{},
      modal: false,
    };
  }

  clearSocialFields = () => {
    this.setState({
      youtube: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      instagram: "",
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.success) {
      this.setState({ success: nextProps.success });
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.props.auth.user.role === "Agency") {
      const profileData = {
        handle: this.state.handle,
        youtube: this.state.youtube,
        twitter: this.state.twitter,
        facebook: this.state.facebook,
        linkedin: this.state.linkedin,
        instagram: this.state.instagram,
        adress: this.state.adress,
        state: this.state.state,
        country: this.state.country,
        countryCode: this.state.countryCode,
        phoneNumber: this.state.phoneNumber,
      };

      this.props.createProfile(profileData, this.props.history);
    }
    if (this.props.auth.user.role === "Client") {
      const profileData = {
        dateOfBirth: this.state.dateOfBirth,
        handle: this.state.handle,
        youtube: this.state.youtube,
        twitter: this.state.twitter,
        facebook: this.state.facebook,
        linkedin: this.state.linkedin,
        instagram: this.state.instagram,
        adress: this.state.adress,
        state: this.state.state,
        country: this.state.country,
        countryCode: this.state.countryCode,
        phoneNumber: this.state.phoneNumber,
      };
      this.props.createProfile(profileData, this.props.history);
    }
  };

  render() {
    const { errors,success } = this.state;
    const { role, name } = this.props.auth.user;
    let socialnputs;

    socialnputs = (
      <div className="d-flex flex-column align-items-start">
        <button id="clear-social-btn" onClick={this.clearSocialFields}>
          <MDBIcon icon="trash-alt" />
          &nbsp; Clear fields
        </button>

        <InputGoup
          placeholder="Facebook profile URL"
          name="facebook"
          icon="facebook-f"
          value={this.state.facebook}
          onChange={this.onChange}
          error={errors.facebook}
          color="blue-text"
        />
        <InputGoup
          placeholder="Instagram profile URL"
          name="instagram"
          icon="instagram"
          value={this.state.instagram}
          onChange={this.onChange}
          error={errors.instagram}
          color="pink-text"
        />
        <InputGoup
          placeholder="Twitter profile URL"
          name="twitter"
          icon="twitter"
          value={this.state.twitter}
          onChange={this.onChange}
          error={errors.twitter}
          color="blue-text"
        />
        <InputGoup
          placeholder="Youtube profile URL"
          name="youtube"
          icon="youtube"
          value={this.state.youtube}
          onChange={this.onChange}
          error={errors.youtube}
          color="red-text"
        />
        <InputGoup
          placeholder="Linkedin profile URL"
          name="linkedin"
          icon="linkedin-in"
          value={this.state.linkedin}
          onChange={this.onChange}
          error={errors.linkedin}
          color="blue-text"
        />
      </div>
    );

    // Select options for status
    const optionsCountry = [
      { label: "Select Country", value: "" },
      { label: "Algeria", value: "Algeria", className: "algeria flag" },
      { label: "France", value: "France", className: "france flag" },
      { label: "Germany", value: "Germany", className: "germany flag" },
      { label: "Italy", value: "Italy", className: "italy flag" },
      { label: "Tunisia", value: "Tunisia", className: "tunisia flag" },
    ];

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
    const optionsStateFrance = [
      { label: "Select State", value: "", className: "france flag" },
      { label: "Paris", value: "Paris", className: "france flag" },
      { label: "Bourges", value: "Bourges", className: "france flag" },
      { label: "Orléans", value: "Orléans", className: "france flag" },
      { label: "Rouen", value: "Rouen", className: "france flag" },
      { label: "Toulouse", value: "Toulouse", className: "france flag" },
      { label: "Lyon", value: "Lyon", className: "france flag" },
      { label: "Grenoble", value: "Grenoble", className: "france flag" },
      { label: "Troyes", value: "Troyes", className: "france flag" },
    ];
    const optionsStateItaly = [
      { label: "Select State", value: "", className: "italy flag" },
      { label: "Abruzzo", value: "Abruzzo", className: "italy flag" },
      { label: "Apulia", value: "Apulia", className: "italy flag" },
      { label: "Rome", value: "Rome", className: "italy flag" },
      { label: "Milan", value: "Milan", className: "italy flag" },
      { label: "Napoli", value: "Napoli", className: "italy flag" },
      { label: "Lazio", value: "Lazio", className: "italy flag" },
    ];
    const optionsStateGermany = [
      { label: "Select State", value: "", className: "germany flag" },
      { label: "Berlin", value: "Berlin", className: "germany flag" },
      { label: "Hamburg", value: "Hamburg", className: "germany flag" },
      { label: "Mainz", value: "Mainz", className: "germany flag" },
      { label: "Düsseldorf", value: "Düsseldorf", className: "germany flag" },
      { label: "Bremen", value: "Bremen", className: "germany flag" },
    ];
    const optionsStateAlgeria = [
      { label: "Select State", value: "", className: "algeria flag" },
      { label: "Annaba", value: "Annaba", className: "algeria flag" },
      { label: "Batna", value: "Batna", className: "algeria flag" },
      { label: "Béjaïa", value: "Béjaïa", className: "algeria flag" },
      { label: "Adrar", value: "Adrar", className: "algeria flag" },
      { label: "Algiers", value: "Algiers", className: "algeria flag" },
    ];
    const optionsCountryCode = [
      { label: "Select country phone code", value: "" },
      { label: "+213", value: "+213", className: "algeria flag" },
      { label: "+216", value: "+216", className: "tunisia flag" },
      { label: "+33", value: "+33", className: "france flag" },
      { label: "+49", value: "+49", className: "germany flag" },
      { label: "+39", value: "+39", className: "italy flag" },
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
    return (
      <div id="classicformpage">
        <MDBView
          src={
            role === "Agency"
              ? "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              : "https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
        >
          <MDBMask className=" gradient">
            <div className="text-center create-prof">
              <div className="text-center">
                <h2 className="text-center white-text">
                  Create your profile {name}
                </h2>
                <p className="lead white-text text-center">
                  Let's get some information to make your profile stand out
                </p>
              </div>

              <form
                onSubmit={this.onSubmit}
                className="d-flex flex-column justify-content-between align-items-end"
              >
                <div
                  style={{ width: "1200px" }}
                  className="form-group d-flex align-items-start justify-content-between "
                >
                  <div className="d-flex flex-column">
                    <TextFieldGroup
                    className="d-flex  mb-3 mt-3"
                      size="large"
                      icon="user-tie"
                      prefix="user-tie"
                      placeholder="Profile Handle"
                      name="handle"
                      type="text"
                      value={this.state.handle}
                      onChange={this.onChange}
                      error={errors.handle}
                      label="Profile handle :"
                    />

                    {role === "Client" ? (
                      <TextFieldGroup
                      className="d-flex  mb-3 mt-3"
                        size="large"
                        icon="birthday-cake"
                        label="Date of birth :"
                        name="dateOfBirth"
                        type="date"
                        value={this.state.dateOfBirth}
                        onChange={this.onChange}
                        error={errors.dateOfBirth}
                      />
                    ) : null}

                    <TextFieldGroup
                    className="d-flex  mb-3 mt-3"
                      size="large"
                      icon="map-marker-alt"
                      label="Adress :"
                      placeholder={
                        role === "Agency" ? "Agency Adress" : "Your adress"
                      }
                      name="adress"
                      type="text"
                      value={this.state.adress}
                      onChange={this.onChange}
                      error={errors.adress}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <SelectListGoup
                      size="large"
                      icon="flag-usa"
                      label="Country :"
                      placeholder="Country"
                      value={this.state.country}
                      onChange={(value) => this.setState({ country: value })}
                      error={errors.country}
                      options={
                        role === "Agency"
                          ? optionsAgencyCountry
                          : optionsCountry
                      }
                    />

                    {this.state.country === "Algeria" ? (
                      <SelectListGoup
                        size="large"
                        label="State :"
                        icon="street-view"
                        placeholder="State"
                        name="state"
                        value={this.state.state}
                        onChange={(value) => this.setState({ state: value })}
                        error={errors.state}
                        options={optionsStateAlgeria}
                      />
                    ) : this.state.country === "France" ? (
                      <SelectListGoup
                        size="large"
                        label="State :"
                        icon="street-view"
                        placeholder="State"
                        name="state"
                        value={this.state.state}
                        onChange={(value) => this.setState({ state: value })}
                        error={errors.state}
                        options={optionsStateFrance}
                      />
                    ) : this.state.country === "Italy" ? (
                      <SelectListGoup
                        size="large"
                        label="State :"
                        icon="street-view"
                        placeholder="State"
                        name="state"
                        value={this.state.state}
                        onChange={(value) => this.setState({ state: value })}
                        error={errors.state}
                        options={optionsStateItaly}
                      />
                    ) : this.state.country === "Tunisia" ? (
                      <SelectListGoup
                        size="large"
                        label="State :"
                        icon="street-view"
                        placeholder="State"
                        name="state"
                        value={this.state.state}
                        onChange={(value) => this.setState({ state: value })}
                        error={errors.state}
                        options={optionsStateTunisia}
                      />
                    ) : this.state.country === "Germany" ? (
                      <SelectListGoup
                        size="large"
                        label="State :"
                        icon="street-view"
                        placeholder="State"
                        name="state"
                        value={this.state.state}
                        onChange={(value) => this.setState({ state: value })}
                        error={errors.state}
                        options={optionsStateGermany}
                      />
                    ) : (
                      <SelectListGoup
                        size="large"
                        label="State :"
                        icon="street-view"
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
                      icon="globe-africa"
                      label="Country phone code :"
                      placeholder="Country phone code"
                      name="countryCode"
                      value={this.state.countryCode}
                      onChange={(value) =>
                        this.setState({ countryCode: value })
                      }
                      error={errors.countryCode}
                      options={
                        role === "Agency"
                          ? optionsAgencyCountryCode
                          : optionsCountryCode
                      }
                    />
                  </div>
                  <div className="d-flex flex-column justify-content-start">
                    <TextFieldGroup
                    className="d-flex  mb-3 mt-3"
                      size="large"
                      icon="phone-square-alt"
                      label="Phone number :"
                      placeholder={
                        role === "Agency"
                          ? "Agency phone number"
                          : "Your phone number"
                      }
                      name="phoneNumber"
                      type="number"
                      value={this.state.phoneNumber}
                      onChange={this.onChange}
                      error={errors.phoneNumber}
                    />
                    <div className="d-flex mt-3">
                      <MDBBtn
                        onClick={this.toggle}
                        className="font-weight-bold "
                        style={{ height: 70 }}
                      >
                        Social Network Links&nbsp;&nbsp;
                        <MDBIcon
                          size="lg"
                          className="black-text"
                          fab
                          icon="internet-explorer"
                        />
                      </MDBBtn>
                      <h6 className="white-text">Optional</h6>
                    </div>
                  </div>
                  <div>
                    <label className="white-text d-flex mb-3">
                      <MDBIcon icon="camera" />
                      &nbsp;&nbsp;Profile Picture:
                    </label>
                    <ProfilePicture />
                  </div>
                </div>
                <MDBModal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  side
                  position="top-left"
                >
                  <MDBModalHeader toggle={this.toggle}>
                    Put your social Links
                  </MDBModalHeader>
                  <MDBModalBody>{socialnputs} </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color="danger" onClick={this.toggle}>
                      Done
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
                <MDBBtn
                  value="submit"
                  className="black-text font-weight-bold submit-profile"
                  style={{ width: 200 }}
                  onClick={this.onSubmit}
                  color="amber"
                  size="lg"
                >
                  Submit&nbsp;&nbsp;
                  <MDBIcon size="lg" icon="hdd" />
                </MDBBtn>
              </form>
            </div>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}
CreateProfile.propTypes = {
  createProfile:PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  success: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  success: state.success,
  profile: state.profile,
  auth: state.auth,
});
export default connect(mapStateToProps, { createProfile })(
  withRouter(CreateProfile)
);
