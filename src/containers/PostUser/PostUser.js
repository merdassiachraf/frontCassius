import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Avatar } from "antd";
import { Carousel } from "react-responsive-carousel";
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
  MDBModalBody,
  MDBInput
} from "mdbreact";

class PostUser extends Component {
  state = {
    brand: "Toyota",
    model: "Yaris",
    fuel: "Diesel",
    transmission: "Automatic",
    carPicture1: "",
    carPicture2: "",
    carPicture3: "",
    carPicture4: "",
    carPicture5: "",
    carPicture6: "",
    carPicture7: "",
    carPicture8: "",
    carPicture9: "",
    carPicture10: "",
    state: "Bizerte",
    country: "Tunisia",
    pricePerDay: 130,
    adress: "104,cité hached",
    updateAdress: "",
    updateBrand: "",
    updateModel: "",
    updateFuel: "",
    updateTransmission: "",
    updateCarPicture1: "",
    updateCarPicture2: "",
    updateCarPicture3: "",
    updateCarPicture4: "",
    updateCarPicture5: "",
    updateCarPicture6: "",
    updateCarPicture7: "",
    updateCarPicture8: "",
    updateCarPicture9: "",
    updateCarPicture10: "",
    updateState: "",
    updateCountry: "",
    updatePricePerDay: 0
  };

