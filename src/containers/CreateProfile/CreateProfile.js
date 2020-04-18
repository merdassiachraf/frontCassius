import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { MDBMask, MDBView, MDBContainer } from "mdbreact";

import TextFieldGroup from "../Common/TextFieldGroup";
import InputGoup from "../Common/InputGoup";
import SelectListGoup from "../Common/SelectListGoup";
import TextAreaFieldGroup from "../Common/TextAreaFieldGroup";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
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
    };
  }

  render() {
    return (
      <div id="classicformpage">
        <MDBView src="https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <div className="create-profile">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 m-auto">
                      <h1 className="display-4 text-center">
                        Create tour profile
                      </h1>
                      <p className="lead text-center">
                        Let's get some information to make your profile stand
                        out
                      </p>
                      <small className="d-block pb-3">*= required fields</small>


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
CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});
export default connect(mapStateToProps)(CreateProfile);
