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
      newClient: {
        clientPicture: "",
        clientAdress: "",
        clientState: "",
        clientCountry: "",
        clientCountryCode: "",
        clientPhoneNumber: 0,
        clientName: "",
        clientEmail: "",
        clientConfirmEmail: "",
        clientPassword: "",
        clientConfirmPassword: "",
      },
      account: "",
      newAgency: {
        agencyPicture: "",
        agencyAdress: "",
        agencyState: "",
        agencyCountry: "",
        agencyCountryCode: "",
        agencyPhoneNumber: 0,
        agencyName: "",
        agencyEmail: "",
        agencyConfirmEmail: "",
        agencyPassword: "",
        agencyConfirmPassword: "",
      },
      agencyActive: false,
      clientActive: false,
      normalAccountAgency: false,
      socialAccountAgency: true,
      normalAccountClient: false,
      socialAccountClient: true,
    };
  }
  handleClickClient = () => {
    this.handleClickSocialAgency();
    this.setState({
      clientActive: true,
      account: "Client",
      agencyActive: false,
    });
  };
  handleClickAgency = () => {
    this.handleClickSocialClient();
    this.setState({
      agencyActive: true,
      account: "Agency",
      clientActive: false,
    });
  };
  handleClickNormalAgency = () => {
    this.setState({
      normalAccountAgency: true,
      socialAccountAgency: false,
      normalAccountClient: false,
      socialAccountClient: true,
    });
  };
  handleClickSocialAgency = () => {
    this.setState({
      normalAccountAgency: false,
      socialAccountAgency: true,
      normalAccountClient: false,
      socialAccountClient: true,
    });
  };
  handleClickNormalClient = () => {
    this.setState({
      normalAccountAgency: false,
      socialAccountAgency: true,
      normalAccountClient: true,
      socialAccountClient: false,
    });
  };
  handleClickSocialClient = () => {
    this.setState({
      normalAccountAgency: false,
      socialAccountAgency: true,
      normalAccountClient: false,
      socialAccountClient: true,
    });
  };
  handleClientAlert = () => {
    if (this.state.clientPicture === "") return alert("");
    if (this.state.clientAdress === "") return alert("Must put ");
    if (this.state.clientState === "")
      return alert("ou indicate the state where you live");
    if (this.state.clientCountry === "") return alert("");
    if (this.state.clientCountryCode === "") return alert("");
    if (this.state.clientPhoneNumber === 0) return alert("");
    if (this.state.clientName === "") return alert("");
    if (this.state.clientEmail === "") return alert("");
    if (this.state.clientConfirmEmail === this.state.clientEmail)
      return alert("");
    if (this.state.clientPassword === "") return alert("");
    if (this.state.clientConfirmPassword === this.state.clientPassword)
      return alert("");
  };
  handleAgencyAlert = () => {
    if (this.state.agencyPicture === "") return alert("");
    if (this.state.agencyAdress === "") return alert("Must put ");
    if (this.state.agencyState === "")
      return alert("ou indicate the state where you live");
    if (this.state.agencyCountry === "") return alert("");
    if (this.state.agencyCountryCode === "") return alert("");
    if (this.state.agencyPhoneNumber === 0) return alert("");
    if (this.state.agencyName === "") return alert("");
    if (this.state.agencyEmail === "") return alert("");
    if (this.state.agencyConfirmEmail === this.state.agencyEmail)
      return alert("");
    if (this.state.agencyPassword === "") return alert("");
    if (this.state.agencyConfirmPassword === this.state.agencyPassword)
      return alert("");
  };

  onSubmit = (e) => {
    axios
      .post("/users/signup", newUser)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  };
  render() {
    console.log(
      "normal:",
      this.state.normalAccountAgency,
      "social:",
      this.state.socialAccountAgency
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
                        disabled={this.state.clientActive}
                        color="warning"
                        className="white-text font-weight-bold d-flex  account-type choose-type"
                        onClick={this.handleClickClient}
                      >
                        Client&nbsp;&nbsp;
                        <MDBIcon icon="user" />
                      </MDBBtn>
                      <MDBBtn
                        disabled={this.state.agencyActive}
                        color="success"
                        className="white-text font-weight-bold d-flex account-type choose-type"
                        onClick={this.handleClickAgency}
                      >
                        Agency&nbsp;&nbsp;
                        <MDBIcon icon="building" />
                      </MDBBtn>
                    </div>
                  </MDBAnimation>
                </MDBCol>

                {this.state.account === "Client" ? (
                  this.state.normalAccountClient === false &&
                  this.state.socialAccountClient === true ? (
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
                            <div>
                              <MDBBtn onClick={this.handleClickNormalClient}>
                                normal account
                              </MDBBtn>
                            </div>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBAnimation>
                    </MDBCol>
                  ) : (
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
                              &nbsp;Your Information
                            </h3>
                            <hr className="hr-light" />
                            <div className="All-selector">
                              <div className="left-side-selector">
                                <MDBInput
                                  icon="user"
                                  label="Firts Name"
                                  onChange={(e) =>
                                    this.setState({
                                      clientName: e.target.value,
                                    })
                                  }
                                />
                                <MDBInput
                                  icon="user"
                                  label="Last Name"
                                  onChange={(e) =>
                                    this.setState({
                                      clientName: e.target.value,
                                    })
                                  }
                                />
                                <MDBInput
                                  icon="envelope-open"
                                  label="E-mail"
                                  onChange={(e) =>
                                    this.setState({
                                      clientEmail: e.target.value,
                                    })
                                  }
                                />
                                <MDBInput
                                  icon="envelope-open"
                                  label="Confirm E-mail"
                                  onChange={(e) =>
                                    this.setState({
                                      clientConfirmEmail: e.target.value,
                                    })
                                  }
                                />
                                <MDBInput
                                  icon="unlock-alt"
                                  label="Password"
                                  onChange={(e) =>
                                    this.setState({
                                      clientPassword: e.target.value,
                                    })
                                  }
                                />
                                <MDBInput
                                  icon="unlock-alt"
                                  label="Confirm Password"
                                  onChange={(e) =>
                                    this.setState({
                                      clientConfirmPassword: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>
                            <div className="text-center mt-4 black-text">
                              <div className=" choose-account">
                                <MDBBtn
                                  className=" font-weight-bold  btn-md"
                                  color="warning"
                                  style={{ fontSize: 14 }}
                                  onClick={this.handleClickSocialClient}
                                >
                                  Social Account &nbsp; &nbsp;
                                  <MDBIcon icon="hand-point-left" size="lg" />
                                </MDBBtn>
                                <MDBBtn
                                  className=" font-weight-bold  btn-md"
                                  color="deep-orange"
                                  style={{ fontSize: 14 }}
                                >
                                  Register &nbsp; &nbsp;
                                  <MDBIcon icon="save" size="lg" />
                                </MDBBtn>
                              </div>
                            </div>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBAnimation>
                    </MDBCol>
                  )
                ) : this.state.account === "Agency" ? (
                  this.state.normalAccountAgency === false &&
                  this.state.socialAccountAgency === true ? (
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
                            <div>
                              <MDBBtn onClick={this.handleClickNormalAgency}>
                                normal account
                              </MDBBtn>
                            </div>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBAnimation>
                    </MDBCol>
                  ) : (
                    <MDBCol md="" xl="5" className="mb-4 all-post-card">
                      <MDBAnimation type="fadeInRight" delay=".3s">
                        <MDBCard id="classic-card" style={{ width: 540 }}>
                          <MDBCardBody className="white-text">
                            <h3 className=" text-center add-title font-weight-bold">
                              <MDBIcon icon="building" />
                              &nbsp;Your Agency Information
                            </h3>
                            <hr className="hr-light" />
                            <div className="All-selector">
                              <div className="left-side-selector">
                                <MDBInput
                                  icon="vihara"
                                  label="Agency Name"
                                  onchange={(e) =>
                                    this.setState({
                                      name: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div className="right-side-selector">
                                <MDBInput icon="envelope-open" label="E-mail" />
                                <MDBInput
                                  icon="envelope-open"
                                  label="Confirm E-mail"
                                />
                                <MDBInput icon="unlock-alt" label="Password" />
                                <MDBInput
                                  icon="unlock-alt"
                                  label="Confirm Password"
                                />
                              </div>
                            </div>
                            <div className="text-center mt-4 black-text">
                              <div className=" choose-account">
                                <MDBBtn
                                  className=" font-weight-bold  btn-md"
                                  color="warning"
                                  style={{ fontSize: 14 }}
                                  onClick={this.handleClickSocialAgency}
                                >
                                  Social Account &nbsp; &nbsp;
                                  <MDBIcon icon="hand-point-left" size="lg" />
                                </MDBBtn>
                                <MDBBtn
                                  className=" font-weight-bold  btn-md"
                                  color="deep-orange"
                                  style={{ fontSize: 14 }}
                                >
                                  Register &nbsp; &nbsp;
                                  <MDBIcon icon="save" size="lg" />
                                </MDBBtn>
                              </div>
                            </div>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBAnimation>
                    </MDBCol>
                  )
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
