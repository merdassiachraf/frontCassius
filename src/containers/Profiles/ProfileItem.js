import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <Link to={`/profile/${profile.handle}`}>
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              {/* <img
                src="https://upload.wikimedia.org/wikipedia/en/6/68/TLS_Agency_logo.jpg"
                alt=""
                className="rounded-circle"
              /> */}
            </div>
            <div className=".col-lg-6.col-md-4.col-8">
              <h3>{profile.user.name}</h3>
              {/* <p>{profile.contactInformation[0].country}</p> */}
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
ProfileItem.propTypes={
  profile:PropTypes.object.isRequired
}
export default ProfileItem;
