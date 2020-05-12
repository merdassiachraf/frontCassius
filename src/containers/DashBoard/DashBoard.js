import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";

import ContactInformation from "./ContactInformation";
import Spinner from "../Common/Spinner";

import ProfileActions from "./ProfileActions";

import { MDBMask, MDBView, MDBContainer, MDBBtn, MDBIcon } from "mdbreact";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

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
          <div className="d-flex profile-all">
            <div className="d-flex flex-column align-items-center justify-content-around left-dashbord">
              <Avatar shape="square" size={250} icon={<UserOutlined />} />

              <h2 className="profile-name">
                <Link to={`/profile/${profile.handle}`}> {user.name}</Link>
              </h2>
              <ProfileActions />

              <button onClick={this.onDeleteClick} className="btn btn-danger">
                <MDBIcon size="lg" icon="exclamation-triangle" />
                &nbsp;&nbsp;Delete My Account
              </button>
            </div>
            <div className="right-dashbord">
              <ContactInformation
                contactInformation={profile.contactInformation}
              />
            </div>
            <div style={{ marginBottom: "60px" }} />

            {user.role === "Agency" ? (
              <div className="agency-post-buttons">
                <Link to="/add_post">
                  <MDBBtn className="font-weight-bold post-link" color="secondary" size="lg">ADD post&nbsp;&nbsp;<MDBIcon size="lg" icon="plus" /></MDBBtn>
                </Link>
                <Link to="/add_post">
                  <MDBBtn className="font-weight-bold post-link"  color="success" size="lg">your posts&nbsp;&nbsp;<MDBIcon size="lg" icon="book-open" /></MDBBtn>
                </Link>
              </div>
            ) : null}
          </div>
        );
      } else {
        //User logged but has no profile
        dashboardContent = (
          <div className="white-text dashbord-first">
            <h1 className="white-text">You are welcome {user.name}</h1>
            <p>
              You have not setup a profile yet , please add some information
            </p>
            <Link to="/create_profile">
              <MDBBtn
                size="lg"
                className="gray-text font-weight-bold"
                color="warning"
              >
                <MDBIcon size="lg" far icon="grin-stars" />
                &nbsp;&nbsp;Setup you profile&nbsp;&nbsp;
                <MDBIcon size="lg" far icon="grin-stars" />
              </MDBBtn>
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
                    <div className=".col-md-12">{dashboardContent}</div>
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
