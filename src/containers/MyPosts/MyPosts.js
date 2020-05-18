import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getUserPosts, deletePost } from "../../actions/postActions";

import MyPostCard from "./MyPostCard";

import Spinner from "../Common/Spinner";

import { MDBMask, MDBView, MDBIcon, MDBBtn } from "mdbreact";

class MyPosts extends Component {
  componentDidMount = () => {
    this.props.getUserPosts();
  };

  onClickDelete = (id) => {
    this.props.deletePost(id);
  };

  render() {
    const { my_posts, loading } = this.props.post;

    let myPostItem;

    if (my_posts === null || loading === true) {
      myPostItem = <Spinner />;
    } else {
      if (my_posts.length > 0) {
        myPostItem = my_posts.map((post) => (
          <MyPostCard
            key={post._id}
            onClickDelete={() => this.onClickDelete.bind(this, post._id)}
            post={post}
          />
        ));
      } else {
        myPostItem = (
          <div className='d-flex flex-column align-items-center  empty-myposts'>
            <h3 className="mb-5 pb-5 empty-notice">Try to add some Post</h3>
            <Link to="/add_post">
              <MDBBtn
                className="font-weight-bold post-link"
                color="yellow"
                size="lg"
              >
                ADD post&nbsp;&nbsp;
                <MDBIcon size="lg" icon="cart-plus" />
              </MDBBtn>
            </Link>
          </div>
        );
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
              <div className=" my-posts mt-5 ">{myPostItem}</div>
            </div>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

MyPosts.propTypes = {
  deletePost: PropTypes.func.isRequired,
  getUserPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getUserPosts, deletePost })(MyPosts);
