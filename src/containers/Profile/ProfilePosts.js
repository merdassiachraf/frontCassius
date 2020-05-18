import React, { Component } from "react";

import ProfilePostCard from "./ProfilePostCard";

import "./scrollbar.css";

class ProfilePosts extends Component {
  state = {
    scrollContainerStyle: {
      width: "550px",
     height: "578px",
      backgroundColor: "white",
      border: "black",
    },
  };

  render() {
    return (
      <div
        className="scrollbar scrollbar-primary  mt-5 mx-auto"
        style={this.state.scrollContainerStyle}
      >
        <ProfilePostCard />
        <ProfilePostCard />
        <ProfilePostCard />
        <ProfilePostCard />
        <ProfilePostCard />
        <ProfilePostCard />
        <ProfilePostCard />
      </div>
    );
  }
}
export default ProfilePosts;
