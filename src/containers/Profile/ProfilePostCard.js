import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { editPost, deletePost } from "../../actions/postActions";

import { Input, Select, Avatar } from "antd";
import {
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
const { Option } = Select;

class ProfilePostCard extends Component {
  state = {
    step: "",
    modal: false,
    brand: "",
    model: "",
    transmission: "",
    fuel: "",
    pricePerDay: "",
    adress: "",
    state: "",
    country: "",
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChooseDelete = () => {
    this.setState({ step: "Delete" });
    this.toggle();
  };

  onSubmitEdit = (id) => {
    const postData = {
      brand: this.state.brand,
      model: this.state.model,
      fuel: this.state.fuel,
      transmission: this.state.transmission,
      adress: this.state.adress,
      state: this.state.state,
      country: this.state.country,
      pricePerDay: (this.state.pricePerDay + " "+"dt/day")
    };
    this.props.editPost(id,postData);
    window.location.reload(false);

  };
  onSubmitDelete = (id) => {
    this.props.deletePost(id);
    window.location.reload(false);

  };

  render() {
    const { my_post } = this.props;
    const onChooseEdit = () => {
      this.setState({
        step: "Edit",
        brand: my_post.brand,
        model: my_post.model,
        transmission: my_post.transmission,
        fuel: my_post.fuel,
        pricePerDay: my_post.pricePerDay,
        adress: my_post.adress,
        state: my_post.state,
        country: my_post.country,
      });
      this.toggle();
    };
    return (
      <Link>
        <div className="p-2 profile-post-card mr-3 mb-3">
          <div className="d-flex align-items-center ">
            <Avatar
              className="post-avatar"
              shape="square"
              size={110}
              src="https://img.autoplus.fr/news/2019/06/20/1539713/a6d052ec615a21142260c7c9-1200-800.jpg"
            />
            <div className="ml-5">
              <h5>{my_post.brand + " " + my_post.model}</h5>
              <h5>{my_post.pricePerDay}</h5>
            </div>
            <div className="ml-5 d-flex">
              <MDBBtn onClick={onChooseEdit} color="yellow">
                <MDBIcon size="lg" icon="edit" />
              </MDBBtn>
              <MDBBtn onClick={this.onChooseDelete} color="danger">
                <MDBIcon size="lg" icon="times" />
              </MDBBtn>
            </div>

            {this.state.step === "Delete" ? (
              <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>
                  Delete {my_post.brand} {my_post.model}
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
                    onClick={this.onSubmitDelete.bind(this, my_post._id)}
                  >
                    <MDBIcon far icon="trash-alt" size="lg" />
                    &nbsp;&nbsp;Confirm
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModal>
            ) : (
              <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>
                  Edit your {my_post.brand + " " + my_post.model}
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
                        this.setState({ pricePerDay: e.target.value })
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
                    onClick={this.onSubmitEdit.bind(this, my_post._id)}
                  >
                    <MDBIcon far icon="trash-alt" size="lg" />
                    &nbsp;&nbsp;Confirm
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModal>
            )}
          </div>
        </div>
      </Link>
    );
  }
}

ProfilePostCard.propTypes = {
  editPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default connect(null, { editPost, deletePost })(ProfilePostCard);
