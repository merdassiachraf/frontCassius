import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Avatar } from "antd";

class PostCard extends Component {
  render() {
    const { post } = this.props;
    return (
      <Link to={`/posts/${post._id}`}>
        <div className="post-card">
          <img
            className="car-card-img"
            src="data:image/png;base64,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"
          />
          <div className="card-infos">
            <div className="carlist-info">
              <h6>{post.brand}</h6>
              <h6>{post.model}</h6>
              <h6>{post.state}</h6>
              <h6>{post.pricePerDay}</h6>
            </div>
            <div className="avatar-post">
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                src={post.agencyPicture}
              />
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
