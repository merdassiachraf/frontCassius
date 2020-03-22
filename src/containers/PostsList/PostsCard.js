import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText } from "mdbreact";
import { Avatar } from "antd";

export const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img className="car-card-img" src={post.carPicture1} />
      <div className="card-infos">
        <div className="carlist-info">
          <h6>{post.brand}</h6>
          <h6>{post.model}</h6>
          <h6>
            {post.state} 
          </h6>
          <h6>{post.pricePerDay} dt/day</h6>
        </div>
        <div>
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            src={post.agencyPicture}
          />
        </div>
      </div>
    </div>
  );
};
