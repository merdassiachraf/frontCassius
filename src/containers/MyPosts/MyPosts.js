import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getUserPosts } from "../../actions/postActions";

import MyPostCard from "./MyPostCard";

import Spinner from "../Common/Spinner";

import { MDBMask, MDBView, MDBContainer, MDBIcon } from "mdbreact";

class MyPosts extends Component {
  componentDidMount = () => {
    this.props.getUserPosts();
  };

  render() {
    const { my_posts,loading } = this.props.post;

    let myPostItem;

    if (my_posts === null || loading === true) {
      myPostItem = <Spinner />;
    } else {
      if (my_posts.length >= 0) {
        myPostItem = my_posts.map((post) => (
          <MyPostCard key={post._id} post={post} />
        ));
      }
    }

    return (
      <div id="classicformpage">
        <MDBView src="https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <Link className="go-back" to="/dashboard">
              <MDBIcon icon="arrow-circle-left" />
              &nbsp;Go back
            </Link>
            <div className="d-flex flex-column ">
              <div className=" my-posts mt-5 ">
                {myPostItem}
              </div>
            </div>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

MyPosts.propTypes = {
  getUserPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getUserPosts })(MyPosts);
