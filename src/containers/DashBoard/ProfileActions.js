import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdbreact";

class ProfileActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal8: false,
      modal9: false,
    };
  }
  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };
  render() {
    const { profile } = this.props;
    return (
      <div className="btn-group mb-4" role="group">
        <MDBBtn className=" profile-config">
          <Link to="edit_profile" className="white-text">
            <MDBIcon icon="fas fa-user-circle  mr-1" className="white-text" />
            Edit Profile
          </Link>
        </MDBBtn>
        {(profile.role === "Agency") ? (
          <MDBBtn className="white-text profile-config">
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
