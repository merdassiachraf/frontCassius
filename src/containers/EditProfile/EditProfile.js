import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter,Link } from "react-router-dom";

import {
  MDBMask,
  MDBView,
  MDBContainer,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBBtn,
} from "mdbreact";

import TextFieldGroup from "../Common/TextFieldGroup";
import InputGoup from "../Common/InputGoup";
import SelectListGoup from "../Common/SelectListGoup";
import ProfilePicture from "../CreateProfile/ProfilePicture";

import isEmpty from "../../validation/isEmpty";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";

class EditProfile extends Component {
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

  clearEditSocialFields = () => {
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

  componentDidMount = () => {
    this.props.getCurrentProfile();
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      //if profile field doesnt exist
      profile.social = !isEmpty(profile.social) ? profile.social : {};
      profile.youtube = !isEmpty(profile.youtube) ? profile.youtube : "";
      profile.facebook = !isEmpty(profile.facebook) ? profile.facebook : "";
      profile.linkedin = !isEmpty(profile.linkedin) ? profile.linkedin : "";
      profile.instgram = !isEmpty(profile.instgram) ? profile.instgram : "";
      profile.twiter = !isEmpty(profile.twitter) ? profile.twitter : "";

      //set componet field state
      this.setState({
        handle: profile.handle,
        dateOfBirth: profile.dateOfBirth,
        youtube: profile.youtube,
        twitter: profile.twiter,
        facebook: profile.facebook,
        linkedin: profile.linkedin,
        instagram: profile.instagram,
        adress: profile.contactInformation[0].adress,
        state: profile.contactInformation[0].state,
        country: profile.contactInformation[0].country,
        countryCode: profile.contactInformation[0].countryCode,
        phoneNumber: profile.contactInformation[0].phoneNumber,
      });
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
        <button id="clear-social-btn" onClick={this.clearEditSocialFields}>
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
            <MDBContainer>
            <Link className="go-back" to="/dashboard"><MDBIcon icon="arrow-circle-left" />&nbsp;Go back</Link>
              <div className="create-profile text-center">
                <div
                  className="creat-pro-head text-center"
                  style={{ marginLeft: 300 }}
                >
                  <h2 className="text-center white-text">
                    Edit your profile {name}
                  </h2>
                  <p className="lead white-text text-center">
                    Let's get correct some information
                  </p>
                </div>

                <form onSubmit={this.onSubmit} className="form-group">
                  <div className="form-profile d-flex">
                    <div className="text-field1">
                      <TextFieldGroup
                        divClassName="col-md-10 "
                        placeholder="Profile Handle"
                        name="handle"
                        type="text"
                        value={this.state.handle}
                        onChange={this.onChange}
                        error={errors.handle}
                      />
                    </div>
                    <div className="text-field2">
                      {role === "Client" ? (
                        <TextFieldGroup
                          divClassName="col-md-10"
                          name="dateOfBirth"
                          type="date"
                          value={this.state.dateOfBirth}
                          onChange={this.onChange}
                          error={errors.dateOfBirth}
                        />
                      ) : null}
                    </div>
                    <div className="text-field3">
                      <TextFieldGroup
                        divClassName="col-md-10"
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
                    <div className="select-field1">
                      <SelectListGoup
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
                    </div>
                    <div className="select-field2">
                      {this.state.country === "Algeria" ? (
                        <SelectListGoup
                          placeholder="State"
                          name="state"
                          value={this.state.state}
                          onChange={this.onChange}
                          error={errors.state}
                          options={optionsStateAlgeria}
                        />
                      ) : this.state.country === "France" ? (
                        <SelectListGoup
                          placeholder="State"
                          name="state"
                          value={this.state.state}
                          onChange={this.onChange}
                          error={errors.state}
                          options={optionsStateFrance}
                        />
                      ) : this.state.country === "Italy" ? (
                        <SelectListGoup
                          placeholder="State"
                          name="state"
                          value={this.state.state}
                          onChange={this.onChange}
                          error={errors.state}
                          options={optionsStateItaly}
                        />
                      ) : this.state.country === "Tunisia" ? (
                        <SelectListGoup
                          placeholder="State"
                          name="state"
                          value={this.state.state}
                          onChange={this.onChange}
                          error={errors.state}
                          options={optionsStateTunisia}
                        />
                      ) : this.state.country === "Germany" ? (
                        <SelectListGoup
                          placeholder="State"
                          name="state"
                          value={this.state.state}
                          onChange={this.onChange}
                          error={errors.state}
                          options={optionsStateGermany}
                        />
                      ) : (
                        <SelectListGoup
                          placeholder="State"
                          name="state"
                          value={this.state.state}
                          onChange={this.onChange}
                          error={errors.state}
                          options={optionsError}
                        />
                      )}
                    </div>
                    <div className="select-field3">
                      <SelectListGoup
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
                    <div className="text-field4">
                      <TextFieldGroup
                        divClassName="col-md-10 phone-Field "
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
                    </div>
                    <div className="profile-picture-upload white-text">
                      <label style={{ marginLeft: 8 }}>Profile Picture:</label>
                      <ProfilePicture />
                    </div>
                    <div className="social-inputs">
                      <div className="social-button">
                        <MDBBtn
                          onClick={this.toggle}
                          className="font-weight-bold "
                          size="lg"
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
                        {errors.facebook ||
                        errors.youtube ||
                        errors.linkedin ||
                        errors.twitter ||
                        errors.instagram ? (
                          <div className="d-flex flex-column invalid-tooltip align-items-start">
                            <h6 class="white-text font-weight-light">
                              {errors.facebook}
                            </h6>
                            <h6 class="white-text font-weight-light">
                              {errors.youtube}
                            </h6>
                            <h6 class="white-text font-weight-light">
                              {errors.linkedin}
                            </h6>
                            <h6 class="white-text font-weight-light">
                              {errors.instagram}
                            </h6>
                            <h6 class="white-text font-weight-light">
                              {errors.twitter}
                            </h6>
                            <h6 className="d-flex white-text font-weight-light">
                              To fix click
                              <a
                                className="font-weight-bold"
                                onClick={this.toggle}
                              >
                                &nbsp;HERE
                              </a>
                            </h6>
                          </div>
                        ) : null}
                        <h6 className="white-text">Optional</h6>
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
                    </div>
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
                  </div>
                </form>
              </div>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}
EditProfile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  profile: state.profile,
  auth: state.auth,
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
