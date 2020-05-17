import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Avatar } from "antd";
import { Carousel } from "react-responsive-carousel";

import Spinner from "../Common/Spinner";
import { getPostById } from "../../actions/postActions";

import { Input } from "antd";

import {
  MDBMask,
  MDBView,
  MDBContainer,
  MDBTypography,
  MDBBox,
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalHeader,
  MDBModalFooter,
  MDBAlert,
  MDBModalBody,
  MDBInput,
} from "mdbreact";
import { Link } from "react-router-dom";

class PostPage extends Component {
  state = {
    modal: false,
    startDate: "",
    returnDate: "",
    startTime: "",
    returnTime: "",
    totalOfDays: "",
    totalPrice: "",
    errors: {},
  };

  onClickClose = () => {
    this.toggle();
    this.setState({
      startDate: "",
      returnDate: "",
      startTime: "",
      returnTime: "",
      totalOfDays: 0,
      totalPrice: 0,
    });
  };

  onClickCalcul = () => {
    this.setState({
      totalPrice:
        this.state.totalOfDays * parseInt(this.props.post.post.pricePerDay, 10),
    });
  };

  componentDidMount = () => {
    this.props.getPostById(this.props.match.params.id);
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    const { post, loading } = this.props.post;
    const { auth } = this.props;
    const { errors } = this.state;
    const fdate = new Date(this.state.startDate);
    const ldate = new Date(this.state.returnDate);

    const diff = (ldate - fdate) / 86400000;

    let postContent;

    if (post === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <MDBContainer>
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
            {auth.user.id != post.user && post.role != "Agency" ? (
              <MDBBtn size="lg" rounded onClick={this.toggle} color="danger">
                Reserve Now
              </MDBBtn>
            ) : auth.user.id === post.user ? (
              <Link to={`/posts/edit_post/${post._id}`}>
                <MDBBtn size="lg" rounded color="success">
                  Edit
                </MDBBtn>
              </Link>
            ) : null}
            {auth.isAuthenticated === true ? (
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
                      value={this.state.totalOfDays}
                      type="text"
                      size="large"
                      name="returnTime"
                      placeholder={"Total of Days"}
                      prefix={<MDBIcon icon="calendar-day" />}
                    />
                    <MDBBtn
                      rounded
                      className="white-text"
                      onClick={() => {
                        if (diff >= 0) this.setState({ totalOfDays: diff });
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
                  <MDBBtn color="secondary" onClick={this.onClickClose}>
                    Close
                  </MDBBtn>
                  <MDBBtn color="primary">Reserve</MDBBtn>
                </MDBModalFooter>
              </MDBModal>
            ) : (
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
                  <MDBBtn color="secondary" onClick={this.toggle}>
                    Close
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModal>
            )}
          </div>
          <div className="publish-agency">
            <h3>Published by</h3>
            <div className="client-link">
              <Avatar
                size={64}
                src="https://www.bigstockphoto.com/images/homepage/module-6.jpg"
              />
              &nbsp;&nbsp;<a href="#">{post.name}</a>
            </div>
          </div>
        </MDBContainer>
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

export default connect(mapStateToProps, { getPostById })(PostPage);
