import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { registerUser } from "../../actions/authActions";

import TextFieldGroup from "../Common/TextFieldGroup";

import { Input } from "antd";

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBCard,
  MDBCardBody,
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
      success: {},
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
      errors: {},
      success: {},
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
      agree: false,
      errors: {},
      success: {},
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

  handleClickFields = () => {
    this.setState({
      accountStep: "Fill the fields",
    });
  };

  onAgree = () => {
    this.toggle();
    this.setState({ agree: true });
  };

  submitHandler = (e) => {
    e.preventDefault();
    e.target.className += " was-validated";
  };

  onChange = (e) => {
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
        agree: this.state.agree.toString(),
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
      agree: this.state.agree.toString(),
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    console.log(this.state.agree);

    const { errors, success } = this.state;
    return (
      <div id="classicformpage">
        <MDBView src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg">
          <MDBMask className="d-flex align-items-center gradient">
            <MDBRow className="d-flex align-items-center mr-5">
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
                  <MDBBtn color="success" onClick={this.onAgree}>
                    Agree&nbsp;
                    <MDBIcon icon="check" />
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModal>
              
              <MDBCol className="ml-5">
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 ml-5"
                >
                  <h1 className="h1-responsive font-weight-bold white-text  ">
                    Create your account for free
                  </h1>
                  <hr className="hr-light white-text" />
                  <div className="d-flex align-items-center mt-4">
                    <MDBBtn
                      size="lg"
                      disabled={this.state.clientButton}
                      color="warning"
                      className="black-text font-weight-bold d-flex align-items-center"
                      onClick={this.handleClickClient}
                    >
                      Client&nbsp;&nbsp;
                      <MDBIcon icon="user" />
                    </MDBBtn>
                    <MDBBtn
                      size="lg"
                      disabled={this.state.agencyButton}
                      color="success"
                      className="black-text font-weight-bold d-flex align-items-center"
                      onClick={this.handleClickAgency}
                    >
                      Agency&nbsp;&nbsp;
                      <MDBIcon icon="building" />
                    </MDBBtn>
                  </div>
                </MDBAnimation>
              </MDBCol>
              {this.state.accountStep === "Social" &&
              (this.state.role === "Client" || this.state.role === "Agency") ? (
                <MDBCol md="" xl="5" className="mt-4 mr-5">
                  <MDBAnimation type="fadeInRight" delay=".3s" className="mr-5">
                    <MDBCard
                
                      id="classic-card "
                      style={{
                        padding: 20,
                        width: 660,
                        height: 570,
                        marginTop: "10px",
                      }}
                    >
                      <MDBCardBody className="white-text d-flex flex-column align-items-center">
                        <h3 className="white-text">Sign up with :</h3>
                        <div className="d-flex flex-column mt-5 mb-5">
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
                        <div className="">
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
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              ) : this.state.accountStep === "Fill the fields" &&
                this.state.role === "Client" ? (
                <MDBCol md="" xl="5" className="mt-4 mr-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard
                      id="classic-card "
                      style={{
                        padding: 20,
                        width: 660,
                        height: 570,
                        marginTop: "10px",
                      }}
                    >
                      <MDBCardBody className="white-text d-flex flex-column align-items-center">
                        <h3 className=" text-center font-weight-bold">
                          <MDBIcon icon="user-edit" />
                          &nbsp; Your Information
                        </h3>
                        <hr className="hr-light" />
                        <form onSubmit={this.onSubmit}>
                          <div className="d-flex flex-wrap justify-content-between ">
                            <TextFieldGroup
                              size="large"
                              name="fname"
                              icon="user"
                              placeholder="First name"
                              value={this.state.fname}
                              label="First name :"
                              error={errors.fname}
                              type="text"
                              onChange={this.onChange}
                            />
                            <TextFieldGroup
                              size="large"
                              name="lname"
                              icon="user"
                              placeholder="Last name"
                              value={this.state.lname}
                              label="Last name :"
                              error={errors.lname}
                              type="text"
                              onChange={this.onChange}
                            />

                            <TextFieldGroup
                              size="large"
                              name="email"
                              icon="envelope-open"
                              placeholder="Your email"
                              value={this.state.email}
                              label="E-mail :"
                              error={errors.email}
                              type="email"
                              onChange={this.onChange}
                            />
                            <TextFieldGroup
                              size="large"
                              name="confirmEmail"
                              icon="envelope-open"
                              placeholder="Confirm your email"
                              value={this.state.confirmEmail}
                              label="Confrm E-mail :"
                              error={errors.confirmEmail}
                              type="email"
                              onChange={this.onChange}
                            />

                            <TextFieldGroup
                              size="large"
                              name="password"
                              icon="user-lock"
                              placeholder="Password"
                              value={this.state.password}
                              label="Password :"
                              error={errors.password}
                              type="password"
                              onChange={this.onChange}
                            />
                            <TextFieldGroup
                              size="large"
                              name="confirmPassword"
                              icon="user-lock"
                              placeholder="Confirm password"
                              value={this.state.confirmPassword}
                              label="Confirm password :"
                              error={errors.confirmPassword}
                              type="password"
                              onChange={this.onChange}
                            />
                            <div className="d-flex align-items-start ml-3 mt-3">
                              <input
                              className="mr-3"
                                type="checkbox"
                                onChange={this.onAgree}
                                checked={this.state.agree}
                                error={errors.agree}
                              />
                              <label
                             
                                style={{ fontSize: 15, width: 200 }}
                              >
                                Agree to&nbsp;
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
                              </label>
                            </div>
                          </div>
                          <div
                            className=" text-center black-text d-flex justify-content-between mt-5"
                            style={{ marginTop: 4 }}
                          >
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
                  <MDBCol md="" xl="5" className="mt-4 mr-5 ">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard
                      id="classic-card "
                      style={{
                        padding: 20,
                        width: 660,
                        height: 570,
                        marginTop: "10px",
                      }}
                    >
                      <MDBCardBody className="white-text d-flex flex-column ">
                        <h3 className=" text-center font-weight-bold">
                          <MDBIcon icon="building" />
                          &nbsp; Agency Information
                        </h3>
                        <hr className="hr-light" />
                        <form
                          className="needs-validation d-flex flex-wrap justify-content-between align-items-center"
                          novalidate
                        >
                          <TextFieldGroup
                            size="large"
                            name="name"
                            icon="city"
                            placeholder="Agency name"
                            value={this.state.name}
                            label="Agency name :"
                            error={errors.name}
                            type="text"
                            onChange={this.onChange}
                          />

                          <TextFieldGroup
                            size="large"
                            name="email"
                            icon="envelope-open"
                            placeholder="Agency email"
                            value={this.state.email}
                            label="E-mail :"
                            error={errors.email}
                            type="email"
                            onChange={this.onChange}
                          />
                          <TextFieldGroup
                            size="large"
                            name="confirmEmail"
                            icon="envelope-open"
                            placeholder="Confirm Agency email"
                            value={this.state.confirmEmail}
                            label="Confrm E-mail :"
                            error={errors.confirmEmail}
                            type="email"
                            onChange={this.onChange}
                          />
                          <TextFieldGroup
                            size="large"
                            name="password"
                            icon="user-lock"
                            placeholder="Password"
                            value={this.state.password}
                            label="Password :"
                            error={errors.password}
                            type="password"
                            onChange={this.onChange}
                          />
                          <TextFieldGroup
                            size="large"
                            name="confirmPassword"
                            icon="user-lock"
                            placeholder="Confirm password"
                            value={this.state.confirmPassword}
                            label="Confirm password :"
                            error={errors.confirmPassword}
                            type="password"
                            onChange={this.onChange}
                          />
                              <div className="d-flex align-items-start ml-3 mt-3">
                              <input
                              className="mr-3"
                                type="checkbox"
                                onChange={this.onAgree}
                                checked={this.state.agree}
                                error={errors.agree}
                              />
                              <label
                             
                                style={{ fontSize: 15, width: 200 }}
                              >
                                Agree to&nbsp;
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
                              </label>
                            </div>
                          <div className="d-flex justify-content-between black-text mt-4">
                            <MDBBtn
                              className=" font-weight-bold  mr-5"
                              size="lg"
                              color="warning"
                              style={{ fontSize: 14 }}
                              onClick={this.handleClickClient}
                            >
                              <MDBIcon icon="reply" size="lg" />
                              &nbsp; &nbsp; Social Account
                            </MDBBtn>
                            <MDBBtn
                              type="submit"
                              className=" font-weight-bold ml-5"
                              size="lg"
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
                <MDBCol md="" xl="5" className="mb-4 mr-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCardBody className="white-text ">
                      <h1 className="white-text">
                        Choose the type of your account please on the left side
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
  success: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  success: state.success,
});

export default connect(mapStateToProps, { registerUser })(withRouter(SignUp));
