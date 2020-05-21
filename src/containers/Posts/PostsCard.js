import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Avatar } from "antd";

class PostCard extends Component {

  state={
    status:""
  }


  render() {
    const { post } = this.props;
    return (
      <Link to={`/posts/${post._id}`}  style={{ textDecoration: "none" }}>
        <div className="d-flex align-items-center post-card">
          <img
            className="car-card-img"
            src="https://images.autowereld.com/1600x1000/168971-bmw-m235i-xdrive-gran-coupe-63-0189014a1.jpg"
          />
          <div className="p-3 d-flex ">
            <div className="d-flex flex-column">
              <h6 className="car-info">{post.brand+" "+post.model}</h6>
              <h6 className="car-info">{post.state+" , "+post.country}</h6>
              <h6 className="car-info">{post.pricePerDay}</h6>
            </div>
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                src={post.agencyPicture}
              />
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