  toggle = () => {
    this.updatePost();
    this.setState({
      modal: !this.state.modal
    });
  };
  updatePost = () => {
    this.setState({
      updateAdress: this.state.adress,
      updateBrand: this.state.brand,
      updateCarPicture1: this.state.carPicture1,
      updateCarPicture2: this.state.carPicture2,
      updateCarPicture3: this.state.carPicture3,
      updateCarPicture4: this.state.carPicture4,
      updateCarPicture5: this.state.carPicture5,
      updateCarPicture6: this.state.carPicture6,
      updateCarPicture7: this.state.carPicture7,
      updateCarPicture8: this.state.carPicture8,
      updateCarPicture9: this.state.carPicture9,
      updateCarPicture10: this.state.carPicture10,
      updateCountry: this.state.country,
      updateFuel: this.state.fuel,
      updateModel: this.state.model,
      updatePricePerDay: this.state.pricePerDay,
      updateTransmission: this.state.transmission,
      updateState: this.state.state
    });
  };
  handleClickApply = () => {
    this.toggle();
    this.setState({
      adress: this.state.updateAdress,
      brand: this.state.updateBrand,
      carPicture1: this.state.updateCarPicture1,
      carPicture2: this.state.updateCarPicture2,
      carPicture3: this.state.updateCarPicture3,
      carPicture4: this.state.updateCarPicture4,
      carPicture5: this.state.updateCarPicture5,
      carPicture6: this.state.updateCarPicture6,
      carPicture7: this.state.updateCarPicture7,
      carPicture8: this.state.updateCarPicture8,
      carPicture9: this.state.updateCarPicture9,
      carPicture10: this.state.updateCarPicture10,
      country: this.state.updateCountry,
      fuel: this.state.updateFuel,
      model: this.state.updateModel,
      pricePerDay: this.state.updatePricePerDay,
      transmission: this.state.updateTransmission,
      state: this.state.updateState
    });
  };
  render() {
    console.log(this.state.dayCount);
    return (
      <div>
        <MDBView src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="rgba-blue-grey-light d-flex justify-content-center align-items-center gradient">
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
                    <h4 className="right-car-info">
                      &nbsp;&nbsp;{this.state.brand}
                    </h4>
                  </div>
                  <div className="car-info">
                    <h4 className="left-car-info">
                      <MDBIcon icon="angle-right" />
                      &nbsp;&nbsp;Model :
                    </h4>
                    <h4 className="right-car-info">
                      &nbsp;&nbsp;{this.state.model}
                    </h4>
                  </div>
                  <div className="car-info">
                    <h4 className="left-car-info">
                      <MDBIcon icon="angle-right" />
                      &nbsp;&nbsp;Fuel :
                    </h4>
                    <h4 className="right-car-info">
                      &nbsp;&nbsp;{this.state.fuel}
                    </h4>
                  </div>
                  <div className="car-info">
                    <h4 className="left-car-info">
                      <MDBIcon icon="angle-right" />
                      &nbsp;&nbsp;Transmission :
                    </h4>
                    <h4 className="right-car-info">
                      &nbsp;&nbsp;{this.state.transmission}
                    </h4>
                  </div>
                  <div className="car-info">
                    <h4 className="left-car-info">
                      <MDBIcon icon="angle-right" />
                      &nbsp;&nbsp;Adress :
                    </h4>
                    <h4 className="right-car-info">
                      &nbsp;&nbsp;{this.state.adress}
                    </h4>
                  </div>
                  <div className="car-info">
                    <h4 className="left-car-info">
                      <MDBIcon icon="angle-right" />
                      &nbsp;&nbsp;State :
                    </h4>
                    <h4 className="right-car-info">
                      &nbsp;&nbsp;{this.state.state}
                    </h4>
                  </div>
                  <div className="car-info">
                    <h4 className="left-car-info">
                      <MDBIcon icon="angle-right" />
                      &nbsp;&nbsp;Country :
                    </h4>
                    <h4 className="right-car-info">
                      &nbsp;&nbsp;{this.state.country}
                    </h4>
                  </div>
                  <div className="car-info">
                    <h4 className="left-car-info">
                      <MDBIcon icon="angle-right" />
                      &nbsp;&nbsp;Price Per Day :
                    </h4>
                    <h4 className="right-car-info">
                      &nbsp;&nbsp;{this.state.pricePerDay}&nbsp;dt/day
                    </h4>
                  </div>
                </MDBTypography>
                <MDBBtn size="lg" rounded onClick={this.toggle} color="danger">
                  Modify
                </MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                  <MDBModalHeader toggle={this.toggle}>
                    Modify Post
                  </MDBModalHeader>
                  <MDBModalBody>
                    <div className="modify-post">
                      <div className="full-selector">
                        <label className="label-post-add">
                          <MDBIcon icon="car-side" />
                          &nbsp;&nbsp; Brand :
                        </label>
                        <select
                          onChange={(e) =>
                            this.setState({ updateBrand: e.target.value })
                          }
                          value={this.state.updateBrand}
                          class="select-post-add"
                        >
                          <option className="option-add-post" value="" selected>
                            Choose the brand
                          </option>
                          <option className="option-add-post">BMW</option>
                          <option className="option-add-post">Ford</option>
                          <option className="option-add-post">Hyundai</option>
                          <option className="option-add-post">Kia</option>
                          <option className="option-add-post">Nissan</option>
                          <option className="option-add-post">Peugeot</option>
                          <option className="option-add-post">Toyota</option>
                          <option className="option-add-post">
                            Volkswagen
                          </option>
                        </select>
                      </div>
                      {this.state.updateBrand === "BMW" ? (
                        <div className="full-selector">
                          <label className="label-post-add">
                            <MDBIcon icon="question-circle" />
                            &nbsp;&nbsp;Model:
                          </label>
                          <select
                            class="select-post-add"
                            onChange={(e) =>
                              this.setState({ updateModel: e.target.value })
                            }
                            value={this.state.updateModel}
                          >
                            <option
                              className="option-add-post"
                              value=""
                              selected
                            >
                              Choose the Model
                            </option>
                            <option className="option-add-post">Serie 1</option>
                            <option className="option-add-post">Serie 2</option>
                            <option className="option-add-post">Serie 3</option>
                            <option className="option-add-post">Serie 4</option>
                            <option className="option-add-post">Serie 5</option>
                            <option className="option-add-post">Serie 7</option>
                            <option className="option-add-post">X 1</option>
                            <option className="option-add-post">X 2</option>
                            <option className="option-add-post">X 3</option>
                            <option className="option-add-post">X 4</option>
                            <option className="option-add-post">X 5</option>
                            <option className="option-add-post">X 6</option>
                            <option className="option-add-post">X 7</option>
                            <option className="option-add-post">i3</option>
                            <option className="option-add-post">i8</option>
                          </select>
                        </div>
                      ) : this.state.updateBrand === "Hyundai" ? (
                        <div className="full-selector">
                          <label className="label-post-add">
                            <MDBIcon icon="question-circle" />
                            &nbsp;&nbsp; Model:
                          </label>
                          <select
                            class="select-post-add"
                            onChange={(e) =>
                              this.setState({ updateModel: e.target.value })
                            }
                            value={this.state.updateModel}
                          >
                            <option
                              className="option-add-post"
                              value=""
                              selected
                            >
                              Choose the Model
                            </option>
                            <option className="option-add-post">i10</option>
                            <option className="option-add-post">
                              Gran i10
                            </option>
                            <option className="option-add-post">i20</option>
                            <option className="option-add-post">i30</option>
                            <option className="option-add-post">i40</option>
                            <option className="option-add-post">Accent</option>
                            <option className="option-add-post">Elantra</option>
                            <option className="option-add-post">Sonata</option>
                            <option className="option-add-post">ix-35</option>
                            <option className="option-add-post">
                              Veloster
                            </option>
                            <option className="option-add-post">Tucson</option>
                            <option className="option-add-post">
                              Santa Fe
                            </option>
                            <option className="option-add-post">
                              Palisade
                            </option>
                            <option className="option-add-post">Starex</option>
                            <option className="option-add-post">H350</option>
                          </select>
                        </div>
                      ) : this.state.updateBrand === "Ford" ? (
                        <div className="full-selector">
                          <label className="label-post-add">
                            <MDBIcon icon="question-circle" />
                            &nbsp;&nbsp; Model:
                          </label>
                          <select
                            class="select-post-add"
                            onChange={(e) =>
                              this.setState({ updateModel: e.target.value })
                            }
                            value={this.state.updateModel}
                          >
                            <option
                              className="option-add-post"
                              value=""
                              selected
                            >
                              Choose the Model
                            </option>
                            <option className="option-add-post">KA</option>
                            <option className="option-add-post">Fiesta</option>
                            <option className="option-add-post">Focus</option>
                            <option className="option-add-post">Mondeo</option>
                            <option className="option-add-post">Mustang</option>
                            <option className="option-add-post">Ranger</option>
                            <option className="option-add-post">F-150</option>
                            <option className="option-add-post">S-Max</option>
                            <option className="option-add-post">Puma</option>
                            <option className="option-add-post">Escape</option>
                            <option className="option-add-post">
                              Explorer
                            </option>
                          </select>
                        </div>
                      ) : this.state.updateBrand === "Kia" ? (
                        <div className="full-selector">
                          <label className="label-post-add">
                            <MDBIcon icon="question-circle" />
                            &nbsp;&nbsp; Model:
                          </label>
                          <select
                            class="select-post-add"
                            onChange={(e) =>
                              this.setState({ updateModel: e.target.value })
                            }
                            value={this.state.updateModel}
                          >
                            <option
                              className="option-add-post"
                              value=""
                              selected
                            >
                              Choose the Model
                            </option>
                            <option className="option-add-post">Picanto</option>
                            <option className="option-add-post">Rio</option>
                            <option className="option-add-post">Cerato</option>
                            <option className="option-add-post">Sorento</option>
                            <option className="option-add-post">Optima</option>
                            <option className="option-add-post">Ranger</option>
                            <option className="option-add-post">Ceed</option>
                            <option className="option-add-post">
                              Sportage
                            </option>
                            <option className="option-add-post">Soul</option>
                            <option className="option-add-post">K900</option>
                            <option className="option-add-post">Cadenza</option>
                          </select>
                        </div>
                      ) : this.state.updateBrand === "Nissan" ? (
                        <div className="full-selector">
                          <label className="label-post-add">
                            <MDBIcon icon="question-circle" />
                            &nbsp;&nbsp; Model:
                          </label>
                          <select
                            class="select-post-add"
                            onChange={(e) =>
                              this.setState({ updateModel: e.target.value })
                            }
                            value={this.state.updateModel}
                          >
                            <option
                              className="option-add-post"
                              value=""
                              selected
                            >
                              Choose the Model
                            </option>
                            <option className="option-add-post">Micra</option>
                            <option className="option-add-post">X-trail</option>
                            <option className="option-add-post">Juke</option>
                            <option className="option-add-post">Qashqai</option>
                            <option className="option-add-post">GT-R</option>
                            <option className="option-add-post">Rogue</option>
                            <option className="option-add-post">Versa</option>
                            <option className="option-add-post">NV-100</option>
                            <option className="option-add-post">Navara</option>
                            <option className="option-add-post">Terra</option>
                          </select>
                        </div>
                      ) : this.state.updateBrand === "Peugeot" ? (
                        <div className="full-selector">
                          <label className="label-post-add">
                            <MDBIcon icon="question-circle" />
                            &nbsp;&nbsp; Model:
                          </label>
                          <select
                            class="select-post-add"
                            onChange={(e) =>
                              this.setState({ updateModel: e.target.value })
                            }
                            value={this.state.updateModel}
                          >
                            <option
                              className="option-add-post"
                              value=""
                              selected
                            >
                              Choose the Model
                            </option>
                            <option className="option-add-post">108</option>
                            <option className="option-add-post">208</option>
                            <option className="option-add-post">308</option>
                            <option className="option-add-post">508</option>
                            <option className="option-add-post">2008</option>
                            <option className="option-add-post">3008</option>
                            <option className="option-add-post">4008</option>
                            <option className="option-add-post">5008</option>
                            <option className="option-add-post">Partner</option>
                            <option className="option-add-post">Bipper</option>
                            <option className="option-add-post">Boxer</option>
                          </select>
                        </div>
                      ) : this.state.updateBrand === "Toyota" ? (
                        <div className="full-selector">
                          <label className="label-post-add">
                            <MDBIcon icon="question-circle" />
                            &nbsp;&nbsp; Model:
                          </label>
                          <select
                            class="select-post-add"
                            onChange={(e) =>
                              this.setState({ updateModel: e.target.value })
                            }
                            value={this.state.updateModel}
                          >
                            <option
                              className="option-add-post"
                              value=""
                              selected
                            >
                              Choose the Model
                            </option>
                            <option className="option-add-post">Aygo</option>
                            <option className="option-add-post">Yaris</option>
                            <option className="option-add-post">Avanza</option>
                            <option className="option-add-post">
                              Land Cruiser
                            </option>
                            <option className="option-add-post">Corolla</option>
                            <option className="option-add-post">Glanza</option>
                            <option className="option-add-post">Hillux</option>
                            <option className="option-add-post">Hiace</option>
                            <option className="option-add-post">
                              Fortuner
                            </option>
                          </select>
                        </div>
                      ) : this.state.updateBrand === "Volkswagen" ? (
                        <div className="full-selector">
                          <label className="label-post-add">
                            <MDBIcon icon="question-circle" />
                            &nbsp;&nbsp; Model:
                          </label>
                          <select
                            class="select-post-add"
                            onChange={(e) =>
                              this.setState({ updateModel: e.target.value })
                            }
                            value={this.state.updateModel}
                          >
                            <option
                              className="option-add-post"
                              value=""
                              selected
                            >
                              Choose the Model
                            </option>
                            <option className="option-add-post">UP</option>
                            <option className="option-add-post">Polo</option>
                            <option className="option-add-post">Golf</option>
                            <option className="option-add-post">Jetta</option>
                            <option className="option-add-post">Passat</option>
                            <option className="option-add-post">Amarok</option>
                            <option className="option-add-post">
                              Transporter
                            </option>
                            <option className="option-add-post">Tiguan</option>
                            <option className="option-add-post">Touareg</option>
                          </select>
                        </div>
                      ) : (
                        <div className="full-selector">
                          <label className="label-post-add">
                            <MDBIcon icon="question-circle" />
                            &nbsp;&nbsp; Model:
                          </label>
                          <select
                            class="select-post-add"
                            onChange={(e) =>
                              this.setState({ updateModel: e.target.value })
                            }
                            value={this.state.updateModel}
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
                          onChange={(e) =>
                            this.setState({ updateFuel: e.target.value })
                          }
                          value={this.state.updateFuel}
                          class="select-post-add"
                        >
                          <option className="option-add-post" value="" selected>
                            Choose the fuel
                          </option>
                          <option className="option-add-post">Gasoline</option>
                          <option className="option-add-post">Diesel</option>
                          <option className="option-add-post">Hybrid</option>
                        </select>
                      </div>
                      <div className="full-selector">
                        <label className="label-post-add">
                          <MDBIcon icon="cogs" />
                          &nbsp;&nbsp; Transmission :
                        </label>
                        <select
                          onChange={(e) =>
                            this.setState({
                              updateTransmission: e.target.value
                            })
                          }
                          value={this.state.updateTransmission}
                          class="select-post-add"
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
                      <div className="full-selector">
                        <label className="label-post-add">
                          <MDBIcon icon="globe-africa" />
                          &nbsp;&nbsp; Country :
                        </label>
                        <select
                          onChange={(e) =>
                            this.setState({ updateCountry: e.target.value })
                          }
                          value={this.state.updateCountry}
                          class="select-post-add"
                        >
                          <option
                            className="option-add-post"
                            value="Tunisia"
                            selected
                          >
                            Tunisia
                          </option>
                        </select>
                      </div>
                      <div className="full-selector">
                        <label className="label-post-add">
                          <MDBIcon icon="map-marker-alt" />
                          &nbsp;&nbsp; State :
                        </label>
                        <select
                          onChange={(e) =>
                            this.setState({ updateState: e.target.value })
                          }
                          value={this.state.updateState}
                          class="select-post-add"
                        >
                          <option className="option-add-post" value="" selected>
                            Choose the state
                          </option>
                          <option className="option-add-post">Ariana</option>
                          <option className="option-add-post">Béja</option>
                          <option className="option-add-post">Ben Arous</option>
                          <option className="option-add-post">Bizerte</option>
                          <option className="option-add-post">Gabés</option>
                          <option className="option-add-post">Gafsa</option>
                          <option className="option-add-post">Jendouba</option>
                          <option className="option-add-post">Kairouan</option>
                          <option className="option-add-post">Kasserine</option>
                          <option className="option-add-post">Kebili</option>
                          <option className="option-add-post">kef</option>
                          <option className="option-add-post">Mahdia</option>
                          <option className="option-add-post">Mannouba</option>
                          <option className="option-add-post">Mednine</option>
                          <option className="option-add-post">Monastir</option>
                          <option className="option-add-post">Nabeul</option>
                          <option className="option-add-post">Sfax</option>
                          <option className="option-add-post">
                            Sidi Bouzid
                          </option>
                          <option className="option-add-post">Sliana</option>
                          <option className="option-add-post">Sousse</option>
                          <option className="option-add-post">Tataouine</option>
                          <option className="option-add-post">Tozeur</option>
                          <option className="option-add-post">Tunis</option>
                          <option className="option-add-post">Zaghouan</option>
                        </select>
                      </div>
                      <MDBInput
                        value={this.state.updateAdress}
                        className="gray-text"
                        iconClass="white-text price-add-post"
                        label="Price per day (dt/day)"
                        icon="dollar-sign"
                        type="text"
                        style={{ fontSize: 18 }}
                        onChange={(e) =>
                          this.setState({ updateAdress: e.target.value })
                        }
                      />
                      <MDBInput
                        value={this.state.updatePricePerDay}
                        className="gray-text"
                        iconClass="white-text price-add-post"
                        label="Price per day (dt/day)"
                        icon="dollar-sign"
                        type="number"
                        style={{ fontSize: 18 }}
                        onChange={(e) =>
                          this.setState({ updatePricePerDay: e.target.value })
                        }
                      />
                    </div>
                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={this.toggle}>
                      Close
                    </MDBBtn>
                    <MDBBtn color="primary" onClick={this.handleClickApply}>
                      Apply
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
              </div>
              <div className="publish-agency">
                <h3>Published by</h3>
                <div className="client-link">
                  <Avatar
                    size={64}
                    src="https://www.bigstockphoto.com/images/homepage/module-6.jpg"
                  />
                  &nbsp;&nbsp;<a href="#">Sixt</a>
                </div>
              </div>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}
export default PostUser;
