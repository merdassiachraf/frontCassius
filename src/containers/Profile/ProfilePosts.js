import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ProfilePostCard from "./ProfilePostCard";
import {  deletePost, editPost } from "../../actions/postActions";

import Spinner from "../Common/Spinner";
import "./scrollbar.css";

class ProfilePosts extends Component {
  state = {
    scrollContainerStyle: {
      width: "550px",
      height: "599px",
      backgroundColor: "white",
      border: "black",
    },
  };

 

  onSubmit = (id) => {
    const postData = {
      brand: this.state.brand,
      model: this.state.model,
      fuel: this.state.fuel,
      transmission: this.state.transmission,
      adress: this.state.adress,
      state: this.state.state,
      country: this.state.country,
      pricePerDay: this.state.pricePerDay + " " + "dt/day",
    };
    this.props.editPost(id, postData);
  };

  render() {
    const { posts, loading } = this.props.post;

    let postsContent;

    if (loading) {
      postsContent = <Spinner />;
    } else {
      if (posts.length > 0) {
        postsContent = posts.map((post) => (
          <ProfilePostCard key={post._id} post={post} />
        ));
      } else {
        postsContent = <h1>No posts</h1>;
      }
    }
    return (
      <div
        className="scrollbar scrollbar-primary  mt-5 mx-auto"
        style={this.state.scrollContainerStyle}
      >
        {postsContent}
      </div>
    );
  }
}

ProfilePosts.propTypes = {
  deletePost: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  post: state.post,
});
export default connect(mapStateToProps, {  deletePost, editPost })(
  ProfilePosts
);
