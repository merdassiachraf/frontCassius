import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  getCurrentProfile,
  deleteAccount,
  clearCurrentProfile,
} from "../../actions/profileActions";
import { logoutUser } from "../../actions/authActions";

import SocialLinks from "./SocialLinks";
import ContactInformation from "./ContactInformation";
import Spinner from "../Common/Spinner";

import ProfileActions from "./ProfileActions";

import {
  MDBMask,
  MDBView,
  MDBContainer,
  MDBBtn,
  MDBIcon,
  MDBModal,
} from "mdbreact";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

class DashBoard extends Component {
  state = {
    modal: false,
  };
  componentDidMount = () => {
    this.props.getCurrentProfile();
  };

  onDeleteClick = () => {
    this.props.deleteAccount();
    this.props.logoutUser();
    this.props.clearCurrentProfile();
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
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
        dashboardContent =
          user.role === "Agency" ? (
            <div className="d-flex profile-all">
              <div className="d-flex flex-column align-items-center justify-content-around left-dashbord">
                <Avatar shape="square" size={220} icon={<UserOutlined />} />

                <h2 className="profile-name">
                  <Link to={`/profile/${profile.handle}`}> {user.name}</Link>
                </h2>
                <SocialLinks profile={profile} />
                <h6 className="white-text">{profile.adress}</h6>
                <h6 className="white-text">
                  {profile.state + " , " + profile.country}
                </h6>
                <h6 className="white-text">
                  {profile.countryCode + " " + profile.phoneNumber}
                </h6>
                <ProfileActions profile={profile} />
                <button onClick={this.toggle} className="btn btn-danger">
                  <MDBIcon size="lg" icon="exclamation-triangle" />
                  &nbsp;&nbsp;Delete My Account
                </button>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                  <div className="d-flex flex-column align-items-center p-5">
                    <h6> Are You Sure? This can not be recovered !</h6>
                    <div className="d-flex">
                      <MDBBtn
                        color="yellow"
                        className="mr-5"
                        onClick={this.toggle}
                      >
                        <MDBIcon icon="ban" />
                        &nbsp;Cancel
                      </MDBBtn>
                      <Link to="/">
                        <MDBBtn color="danger" onClick={this.onDeleteClick}>
                          <MDBIcon icon="trash-alt" />
                          &nbsp;Delete Account
                        </MDBBtn>
                      </Link>
                    </div>
                  </div>
                </MDBModal>
              </div>
              <div className="right-dashbord">
                <ContactInformation
                  contactInformation={profile.contactInformation}
                />
              </div>
              <div style={{ marginBottom: "60px" }} />

              <div className="agency-post-buttons">
                <div>
                  <Link to="/add_post">
                    <MDBBtn
                      className="font-weight-bold post-link"
                      color="secondary"
                      size="lg"
                    >
                      ADD post&nbsp;&nbsp;
                      <MDBIcon size="lg" icon="plus" />
                    </MDBBtn>
                  </Link>
                  <Link to="/dashboard/my_posts">
                    <MDBBtn
                      className="font-weight-bold post-link"
                      color="success"
                      size="lg"
                    >
                      My posts&nbsp;&nbsp;
                      <MDBIcon size="lg" icon="book-open" />
                    </MDBBtn>
                  </Link>
                </div>
                <Link to="/reservations">
                  <MDBBtn
                    className="font-weight-bold post-link"
                    color="warning"
                    size="lg"
                    style={{fontSize:12}}
                  >
                    My reservations&nbsp;&nbsp;&nbsp;&nbsp;
                    <MDBIcon size="lg" icon="dollar-sign" />
                  </MDBBtn>
                </Link>
              </div>
            </div>
          ) : (
            <div className="d-flex align-items-center  profile-all-client">
              <div className="d-flex flex-column align-items-center left-dashbord-client">
                <Avatar shape="square" size={250} icon={<UserOutlined />} />
                <h2 className="profile-name ">{user.name}</h2>
              </div>
              <div className="right-dashbord-client d-flex flex-column align-items-center ">
                <h3 className="white-text mb-5"> Your Adress :</h3>
                <h4 className="white-text mb-3">{profile.adress}</h4>
                <h4 className="white-text mb-3">
                  {profile.state + " , " + profile.country}
                </h4>
                <h4 className="white-text mb-3">
                  {profile.countryCode + " " + profile.phoneNumber}
                </h4>
              </div>
              <div style={{ marginBottom: "60px" }} />

              <div className="client-post-buttons">
              <Link to="/reservations">
                  <MDBBtn
                    className="font-weight-bold post-link"
                    color="success"
                    size="lg"
                  >
                    List of Reservation&nbsp;&nbsp;
                    <MDBIcon size="lg" icon="book-open" />
                  </MDBBtn>
                </Link>
                <div className="d-flex">
                  <ProfileActions profile={profile} />

                  <button onClick={this.toggle} className="btn btn-danger">
                    <MDBIcon size="lg" icon="exclamation-triangle" />
                    &nbsp;&nbsp;Delete My Account
                  </button>
                  <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <div className="d-flex flex-column align-items-center p-5">
                      <h6> Are You Sure? This can not be recovered !</h6>
                      <div className="d-flex">
                        <MDBBtn
                          color="yellow"
                          className="mr-5"
                          onClick={this.toggle}
                        >
                          <MDBIcon icon="ban" />
                          &nbsp;Cancel
                        </MDBBtn>
                        <Link to="/">
                          <MDBBtn color="danger" onClick={this.onDeleteClick}>
                            <MDBIcon icon="trash-alt" />
                            &nbsp;Delete Account
                          </MDBBtn>
                        </Link>
                      </div>
                    </div>
                  </MDBModal>
                </div>
              </div>
            </div>
          );
      } else {
        //User logged but has no profile
        dashboardContent = (
          <div className="white-text dashbord-first d-flex flex-column align-items-center ">
            <h1 className="white-text mb-5">You are welcome {user.name}</h1>
            <p className="mb-5">
              You have not setup a profile yet , please add some information
            </p>
            <Link to="/create_profile">
              <MDBBtn
                size="lg"
                className="gray-text font-weight-bold mt-5"
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
           {dashboardContent}
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

DashBoard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  clearCurrentProfile,
  deleteAccount,
  logoutUser,
})(DashBoard);
