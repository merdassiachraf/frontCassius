import React, { Component } from "react";
import {Link} from "react-router-dom"

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
  MDBCardBody
} from "mdbreact";

class Login extends Component {
  render() {
    return (
      <div id="classicformpage">
        <MDBView src="https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow className="black-text">
                <MDBCol md="6">
                  <MDBCard
                    className="login-card"
                    style={{ width: 400 , height:550, background: "white" }}
                  >
                    <MDBCardBody className="mx-4">
                      <div className="text-center">
                        <h3 className="dark-grey-text mb-5">
                          <strong>Sign in</strong>
                        </h3>
                      </div>
                      <MDBInput
                        label="Your email"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        className="black-text"
                        icon="envelope"
                      />
                      <MDBInput
                        label="Your password"
                        group
                        type="password"
                        validate
                        containerClass="mb-0"
                        icon="unlock-alt"
                      />
                      <p className="font-small blue-text d-flex justify-content-end pb-3">
                        Forgot
                        <a href="#!" className="blue-text ml-1">
                          Password?
                        </a>
                      </p>
                      <div className="text-center mb-3">
                        <MDBBtn
                          type="button"
                          gradient="aqua"
                          rounded
                          className="btn-block z-depth-1a "
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
                          style={{ width: 55,marginLeft:15 }}
                        >
                          <MDBIcon fab icon="github" className="black-text" />
                        </MDBBtn>
                      </div>
                    </MDBCardBody>
                    <MDBModalFooter className="mx-5 pt-3 mb-1">
                      <p className="font-small grey-text d-flex justify-content-end">
                        Not a member?
                        <Link to="/signup">
                        <a href="#!" className="blue-text ml-1">
                          Sign Up 
                        </a></Link>
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
