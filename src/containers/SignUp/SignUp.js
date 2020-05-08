import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

import TextFieldGroup from "../Common/TextFieldGroup";

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "",
      accountStep: "",
      agencyButton: false,
      clientButton: false,
      fname: "",
      lname: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
      agree: false,
      errors: {},
    };
  }

  handleClickClient = () => {
    this.setState({
      role: "Client",
      accountStep: "Social",
      agencyButton: false,
      clientButton: true,
      name: "",
      fname: "",
      lname: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
      agree: false,
      modal: false,
    });
  };
  handleClickAgency = () => {
    this.setState({
      role: "Agency",
      accountStep: "Social",
      agencyButton: true,
      clientButton: false,
      fname: "",
      lname: "",
      name: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
      check: false,
      agree: "",
    });
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  };

  handleClickFields = () => {
    this.setState({
      accountStep: "Fill the fields",
    });
  };

  onAgree = () => {
    this.setState({ check: !this.state.check });
    if (this.state.check === true) {
      this.setState({ agree: "true" });
    } else {
      this.setState({ agree: "" });
    }
  };
  onAgreeModal = () => {
    this.toggle();
    this.setState({ agree: "true", check: true });
  };

  submitHandler = (e) => {
    e.preventDefault();
    e.target.className += " was-validated";
  };

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.role === "Client") {
      const newUser = {
        lname: this.state.lname.toUpperCase(),
        fname:
          this.state.fname.charAt(0).toUpperCase() +
          this.state.fname.slice(1).toLowerCase(),
        email: this.state.email.toLowerCase(),
        confirmEmail: this.state.confirmEmail.toLowerCase(),
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
        role: this.state.role,
        agree: this.state.agree,
      };
      this.props.registerUser(newUser, this.props.history);
    }

    const newUser = {
      name:
        this.state.name.charAt(0).toUpperCase() +
        this.state.name.slice(1).toLowerCase(),
      email: this.state.email.toLowerCase(),
      confirmEmail: this.state.confirmEmail.toLowerCase(),
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      role: this.state.role,
      agree: this.state.agree,
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    console.log(this.state.agree);

    const { errors } = this.state;
    return (
      <div id="classicformpage">
        <MDBView src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                  <MDBModalHeader toggle={this.toggle}>
                    Privacy and GDPR Policy
                  </MDBModalHeader>
                  <MDBModalBody>Bla Bla Bla .....</MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color="danger" onClick={this.toggle}>
                      Close&nbsp;
                      <MDBIcon icon="times" />
                    </MDBBtn>
                    <MDBBtn color="success" onClick={this.onAgreeModal}>
                      Agree&nbsp;
                      <MDBIcon icon="check" />
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
                <MDBCol className="right-animation-add">
                  <MDBAnimation
                    type="fadeInLeft"
                    delay=".3s"
                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5 right-add-photo"
                  >
                    <h1 className="h1-responsive font-weight-bold white-text ">
                      Create your account for free
                    </h1>
                    <hr className="hr-light white-text" />
                    <div className="account-types">
                      <MDBBtn
                        disabled={this.state.clientButton}
                        color="warning"
                        className="black-text font-weight-bold d-flex account-type choose-type"
                        onClick={this.handleClickClient}
                      >
                        Client&nbsp;&nbsp;
                        <MDBIcon icon="user" />
                      </MDBBtn>
                      <MDBBtn
                        disabled={this.state.agencyButton}
                        color="success"
                        className="black-text font-weight-bold d-flex account-type choose-type"
                        onClick={this.handleClickAgency}
                      >
                        Agency&nbsp;&nbsp;
                        <MDBIcon icon="building" />
                      </MDBBtn>
                    </div>
                  </MDBAnimation>
                </MDBCol>
                {this.state.accountStep === "Social" &&
                (this.state.role === "Client" ||
                  this.state.role === "Agency") ? (
                  <MDBCol
                    md=""
                    xl="5"
                    className="mb-4 all-post-card social-auth"
                  >
                    <MDBAnimation type="fadeInRight" delay=".3s">
                      <MDBCard
                        id="classic-card "
                        style={{
                          padding: 20,
                          width: 660,
                          height: 570,
                          marginTop: 20,
                        }}
                      >
                        <MDBCardBody className="white-text social-body">
                          <div>
                            <h3 id="social-h3" className="white-text">
                              Sign up with :
                            </h3>
                            <div className="row Fmy-3 auth-buttons ">
                              <MDBBtn
                                type="button"
                                color="blue"
                                className="mr-md-3 z-depth-1a white-text font-weight-bold"
                                style={{
                                  marginTop: 20,
                                  width: 250,
                                  height: 50,
                                }}
                              >
                                <MDBIcon
                                  fab
                                  icon="facebook-f"
                                  className=" white-text text-center font-weight-bold"
                                />
                                &nbsp; &nbsp; Facebook
                              </MDBBtn>
                              <MDBBtn
                                type="button"
                                color="danger"
                                className="mr-md-3 z-depth-1a white-text font-weight-bold"
                                style={{
                                  marginTop: 20,
                                  width: 250,
                                  height: 50,
                                }}
                              >
                                <MDBIcon
                                  fab
                                  icon="google-plus-g"
                                  className=" white-text font-weight-bold"
                                />
                                &nbsp; &nbsp; Google+
                              </MDBBtn>

                              <MDBBtn
                                type="button"
                                color="black"
                                className="mr-md-3 z-depth-1a white-text font-weight-bold"
                                style={{
                                  marginTop: 20,
                                  width: 250,
                                  height: 50,
                                }}
                              >
                                <MDBIcon
                                  fab
                                  icon="github"
                                  className=" white-text font-weight-bold"
                                />
                                &nbsp; &nbsp; Github
                              </MDBBtn>
                            </div>
                            <div className="field-button">
                              <MDBBtn
                                color="warning"
                                style={{ fontSize: 14 }}
                                className="font-weight-bold black-text btn-md"
                                onClick={this.handleClickFields}
                                size="lg"
                              >
                                Sign Up &nbsp;
                                <MDBIcon icon="share" />
                              </MDBBtn>
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                ) : this.state.accountStep === "Fill the fields" &&
                  this.state.role === "Client" ? (
                  <MDBCol md="" xl="5" className="mb-4 all-post-card">
                    <MDBAnimation type="fadeInRight" delay=".3s">
                      <MDBCard
                        id="classic-card"
                        style={{
                          padding: 20,
                          width: 660,
                          height: 570,
                          marginTop: 20,
                        }}
                      >
                        <MDBCardBody className="white-text">
                          <h3 className=" text-center add-title font-weight-bold">
                            <MDBIcon icon="user-edit" />
                            &nbsp; Your Information
                          </h3>
                          <hr className="hr-light" />
                          <form class="needs-validation" novalidate>
                            <div class="form-row">
                              <TextFieldGroup
                                divClassName="col-md-4 mb-9"
                                icon="id-card"
                                name="fname"
                                placeholder="First name"
                                value={this.state.fname}
                                label="First name"
                                error={errors.fname}
                                type="text"
                                onChange={this.changeHandler}
                                id="validationTooltip01"
                                labelFor="validationTooltip01"
                                className=" text-field "
                              />
                              <TextFieldGroup
                                divClassName="col-md-4 mb-4"
                                icon="id-card"
                                name="lname"
                                placeholder="Last name"
                                value={this.state.lname}
                                label="Last name"
                                error={errors.lname}
                                type="text"
                                onChange={this.changeHandler}
                                id="validationTooltip02"
                                labelFor="validationTooltip02"
                              />
                            </div>
                            <div class="form-row">
                              <TextFieldGroup
                                divClassName="col-md-4 mb-4 text-field"
                                icon="envelope"
                                name="email"
                                placeholder="Email adress"
                                value={this.state.email}
                                label="Email"
                                error={errors.email}
                                type="email"
                                onChange={this.changeHandler}
                                id="validationTooltip03"
                                labelFor="validationTooltip03"
                              />
                              <TextFieldGroup
                                divClassName="col-md-4 mb-4 text-field"
                                icon="envelope"
                                name="confirmEmail"
                                placeholder="confirm your email"
                                value={this.state.confirmEmail}
                                label="Confirm email"
                                error={this.state.errors.confirmEmail}
                                type="email"
                                onChange={this.changeHandler}
                                id="validationTooltip04"
                                labelFor="validationTooltip04"
                              />
                            </div>
                            <div class="form-row">
                              <TextFieldGroup
                                divClassName="col-md-4 mb-4 text-field"
                                icon="user-lock"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                label="Password"
                                error={errors.password}
                                type="password"
                                onChange={this.changeHandler}
                                id="validationTooltip05"
                                labelFor="validationTooltip05"
                              />
                              <TextFieldGroup
                                divClassName="col-md-4 mb-4 text-field"
                                icon="user-lock"
                                name="confirmPassword"
                                placeholder="Confirrm password"
                                value={this.state.confirmPassword}
                                label="Confirm password"
                                error={errors.confirmPassword}
                                type="password"
                                onChange={this.changeHandler}
                                id="validationTooltip06"
                                labelFor="validationTooltip06"
                              />
                            </div>
                            <div className="custom-control custom-checkbox pl-3 d-flex">
                              <input
                                className="custom-control-input"
                                type="checkbox"
                                id="invalidCheck"
                                onChange={this.onAgree}
                                required
                                checked={this.state.agree}
                                error={errors.agree}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="invalidCheck"
                                style={{ fontSize: 15, width: 200 }}
                              >
                                Agree to
                              </label>
                              <a
                                className="terms"
                                onClick={this.toggle}
                                style={{
                                  color: "green",
                                  fontWeight: "bold",
                                  fontSize: 17,
                                  textDecoration: "underline",
                                }}
                              >
                                terms and conditions
                              </a>
                              <div
                                className="invalid-feedback"
                                style={{ fontSize: 15, fontWeight: "bold" }}
                              >
                                You must agree before submitting.
                              </div>
                            </div>

                            <div className=" choose-account text-center mt-4 black-text">
                              <MDBBtn
                                className=" font-weight-bold  btn-md"
                                color="warning"
                                style={{ fontSize: 14 }}
                                onClick={this.handleClickClient}
                              >
                                <MDBIcon icon="reply" size="lg" />
                                &nbsp; &nbsp; Social Account
                              </MDBBtn>
                              <MDBBtn
                                type="submit"
                                className=" font-weight-bold  btn-md"
                                color="deep-orange"
                                style={{ fontSize: 14 }}
                                onClick={this.onSubmit}
                              >
                                Register &nbsp; &nbsp;
                                <MDBIcon icon="save" size="lg" />
                              </MDBBtn>
                            </div>
                          </form>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                ) : this.state.accountStep === "Fill the fields" &&
                  this.state.role === "Agency" ? (
                  <MDBCol md="" xl="5" className="mb-4 all-post-card">
                    <MDBAnimation type="fadeInRight" delay=".3s">
                      <MDBCard
                        id="classic-card"
                        style={{
                          padding: 20,
                          width: 660,
                          height: 570,
                          marginTop: 20,
                        }}
                      >
                        <MDBCardBody className="white-text">
                          <h3 className=" text-center add-title font-weight-bold">
                            <MDBIcon icon="clipboard-list" />
                            &nbsp; Agency Information
                          </h3>
                          <hr className="hr-light" />
                          <form class="needs-validation" novalidate>
                            <div class="form-row">
                              <TextFieldGroup
                                divClassName="col-md-4 mb-9"
                                icon="id-card"
                                name="name"
                                placeholder="Agency name"
                                value={this.state.name}
                                label="Agency name"
                                error={errors.name}
                                type="text"
                                onChange={this.changeHandler}
                                id="validationTooltip01"
                                labelFor="validationTooltip01"
                                className=" text-field "
                              />                          
                            </div>
                            <div class="form-row">
                              <TextFieldGroup
                                divClassName="col-md-4 mb-4 text-field"
                                icon="envelope"
                                name="email"
                                placeholder="Email adress"
                                value={this.state.email}
                                label="Agency email"
                                error={errors.email}
                                type="email"
                                onChange={this.changeHandler}
                                id="validationTooltip03"
                                labelFor="validationTooltip03"
                              />
                              <TextFieldGroup
                                divClassName="col-md-4 mb-4 text-field"
                                icon="envelope"
                                name="confirmEmail"
                                placeholder="confirm your email"
                                value={this.state.confirmEmail}
                                label="Confirm email"
                                error={this.state.errors.confirmEmail}
                                type="email"
                                onChange={this.changeHandler}
                                id="validationTooltip04"
                                labelFor="validationTooltip04"
                              />
                            </div>
                            <div class="form-row">
                              <TextFieldGroup
                                divClassName="col-md-4 mb-4 text-field"
                                icon="user-lock"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                label="Password"
                                error={errors.password}
                                type="password"
                                onChange={this.changeHandler}
                                id="validationTooltip05"
                                labelFor="validationTooltip05"
                              />
                              <TextFieldGroup
                                divClassName="col-md-4 mb-4 text-field"
                                icon="user-lock"
                                name="confirmPassword"
                                placeholder="Confirrm password"
                                value={this.state.confirmPassword}
                                label="Confirm password"
                                error={errors.confirmPassword}
                                type="password"
                                onChange={this.changeHandler}
                                id="validationTooltip06"
                                labelFor="validationTooltip06"
                              />
                            </div>
                            <div className="custom-control custom-checkbox pl-3 d-flex">
                              <input
                                className="custom-control-input"
                                type="checkbox"
                                id="invalidCheck"
                                onChange={this.onAgree}
                                required
                                checked={this.state.agree}
                                error={errors.agree}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="invalidCheck"
                                style={{ fontSize: 15, width: 200 }}
                              >
                                Agree to
                              </label>
                              <a
                                className="terms"
                                onClick={this.toggle}
                                style={{
                                  color: "green",
                                  fontWeight: "bold",
                                  fontSize: 17,
                                  textDecoration: "underline",
                                }}
                              >
                                terms and conditions
                              </a>
                              <div
                                className="invalid-feedback"
                                style={{ fontSize: 15, fontWeight: "bold" }}
                              >
                                You must agree before submitting.
                              </div>
                            </div>

                            <div className=" choose-account text-center mt-4 black-text">
                              <MDBBtn
                                className=" font-weight-bold  btn-md"
                                color="warning"
                                style={{ fontSize: 14 }}
                                onClick={this.handleClickAgency}
                              >
                                <MDBIcon icon="reply" size="lg" />
                                &nbsp; &nbsp; Social Account
                              </MDBBtn>
                              <MDBBtn
                                type="submit"
                                className=" font-weight-bold  btn-md"
                                color="deep-orange"
                                style={{ fontSize: 14 }}
                                onClick={this.onSubmit}
                              >
                                Register &nbsp; &nbsp;
                                <MDBIcon icon="save" size="lg" />
                              </MDBBtn>
                            </div>
                          </form>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                ) : (
                  <MDBCol
                    md=""
                    xl="5"
                    className="mb-4 all-post-card social-auth"
                  >
                    <MDBAnimation type="fadeInRight" delay=".3s">
                      <MDBCardBody className="white-text social-body">
                        <h1 className="white-text">
                          Choose the type of your account please on the left
                          side
                          <br />
                          <MDBIcon
                            style={{ marginTop: 20 }}
                            size="lg"
                            icon="arrow-alt-circle-left"
                          />
                        </h1>
                      </MDBCardBody>
                    </MDBAnimation>
                  </MDBCol>
                )}
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(SignUp));
