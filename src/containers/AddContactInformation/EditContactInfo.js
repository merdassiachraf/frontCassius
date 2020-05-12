import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import { addContactInformation } from "../../actions/profileActions";

import { MDBMask, MDBView, MDBContainer, MDBIcon, MDBBtn } from "mdbreact";

import TextFieldGroup from "../Common/TextFieldGroup";
import SelectListGoup from "../Common/SelectListGoup";

class EditContactInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adress: "",
      state: "",
      country: "",
      countryCode: "",
      phoneNumber: "",
      errors: {},
    };
  }
  componentWillReceiveProps = (nextProps) => {
    if (nextProps) {
      this.setState({ errors: nextProps });
    }
  };
  onSubmit = (e) => {
    e.preventDefault();

    const contactInformationData = {
      adress: this.state.adress,
      state: this.state.state,
      country: this.state.country,
      countryCode: this.state.countryCode,
      phoneNumber: this.state.phoneNumber,
    };
    this.props.addContactInformation(
      contactInformationData,
      this.props.history
    );
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;
    const { role } = this.props.auth.user;

    // Select options for adress

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
        <MDBView src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <Link className="go-back" to="/dashboard">
                <MDBIcon icon="arrow-circle-left" />
                &nbsp;Go back
              </Link>
              <div className="add-agency-cont">
                   <div
                      className="d-flex flex-column text-center"
                   >
                      <h2 className="text-center white-text">
                        Add contact information
                      </h2>
                      <p className="lead white-text text-center">
                        add an other contact to your agency
                      </p>
                    </div>
                    <form onSubmit={this.onSubmit} className="form-group">
                      <div className="d-flex">
                        <div className="left-add-con-info">
                          <div className="cont-inf-field-1">
                            <TextFieldGroup
                              divClassName="col-md-11 d-flex flex-column align-items-start"
                              placeholder={
                                role === "Agency"
                                  ? "Agency Adress"
                                  : "Your adress"
                              }
                              name="adress"
                              type="text"
                              value={this.state.adress}
                              onChange={this.onChange}
                              error={errors.adress}
                            />
                          </div>
                          <div className="cont-inf-field-2">
                            <SelectListGoup
                              placeholder="Country"
                              name="country"
                              value={this.state.country}
                              onChange={this.onChange}
                              error={errors.country}
                              info="Select country"
                              options={optionsAgencyCountry}
                            />
                          </div>
                          <div className="cont-inf-field-3">
                            {this.state.country === "Tunisia" ? (
                              <SelectListGoup
                                placeholder="State"
                                name="state"
                                value={this.state.state}
                                onChange={this.onChange}
                                error={errors.state}
                                options={optionsStateTunisia}
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
                        </div>
                        <div className="middle-add-con-info">
                          <div className="cont-inf-field-4">
                            <SelectListGoup
                              placeholder="Country phone code"
                              name="countryCode"
                              value={this.state.countryCode}
                              onChange={this.onChange}
                              error={errors.countryCode}
                              options={optionsAgencyCountryCode}
                            />
                          </div>
                          <div className="cont-inf-field-5">
                            <TextFieldGroup
                              divClassName="col-md-15 text-field"
                              placeholder="Agency phone number"
                              name="phoneNumber"
                              type="text"
                              value={this.state.phoneNumber}
                              onChange={this.onChange}
                              error={errors.phoneNumber}
                            />
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
EditContactInfo.propTypes = {
  addContactInformation: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  profile: state.profile,
  auth: state.auth,
});
export default connect(mapStateToProps, { addContactInformation })(
  withRouter(EditContactInfo)
);
