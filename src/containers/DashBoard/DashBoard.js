import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";

import ContactInformation from "./ContactInformation";
import Spinner from "../Common/Spinner";

import ProfileActions from "./ProfileActions";

import { MDBMask, MDBView, MDBContainer } from "mdbreact";

class DashBoard extends Component {
  componentDidMount = () => {
    this.props.getCurrentProfile();
  };

  onDeleteClick = () => {
    this.props.deleteAccount();
  };

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      //Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              Welcome
              <Link to={`/profile/${profile.handle}`}> {user.name}</Link>
            </p>
            <ProfileActions />
            <ContactInformation
              contactInformation={profile.contactInformation}
            />
            <div style={{ marginBottom: "60px" }} />
            <button onClick={this.onDeleteClick} className="btn btn-danger">
              Delete My Account
            </button>
            {user.role === "Agency" ? (
              <div>
              <Link to="/add_post" className="btn btn-lg btn-info">
                Add Post
              </Link>
              <Link to="/add_post" className="btn btn-lg btn-info">
                Your Posts
              </Link>
              </div>
            ) : null}
          </div>
        );
      } else {
        //User logged but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>
              You have not yet setup a profile , please add some information
            </p>
            <Link to="/create_profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div id="classicformpage">
        <MDBView src="https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <div className="dashboard">
                <div className="container">
                  <div className="row">
                    <div className=".col-md-12">
                      dashboard
                      {dashboardContent}
                    </div>
                  </div>
                </div>
              </div>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

DashBoard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  DashBoard
);
