import React from "react";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdbreact";

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="edit_profile" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1" />
        Edit Profile
      </Link>

      <Link to="add_contact" className="btn btn-light">
        <i className="fab fa-black-tie text-info mr-1" />
        Add Adress
      </Link>
    </div>
  );
};
export default ProfileActions;