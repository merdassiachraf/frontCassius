import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ProfilePostCard from "./ProfilePostCard";
import { getUserPosts, deletePost, editPost } from "../../actions/postActions";

import Spinner from "../Common/Spinner";
import "./scrollbar.css";
import MyPostCard from "../MyPosts/MyPostCard";

class ProfilePosts extends Component {
  state = {
    scrollContainerStyle: {
      width: "550px",
      height: "578px",
      backgroundColor: "white",
      border: "black",
    },
  };

  componentDidMount = () => {
    this.props.getUserPosts();
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
    const { my_posts, loading } = this.props.post;

    let my_postsContent;

    if (loading) {
      my_postsContent = <Spinner />;
    } else {
      if (my_posts.length > 0) {
        my_postsContent = my_posts.map((my_post) => (
          <ProfilePostCard key={my_post._id} my_post={my_post} />
        ));
      } else {
        my_postsContent = <h1>No posts</h1>;
      }
    }
    return (
      <div
        className="scrollbar scrollbar-primary  mt-5 mx-auto"
        style={this.state.scrollContainerStyle}
      >
        {my_postsContent}
      </div>
    );
  }
}

ProfilePosts.propTypes = {
  getUserPosts: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  post: state.post,
});
export default connect(mapStateToProps, { getUserPosts, deletePost, editPost })(
  ProfilePosts
);
