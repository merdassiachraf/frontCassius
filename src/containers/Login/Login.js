import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBInput,
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
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    e.target.className += " was-validated";
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    if (
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email) &&
      this.state.password.length >= 8
    ) {
      const user = {
        email: this.state.email.toLowerCase(),
        password: this.state.password,
      };
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email))
      alert("Invalid Email");
    else if (this.state.password.length < 8) alert("Min 8 caracters");
  };

  render() {
    console.log(this.state.password, "password", this.state.email, "Email");
    return (
      <div id="classicformpage">
        <MDBView src="https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow className="black-text">
                <MDBCol md="6">
                  <MDBCard
                    className="login-card"
                    style={{ width: 400, height: 550, background: "white" }}
                  >
                    <MDBCardBody className="mx-4">
                      <div className="text-center">
                        <h3 className="dark-grey-text mb-5">
                          <strong>Sign in</strong>
                        </h3>
                      </div>
                      <form
                        className="needs-validation black-text"
                        onSubmit={this.submitHandler}
                        noValidate
                      >
                        <MDBInput
                          labelClass="black-text"
                          icon="envelope"
                          label="Email"
                          value={this.state.email}
                          onChange={this.changeHandler}
                          type="email"
                          id="defaultFormRegisterConfirmEx2"
                          className="form-control black-text"
                          name="email"
                          required
                        />
                        <MDBInput
                          label="key"
                          icon="unlock-alt"
                          value={this.state.password}
                          onChange={this.changeHandler}
                          type="password"
                          id="defaultFormRegisterPasswordEx5"
                          className="form-control "
                          name="password"
                          required
                        />

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
                            style={{ width: 55 }}
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
                            style={{ width: 55 }}
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
                            style={{ width: 55, marginLeft: 15 }}
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
export default Login;
