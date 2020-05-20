import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Spinner from "../Common/Spinner";
import { getPostById, deletePost } from "../../actions/postActions";
import { addReservation } from "../../actions/reservationActions";

import { Avatar, Input } from "antd";
import { Carousel } from "react-responsive-carousel";
import {
  MDBMask,
  MDBView,
  MDBTypography,
  MDBBox,
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalHeader,
  MDBModalFooter,
  MDBAlert,
  MDBModalBody,
} from "mdbreact";

class PostPage extends Component {
  state = {
    modal: false,
    startDate: "",
    returnDate: "",
    startTime: "",
    returnTime: "",
    totalDays: "",
    totalPrice: "",
    status: "",
    errors: {},
  };

  componentDidMount = () => {
    this.props.getPostById(this.props.match.params.id);
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  };

  onConfirmDelete = (id) => {
    this.props.deletePost(id);
  };

  onClickDelete = () => {
    this.setState({ status: "Delete" });
    this.toggle();
  };

  onClickReservation = () => {
    this.setState({ status: "Reservation" });
    this.toggle();
  };

  onClickClose = () => {
    this.toggle();
    this.setState({
      startDate: "",
      returnDate: "",
      startTime: "",
      returnTime: "",
      totalDays: "",
      totalPrice: "",
      status: "Waiting for confirmation",
    });
  };

