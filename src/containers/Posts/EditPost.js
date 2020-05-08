import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { editPost, getPostById } from "../../actions/postActions";

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation,
} from "mdbreact";
import errorsReducer from "../../reducers/errorsReducer";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPicture: "",
      previous: "previous",
      brand: "",
      model: "",
      state: "",
      country: "",
      fuel: "",
      transmission: "",
      pricePerDay: "",
      errors: {},
    };
  }
  componentDidMount = () => {
    this.props.getPostById();
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
        country: post.country,
        state: post.state,
        transmission: post.transmission,
        pricePerDay: post.pricePerDay,
      });
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    const { user } = this.props.auth;
    const postData = {
      brand: this.state.brand,
      model: this.state.model,
      fuel: this.state.fuel,
      country: this.state.country,
      state: this.state.state,
      transmission: this.state.transmission,
      pricePerDay: this.state.pricePerDay,
    };
    this.props.editPost(postData);
  };

  onDrop = (picture) => {
    {
      this.state.pictures.length < 0
        ? this.setState({
            pictures: this.state.pictures.concat(picture),
          })
        : alert("max");
    }
  };

  handleClickAddPictures = () => {
    this.setState({ addPicture: "pictures", previous: "" });
  };

  handelClickPevious = () => {
    this.setState({ previous: "previous", addPicture: "" });
  };

  render() {
    const { errors } = this.state;
    const { post } = this.props.post;
    return (
      <div id="classicformpage">
        <MDBView src="https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol className="right-animation-add">
                  <MDBAnimation
                    type="fadeInLeft"
                    delay=".3s"
                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5 right-add-photo"
                  >
                    <h1 className="h1-responsive font-weight-bold white-text ">
                      Create your car Post easily and for free ... !
                    </h1>
                    <hr className="hr-light white-text" />
                  </MDBAnimation>
                </MDBCol>

                {this.state.addPicture === "pictures" &&
                this.state.previous === "" ? (
                  <MDBCol md="" xl="5" className="mb-4 all-post-card">
                    <MDBAnimation type="fadeInRight" delay=".3s">
                      <MDBCard id="classic-card" style={{ width: 540 }}>
                        <MDBCardBody className="white-text">
                          <h3 className=" text-center add-title font-weight-bold">
                            <MDBIcon icon="scroll" /> Car Pictures
                          </h3>
                          <hr className="hr-light" />
                          <div>
                            <input
                              onChange={this.onDrop}
                              imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                              maxFileSize={5242880}
                            />

                            {this.state.pictures.map((picture) =>
                              console.log(picture)
                            )}
                          </div>

                          <div className="text-center mt-4  picture-bottons">
                            <div className=" previous-button">
                              <MDBBtn
                                className=" font-weight-bold  btn-md black-text"
                                color="danger"
                                style={{ fontSize: 16 }}
                                onClick={this.handelClickPevious}
                              >
                                <MDBIcon icon="arrow-circle-left" size="lg" />
                                &nbsp; &nbsp; Previous
                              </MDBBtn>
                            </div>
                            <div className=" Post-button">
                              <MDBBtn
                                className=" font-weight-bold  btn-md black-text"
                                color="success"
                                style={{ fontSize: 16 }}
                                onClick={this.handelClickPevious}
                                labelStyles={{ width: 500 }}
                              >
                                Post &nbsp; &nbsp;
                                <MDBIcon icon="share-square" size="lg" />
                              </MDBBtn>
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                ) : this.state.addPicture === "" &&
                  this.state.previous === "previous" ? (
                  <MDBCol md="" xl="5" className="mb-4 all-post-card">
                    <MDBAnimation type="fadeInRight" delay=".3s">
                      <MDBCard id="classic-card" style={{ width: 540 }}>
                        <MDBCardBody className="white-text">
                          <h3 className=" text-center add-title font-weight-bold">
                            <MDBIcon icon="scroll" /> Car Information
                          </h3>
                          <hr className="hr-light" />
                          <div className="All-selector">
                            <div className="left-side-selector">
                              <div className="full-selector">
                                <label className="label-post-add">
                                  <MDBIcon icon="car-side" />
                                  &nbsp;&nbsp; Brand :
                                </label>
                                <select
                                  className="select-post-add"
                                  name="brand"
                                  onChange={this.onChange}
                                  value={this.state.brand}
                                  error={errors.brand}
                                >
                                  <option
                                    className="option-add-post"
                                    value=""
                                    selected
                                  >
                                    Choose the brand
                                  </option>
                                  <option className="option-add-post">
                                    BMW
                                  </option>
                                  <option className="option-add-post">
                                    Ford
                                  </option>
                                  <option className="option-add-post">
                                    Hyundai
                                  </option>
                                  <option className="option-add-post">
                                    Kia
                                  </option>
                                  <option className="option-add-post">
                                    Nissan
                                  </option>
                                  <option className="option-add-post">
                                    Peugeot
                                  </option>
                                  <option className="option-add-post">
                                    Toyota
                                  </option>
                                  <option className="option-add-post">
                                    Volkswagen
                                  </option>
                                </select>
                              </div>
                              {this.state.brand === "BMW" ? (
                                <div className="full-selector">
                                  <label className="label-post-add">
                                    <MDBIcon icon="question-circle" />
                                    &nbsp;&nbsp;Model:
                                  </label>
                                  <select
                                    className="select-post-add"
                                    name="model"
                                    onChange={this.onChange}
                                    value={this.state.model}
                                    error={errors.model}
                                  >
                                    <option
                                      className="option-add-post"
                                      value=""
                                      selected
                                    >
                                      Choose the Model
                                    </option>
                                    <option className="option-add-post">
                                      Serie 1
                                    </option>
                                    <option className="option-add-post">
                                      Serie 2
                                    </option>
                                    <option className="option-add-post">
                                      Serie 3
                                    </option>
                                    <option className="option-add-post">
                                      Serie 4
                                    </option>
                                    <option className="option-add-post">
                                      Serie 5
                                    </option>
                                    <option className="option-add-post">
                                      Serie 7
                                    </option>
                                    <option className="option-add-post">
                                      X 1
                                    </option>
                                    <option className="option-add-post">
                                      X 2
                                    </option>
                                    <option className="option-add-post">
                                      X 3
                                    </option>
                                    <option className="option-add-post">
                                      X 4
                                    </option>
                                    <option className="option-add-post">
                                      X 5
                                    </option>
                                    <option className="option-add-post">
                                      X 6
                                    </option>
                                    <option className="option-add-post">
                                      X 7
                                    </option>
                                    <option className="option-add-post">
                                      i3
                                    </option>
                                    <option className="option-add-post">
                                      i8
                                    </option>
                                  </select>
                                </div>
                              ) : this.state.brand === "Hyundai" ? (
                                <div className="full-selector">
                                  <label className="label-post-add">
                                    <MDBIcon icon="question-circle" />
                                    &nbsp;&nbsp; Model:
                                  </label>
                                  <select
                                    className="select-post-add"
                                    name="model"
                                    onChange={this.onChange}
                                    error={errors.model}
                                    value={this.state.model}
                                  >
                                    <option
                                      className="option-add-post"
                                      value=""
                                      selected
                                    >
                                      Choose the Model
                                    </option>
                                    <option className="option-add-post">
                                      i10
                                    </option>
                                    <option className="option-add-post">
                                      Gran i10
                                    </option>
                                    <option className="option-add-post">
                                      i20
                                    </option>
                                    <option className="option-add-post">
                                      i30
                                    </option>
                                    <option className="option-add-post">
                                      i40
                                    </option>
                                    <option className="option-add-post">
                                      Accent
                                    </option>
                                    <option className="option-add-post">
                                      Elantra
                                    </option>
                                    <option className="option-add-post">
                                      Sonata
                                    </option>
                                    <option className="option-add-post">
                                      ix-35
                                    </option>
                                    <option className="option-add-post">
                                      Veloster
                                    </option>
                                    <option className="option-add-post">
                                      Tucson
                                    </option>
                                    <option className="option-add-post">
                                      Santa Fe
                                    </option>
                                    <option className="option-add-post">
                                      Palisade
                                    </option>
                                    <option className="option-add-post">
                                      Starex
                                    </option>
                                    <option className="option-add-post">
                                      H350
                                    </option>
                                  </select>
                                </div>
                              ) : this.state.brand === "Ford" ? (
                                <div className="full-selector">
                                  <label className="label-post-add">
                                    <MDBIcon icon="question-circle" />
                                    &nbsp;&nbsp; Model:
                                  </label>
                                  <select
                                    className="select-post-add"
                                    name="model"
                                    onChange={this.onChange}
                                    error={errors.model}
                                    value={this.state.model}
                                  >
                                    <option
                                      className="option-add-post"
                                      value=""
                                      selected
                                    >
                                      Choose the Model
                                    </option>
                                    <option className="option-add-post">
                                      KA
                                    </option>
                                    <option className="option-add-post">
                                      Fiesta
                                    </option>
                                    <option className="option-add-post">
                                      Focus
                                    </option>
                                    <option className="option-add-post">
                                      Mondeo
                                    </option>
                                    <option className="option-add-post">
                                      Mustang
                                    </option>
                                    <option className="option-add-post">
                                      Ranger
                                    </option>
                                    <option className="option-add-post">
                                      F-150
                                    </option>
                                    <option className="option-add-post">
                                      S-Max
                                    </option>
                                    <option className="option-add-post">
                                      Puma
                                    </option>
                                    <option className="option-add-post">
                                      Escape
                                    </option>
                                    <option className="option-add-post">
                                      Explorer
                                    </option>
                                  </select>
                                </div>
                              ) : this.state.brand === "Kia" ? (
                                <div className="full-selector">
                                  <label className="label-post-add">
                                    <MDBIcon icon="question-circle" />
                                    &nbsp;&nbsp; Model:
                                  </label>
                                  <select
                                    className="select-post-add"
                                    name="model"
                                    onChange={this.onChange}
                                    error={errors.model}
                                    value={this.state.model}
                                  >
                                    <option
                                      className="option-add-post"
                                      value=""
                                      selected
                                    >
                                      Choose the Model
                                    </option>
                                    <option className="option-add-post">
                                      Picanto
                                    </option>
                                    <option className="option-add-post">
                                      Rio
                                    </option>
                                    <option className="option-add-post">
                                      Cerato
                                    </option>
                                    <option className="option-add-post">
                                      Sorento
                                    </option>
                                    <option className="option-add-post">
                                      Optima
                                    </option>
                                    <option className="option-add-post">
                                      Ranger
                                    </option>
                                    <option className="option-add-post">
                                      Ceed
                                    </option>
                                    <option className="option-add-post">
                                      Sportage
                                    </option>
                                    <option className="option-add-post">
                                      Soul
                                    </option>
                                    <option className="option-add-post">
                                      K900
                                    </option>
                                    <option className="option-add-post">
                                      Cadenza
                                    </option>
                                  </select>
                                </div>
                              ) : this.state.brand === "Nissan" ? (
                                <div className="full-selector">
                                  <label className="label-post-add">
                                    <MDBIcon icon="question-circle" />
                                    &nbsp;&nbsp; Model:
                                  </label>
                                  <select
                                    className="select-post-add"
                                    name="model"
                                    onChange={this.onChange}
                                    error={errors.model}
                                    value={this.state.model}
                                  >
                                    <option
                                      className="option-add-post"
                                      value=""
                                      selected
                                    >
                                      Choose the Model
                                    </option>
                                    <option className="option-add-post">
                                      Micra
                                    </option>
                                    <option className="option-add-post">
                                      X-trail
                                    </option>
                                    <option className="option-add-post">
                                      Juke
                                    </option>
                                    <option className="option-add-post">
                                      Qashqai
                                    </option>
                                    <option className="option-add-post">
                                      GT-R
                                    </option>
                                    <option className="option-add-post">
                                      Rogue
                                    </option>
                                    <option className="option-add-post">
                                      Versa
                                    </option>
                                    <option className="option-add-post">
                                      NV-100
                                    </option>
                                    <option className="option-add-post">
                                      Navara
                                    </option>
                                    <option className="option-add-post">
                                      Terra
                                    </option>
                                  </select>
                                </div>
                              ) : this.state.brand === "Peugeot" ? (
                                <div className="full-selector">
                                  <label className="label-post-add">
                                    <MDBIcon icon="question-circle" />
                                    &nbsp;&nbsp; Model:
                                  </label>
                                  <select
                                    className="select-post-add"
                                    name="model"
                                    onChange={this.onChange}
                                    error={errors.model}
                                    value={this.state.model}
                                  >
                                    <option
                                      className="option-add-post"
                                      value=""
                                      selected
                                    >
                                      Choose the Model
                                    </option>
                                    <option className="option-add-post">
                                      108
                                    </option>
                                    <option className="option-add-post">
                                      208
                                    </option>
                                    <option className="option-add-post">
                                      308
                                    </option>
                                    <option className="option-add-post">
                                      508
                                    </option>
                                    <option className="option-add-post">
                                      2008
                                    </option>
                                    <option className="option-add-post">
                                      3008
                                    </option>
                                    <option className="option-add-post">
                                      4008
                                    </option>
                                    <option className="option-add-post">
                                      5008
                                    </option>
                                    <option className="option-add-post">
                                      Partner
                                    </option>
                                    <option className="option-add-post">
                                      Bipper
                                    </option>
                                    <option className="option-add-post">
                                      Boxer
                                    </option>
                                  </select>
                                </div>
                              ) : this.state.brand === "Toyota" ? (
                                <div className="full-selector">
                                  <label className="label-post-add">
                                    <MDBIcon icon="question-circle" />
                                    &nbsp;&nbsp; Model:
                                  </label>
                                  <select
                                    className="select-post-add"
                                    name="model"
                                    onChange={this.onChange}
                                    error={errors.model}
                                    value={this.state.model}
                                  >
                                    <option
                                      className="option-add-post"
                                      value=""
                                      selected
                                    >
                                      Choose the Model
                                    </option>
                                    <option className="option-add-post">
                                      Aygo
                                    </option>
                                    <option className="option-add-post">
                                      Yaris
                                    </option>
                                    <option className="option-add-post">
                                      Avanza
                                    </option>
                                    <option className="option-add-post">
                                      Land Cruiser
                                    </option>
                                    <option className="option-add-post">
                                      Corolla
                                    </option>
                                    <option className="option-add-post">
                                      Glanza
                                    </option>
                                    <option className="option-add-post">
                                      Hillux
                                    </option>
                                    <option className="option-add-post">
                                      Hiace
                                    </option>
                                    <option className="option-add-post">
                                      Fortuner
                                    </option>
                                  </select>
                                </div>
                              ) : this.state.brand === "Volkswagen" ? (
                                <div className="full-selector">
                                  <label className="label-post-add">
                                    <MDBIcon icon="question-circle" />
                                    &nbsp;&nbsp; Model:
                                  </label>
                                  <select
                                    className="select-post-add"
                                    name="model"
                                    onChange={this.onChange}
                                    error={errors.model}
                                    value={this.state.model}
                                  >
                                    <option
                                      className="option-add-post"
                                      value=""
                                      selected
                                    >
                                      Choose the Model
                                    </option>
                                    <option className="option-add-post">
                                      UP
                                    </option>
                                    <option className="option-add-post">
                                      Polo
                                    </option>
                                    <option className="option-add-post">
                                      Golf
                                    </option>
                                    <option className="option-add-post">
                                      Jetta
                                    </option>
                                    <option className="option-add-post">
                                      Passat
                                    </option>
                                    <option className="option-add-post">
                                      Amarok
                                    </option>
                                    <option className="option-add-post">
                                      Transporter
                                    </option>
                                    <option className="option-add-post">
                                      Tiguan
                                    </option>
                                    <option className="option-add-post">
                                      Touareg
                                    </option>
                                  </select>
                                </div>
                              ) : (
                                <div className="full-selector">
                                  <label className="label-post-add">
                                    <MDBIcon icon="question-circle" />
                                    &nbsp;&nbsp; Model:
                                  </label>
                                  <select
                                    className="select-post-add"
                                    name="model"
                                    onChange={this.onChange}
                                    error={errors.model}
                                    value={this.state.model}
                                  >
                                    <option
                                      className="option-add-post"
                                      value=""
                                      selected
                                    >
                                      Choose the brand first
                                    </option>
                                  </select>
                                </div>
                              )}
                              <div className="full-selector">
                                <label className="label-post-add">
                                  <MDBIcon icon="gas-pump" />
                                  &nbsp;&nbsp; Fuel :
                                </label>
                                <select
                                  name="fuel"
                                  onChange={this.onChange}
                                  value={this.state.fuel}
                                  error={errors.fuel}
                                  className="select-post-add"
                                >
                                  <option
                                    className="option-add-post"
                                    value=""
                                    selected
                                  >
                                    Choose the fuel
                                  </option>
                                  <option className="option-add-post">
                                    Gasoline
                                  </option>
                                  <option className="option-add-post">
                                    Diesel
                                  </option>
                                  <option className="option-add-post">
                                    Hybrid
                                  </option>
                                </select>
                              </div>
                              <div className="full-selector">
                                <label className="label-post-add">
                                  <MDBIcon icon="cogs" />
                                  &nbsp;&nbsp; Transmission :
                                </label>
                                <select
                                  name="transmission"
                                  onChange={this.onChange}
                                  value={this.state.transmission}
                                  error={errors.transmission}
                                  className="select-post-add"
                                >
                                  <option
                                    className="option-add-post"
                                    className="option-add-post"
                                    value=""
                                    selected
                                  >
                                    Choose the transmission
                                  </option>
                                  <option
                                    className="option-add-post"
                                    className="option-add-post"
                                  >
                                    Manual
                                  </option>
                                  <option
                                    className="option-add-post"
                                    className="option-add-post"
                                  >
                                    Automatic
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div className="right-side-selector">
                              <div className="full-selector">
                                <label className="label-post-add">
                                  <MDBIcon icon="globe-africa" />
                                  &nbsp;&nbsp; Country :
                                </label>
                                <select
                                  name="country"
                                  onChange={this.onChange}
                                  error={errors.country}
                                  value={this.state.country}
                                  className="select-post-add"
                                >
                                  <option
                                    className="option-add-post"
                                    value=""
                                    selected
                                  >
                                    Choose country
                                  </option>
                                  <option>Tunisia</option>
                                </select>
                              </div>
                              <div className="full-selector">
                                <label className="label-post-add">
                                  <MDBIcon icon="map-marker-alt" />
                                  &nbsp;&nbsp; State :
                                </label>
                                {this.state.country === "Tunisia" ? (
                                  <select
                                    name="state"
                                    onChange={this.onChange}
                                    value={this.state.state}
                                    error={errors.state}
                                    className="select-post-add"
                                  >
                                    <option
                                      className="option-add-post"
                                      value=""
                                      selected
                                    >
                                      Choose the state
                                    </option>
                                    <option className="option-add-post">
                                      Ariana
                                    </option>
                                    <option className="option-add-post">
                                      Béja
                                    </option>
                                    <option className="option-add-post">
                                      Ben Arous
                                    </option>
                                    <option className="option-add-post">
                                      Bizerte
                                    </option>
                                    <option className="option-add-post">
                                      Gabés
                                    </option>
                                    <option className="option-add-post">
                                      Gafsa
                                    </option>
                                    <option className="option-add-post">
                                      Jendouba
                                    </option>
                                    <option className="option-add-post">
                                      Kairouan
                                    </option>
                                    <option className="option-add-post">
                                      Kasserine
                                    </option>
                                    <option className="option-add-post">
                                      Kebili
                                    </option>
                                    <option className="option-add-post">
                                      kef
                                    </option>
                                    <option className="option-add-post">
                                      Mahdia
                                    </option>
                                    <option className="option-add-post">
                                      Mannouba
                                    </option>
                                    <option className="option-add-post">
                                      Mednine
                                    </option>
                                    <option className="option-add-post">
                                      Monastir
                                    </option>
                                    <option className="option-add-post">
                                      Nabeul
                                    </option>
                                    <option className="option-add-post">
                                      Sfax
                                    </option>
                                    <option className="option-add-post">
                                      Sidi Bouzid
                                    </option>
                                    <option className="option-add-post">
                                      Sliana
                                    </option>
                                    <option className="option-add-post">
                                      Sousse
                                    </option>
                                    <option className="option-add-post">
                                      Tataouine
                                    </option>
                                    <option className="option-add-post">
                                      Tozeur
                                    </option>
                                    <option className="option-add-post">
                                      Tunis
                                    </option>
                                    <option className="option-add-post">
                                      Zaghouan
                                    </option>
                                  </select>
                                ) : (
                                  <select
                                    name="state"
                                    onChange={this.onChange}
                                    value={this.state.state}
                                    error={errors.state}
                                    className="select-post-add"
                                  >
                                    <option
                                      className="option-add-post"
                                      value=""
                                      selected
                                    >
                                      Choose country first
                                    </option>
                                  </select>
                                )}
                              </div>
                              <MDBInput
                                value={this.state.pricePerDay}
                                className="white-text"
                                iconClass="white-text price-add-post"
                                label="Price per day (dt/day)"
                                icon="dollar-sign"
                                type="number"
                                name="pricePerDay"
                                style={{ fontSize: 18 }}
                                error={errors.pricePerDay}
                                onChange={this.onChange}
                              />
                            </div>
                          </div>
                          <div className="text-center mt-4 black-text">
                            <div className=" add-picture-button">
                              <MDBBtn
                                onClick={this.onSubmit}
                                className=" font-weight-bold  btn-md"
                                color="warning"
                                style={{ fontSize: 16 }}
                              >
                                Add Pictures &nbsp; &nbsp;
                                <MDBIcon icon="arrow-circle-right" size="lg" />
                              </MDBBtn>
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                ) : null}
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

EditPost.propTypes = {
  editPost: PropTypes.func.isRequired,
  getPostById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStatetoProps = (state) => ({
  errors: state.errors,
  post: state.post,
  auth: state.auth,
});

export default connect(mapStatetoProps, { getPostById, editPost })(EditPost);
