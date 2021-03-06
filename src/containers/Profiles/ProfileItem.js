import React from "react";
import { Link } from "react-router-dom";

import { Avatar } from "antd";

const ProfileItem = ({ profile }) => {
  return (
    <Link to={`/profile/${profile.handle}`} style={{ textDecoration: "none" }}>
      <div className="card card-body  d-flex flex-column mr-5 align-items-center profile-card">
        <Avatar
          className="profile-avatar-card"
          style={{
            borderRadius: 5,
          }}
          shape="square"
          size={110}
          src="https://upload.wikimedia.org/wikipedia/en/6/68/TLS_Agency_logo.jpg"
        />
        <h5 className="white-text mt-2 profile-name-card ">{profile.name}</h5>
      </div>
    </Link>
  );
};

export default ProfileItem;
