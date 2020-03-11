import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
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
  MDBContainer
} from "mdbreact";
import Icon from "../../atests/logo/Icon";


class NavBar extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="addpicture-main">
        <Router>
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
                    <MDBNavItem active>
                      <MDBNavLink
                        className=" font-weight-normal left-navbar"
                        to="#!"
                      >
                        Home
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        className=" font-weight-normal left-navbar"
                        to="#!"
                      >
                        Posts
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        className=" font-weight-normal left-navbar"
                        to="#!"
                      >
                        Agencies
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
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
                          <MDBDropdownItem
                            className="font-weight-normal account-connection font-weight-normal"
                            href="#!"
                          >
                            <MDBIcon icon="sign-in-alt" /> &nbsp;&nbsp; Sign Up
                          </MDBDropdownItem>
                          <hr className=" black-text" />

                          <MDBDropdownItem
                            className="font-weight-normal Account-connection font-weight-normal"
                            href="#!"
                          >
                            <MDBIcon far icon="user-circle" />
                            &nbsp;&nbsp; Login
                          </MDBDropdownItem>
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapseID && overlay}
          </div>
        </Router>
      </div>
    );
  }
}

export default NavBar;
