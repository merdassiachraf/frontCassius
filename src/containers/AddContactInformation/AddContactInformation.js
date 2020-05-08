import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import { addContactInformation } from "../../actions/profileActions";

import { MDBMask, MDBView, MDBContainer } from "mdbreact";

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
  componentWillReceiveProps=(nextProps)=>{
      if (nextProps){
          this.setState({errors:nextProps})
      }
  }
  onSubmit = (e) => {
    e.preventDefault();

    const contactInformationData = {
      adress: this.state.adress,
      state: this.state.state,
      country: this.state.country,
      countryCode: this.state.countryCode,
      phoneNumber: this.state.phoneNumber,
    };
    this.props.addContactInformation(contactInformationData, this.props.history);
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;
    const { role, name } = this.props.auth.user;

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
              <div className="create-profile">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 m-auto creat-pro-head">
                      <Link to="/dashboard">Go Back</Link>
                      <h1 className="display-4  text-center white-text">
                        Add Onther Adress for {name}
                      </h1>
                      <form onSubmit={this.onSubmit} className=" ">
                        <div className="form-profile">
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
                            errors={errors.adress}
                            info={
                              role === "Agency"
                                ? "You can add another adress after validate you profile"
                                : "Add your adress"
                            }
                          />
                        </div>
                        <div className="infos-profile">
                          <SelectListGoup
                            placeholder="Country"
                            name="country"
                            value={this.state.country}
                            onChange={this.onChange}
                            errors={errors.country}
                            info="Select country"
                            options={optionsAgencyCountry}
                          />

                          {this.state.country === "Tunisia" ? (
                            <SelectListGoup
                              placeholder="State"
                              name="state"
                              value={this.state.state}
                              onChange={this.onChange}
                              errors={errors.state}
                              info="Select State"
                              options={optionsStateTunisia}
                            />
                          ) : (
                            <SelectListGoup
                              placeholder="State"
                              name="state"
                              value={this.state.state}
                              onChange={this.onChange}
                              errors={errors.state}
                              info="You need to choose country first"
                              options={optionsError}
                            />
                          )}
                          <SelectListGoup
                            placeholder="Country phone code"
                            name="countryCode"
                            value={this.state.countryCode}
                            onChange={this.onChange}
                            errors={errors.countryCode}
                            options={optionsAgencyCountryCode}
                          />
                          <TextFieldGroup
                            divClassName="col-md-15 text-field"
                            placeholder="Agency phone number"
                            name="phoneNumber"
                            type="text"
                            value={this.state.phoneNumber}
                            onChange={this.onChange}
                            errors={errors.phoneNumber}
                          />
                            <button
                              type="submit"
                              value="submit"
                              className="btn btn-primary btn-block profile-submit"
                              style={{ width: 150 }}
                              onClick={this.onSubmit}
                            >
                              Submit
                            </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </MDBContainer>
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
export default connect(mapStateToProps, { addContactInformation })(withRouter(AddContactInformation));
