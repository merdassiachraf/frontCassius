import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import {
  MDBMask,
  MDBView,
  MDBContainer,
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

  sociaCancel = () => { 
      this.toggle();
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

    console.log(this.state.twitter);
    socialnputs = (
      <div>
        <InputGoup
          placeholder="Facebook profile URL"
          name="facebook"
          icon="facebook-f"
          value={this.state.facebook}
          onChange={this.onChange}
          errors={errors.facebook}
          color="blue-text"
        />
        <InputGoup
          placeholder="Instagram profile URL"
          name="instagram"
          icon="instagram"
          value={this.state.instagram}
          onChange={this.onChange}
          errors={errors.instagram}
          color="pink-text"
        />
        <InputGoup
          placeholder="Twitter profile URL"
          name="twitter"
          icon="twitter"
          value={this.state.twitter}
          onChange={this.onChange}
          errors={errors.twitter}
          color="blue-text"
        />
        <InputGoup
          placeholder="Youtube profile URL"
          name="youtube"
          icon="youtube"
          value={this.state.youtube}
          onChange={this.onChange}
          errors={errors.youtube}
          color="red-text"
        />
        <InputGoup
          placeholder="Linkedin profile URL"
          name="linkedin"
          icon="linkedin-in"
          value={this.state.linkedin}
          onChange={this.onChange}
          errors={errors.linkedin}
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
            <MDBContainer>
              <div className="create-profile text-center">
                <div
                  className="creat-pro-head text-center"
                  style={{ marginLeft: 300 }}
                >
                  <h2 className="text-center white-text">
                    Create your profile {name}
                  </h2>
                  <p className="lead white-text text-center">
                    Let's get some information to make your profile stand out
                  </p>
                </div>

                <form onSubmit={this.onSubmit} className="form-group">
                  <div className="form-profile d-flex flex-column">
                    <div className="line-profile-1 text-center">
                      <TextFieldGroup
                        divClassName="col-md-5 text-field"
                        placeholder="Profile Handle"
                        name="handle"
                        type="text"
                        value={this.state.handle}
                        onChange={this.onChange}
                        errors={errors.handle}
                      />
                      {role === "Client" ? (
                        <TextFieldGroup
                          divClassName="col-md-5 text-field"
                          name="dateOfBirth"
                          type="date"
                          value={this.state.dateOfBirth}
                          onChange={this.onChange}
                          errors={errors.dateOfBirth}
                        />
                      ) : null}
                      <TextFieldGroup
                        divClassName="col-md-5 text-field"
                        placeholder={
                          role === "Agency" ? "Agency Adress" : "Your adress"
                        }
                        name="adress"
                        type="text"
                        value={this.state.adress}
                        onChange={this.onChange}
                        errors={errors.adress}
                      />
                    </div>
                    <div className="line-profile-2 text-center">
                      <SelectListGoup
                        placeholder="Country"
                        name="country"
                        value={this.state.country}
                        onChange={this.onChange}
                        errors={errors.country}
                        options={
                          role === "Agency"
                            ? optionsAgencyCountry
                            : optionsCountry
                        }
                      />

                      {this.state.country === "Algeria" ? (
                        <SelectListGoup
                          placeholder="State"
                          name="state"
                          value={this.state.state}
                          onChange={this.onChange}
                          errors={errors.state}
                          options={optionsStateAlgeria}
                        />
                      ) : this.state.country === "France" ? (
                        <SelectListGoup
                          placeholder="State"
                          name="state"
                          value={this.state.state}
                          onChange={this.onChange}
                          errors={errors.state}
                          options={optionsStateFrance}
                        />
                      ) : this.state.country === "Italy" ? (
                        <SelectListGoup
                          placeholder="State"
                          name="state"
                          value={this.state.state}
                          onChange={this.onChange}
                          errors={errors.state}
                          options={optionsStateItaly}
                        />
                      ) : this.state.country === "Tunisia" ? (
                        <SelectListGoup
                          placeholder="State"
                          name="state"
                          value={this.state.state}
                          onChange={this.onChange}
                          errors={errors.state}
                          options={optionsStateTunisia}
                        />
                      ) : this.state.country === "Germany" ? (
                        <SelectListGoup
                          placeholder="State"
                          name="state"
                          value={this.state.state}
                          onChange={this.onChange}
                          errors={errors.state}
                          options={optionsStateGermany}
                        />
                      ) : (
                        <SelectListGoup
                          placeholder="State"
                          name="state"
                          value={this.state.state}
                          onChange={this.onChange}
                          errors={errors.state}
                          options={optionsError}
                        />
                      )}
                      <SelectListGoup
                        placeholder="Country phone code"
                        name="countryCode"
                        value={this.state.countryCode}
                        onChange={this.onChange}
                        errors={errors.countryCode}
                        options={
                          role === "Agency"
                            ? optionsAgencyCountryCode
                            : optionsCountryCode
                        }
                      />
                    </div>
                    <div className=" d-flex line-profile-3">
                      <TextFieldGroup
                        divClassName="col-md-3 phone-Field "
                        placeholder={
                          role === "Agency"
                            ? "Agency phone number"
                            : "Your phone number"
                        }
                        name="phoneNumber"
                        type="text"
                        value={this.state.phoneNumber}
                        onChange={this.onChange}
                        errors={errors.phoneNumber}
                      />
                      <div className="profile-picture-upload">
                        <ProfilePicture />
                      </div>
                      <div className="social-inputs">
                        <MDBBtn
                          onClick={this.toggle}
                          className="font-weight-bold"
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

                        <h6 className="white-text">Optional</h6>
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
                            <MDBBtn color="secondary" onClick={this.toggle}>
                              Close
                            </MDBBtn>
                            <MDBBtn color="primary" onClick={this.toggle}>
                              Done
                            </MDBBtn>
                          </MDBModalFooter>
                        </MDBModal>
                      </div>
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