  onClickCalcul = () => {
    this.setState({
      totalPrice: (
        this.state.totalDays * parseInt(this.props.post.post.pricePerDay, 10)
      ).toString(10),
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onSubmit = (id) => {
    const reservationData = {
      startDate: this.state.startDate,
      returnDate: this.state.returnDate,
      startTime: this.state.startTime,
      returnTime: this.state.startTime,
      totalDays: this.state.totalDays.toString(10),
      totalPrice: this.state.totalPrice,
      status: this.state.status,
    };
    this.props.addReservation(id, reservationData);
    this.onClickClose()
  };

  render() {
    const { post, loading } = this.props.post;
    const { auth } = this.props;
    const { errors } = this.state;
    const fdate = new Date(this.state.startDate);
    const ldate = new Date(this.state.returnDate);

    const diff = (ldate - fdate) / 86400000;

    let postContent;

    if (loading) {
      postContent = <Spinner />;
    } else if (post === null) {
      postContent = (
        <div className="d-flex flex-column align-items-center">
          <h1 className="not-found">ERROR:404 </h1>
          <h1 className="not-found">Post not found </h1>
        </div>
      );
    } else {
      postContent = (
        <div>
          <div className="post-carousel">
            <Carousel>
              <div className="carousel-picture">
                <img
                  alt="#"
                  src="https://www.bigstockphoto.com/images/homepage/module-6.jpg"
                />
              </div>
              <div className="carousel-picture">
                <img
                  alt="#"
                  src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"
                />
              </div>
            </Carousel>
          </div>
          <div className="car-infos">
            <MDBTypography blockquote bqColor="danger">
              <MDBBox tag="p" mb={0} className="bq-title">
                <h1 className="text-danger"> Car Information</h1>
              </MDBBox>
              <div className="car-info">
                <h4 className="left-car-info">
                  <MDBIcon icon="angle-right" />
                  &nbsp;&nbsp;Brand :
                </h4>
                <h4 className="right-car-info">&nbsp;&nbsp;{post.brand}</h4>
              </div>
              <div className="car-info">
                <h4 className="left-car-info">
                  <MDBIcon icon="angle-right" />
                  &nbsp;&nbsp;Model :
                </h4>
                <h4 className="right-car-info">&nbsp;&nbsp;{post.model}</h4>
              </div>
              <div className="car-info">
                <h4 className="left-car-info">
                  <MDBIcon icon="angle-right" />
                  &nbsp;&nbsp;Fuel :
                </h4>
                <h4 className="right-car-info">&nbsp;&nbsp;{post.fuel}</h4>
              </div>
              <div className="car-info">
                <h4 className="left-car-info">
                  <MDBIcon icon="angle-right" />
                  &nbsp;&nbsp;Transmission :
                </h4>
                <h4 className="right-car-info">
                  &nbsp;&nbsp;{post.transmission}
                </h4>
              </div>
              <div className="car-info">
                <h4 className="left-car-info">
                  <MDBIcon icon="angle-right" />
                  &nbsp;&nbsp;Adress :
                </h4>
                <h4 className="right-car-info">&nbsp;&nbsp;{post.adress}</h4>
              </div>
              <div className="car-info">
                <h4 className="left-car-info">
                  <MDBIcon icon="angle-right" />
                  &nbsp;&nbsp;State :
                </h4>
                <h4 className="right-car-info">&nbsp;&nbsp;{post.state}</h4>
              </div>
              <div className="car-info">
                <h4 className="left-car-info">
                  <MDBIcon icon="angle-right" />
                  &nbsp;&nbsp;Country :
                </h4>
                <h4 className="right-car-info">&nbsp;&nbsp;{post.country}</h4>
              </div>
              <div className="car-info">
                <h4 className="left-car-info">
                  <MDBIcon icon="angle-right" />
                  &nbsp;&nbsp;Price Per Day :
                </h4>
                <h4 className="right-car-info">
                  &nbsp;&nbsp;{post.pricePerDay}
                </h4>
              </div>
            </MDBTypography>
            {auth.user.id !== post.user && post.role !== "Agency" ? (
              <MDBBtn
                size="lg"
                rounded
                onClick={this.onClickReservation}
                color="green"
                className="font-weight-bold white-text"
              >
                <MDBIcon icon="car-alt" size="lg" /> &nbsp; Reserve Now
              </MDBBtn>
            ) : auth.user.id === post.user ? (
              <div className="d-flex">
                <Link to={`/posts/edit_post/${post._id}`}>
                  <MDBBtn
                    size="lg"
                    rounded
                    color="warning"
                    className="font-weight-bold"
                  >
                    <MDBIcon icon="edit" />
                    &nbsp; Edit
                  </MDBBtn>
                </Link>
                <MDBBtn
                  size="lg"
                  rounded
                  color="danger"
                  className="font-weight-bold"
                  onClick={this.onClickDelete}
                >
                  <MDBIcon icon="trash-alt" />
                  &nbsp; Delete
                </MDBBtn>
              </div>
            ) : null}
            {auth.isAuthenticated === true &&
            auth.isAuthenticated === true &&
            this.state.status === "Reservation" ? (
              <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>
                  Reservation form
                </MDBModalHeader>
                <MDBModalBody>
                  <MDBAlert className="alert-notice" color="success">
                    <h5 className="alert-heading">
                      <MDBIcon icon="exclamation-triangle" />
                      &nbsp;&nbsp; Important
                    </h5>
                    <hr />
                    <p className="mb-0">
                      Whenever you need to, be sure to use margin utilities to
                      keep things nice and tidy.
                    </p>
                  </MDBAlert>
                  <label className="reservation-label">Start Date :</label>
                  <Input
                    value={this.state.startDate}
                    type="date"
                    size="large"
                    name="startDate"
                    onChange={this.onChange}
                    placeholder="large size"
                    prefix={<MDBIcon icon="calendar-alt" />}
                  />

                  <label className="reservation-label">Return Date :</label>
                  <Input
                    value={this.state.returnDate}
                    type="date"
                    size="large"
                    name="returnDate"
                    onChange={this.onChange}
                    placeholder="large size"
                    prefix={<MDBIcon icon="calendar-alt" />}
                  />

                  <label className="reservation-label">Start Time :</label>
                  <Input
                    value={this.state.startTime}
                    type="time"
                    size="large"
                    name="startTime"
                    onChange={this.onChange}
                    placeholder="large size"
                    prefix={<MDBIcon icon="clock" />}
                  />

                  <label className="reservation-label">Return Time :</label>
                  <Input
                    value={this.state.startTime}
                    type="time"
                    size="large"
                    name="returnTime"
                    onChange={this.onChange}
                    placeholder="large size"
                    prefix={<MDBIcon icon="clock" />}
                  />

                  <label className="reservation-label">Total of Days :</label>
                  <div className="d-flex">
                    <Input
                      readOnly
                      value={this.state.totalDays}
                      type="text"
                      size="large"
                      name="totalDays"
                      placeholder={"Total of Days"}
                      prefix={<MDBIcon icon="calendar-day" />}
                    />
                    <MDBBtn
                      rounded
                      className="white-text"
                      onClick={() => {
                        if (diff >= 0) this.setState({ totalDays: diff });
                      }}
                      color="light-blue"
                      size="sm"
                    >
                      calcul total of days
                    </MDBBtn>
                  </div>
                  <label className="reservation-label">Price Per Day :</label>
                  <Input
                    readOnly
                    value={post.pricePerDay}
                    type="text"
                    size="large"
                    prefix={<MDBIcon icon="dollar-sign" />}
                  />
                  <label className="reservation-label">Total Price :</label>
                  <div className="d-flex">
                    <Input
                      readOnly
                      value={this.state.totalPrice}
                      type="text"
                      size="large"
                      placeholder="Total price"
                      prefix={<MDBIcon icon="credit-card" />}
                    />
                    <MDBBtn
                      rounded
                      className="white-text"
                      onClick={this.onClickCalcul}
                      color="light-blue"
                      size="sm"
                    >
                      calcul total price
                    </MDBBtn>
                  </div>
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn
                    color="green"
                    className="white-text"
                    onClick={this.onClickClose}
                  >
                    <MDBIcon size="lg" icon="arrow-circle-left" />
                    &nbsp; Close
                  </MDBBtn>
                  <MDBBtn color="primary" onClick={()=>this.onSubmit(post._id)}>
                    <MDBIcon icon="check-circle" size="lg" />
                    Reserve
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModal>
            ) : this.state.status === "Delete" &&
              auth.isAuthenticated === true &&
              auth.user.id === post.user ? (
              <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>
                  Delete {post.brand} {post.model}
                </MDBModalHeader>
                <MDBModalBody>
                  Post can not be recovered after deleteing , are you sur to
                  delete this post ?
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn
                    color="green"
                    className="white-text"
                    onClick={this.onClickClose}
                  >
                    <MDBIcon size="lg" icon="arrow-circle-left" />
                    &nbsp;&nbsp;Close
                  </MDBBtn>
                  <MDBBtn
                    color="danger"
                    onClick={this.onConfirmDelete.bind(this, post._id)}
                  >
                    <MDBIcon far icon="trash-alt" size="lg" />
                    &nbsp;&nbsp;Confirm
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModal>
            ) : auth.isAuthenticated === false ? (
              <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>
                  You must to have a client Account
                </MDBModalHeader>
                <MDBModalBody>
                  <h5>
                    if you don't have a client account, you need to&nbsp;
                    <Link to="/signup">register</Link>
                  </h5>
                  <h5>
                    If you already have a client account&nbsp;
                    <Link to="/login">login</Link>
                  </h5>
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn
                    color="green"
                    className="white-text"
                    onClick={this.onClickClose}
                  >
                    <MDBIcon size="lg" icon="arrow-circle-left" />
                    &nbsp; Close
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModal>
            ) : null}
          </div>
          <div className="publish-agency">
            <h3>Published by</h3>
            <div className="client-link">
              <Avatar
                size={64}
                src="https://www.bigstockphoto.com/images/homepage/module-6.jpg"
              />
              &nbsp;&nbsp;<a href={`/profile/${post.handle}`}>{post.name}</a>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <MDBView src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="rgba-blue-grey-light d-flex justify-content-center align-items-center gradient">
            {postContent}
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}
PostPage.propTypes = {
  addReservation: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  getPostById: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.post,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  getPostById,
  deletePost,
  addReservation,
})(PostPage);
