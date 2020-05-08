import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Avatar } from "antd";
import { Carousel } from "react-responsive-carousel";

import Spinner from "../Common/Spinner";
import { getPostById } from "../../actions/postActions";

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
    endDate: "",
    startTime: "",
    endTime: "",
    totalOfDays: 0,
    totalPrice: 0,
  };

  componentDidMount = () => {
    this.props.getPostById(this.props.match.params.id);
  };

  handleCalculDays = () => {
    var start = new Date(this.state.startDate);
    var end = new Date(this.state.endDate);
    var total = 0;
    this.state.endDate != "" && this.state.startDate != ""
      ? this.state.endDate > this.state.startDate
        ? (total = (end - start) / 86400000)
        : alert("superieur")
      : alert("put start and end");
    this.setState({ totalOfDays: total });
  };

  handleTotalPrice = () => {
    this.handleCalculDays();
    this.setState({
      totalPrice: this.state.totalOfDays * this.state.pricePerDay,
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    const { post, loading } = this.props.post;
    const { auth } = this.props;

    let postContent;

    if (post === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <MDBContainer>
          <div className="post-carousel">
            <Carousel>
              <div className="carousel-picture">
                <img src="https://www.bigstockphoto.com/images/homepage/module-6.jpg" />
              </div>
              <div className="carousel-picture">
                <img src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg" />
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
            {auth.isAthenticated === true ? (
              <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>
                  Reservation formulaire
                </MDBModalHeader>
                <MDBModalBody>
                  <MDBAlert className="alert-notice" color="success">
                    <h4 className="alert-heading">
                      <MDBIcon icon="exclamation-triangle" />
                      &nbsp;&nbsp; Important
                    </h4>
                    <hr />
                    <p className="mb-0">
                      Whenever you need to, be sure to use margin utilities to
                      keep things nice and tidy.
                    </p>
                  </MDBAlert>
                  <div className="reservation-time">
                    <label className="reservation-label">Start Date :</label>
                    <MDBInput
                      icon="calendar-alt"
                      type="date"
                      onChange={(e) =>
                        this.setState({ startDate: e.target.value })
                      }
                      size="sm"
                    />
                    <label className="reservation-label">Return Date :</label>
                    <MDBInput
                      icon="calendar-alt"
                      type="date"
                      onChange={(e) =>
                        this.setState({ endDate: e.target.value })
                      }
                      size="sm"
                    />
                  </div>
                  <div className="reservation-time">
                    <label className="reservation-label">Start Time :</label>
                    <MDBInput
                      icon="clock"
                      type="time"
                      onChange={(e) =>
                        this.setState({ startTime: e.target.value })
                      }
                      size="sm"
                    />
                    <label className="reservation-label">Return Time :</label>
                    <MDBInput
                      icon="clock"
                      type="time"
                      value={this.state.startTime}
                      size="sm"
                      onChange={(e) =>
                        this.setState({ endTime: e.target.value })
                      }
                    />
                  </div>
                  <div className="reservation-time">
                    <h5>Price per day : </h5>
                    <h5 className="price-view"> {post.pricePerDay} </h5>
                    <h5>dt/day</h5>
                  </div>
                  <div className="calcul-total">
                    <h5>Total : </h5>
                    <h5 className="price-view">{this.state.totalPrice}</h5>
                    <MDBBtn
                      rounded
                      size="sm"
                      onClick={this.handleTotalPrice}
                      outline
                      color="primary"
                    >
                      Calcul
                    </MDBBtn>
                  </div>
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color="secondary" onClick={this.toggle}>
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
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.post,
});

export default connect(mapStateToProps, { getPostById })(PostPage);
