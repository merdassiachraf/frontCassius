import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { deletePost } from "../../actions/postActions";

import {
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

class MyPostCard extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onClickDelete = (id) => {
    this.props.deletePost(id);
  };

  render() {
    const { post } = this.props;
    return (
      <div className="d-flex flex-column align-items-center p-3 flex-nowwrap my-post-card m-3">
        <Link to={`/posts/${post._id}`} style={{ textDecoration: "none" }}>
          <img
            id="my-card-img"
            src="https://catalogue.automobile.tn/big/2019/10/46263.jpg"
          />
          <h5 className="mt-2 my-car-info">{post.brand + "  " + post.model}</h5>
          <h5 className="my-car-info">{post.pricePerDay}</h5>
        </Link>
        <div className="d-flex ">
          <Link to="/posts/edit_post/:id">
            <MDBBtn size="sm" color="yellow">
              <MDBIcon far icon="edit" />
            </MDBBtn>
          </Link>
          <MDBBtn onClick={this.toggle} size="sm" color="danger">
            <MDBIcon icon="trash-alt" />
          </MDBBtn>
          <MDBModal
            isOpen={this.state.modal}
            className="mt-5 "
            toggle={this.toggle}
          >
            <MDBModalHeader toggle={this.toggle}>
              Delete {post.brand + " " + post.model}
            </MDBModalHeader>
            <MDBModalBody>
              Do you want to delete {post.brand + " " + post.model} post ?
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                color="warning"
                onClick={this.toggle}
                className="font-weight-bold"
              >
                Cancel
              </MDBBtn>
              <MDBBtn
                className="font-weight-bold"
                color="danger"
                onClick={this.onClickDelete.bind(this, post._id)}
              >
                Confirm <MDBIcon icon="trash-alt" />
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </div>
      </div>
    );
  }
}

MyPostCard.propTypes = {
  deletePost: PropTypes.func.isRequired,
};

export default connect(null, { deletePost })(MyPostCard);
