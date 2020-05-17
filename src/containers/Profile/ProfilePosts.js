import React, { Component } from "react";

import { MDBContainer, MDBScrollbar } from "mdbreact";

import ProfilePostCard from "./ProfilePostCard";

import "./scrollbar.css";

class ProfilePosts extends Component {
  state = {
    scrollContainerStyle: {
      width: "400px",
      maxHeight: "578px",
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
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
        <h1>aaaaaa</h1>
      </div>
    );
  }
}
export default ProfilePosts;
