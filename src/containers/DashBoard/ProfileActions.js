import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="edit_profile" className="btn btn-light profile-config">
        <i className="fas fa-user-circle text-info mr-1" />
        Edit Profile
      </Link>

      <Link to="add_contact" className="btn btn-light profile-config">
        <i className="fab fa-black-tie text-info mr-1" />
        Add Adress
      </Link>
    </div>
  );
};
export default ProfileActions;
