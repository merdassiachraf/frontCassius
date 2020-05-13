import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Input } from "antd";

import { loginUser } from "../../actions/authActions";

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBModalFooter,
  MDBCardBody,
} from "mdbreact";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    e.target.className += " was-validated";
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email.toLowerCase(),
      password: this.state.password,
    };
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <div id="classicformpage">
        <MDBView src="https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow className="black-text">
                <MDBCol md="6">
                  <MDBCard
                    className="login-card"
                    style={{ width: 400, height: 560, background: "white" }}
                  >
                    <MDBCardBody className="loginBody">
                      <div className="text-center">
                        <h3 className="dark-grey-text">
                          <strong>Sign in</strong>
                        </h3>
                      </div>
                      <form class="needs-validation login-fields" novalidate>
                        <div class="login-field">
                          <label>
                            <MDBIcon icon="envelope" />
                            &nbsp;Email
                          </label>
                          <Input
                            style={{ width: 300 }}
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            error={errors.email}
                            type="email"
                            onChange={this.changeHandler}
                            className="login-input"
                          />
                          {errors.email ? (
                                  <p className="agree-errors">{errors.email}</p>
                                ) : null}
                        </div>
                        <div className="login-field">
                          <label>
                            <MDBIcon icon="key" />
                            &nbsp;Password
                          </label>

                          <Input.Password
                            style={{ width: 300 }}
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            error={errors.password}
                            type="password"
                            onChange={this.changeHandler}
                            className="password-input"
                          />
                          {errors.password ? (
                                  <p className="agree-errors">{errors.password}</p>
                                ) : null}
                        </div>
                        <p className="font-small blue-text d-flex justify-content-end pb-3">
                          Forgot
                          <a href="#!" className="blue-text ml-1">
                            Password?
                          </a>
                        </p>
                        <div className="text-center mb-3">
                          <MDBBtn
                            type="submit"
                            className=" font-weight-bold btn-block z-depth-1a  btn-md"
                            gradient="aqua"
                            rounded
                            style={{ fontSize: 14 }}
                            onClick={this.onSubmit}
                          >
                            Sign in&nbsp;&nbsp; <MDBIcon icon="paper-plane" />
                          </MDBBtn>
                        </div>
                        <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                          or Sign in with:
                        </p>
                        <div className="row my-3 d-flex justify-content-center">
                          <MDBBtn
                            type="button"
                            color="blue"
                            outline
                            className="mr-md-3 z-depth-1a"
                            style={{ width: 45, height: 45 }}
                          >
                            <MDBIcon
                              fab
                              icon="facebook-f"
                              className="blue-text text-center"
                            />
                          </MDBBtn>
                          <MDBBtn
                            type="button"
                            color="danger"
                            outline
                            className="z-depth-1a"
                            style={{ width: 45, height: 45 }}
                          >
                            <MDBIcon
                              fab
                              icon="google-plus-g"
                              className="text-danger"
                            />
                          </MDBBtn>

                          <MDBBtn
                            type="button"
                            color="black"
                            outline
                            className="z-depth-1a"
                            style={{ width: 45, height: 45, marginLeft: 15 }}
                          >
                            <MDBIcon fab icon="github" className="black-text" />
                          </MDBBtn>
                        </div>
                      </form>
                    </MDBCardBody>
                    <MDBModalFooter className="mx-5 pt-3 mb-1">
                      <p className="font-small grey-text d-flex justify-content-end">
                        Not a member?
                        <Link to="/signup">
                          <a href="#!" className="blue-text ml-1">
                            Sign Up
                          </a>
                        </Link>
                      </p>
                    </MDBModalFooter>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
