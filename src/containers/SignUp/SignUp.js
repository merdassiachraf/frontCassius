import React, { Component } from "react";
import axios from "axios";

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
} from "mdbreact";

class AddPost extends Component {
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
    this.changeHandler = this.changeHandler.bind(this);
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
    });
  };

  handleClickFields = () => {
    this.setState({
      accountStep: "Fill the fields",
    });
  };

  onAgree = (e) => {
    this.setState({ agree: !this.state.agree });
  };

  submitHandler = (e) => {
    e.preventDefault();
    e.target.className += " was-validated";
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAlert = () => {
    return(
    this.state.fname === "" && this.state.role === "Client"
      ? alert("First name required")
      : this.state.lname === "" && this.state.role === "Client"
      ? alert("Last name required")
      : this.state.name === "" && this.state.role === "Agency"
      ? alert("Agency name required")
      : !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)
      ? alert("Invalid Email")
      : this.state.password.length < 8
      ? alert("Password min length is 8 caracters")
      : this.state.email != this.state.confirmEmail
      ? alert("Emails not match")
      : this.state.password != this.state.confirmPassword
      ? alert("Passwords not match")
      : null)
  };

  onSubmit = (e) => {
    this.onAlert();
    if (
      this.state.agree === true &&
      this.state.password === this.state.confirmPassword &&
      this.state.email === this.state.confirmEmail &&
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email) &&
      this.state.password.length >= 8
    ) {
      if (
        this.state.role === "Client" &&
        this.state.fname != "" &&
        this.state.lname != ""
      ) {
        const user = {
          name: this.state.lname.toUpperCase(),
          email: this.state.email.toLowerCase(),
          confirmEmail: this.state.confirmEmail,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
          role: this.state.role,
        };
        console.log(user);
      }
      if (this.state.role === "Agency" && this.state.name != "") {
        const user = {
          name: this.state.name.toUpperCase(),
          email: this.state.email.toLowerCase(),
          confirmEmail: this.state.confirmEmail,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
          role: this.state.role,
        };
        console.log(user);
      }
    }
  };
  // onSubmit = (e) => {
  //   axios
  //     .post("/users/signup", newUser)
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err.response.data));
  // };

  render() {
    console.log(
      this.state.name,
      this.state.fname,
      this.state.lname,
      this.state.confirmEmail,
      this.state.email,
      this.state.password,
      this.state.confirmPassword
    );
    return (
      <div id="classicformpage">
        <MDBView src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
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
                          <h4 className="white-text">Sign up with :</h4>
                          <div className="row Fmy-3 auth-buttons ">
                            <MDBBtn
                              type="button"
                              color="blue"
                              className="mr-md-3 z-depth-1a white-text"
                              style={{ width: 250, height: 50 }}
                            >
                              <MDBIcon
                                fab
                                icon="facebook-f"
                                className=" white-text text-center"
                              />
                              &nbsp; &nbsp; Facebook
                            </MDBBtn>
                            <MDBBtn
                              type="button"
                              color="danger"
                              className="z-depth-1a white-text"
                              style={{ width: 250, height: 50 }}
                            >
                              <MDBIcon
                                fab
                                icon="google-plus-g"
                                className=" white-text "
                              />
                              &nbsp; &nbsp; Google+
                            </MDBBtn>

                            <MDBBtn
                              type="button"
                              color="black"
                              className="z-depth-1a white-text"
                              style={{ width: 250, height: 50 }}
                            >
                              <MDBIcon
                                fab
                                icon="github"
                                className=" white-text"
                              />
                              &nbsp; &nbsp; Github
                            </MDBBtn>
                          </div>
                          <div className="field-button">
                            <MDBBtn
                              className="font-weight-bold black-text"
                              onClick={this.handleClickFields}
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
                          <form
                            className="needs-validation"
                            onSubmit={this.submitHandler}
                            noValidate
                          >
                            <MDBRow>
                              <MDBCol md="4" className="mb-3">
                                <MDBInput
                                  icon="user"
                                  label="First name"
                                  value={this.state.fname}
                                  name="fname"
                                  onChange={this.changeHandler}
                                  type="text"
                                  id="defaultFormRegisterNameEx"
                                  className="form-control white-text"
                                  required
                                />
                              </MDBCol>
                              <MDBCol md="4" className="mb-3">
                                <MDBInput
                                  icon="user"
                                  label="Last name"
                                  value={this.state.lname}
                                  name="lname"
                                  onChange={this.changeHandler}
                                  type="text"
                                  id="defaultFormRegisterEmailEx2"
                                  className="form-control white-text"
                                  required
                                />
                              </MDBCol>
                              <MDBCol md="4" className="mb-3">
                                <MDBInput
                                  icon="envelope"
                                  label="Email"
                                  value={this.state.email}
                                  onChange={this.changeHandler}
                                  type="email"
                                  id="defaultFormRegisterConfirmEx3"
                                  className="form-control white-text"
                                  name="email"
                                  required
                                />
                                <small
                                  id="emailHelp"
                                  className="form-text white-text"
                                  style={{ fontSize: 11 }}
                                >
                                  We'll never share your email with anyone else.
                                </small>
                              </MDBCol>
                            </MDBRow>
                            <MDBRow>
                              <MDBCol md="4" className="mb-3">
                                <MDBInput
                                  icon="envelope"
                                  label="Confirm email"
                                  value={this.state.confirmEmail}
                                  onChange={this.changeHandler}
                                  type="email"
                                  id="defaultFormRegisterPasswordEx4"
                                  className="form-control white-text"
                                  name="confirmEmail"
                                  required
                                />
                              </MDBCol>
                              <MDBCol md="4" className="mb-3">
                                <MDBInput
                                  value={this.state.password}
                                  label="password"
                                  icon="unlock-alt"
                                  onChange={this.changeHandler}
                                  type="password"
                                  id="defaultFormRegisterPasswordEx5"
                                  className="form-control white-text"
                                  name="password"
                                  required
                                />
                              </MDBCol>
                              <MDBCol md="4" className="mb-3">
                                <MDBInput
                                  value={this.state.confirmPassword}
                                  icon="unlock-alt"
                                  label="Confirm password"
                                  onChange={this.changeHandler}
                                  type="password"
                                  id="defaultFormRegisterPasswordEx6"
                                  className="form-control white-text"
                                  name="confirmPassword"
                                  required
                                />
                              </MDBCol>
                            </MDBRow>
                            <MDBCol md="4" className="mb-3">
                              <div className="custom-control custom-checkbox pl-3">
                                <input
                                  className="custom-control-input"
                                  type="checkbox"
                                  value=""
                                  id="invalidCheck"
                                  onChange={this.onAgree}
                                  required
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="invalidCheck"
                                  style={{ fontSize: 15 }}
                                >
                                  Agree to terms and conditions
                                </label>
                                <div
                                  className="invalid-feedback"
                                  style={{ fontSize: 15 }}
                                >
                                  You must agree before submitting.
                                </div>
                              </div>
                            </MDBCol>
                            <div className=" choose-account text-center mt-4 black-text">
                              <MDBBtn
                                className=" font-weight-bold  btn-md"
                                color="warning"
                                style={{ fontSize: 14 }}
                                onClick={
                                  this.state.role === "Client"
                                    ? this.handleClickClient
                                    : this.handleClickAgency
                                }
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
                          <form
                            className="needs-validation"
                            onSubmit={this.submitHandler}
                            noValidate
                          >
                            <MDBRow>
                              <MDBCol md="4" className="mb-3">
                                <MDBInput
                                  icon="chess-rook"
                                  label="Agency name"
                                  value={this.state.name}
                                  name="name"
                                  onChange={this.changeHandler}
                                  type="text"
                                  id="defaultFormRegisterEmailEx"
                                  className="form-control white-text"
                                  required
                                />
                              </MDBCol>
                              <MDBCol md="4" className="mb-3">
                                <MDBInput
                                  icon="envelope"
                                  label="Email"
                                  value={this.state.email}
                                  onChange={this.changeHandler}
                                  type="email"
                                  id="defaultFormRegisterConfirmEx2"
                                  className="form-control white-text"
                                  name="email"
                                  required
                                />
                                <small
                                  id="emailHelp"
                                  className="form-text white-text"
                                  style={{ fontSize: 11 }}
                                >
                                  We'll never share your email with anyone else.
                                </small>
                              </MDBCol>
                              <MDBCol md="4" className="mb-3">
                                <MDBInput
                                  icon="envelope"
                                  label="Confirm email"
                                  value={this.state.confirmEmail}
                                  onChange={this.changeHandler}
                                  type="email"
                                  id="defaultFormRegisterPasswordEx3"
                                  className="form-control white-text"
                                  name="confirmEmail"
                                  required
                                />
                              </MDBCol>
                            </MDBRow>
                            <MDBRow>
                              <MDBCol md="4" className="mb-3">
                                <MDBInput
                                  label="password"
                                  icon="unlock-alt"
                                  value={this.state.password}
                                  onChange={this.changeHandler}
                                  type="password"
                                  id="defaultFormRegisterPasswordEx5"
                                  className="form-control white-text"
                                  name="password"
                                  required
                                />
                              </MDBCol>
                              <MDBCol md="4" className="mb-3">
                                <MDBInput
                                  icon="unlock-alt"
                                  label="Confirm password"
                                  value={this.state.confirmPassword}
                                  onChange={this.changeHandler}
                                  type="password"
                                  id="defaultFormRegisterPasswordEx6"
                                  className="form-control white-text"
                                  name="confirmPassword"
                                  required
                                />
                              </MDBCol>
                            </MDBRow>
                            <MDBCol md="4" className="mb-3">
                              <div className="custom-control custom-checkbox pl-3">
                                <input
                                  className="custom-control-input"
                                  type="checkbox"
                                  value=""
                                  id="invalidCheck"
                                  onChange={this.onAgree}
                                  required
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="invalidCheck"
                                  style={{ fontSize: 15 }}
                                >
                                  Agree to terms and conditions
                                </label>
                                <div
                                  className="invalid-feedback"
                                  style={{ fontSize: 15 }}
                                >
                                  You must agree before submitting.
                                </div>
                              </div>
                            </MDBCol>
                            <div className=" choose-account text-center mt-4 black-text">
                              <MDBBtn
                                className=" font-weight-bold  btn-md"
                                color="warning"
                                style={{ fontSize: 14 }}
                                onClick={
                                  this.state.role === "Client"
                                    ? this.handleClickClient
                                    : this.handleClickAgency
                                }
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
export default AddPost;
