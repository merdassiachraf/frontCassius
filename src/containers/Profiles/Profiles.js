import React, { Component } from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import Spinner from "../Common/Spinner";

import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profileActions";

import { MDBMask, MDBView, MDBContainer } from "mdbreact";

class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.getProfiles();
  };

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading === true) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map((profile) => (
          <ProfileItem key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = <h4>No profiles found ...</h4>;
      }
    }

    return (
      <div id="classicformpage">
        <MDBView src="https://images.pexels.com/photos/27406/pexels-photo-27406.jpg?cs=srgb&dl=building-modern-glass-tall-27406.jpg&fm=jpg">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer className="posts-list-main">
              <div className="profiles">
                <div className="col-md-12">
                  <h1 className="display-4 text-center">Agencies Profiles</h1>
                  <p className="lead text-center">
                    Browse and connect with agencies
                  </p>
                  {profileItems}
                </div>
              </div>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

Profiles.prototypes = {
  getProfiles: Proptypes.func.isRequired,
  profile: Proptypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
