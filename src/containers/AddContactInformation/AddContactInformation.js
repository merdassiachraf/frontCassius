import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import { addContactInformation } from "../../actions/profileActions";

import { MDBMask, MDBView,  MDBIcon, MDBBtn } from "mdbreact";

import TextFieldGroup from "../Common/TextFieldGroup";
import SelectListGoup from "../Common/SelectListGoup";

class AddContactInformation extends Component {
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

  render() {
    const { errors } = this.state;

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
    return (
      <div id="classicformpage">
        <MDBView src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <Link
              className="go-back"
              to="/dashboard"
              onClick={() => this.setState({ errors: {} })}
            >
              <MDBIcon icon="arrow-circle-left" />
              &nbsp;Go back
            </Link>
            <div className=" mt-5">
              <div className="d-flex flex-column text-center">
                <h2 className="text-center white-text">
                  Add contact information
                </h2>
                <p className="lead white-text text-center">
                  add an other contact to your agency
                </p>
              </div>
              <form onSubmit={this.onSubmit} className="form-group mt-5">
                <div className="d-flex flex-column align-items-end">
                  <div className="d-flex align-items-center">
                    <div className="mr-5">
                      <TextFieldGroup
                        size="large"
                        placeholder="Agency Adress"
                        name="adress"
                        type="text"
                        value={this.state.adress}
                        onChange={(e) =>
                          this.setState({ adress: e.target.value })
                        }
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
                    </div>
                    <div className="ml-5">
                      <SelectListGoup
                        size="large"
                        placeholder="Country phone code"
                        name="countryCode"
                        value={this.state.countryCode}
                        onChange={(value) =>
                          this.setState({ countryCode: value })
                        }
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
                    </div>
                  </div>
                  <MDBBtn
                    value="submit"
                    className="black-text font-weight-bold mt-5 "
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
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}
AddContactInformation.propTypes = {
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
  withRouter(AddContactInformation)
);
