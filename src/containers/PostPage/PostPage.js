import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Spinner from "../Common/Spinner";
import { getPostById, deletePost, editPost } from "../../actions/postActions";
import { addReservation } from "../../actions/reservationActions";

import { Avatar, Input, Select } from "antd";
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

const { Option } = Select;
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
    status: "",
    brand: "",
    model: "",
    fuel: "",
    transmission: "",
    adress: "",
    state: "",
    country: "",
    pricePerDay: "",
    errors: {},
    errors: {},
  };

  componentDidMount = () => {
    this.props.getPostById(this.props.match.params.id);
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.post.post) {
      const post = nextProps.post.post;
      this.setState({
        brand: post.brand,
        model: post.model,
        fuel: post.fuel,
        transmission: post.transmission,
        adress: post.adress,
        state: post.state,
        country: post.country,
        pricePerDay: post.pricePerDay,
      });
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

  onClickEdit = () => {
    this.setState({ status: "Edit" });
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

  onSubmitEdit = (id) => {
   const brand = this.state.brand;
   const model = this.state.model;
   const fuel = this.state.fuel;
   const transmission = this.state.transmission;
   const adress = this.state.adress;
   const state = this.state.state;
   const country = this.state.country;
   const pricePerDay = this.state.pricePerDay;

    this.props.editPost(
      id,
     { brand,
      model,
      fuel,
      transmission,
      adress,
      state,
      country,
      pricePerDay}
    );
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
    this.onClickClose();
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
        <div className="d-flex">
          <div className="post-carousel mr-5">
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
                <MDBBtn
                  onClick={this.onClickEdit}
                  size="lg"
                  rounded
                  color="warning"
                  className="font-weight-bold"
                >
                  <MDBIcon icon="edit" />
                  &nbsp; Edit
                </MDBBtn>
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
                  <MDBBtn
                    color="primary"
                    onClick={() => this.onSubmit(post._id)}
                  >
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
            ) : this.state.status === "Edit" ? (
              <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>
                  Edit your {post.brand + " " + post.model}
                </MDBModalHeader>
                <MDBModalBody className="d-flex flex-column align-items-center">
                  <div className="d-flex flex-column align-items-start mt-2">
                    <label className="black-text">
                      <MDBIcon icon="car-side" />
                      &nbsp;&nbsp; Brand :
                    </label>
                    <Select
                      value={this.state.brand}
                      size="large"
                      onChange={(value) => this.setState({ brand: value })}
                      style={{ width: "230px" }}
                    >
                      <Option value="">Choose the brand</Option>
                      <Option value="BMW">BMW</Option>
                      <Option value="Ford">Ford</Option>
                      <Option value="Hyundai">Hyundai</Option>
                      <Option value="Kia">Kia</Option>
                      <Option value="Nissan">Nissan</Option>
                      <Option value="Peugeot">Peugeot</Option>
                      <Option value="Toyota">Toyota</Option>
                      <Option value="Volkswagen">Volkswagen</Option>
                    </Select>
                  </div>
                  <div className="d-flex flex-column align-items-start mt-2">
                    <label className="black-text">
                      <MDBIcon icon="question-circle" />
                      &nbsp;&nbsp;Model:
                    </label>
                    {this.state.brand === "BMW" ? (
                      <Select
                        size="large"
                        value={this.state.model}
                        style={{ width: "230px" }}
                        onChange={(value) => this.setState({ model: value })}
                      >
                        <Option value="">Choose the Model</Option>
                        <Option value="Serie 1">Serie 1</Option>
                        <Option value="Serie 2">Serie 2</Option>
                        <Option value="Serie 3">Serie 3</Option>
                        <Option value="Serie 4">Serie 4</Option>
                        <Option value="Serie 5">Serie 5</Option>
                        <Option value="Serie 7">Serie 7</Option>
                        <Option value="X 1">X 1</Option>
                        <Option value="X 2">X 2</Option>
                        <Option value="X 3">X 3</Option>
                        <Option value="X 4">X 4</Option>
                        <Option value="X 5">X 5</Option>
                        <Option value="X 6">X 6</Option>
                        <Option value="X 7">X 7</Option>
                        <Option value="i 3">i3</Option>
                        <Option value="i 8">i8</Option>
                      </Select>
                    ) : this.state.brand === "Hyundai" ? (
                      <Select
                        size="large"
                        value={this.state.model}
                        style={{ width: "230px" }}
                        onChange={(value) => this.setState({ model: value })}
                      >
                        <Option value="">Choose the Model</Option>
                        <Option value="i10">i10</Option>
                        <Option value="Gran i10">Gran i10</Option>
                        <Option value="i20">i20</Option>
                        <Option value="i30">i30</Option>
                        <Option value="i40">i40</Option>
                        <Option value="Accent">Accent</Option>
                        <Option value="Elantra">Elantra</Option>
                        <Option value="Sonata">Sonata</Option>
                        <Option value="ix-35">ix-35</Option>
                        <Option value="Veloster">Veloster</Option>
                        <Option value="Tucson">Tucson</Option>
                        <Option value="Santa Fe">Santa Fe</Option>
                        <Option value="Palisade">Palisade</Option>
                        <Option value="Starex">Starex</Option>
                        <Option value="H350">H350</Option>
                      </Select>
                    ) : this.state.brand === "Ford" ? (
                      <Select
                        size="large"
                        style={{ width: "230px" }}
                        onChange={(value) => this.setState({ model: value })}
                        value={this.state.model}
                      >
                        <Option value="">Choose the Model</Option>
                        <Option value="KA">KA</Option>
                        <Option value="Fiesta">Fiesta</Option>
                        <Option value="Focus">Focus</Option>
                        <Option value="Mondeo">Mondeo</Option>
                        <Option value="Mustang">Mustang</Option>
                        <Option value="Ranger">Ranger</Option>
                        <Option value="F-150">F-150</Option>
                        <Option value="S-Max">S-Max</Option>
                        <Option value="Puma">Puma</Option>
                        <Option value="Escape">Escape</Option>
                        <Option value="Explorer">Explorer</Option>
                      </Select>
                    ) : this.state.brand === "Kia" ? (
                      <Select
                        size="large"
                        style={{ width: "230px" }}
                        onChange={(value) => this.setState({ model: value })}
                        value={this.state.model}
                      >
                        <Option value="">Choose the Model</Option>
                        <Option value="Picanto">Picanto</Option>
                        <Option value="Rio">Rio</Option>
                        <Option value="Cerato">Cerato</Option>
                        <Option value="Sorento">Sorento</Option>
                        <Option value="Optima">Optima</Option>
                        <Option value="Ranger">Ranger</Option>
                        <Option value="Ceed">Ceed</Option>
                        <Option value="Sportage">Sportage</Option>
                        <Option value="Soul">Soul</Option>
                        <Option value="K900">K900</Option>
                        <Option value="Cadenza">Cadenza</Option>
                      </Select>
                    ) : this.state.brand === "Nissan" ? (
                      <Select
                        size="large"
                        style={{ width: "230px" }}
                        onChange={(value) => this.setState({ model: value })}
                        value={this.state.model}
                      >
                        <Option value="">Choose the Model</Option>
                        <Option value="Micra">Micra</Option>
                        <Option value="X-trail">X-trail</Option>
                        <Option value="Juke">Juke</Option>
                        <Option value="Qashqai">Qashqai</Option>
                        <Option value="GT-R">GT-R</Option>
                        <Option value="Rogue">Rogue</Option>
                        <Option value="Versa">Versa</Option>
                        <Option value="NV-100">NV-100</Option>
                        <Option value="Navara">Navara</Option>
                        <Option value="Terra">Terra</Option>
                      </Select>
                    ) : this.state.brand === "Peugeot" ? (
                      <Select
                        size="large"
                        style={{ width: "230px" }}
                        onChange={(value) => this.setState({ model: value })}
                        value={this.state.model}
                      >
                        <Option className="oOption-filtre-post" value="">
                          Choose the Model
                        </Option>
                        <Option value="108">108</Option>
                        <Option value="208">208</Option>
                        <Option value="308">308</Option>
                        <Option value="508">508</Option>
                        <Option value="2008">2008</Option>
                        <Option value="3008">3008</Option>
                        <Option value="4008">4008</Option>
                        <Option value="5008">5008</Option>
                        <Option value="Partner">Partner</Option>
                        <Option value="Bipper">Bipper</Option>
                        <Option value="Boxer">Boxer</Option>
                      </Select>
                    ) : this.state.brand === "Toyota" ? (
                      <Select
                        size="large"
                        value={this.state.model}
                        style={{ width: "230px" }}
                        onChange={(value) => this.setState({ model: value })}
                      >
                        <Option value="">Choose the Model</Option>
                        <Option value="Aygo">Aygo</Option>
                        <Option value="Yaris">Yaris</Option>
                        <Option value="Avanza">Avanza</Option>
                        <Option value="Land Cruiser">Land Cruiser</Option>
                        <Option value="Corolla">Corolla</Option>
                        <Option value="Glanza">Glanza</Option>
                        <Option value="Hillux">Hillux</Option>
                        <Option value="Hiace">Hiace</Option>
                        <Option value="Fortuner">Fortuner</Option>
                      </Select>
                    ) : this.state.brand === "Volkswagen" ? (
                      <Select
                        size="large"
                        value={this.state.model}
                        style={{ width: "230px" }}
                        onChange={(value) => this.setState({ model: value })}
                      >
                        <Option value="">Choose the Model</Option>
                        <Option value="UP">UP</Option>
                        <Option value="Polo">Polo</Option>
                        <Option value="Golf">Golf</Option>
                        <Option value="Jetta">Jetta</Option>
                        <Option value="Passat">Passat</Option>
                        <Option value="Amarok">Amarok</Option>
                        <Option value="Transporter">Transporter</Option>
                        <Option value="Tiguan">Tiguan</Option>
                        <Option value="Touareg">Touareg</Option>
                      </Select>
                    ) : (
                      <Select
                        size="large"
                        value={this.state.model}
                        style={{ width: "230px" }}
                        onChange={(value) => this.setState({ model: value })}
                      >
                        <Option value="">Choose the brand first</Option>
                      </Select>
                    )}
                  </div>
                  <div className="d-flex flex-column align-items-start mt-2">
                    <label className="black-text">
                      <MDBIcon icon="gas-pump" />
                      &nbsp;&nbsp; Fuel :
                    </label>
                    <Select
                      size="large"
                      onChange={(value) => this.setState({ fuel: value })}
                      style={{ width: "230px" }}
                      value={this.state.fuel}
                    >
                      <Option value="">Choose the fuel</Option>
                      <Option value="Gasoline">Gasoline</Option>
                      <Option value="Diesel">Diesel</Option>
                      <Option value="Hybrid">Hybrid</Option>
                    </Select>
                  </div>
                  <div className="d-flex flex-column align-items-start mt-2">
                    <label className="black-text">
                      <MDBIcon icon="cogs" />
                      &nbsp;&nbsp; Transmission :
                    </label>
                    <Select
                      size="large"
                      onChange={(value) =>
                        this.setState({
                          transmission: value,
                        })
                      }
                      value={this.state.transmission}
                      style={{ width: "230px" }}
                    >
                      <Option value="">Choose the transmission</Option>
                      <Option value="Manual">Manual</Option>
                      <Option value="Automatic">Automatic</Option>
                    </Select>
                  </div>
                  <div className="d-flex flex-column align-items-start mt-2">
                    <label className="black-text">
                      <MDBIcon icon="file-invoice-dollar" />
                      &nbsp;&nbsp;Adress :
                    </label>
                    <Input
                      value={this.state.adress}
                      size="large"
                      style={{ width: "230px" }}
                      onChange={(e) => this.setState({ adress: e.target.vlue })}
                    />
                  </div>
                  <div className="d-flex flex-column align-items-start mt-2">
                    <label className="black-text">
                      <MDBIcon icon="flag" />
                      &nbsp; Country :
                    </label>
                    <Select
                      value={this.state.country}
                      size="large"
                      style={{ width: "230px" }}
                      onChange={(value) => this.setState({ country: value })}
                    >
                      <Option value="">
                        <div className="demo-Option-label-item">
                          Select country
                        </div>
                      </Option>
                      <Option value="Tunisia">
                        <span role="img" aria-label="Beja">
                          <MDBIcon className="tunisia flag" />
                        </span>
                        Tunisia
                      </Option>
                    </Select>
                  </div>
                  <div className="d-flex flex-column align-items-start mt-2">
                    <label className="black-text">
                      <MDBIcon icon="street-view" />
                      &nbsp; State :
                    </label>
                    {this.state.country === "Tunisia" ? (
                      <Select
                        size="large"
                        value={this.state.state}
                        style={{ width: "230px" }}
                        onChange={(value) => this.setState({ state: value })}
                      >
                        <Option value="">
                          <div>
                            <span role="img" aria-label="Tunisia">
                              <MDBIcon className="tunisia flag" />
                            </span>
                            Select state
                          </div>
                        </Option>
                        <Option value="Ariana">
                          <span role="img" aria-label="Ariana">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Ariana
                        </Option>
                        <Option value="Béja">
                          <span role="img" aria-label="Beja">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Béja
                        </Option>
                        <Option value="Ben Arous">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Ben Arous
                        </Option>
                        <Option value="Bizerte">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Bizerte
                        </Option>
                        <Option value="Gabés">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Gabés
                        </Option>
                        <Option value="Gafsa">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Gafsa
                        </Option>
                        <Option value="Jendouba">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Jendouba
                        </Option>
                        <Option value="Kairouan">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Kairouan
                        </Option>
                        <Option value="Kasserine">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Kasserine
                        </Option>
                        <Option value="Kebili">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Kebili
                        </Option>
                        <Option value="kef">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          kef
                        </Option>
                        <Option value="Mahdia">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Mahdia
                        </Option>
                        <Option value="Mannouba">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Mannouba
                        </Option>
                        <Option value="Mednine">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Mednine
                        </Option>
                        <Option value="Monastir">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Monastir
                        </Option>
                        <Option value="Nabeul">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Nabeul
                        </Option>
                        <Option value="Sfax">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Sfax
                        </Option>
                        <Option value="Sidi Bouzid">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Sidi Bouzid
                        </Option>
                        <Option value="Sliana">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Sliana
                        </Option>
                        <Option value="Sousse">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Sousse
                        </Option>
                        <Option value="Tataouine">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Tataouine
                        </Option>
                        <Option value="Tozeur">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Tozeur
                        </Option>
                        <Option value="Tunis">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Tunis
                        </Option>
                        <Option value="Zaghouan">
                          <span role="img" aria-label="China">
                            <MDBIcon className="tunisia flag" />
                          </span>
                          Zaghouan
                        </Option>
                      </Select>
                    ) : (
                      <Select
                        size="large"
                        value={this.state.state}
                        style={{ width: "230px" }}
                        onChange={(value) => this.setState({ state: value })}
                      >
                        <Option value="">Select country first</Option>
                      </Select>
                    )}
                  </div>
                  <div className="d-flex flex-column align-items-start mt-2">
                    <label className="black-text">
                      <MDBIcon icon="dollar-sign" />
                      &nbsp;&nbsp;Price per day :
                    </label>
                    <Input
                      type="number"
                      value={parseInt(this.state.pricePerDay, 10)}
                      placeholder="Price per day"
                      size="large"
                      style={{ width: "230px" }}
                      onChange={(e) =>
                        this.setState({ pricePerDay: e.target.vlue })
                      }
                    />
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
                  <MDBBtn
                    color="danger"
                    onClick={this.onSubmitEdit.bind(this, post._id)}
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
  editPost: PropTypes.func.isRequired,
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
  editPost,
})(PostPage);
