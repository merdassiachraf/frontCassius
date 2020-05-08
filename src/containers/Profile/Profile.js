import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";

import ProfileAbout from "./ProfleAbout";
import ProfilePosts from "./ProfilePosts";
import Spinner from "../Common/Spinner";
import { getProfileByHandle } from "../../actions/profileActions";

import {
  MDBMask,
  MDBView,
  MDBContainer,
  MDBBtn,
  MDBIcon
} from "mdbreact";

class Profile extends Component {

  componentDidMount = () => {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  };

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div className="full-profile-page">
          <div className="column">
            <Link to="/profiles">
              <MDBBtn className="mb-5 backup-button" color="primary">
                <MDBIcon icon="arrow-left" />
                &nbsp;&nbsp;Back To Agencies List
              </MDBBtn>
            </Link>
        
          <ProfileAbout className="mt-5" profile={profile} />
          </div>
          <ProfilePosts profile={profile} />
        
        </div>
      );
    }

    return (
      <div id="classicformpage">
        <MDBView src="https://images.pexels.com/photos/27406/pexels-photo-27406.jpg?cs=srgb&dl=building-modern-glass-tall-27406.jpg&fm=jpg">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <div className="row">
                <div >{profileContent}</div>
              </div>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

Profile.prototypes = {
  getProfileByHandle: Proptypes.func.isRequired,
  profile: Proptypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);
