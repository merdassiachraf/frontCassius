import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";

import ProfileAbout from "./ProfleAbout";
import ProfilePosts from "./ProfilePosts";
import Spinner from "../Common/Spinner";

import { getProfileByHandle } from "../../actions/profileActions";
import { getAgencyPosts } from "../../actions/postActions";

import { MDBMask, MDBView, MDBIcon } from "mdbreact";

class Profile extends Component {
  componentDidMount = () => {
    if (this.props.match.params.handle) {
      this.props.getAgencyPosts(this.props.match.params.handle)
      this.props.getProfileByHandle(this.props.match.params.handle);
    }    
  };

  render() {
    const { profile, loading } = this.props.profile;
    const {agency_posts}= this.props.post;
    const { auth } = this.props;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent =
        profile.role === "Agency" ? (
          <div>
            <div>
              <Link className="go-back" to="/dashboard">
                <MDBIcon icon="arrow-circle-left" />
                &nbsp;Go back
              </Link>
            </div>
            <ProfileAbout
              className="mt-5 profile-about"
              profile={profile}
              auth={auth}
            />
            <ProfilePosts agency_posts={agency_posts} />
          </div>
        ) : (
          <div>
            <Link className="go-back" to="/dashboard">
              <MDBIcon icon="arrow-circle-left" />
              &nbsp;Go back
            </Link>
            <h1 className="private">
              Sorry, Client Account Is a Private Account...
            </h1>
          </div>
        );
    }

    return (
      <div id="classicformpage">
        <MDBView src="https://images.pexels.com/photos/27406/pexels-photo-27406.jpg?cs=srgb&dl=building-modern-glass-tall-27406.jpg&fm=jpg">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <div className="row">
              <div>{profileContent}</div>
            </div>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

Profile.prototypes = {
  getAgencyPosts: Proptypes.func.isRequired,
  getProfileByHandle: Proptypes.func.isRequired,
  profile: Proptypes.object.isRequired,
  auth: Proptypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
  post: state.post,
});

export default connect(mapStateToProps, { getProfileByHandle, getAgencyPosts })(
  Profile
);
