import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../Common/Spinner";
import PostFeed from "./PostFeed";
import FiltreItems from "./FitreItems";

import { getPosts } from "../../actions/postActions";

import { MDBMask, MDBView } from "mdbreact";

class Posts extends Component {
  componentDidMount = () => {
    this.props.getPosts();
  };

  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div className="d-flex flex-wrap">
          <PostFeed posts={posts} />
          <PostFeed posts={posts} />
          <PostFeed posts={posts} />
          <PostFeed posts={posts} />
          <PostFeed posts={posts} />
          <PostFeed posts={posts} />
          <PostFeed posts={posts} />
          <PostFeed posts={posts} />
        </div>
      );
    }

    return (
      <div id="">
        <MDBView src="https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <div className="posts-list-page">
              <div className="d-flex posts-filtre">
                <div className="d-flex flex-column">
                  <h2 className="white-text text-center posts-title">
                    Cars List
                  </h2>
                  <p className=" white-text posts-sous-titre text-center">
                    You will find your car here
                  </p>
                </div>
                <FiltreItems />
              </div>
              <div className="posts-list">{postContent}</div>
            </div>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    post: state.post,
  };
};

export default connect(mapStateToProps, { getPosts })(Posts);
