import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { LogoutUser } from "../../actions/authActions";

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
  MDBContainer,
} from "mdbreact";

import Icon from "../../atests/logo/Icon";

class NavBar extends React.Component {
  state = {
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  onLogouClick = () => {
    this.propos.LogoutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <MDBNavItem>
        <a href="#" onClick={this.onLogouClick}>
          <MDBIcon far icon="user-circle" />
          &nbsp;&nbsp; Log out
        </a>
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
              to="/signin"
            >
              <MDBDropdownItem>
                <MDBIcon far icon="user-circle" />
                &nbsp;&nbsp; Sign In
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
            <MDBContainer>
              {/* <MDBNavbarBrand className="logo-home-name" style={{height:10}}><strong>
                  <Icon/>CASSIUS</strong>
                </MDBNavbarBrand> */}
              <MDBNavbarToggler
                onClick={this.toggleCollapse("navbarCollapse")}
              />
              <MDBCollapse
                id="navbarCollapse"
                isOpen={this.state.collapseID}
                navbar
              >
                <MDBNavbarNav left>
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
                      to="posts_list"
                    >
                      <MDBIcon icon="car-alt" />
                      &nbsp;&nbsp;Posts
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      className=" font-weight-normal left-navbar"
                      to="/agencies_list"
                    >
                      <MDBIcon icon="id-card-alt" />
                      &nbsp; Agencies
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  {isAuthenticated ? authLinks : guestLinks}
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {this.state.collapseID && overlay}
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  LogoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { LogoutUser })(NavBar);
