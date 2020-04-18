import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUser } from "../../actions/authActions";

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
  MDBContainer,
  MDBBtn,
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
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <MDBNavItem>
        <MDBDropdown>
          <MDBDropdownToggle nav caret >
            <div
              className="d-none d-md-inline dropdown-essencial"
              style={{ fontWeight: 600 }}
            >
              <Avatar icon={<UserOutlined />} />
              &nbsp;&nbsp;{user.name}
            </div>
          </MDBDropdownToggle>
          <MDBDropdownMenu className="dropdown-account">
          <div className="all-dropdown">
            <div className="dropdown-avatar">
              <Avatar size={100} icon={<UserOutlined />} />
            </div>
            <h6 >{user.name}</h6>
            <div className="dropdown-button">
            <hr />

              <MDBBtn
                type="button"
                color="warning"
                size="sm"
                className="z-depth-1a dropdown-button font-weight-bolder account-button-drop"
              >
                Modify profile
              </MDBBtn>
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
              to="/signin"
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
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(NavBar);
