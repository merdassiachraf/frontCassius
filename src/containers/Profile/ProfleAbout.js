import React, { Component } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,MDBIcon
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
    const { profile } = this.props;
    return (
      <div className="profile-about">
        <ProfileHeader />
        <div className="profile-infos">
        <div className="social-icons-profile  mb-4">
        <MDBIcon size="lg" className="blue-text" fab icon="facebook" />
        <MDBIcon size="lg" className="blue-text" fab icon="twitter" />
        <MDBIcon size="lg" className="pink-text" fab icon="instagram" />
        <MDBIcon size="lg" className="blue-text" fab icon="linkedin" />
        <MDBIcon size="lg" className="red-text" fab icon="youtube" />
        </div>
        <h1 className="agency-profile-name mb-4">Hertz rent car</h1>
        <MDBBtn className="contact-profile" color="info" onClick={this.toggle}>
          Contact Information
        </MDBBtn>
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
