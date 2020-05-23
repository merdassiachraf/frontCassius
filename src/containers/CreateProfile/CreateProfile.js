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

import TextFieldGroup from "../Common/TextFieldGroup";
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
    const { errors } = this.state;
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
      { label: "Algeria", value: "Algeria" },
      { label: "France", value: "France" },
      { label: "Germany", value: "Germany" },
      { label: "Italy", value: "Italy" },
      { label: "Tunisia", value: "Tunisia" },
    ];

    const optionsStateTunisia = [
      { label: "Select State", value: "" },
      { label: "Ariana", value: "Ariana" },
      { label: "Béja", value: "Béja" },
      { label: "Ben Arous", value: "Ben Arous" },
      { label: "Bizerte", value: "Bizerte" },
      { label: "Gabés", value: "Gabés" },
      { label: "Gafsa", value: "Gafsa" },
      { label: "Jendouba", value: "Jendouba" },
      { label: "Kairouan", value: "Kairouan" },
      { label: "Kasserine", value: "Kasserine" },
      { label: "Kebili", value: "Kebili" },
      { label: "Kef", value: "Kef" },
      { label: "Mahdia", value: "Mahdia" },
      { label: "Mannouba", value: "Mannouba" },
      { label: "Mahdia", value: "Mahdia" },
      { label: "Medenine", value: "Medenine" },
      { label: "Monastir", value: "Monastir" },
      { label: "Nabeul", value: "Nabeul" },
      { label: "Sfax", value: "Sfax" },
      { label: "Sidi Bouzid", value: "Sidi Bouzid" },
      { label: "Siliana", value: "Siliana" },
      { label: "Sousse", value: "Sousse" },
      { label: "Tataouine", value: "Tataouine" },
      { label: "Tozeur", value: "Tozeur" },
      { label: "Tunis", value: "Tunis" },
      { label: "Zaghouan", value: "Zaghouan" },
    ];
    const optionsStateFrance = [
      { label: "Select State", value: "" },
      { label: "Paris", value: "Paris" },
      { label: "Bourges", value: "Bourges" },
      { label: "Orléans", value: "Orléans" },
      { label: "Rouen", value: "Rouen" },
      { label: "Toulouse", value: "Toulouse" },
      { label: "Lyon", value: "Lyon" },
      { label: "Grenoble", value: "Grenoble" },
      { label: "Troyes", value: "Troyes" },
    ];
    const optionsStateItaly = [
      { label: "Select State", value: "" },
      { label: "Abruzzo", value: "Abruzzo" },
      { label: "Apulia", value: "Apulia" },
      { label: "Rome", value: "Rome" },
      { label: "Milan", value: "Milan" },
      { label: "Napoli", value: "Napoli" },
      { label: "Lazio", value: "Lazio" },
    ];
    const optionsStateGermany = [
      { label: "Select State", value: "" },
      { label: "Berlin", value: "Berlin" },
      { label: "Hamburg", value: "Hamburg" },
      { label: "Mainz", value: "Mainz" },
      { label: "Düsseldorf", value: "Düsseldorf" },
      { label: "Bremen", value: "Bremen" },
    ];
    const optionsStateAlgeria = [
      { label: "Select State", value: "" },
      { label: "Annaba", value: "Annaba" },
      { label: "Batna", value: "Batna" },
      { label: "Béjaïa", value: "Béjaïa" },
      { label: "Adrar", value: "Adrar" },
      { label: "Algiers", value: "Algiers" },
    ];
    const optionsCountryCode = [
      { label: "Select country phone code", value: "" },
      { label: "+213", value: "+213" },
      { label: "+216", value: "+216" },
      { label: "+33", value: "+33" },
      { label: "+49", value: "+49" },
      { label: "+39", value: "+39" },
    ];

    const optionsAgencyCountry = [
      { label: "Choose country", value: "" },
      { label: "Tunisia", value: "Tunisia" },
    ];

    const optionsError = [{ label: "Select country first", value: "" }];

    const optionsAgencyCountryCode = [
      { label: "Choose country code", value: "" },
      { label: "+216", value: "+216" },
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
                      icon="user-tie"
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
                      icon="flag-usa"
                      label="Country :"
                      placeholder="Country"
                      name="country"
                      value={this.state.country}
                      onChange={this.onChange}
                      error={errors.country}
                      options={
                        role === "Agency"
                          ? optionsAgencyCountry
                          : optionsCountry
                      }
                    />

                    {this.state.country === "Algeria" ? (
                      <SelectListGoup
                        label="State :"
                        icon="street-view"
                        placeholder="State"
                        name="state"
                        value={this.state.state}
                        onChange={this.onChange}
                        error={errors.state}
                        options={optionsStateAlgeria}
                      />
                    ) : this.state.country === "France" ? (
                      <SelectListGoup
                        label="State :"
                        icon="street-view"
                        placeholder="State"
                        name="state"
                        value={this.state.state}
                        onChange={this.onChange}
                        error={errors.state}
                        options={optionsStateFrance}
                      />
                    ) : this.state.country === "Italy" ? (
                      <SelectListGoup
                        label="State :"
                        icon="street-view"
                        placeholder="State"
                        name="state"
                        value={this.state.state}
                        onChange={this.onChange}
                        error={errors.state}
                        options={optionsStateItaly}
                      />
                    ) : this.state.country === "Tunisia" ? (
                      <SelectListGoup
                        label="State :"
                        icon="street-view"
                        placeholder="State"
                        name="state"
                        value={this.state.state}
                        onChange={this.onChange}
                        error={errors.state}
                        options={optionsStateTunisia}
                      />
                    ) : this.state.country === "Germany" ? (
                      <SelectListGoup
                        label="State :"
                        icon="street-view"
                        placeholder="State"
                        name="state"
                        value={this.state.state}
                        onChange={this.onChange}
                        error={errors.state}
                        options={optionsStateGermany}
                      />
                    ) : (
                      <SelectListGoup
                        label="State :"
                        icon="street-view"
                        placeholder="State"
                        name="state"
                        value={this.state.state}
                        onChange={this.onChange}
                        error={errors.state}
                        options={optionsError}
                      />
                    )}
                    <SelectListGoup
                      icon="globe-africa"
                      label="Country phone code :"
                      placeholder="Country phone code"
                      name="countryCode"
                      value={this.state.countryCode}
                      onChange={this.onChange}
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
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  profile: state.profile,
  auth: state.auth,
});
export default connect(mapStateToProps, { createProfile })(
  withRouter(CreateProfile)
);
