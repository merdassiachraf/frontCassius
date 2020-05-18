import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { deletePost } from "../../actions/postActions";

import { MDBBtn, MDBIcon } from "mdbreact";

class MyPostCard extends Component {
  onClickDelete = (id) => {
    this.props.deletePost(id);
  };

  render() {
    const { post, key } = this.props;
    return (
      <div className="d-flex flex-column align-items-center p-3 flex-nowwrap my-post-card m-3">
        <img
          id="my-card-img"
          src="https://catalogue.automobile.tn/big/2019/10/46263.jpg"
        />
        <h5 className="mt-2 my-car-info">{post.brand + "  " + post.model}</h5>
        <h5 className="my-car-info">{post.pricePerDay}</h5>
        <div className="d-flex ">
          <Link to="/posts/edit_post/:id">
            <MDBBtn size="sm" color="yellow">
              <MDBIcon far icon="edit" />
            </MDBBtn>
          </Link>
          <MDBBtn
            onClick={this.onClickDelete.bind(this, post._id)}
            size="sm"
            color="danger"
          >
            <MDBIcon icon="trash-alt" />
          </MDBBtn>
        </div>
      </div>
    );
  }
}

MyPostCard.propTypes = {
  deletePost: PropTypes.func.isRequired,
};

export default connect(null, { deletePost })(MyPostCard);
