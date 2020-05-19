import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

import Icon from "../../atests/logo/Icon";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBCollapse,
  MDBIcon,
  MDBBtn,
  MDBNavbarBrand,
} from "mdbreact";

class NavBar extends React.Component {
  state = {
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  onLogouClick = () => {
    this.props.logoutUser();
    this.props.clearCurrentProfile();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <MDBNavItem>
        <MDBDropdown>
          <MDBDropdownToggle nav caret>
            <div
              className="d-none d-md-inline dropdown-essencial"
              style={{
                fontFamily: "monospace",
                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              <Avatar size="small" icon={<UserOutlined />} />
              &nbsp;&nbsp;{user.name} &nbsp;
            </div>
          </MDBDropdownToggle>
          <MDBDropdownMenu className="dropdown-account">
            <div className="all-dropdown">
              <Link to="/dashboard">
                <div className="dropdown-avatar d-flex flex-column align-items-center">
                  <Avatar size={100} icon={<UserOutlined />} />
                  <h6 className="user-drop-name">{user.name}</h6>
                </div>
              </Link>
              <div className="d-flex align-items-center">
                <hr />
                <Link to="/edit_profile">
                  <MDBBtn
                    type="button"
                    color="warning"
                    size="sm"
                    to="/"
                    className="z-depth-1a dropdown-button font-weight-bolder account-button-drop"
                  >
                    Modify profile
                  </MDBBtn>
                </Link>
                <MDBBtn
                  type="button"
                  color="black"
                  outline
                  size="sm"
                  className="z-depth-1a dropdown-button font-weight-bolder account-button-drop"
                  onClick={this.onLogouClick}
                >
                  <div>Log Out</div> <MDBIcon size="lg" icon="sign-out-alt" />
                </MDBBtn>
              </div>
            </div>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavItem>
    );

    const guestLinks = (
      <MDBNavItem>
        <MDBDropdown>
          <MDBDropdownToggle
            nav
            caret
            className="font-weight-normal right-navbar"
          >
            <MDBIcon icon="user" /> &nbsp;Account
          </MDBDropdownToggle>
          <MDBDropdownMenu className="dropdown-default">
            <MDBNavLink
              to="/signup"
              className="font-weight-normal Account-connection black-text font-weight-bold"
            >
              <MDBDropdownItem>
                <MDBIcon icon="sign-in-alt" /> &nbsp;&nbsp; Sign Up
              </MDBDropdownItem>
            </MDBNavLink>
            <hr className=" black-text" />
            <MDBNavLink
              className="font-weight-normal black-text Account-connection font-weight-bold"
              to="/login"
            >
              <MDBDropdownItem>
                <MDBIcon far icon="user-circle" />
                &nbsp;&nbsp; Login
              </MDBDropdownItem>
            </MDBNavLink>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavItem>
    );

    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="addpicture-main">
        <div>
          <MDBNavbar dark expand="md" fixed="top">
            <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse")} />
            <MDBNavbarBrand>
              <Icon />
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse
              id="navbarCollapse"
              isOpen={this.state.collapseID}
              navbar
            >
              <MDBNavbarNav left className="ml-5 pl-5">
                <MDBNavItem>
                  <MDBNavLink
                    className=" font-weight-normal left-navbar"
                    to="/"
                  >
                    <MDBIcon icon="home" />
                    &nbsp; Home
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    className=" font-weight-normal left-navbar"
                    to="/posts"
                  >
                    <MDBIcon icon="car-alt" />
                    &nbsp;&nbsp;Posts
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    className=" font-weight-normal left-navbar"
                    to="/profiles"
                  >
                    <MDBIcon icon="id-card-alt" />
                    &nbsp; Agencies
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right className="mr-5 pr-5">
                {isAuthenticated ? authLinks : guestLinks}
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {this.state.collapseID && overlay}
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  NavBar
);
