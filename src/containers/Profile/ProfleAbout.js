import React, { Component } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBIcon,
} from "mdbreact";
import ProfileContactInformation from "./ProfileContactInfortmation";
import ProfileHeader from "./ProfileHeader";

class ProfileAbout extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    const { profile,auth } = this.props;
    let social;
    let instgram;
    let facebook;
    let youtube;
    let linkedin;
    let twitter;
    return (
      <div className="profile-about">
        <ProfileHeader />
        <div className="profile-infos">
          <div className="social-icons-profile mb-2">
            <MDBIcon size="lg" className="blue-text" fab icon="facebook" />
            <MDBIcon size="lg" className="blue-text" fab icon="twitter" />
            <MDBIcon size="lg" className="blue-text" fab icon="linkedin" />
            <MDBIcon size="lg" className="pink-text" fab icon="instagram" />
            <MDBIcon size="lg" className="red-text" fab icon="youtube" />
          </div>
          <div className="d-flex flex-column align-items-center">
          <h1 className="agency-profile-name mb-4">{auth.user.name}</h1>
          <h6 className="black-text">{profile.adress}</h6>
          <h6 className="black-text">
            {profile.state + " , " + profile.country}
          </h6>
          <h6 className="black-text">
            {profile.countryCode + " " + profile.phoneNumber}
          </h6>
          <MDBBtn
            className="contact-profile"
            color="info"
            onClick={this.toggle}
            size='lg'
          >
            <MDBIcon icon="map-signs" size="lg" />
            &nbsp;&nbsp;Contact Information
          </MDBBtn>
        </div>
        </div>
        <MDBModal
          isOpen={this.state.modal}
          toggle={this.toggle}
          backdrop={false}
          full-height
          position="left"
        >
          <MDBModalHeader toggle={this.toggle}>
            Contact Information
          </MDBModalHeader>
          <MDBModalBody>
            <ProfileContactInformation profile={profile} />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    );
  }
}
export default ProfileAbout;
