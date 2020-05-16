import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdbreact";

class ProfileActions extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="btn-group mb-4" role="group">
        <MDBBtn className=" profile-config">
          <Link to="edit_profile" className="white-text">
            <MDBIcon icon="fas fa-user-circle  mr-1" className="white-text" />
            Edit Profile
          </Link>
        </MDBBtn>
        {user.role === "Agency" ? (
          <MDBBtn className="white-text profile-config" >
            <Link to="/add_contact" className="white-text profile-config">
              <MDBIcon icon="fas fa-user-circle " className="white-text" />
              Add Adress
            </Link>
          </MDBBtn>
        ) : null}
      </div>
    );
  }
}
export default ProfileActions;
