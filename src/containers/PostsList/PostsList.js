import React, { Component } from "react";

import {
  MDBMask,
  MDBView,
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBIcon
} from "mdbreact";

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      model: "",
      fuel: "",
      transmission: "",
      state: "",
      minPricePerDay: 0,
      maxPricePerDay: 0,
      previous: "previous",
      addPicture: ""
    };
  }
  render() {
    return (
      <div id="">
        <MDBView src="https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer className="posts-list-main">
              <div className="all-post-filtre">
                <div className="posts-filtre-input white-text">
                  <MDBInput
                    label="Search"
                    icon="search"
                    className="white-text "
                    size="sm"
                  />
                </div>
                <div className="filtre-price white-text">
                  <div className="vertical-price">
                    <label className="label-filtre-post-price">
                      <MDBIcon icon="dollar-sign" />
                      &nbsp;&nbsp;Min Price :
                    </label>
                    <input
                      type="number"
                      className="input-filtre-post-price"
                      size="sm"
                    />
                  </div>
                  <div className="vertical-price">
                    <label className="label-filtre-post-price">
                      <MDBIcon icon="dollar-sign" size="sm" />
                      &nbsp;&nbsp;Min Price :
                    </label>
                    <input type="number" className="input-filtre-post-price" />
                  </div>
                </div>

                <div className="posts-filtre-select white-text">
                  <label className="label-posts-filtre">
                    <MDBIcon icon="car-side" />
                    &nbsp;&nbsp; Brand :
                  </label>
                  <select
                    onChange={(e) => this.setState({ brand: e.target.value })}
                    value={this.state.brand}
                    className="select-posts-filtre"
                  >
                    <option className="option-filtre-post" value="" selected>
                      Choose the brand
                    </option>
                    <option className="option-filtre-post">BMW</option>
                    <option className="option-filtre-post">Ford</option>
                    <option className="option-filtre-post">Hyundai</option>
                    <option className="option-filtre-post">Kia</option>
                    <option className="option-filtre-post">Nissan</option>
                    <option className="option-filtre-post">Peugeot</option>
                    <option className="option-filtre-post">Toyota</option>
                    <option className="option-filtre-post">Volkswagen</option>
                  </select>
                </div>
                {this.state.brand === "BMW" ? (
                  <div className="posts-filtre-select white-text">
                    <label className="label-posts-filtre">
                      <MDBIcon icon="question-circle" />
                      &nbsp;&nbsp;Model:
                    </label>
                    <select
                      className="select-posts-filtre"
                      onChange={(e) => this.setState({ model: e.target.value })}
                      value={this.state.model}
                    >
                      <option className="option-filtre-post" value="" selected>
                        Choose the Model
                      </option>
                      <option className="option-filtre-post">Serie 1</option>
                      <option className="option-filtre-post">Serie 2</option>
                      <option className="option-filtre-post">Serie 3</option>
                      <option className="option-filtre-post">Serie 4</option>
                      <option className="option-filtre-post">Serie 5</option>
                      <option className="option-filtre-post">Serie 7</option>
                      <option className="option-filtre-post">X 1</option>
                      <option className="option-filtre-post">X 2</option>
                      <option className="option-filtre-post">X 3</option>
                      <option className="option-filtre-post">X 4</option>
                      <option className="option-filtre-post">X 5</option>
                      <option className="option-filtre-post">X 6</option>
                      <option className="option-filtre-post">X 7</option>
                      <option className="option-filtre-post">i3</option>
                      <option className="option-filtre-post">i8</option>
                    </select>
                  </div>
                ) : this.state.brand === "Hyundai" ? (
                  <div className="posts-filtre-select white-text">
                    <label className="label-posts-filtre">
                      <MDBIcon icon="question-circle" />
                      &nbsp;&nbsp; Model:
                    </label>
                    <select
                      className="select-posts-filtre"
                      onChange={(e) => this.setState({ model: e.target.value })}
                      value={this.state.model}
                    >
                      <option className="option-filtre-post" value="" selected>
                        Choose the Model
                      </option>
                      <option className="option-filtre-post">i10</option>
                      <option className="option-filtre-post">Gran i10</option>
                      <option className="option-filtre-post">i20</option>
                      <option className="option-filtre-post">i30</option>
                      <option className="option-filtre-post">i40</option>
                      <option className="option-filtre-post">Accent</option>
                      <option className="option-filtre-post">Elantra</option>
                      <option className="option-filtre-post">Sonata</option>
                      <option className="option-filtre-post">ix-35</option>
                      <option className="option-filtre-post">Veloster</option>
                      <option className="option-filtre-post">Tucson</option>
                      <option className="option-filtre-post">Santa Fe</option>
                      <option className="option-filtre-post">Palisade</option>
                      <option className="option-filtre-post">Starex</option>
                      <option className="option-filtre-post">H350</option>
                    </select>
                  </div>
                ) : this.state.brand === "Ford" ? (
                  <div className="posts-filtre-select white-text">
                    <label className="label-posts-filtre">
                      <MDBIcon icon="question-circle" />
                      &nbsp;&nbsp; Model:
                    </label>
                    <select
                      className="select-posts-filtre"
                      onChange={(e) => this.setState({ model: e.target.value })}
                      value={this.state.model}
                    >
                      <option className="option-filtre-post" value="" selected>
                        Choose the Model
                      </option>
                      <option className="option-filtre-post">KA</option>
                      <option className="option-filtre-post">Fiesta</option>
                      <option className="option-filtre-post">Focus</option>
                      <option className="option-filtre-post">Mondeo</option>
                      <option className="option-filtre-post">Mustang</option>
                      <option className="option-filtre-post">Ranger</option>
                      <option className="option-filtre-post">F-150</option>
                      <option className="option-filtre-post">S-Max</option>
                      <option className="option-filtre-post">Puma</option>
                      <option className="option-filtre-post">Escape</option>
                      <option className="option-filtre-post">Explorer</option>
                    </select>
                  </div>
                ) : this.state.brand === "Kia" ? (
                  <div className="posts-filtre-select white-text">
                    <label className="label-posts-filtre">
                      <MDBIcon icon="question-circle" />
                      &nbsp;&nbsp; Model:
                    </label>
                    <select
                      className="select-posts-filtre"
                      onChange={(e) => this.setState({ model: e.target.value })}
                      value={this.state.model}
                    >
                      <option className="option-filtre-post" value="" selected>
                        Choose the Model
                      </option>
                      <option className="option-filtre-post">Picanto</option>
                      <option className="option-filtre-post">Rio</option>
                      <option className="option-filtre-post">Cerato</option>
                      <option className="option-filtre-post">Sorento</option>
                      <option className="option-filtre-post">Optima</option>
                      <option className="option-filtre-post">Ranger</option>
                      <option className="option-filtre-post">Ceed</option>
                      <option className="option-filtre-post">Sportage</option>
                      <option className="option-filtre-post">Soul</option>
                      <option className="option-filtre-post">K900</option>
                      <option className="option-filtre-post">Cadenza</option>
                    </select>
                  </div>
                ) : this.state.brand === "Nissan" ? (
                  <div className="posts-filtre-select white-text">
                    <label className="label-posts-filtre">
                      <MDBIcon icon="question-circle" />
                      &nbsp;&nbsp; Model:
                    </label>
                    <select
                      className="select-posts-filtre"
                      onChange={(e) => this.setState({ model: e.target.value })}
                      value={this.state.model}
                    >
                      <option className="option-filtre-post" value="" selected>
                        Choose the Model
                      </option>
                      <option className="option-filtre-post">Micra</option>
                      <option className="option-filtre-post">X-trail</option>
                      <option className="option-filtre-post">Juke</option>
                      <option className="option-filtre-post">Qashqai</option>
                      <option className="option-filtre-post">GT-R</option>
                      <option className="option-filtre-post">Rogue</option>
                      <option className="option-filtre-post">Versa</option>
                      <option className="option-filtre-post">NV-100</option>
                      <option className="option-filtre-post">Navara</option>
                      <option className="option-filtre-post">Terra</option>
                    </select>
                  </div>
                ) : this.state.brand === "Peugeot" ? (
                  <div className="posts-filtre-select white-text">
                    <label className="label-posts-filtre">
                      <MDBIcon icon="question-circle" />
                      &nbsp;&nbsp; Model:
                    </label>
                    <select
                      className="select-posts-filtre"
                      onChange={(e) => this.setState({ model: e.target.value })}
                      value={this.state.model}
                    >
                      <option className="ooption-filtre-post" value="" selected>
                        Choose the Model
                      </option>
                      <option className="option-filtre-post">108</option>
                      <option className="option-filtre-post">208</option>
                      <option className="option-filtre-post">308</option>
                      <option className="option-filtre-post">508</option>
                      <option className="option-filtre-post">2008</option>
                      <option className="option-filtre-post">3008</option>
                      <option className="option-filtre-post">4008</option>
                      <option className="option-filtre-post">5008</option>
                      <option className="option-filtre-post">Partner</option>
                      <option className="option-filtre-post">Bipper</option>
                      <option className="option-filtre-post">Boxer</option>
                    </select>
                  </div>
                ) : this.state.brand === "Toyota" ? (
                  <div className="posts-filtre-select white-text">
                    <label className="label-posts-filtre">
                      <MDBIcon icon="question-circle" />
                      &nbsp;&nbsp; Model:
                    </label>
                    <select
                      className="select-posts-filtre"
                      onChange={(e) => this.setState({ model: e.target.value })}
                      value={this.state.model}
                    >
                      <option className="option-filtre-post" value="" selected>
                        Choose the Model
                      </option>
                      <option className="option-filtre-post">Aygo</option>
                      <option className="option-filtre-post">Yaris</option>
                      <option className="option-filtre-post">Avanza</option>
                      <option className="option-filtre-post">
                        Land Cruiser
                      </option>
                      <option className="option-filtre-post">Corolla</option>
                      <option className="option-filtre-post">Glanza</option>
                      <option className="option-filtre-post">Hillux</option>
                      <option className="option-filtre-post">Hiace</option>
                      <option className="option-filtre-post">Fortuner</option>
                    </select>
                  </div>
                ) : this.state.brand === "Volkswagen" ? (
                  <div className="posts-filtre-select white-text">
                    <label className="label-posts-filtre">
                      <MDBIcon icon="question-circle" />
                      &nbsp;&nbsp; Model:
                    </label>
                    <select
                      className="select-posts-filtre"
                      onChange={(e) => this.setState({ model: e.target.value })}
                      value={this.state.model}
                    >
                      <option className="option-filtre-post" value="" selected>
                        Choose the Model
                      </option>
                      <option className="option-filtre-post">UP</option>
                      <option className="option-filtre-post">Polo</option>
                      <option className="option-filtre-post">Golf</option>
                      <option className="option-filtre-post">Jetta</option>
                      <option className="option-filtre-post">Passat</option>
                      <option className="option-filtre-post">Amarok</option>
                      <option className="option-filtre-post">
                        Transporter
                      </option>
                      <option className="option-filtre-post">Tiguan</option>
                      <option className="option-filtre-post">Touareg</option>
                    </select>
                  </div>
                ) : (
                  <div className="posts-filtre-select white-text">
                    <label className="label-posts-filtre">
                      <MDBIcon icon="question-circle" />
                      &nbsp;&nbsp; Model:
                    </label>
                    <select
                      className="select-posts-filtre"
                      onChange={(e) => this.setState({ model: e.target.value })}
                      value={this.state.model}
                    >
                      <option className="option-filtre-post" value="" selected>
                        Choose the brand first
                      </option>
                    </select>
                  </div>
                )}
                <div className="posts-filtre-select white-text">
                  <label className="label-posts-filtre">
                    <MDBIcon icon="gas-pump" />
                    &nbsp;&nbsp; Fuel :
                  </label>
                  <select
                    onChange={(e) => this.setState({ fuel: e.target.value })}
                    value={this.state.fuel}
                    onChange={(e) => this.setState({ fuel: e.target.value })}
                    className="select-posts-filtre"
                  >
                    <option className="option-filtre-post" value="" selected>
                      Choose the fuel
                    </option>
                    <option className="option-filtre-post">Gasoline</option>
                    <option className="option-filtre-post">Diesel</option>
                    <option className="option-filtre-post">Hybrid</option>
                  </select>
                </div>
                <div className="posts-filtre-select white-text">
                  <label className="label-posts-filtre">
                    <MDBIcon icon="cogs" />
                    &nbsp;&nbsp; Transmission :
                  </label>
                  <select
                    value={this.state.transmission}
                    onChange={(e) =>
                      this.setState({
                        transmission: e.target.value
                      })
                    }
                    className="select-posts-filtre"
                  >
                    <option className="option-filtre-post" value="" selected>
                      Choose the transmission
                    </option>
                    <option className="option-filtre-post">Manual</option>
                    <option className="option-filtre-post">Automatic</option>
                  </select>
                </div>

                <div className="posts-filtre-select white-text">
                  <label className="label-posts-filtre">
                    <MDBIcon icon="globe-africa" />
                    &nbsp;&nbsp; Country :
                  </label>
                  <select
                    onChange={(e) => this.setState({ country: e.target.value })}
                    value={this.state.country}
                    onChange={(e) => this.setState({ country: "Tunisia" })}
                    className="select-posts-filtre"
                  >
                    <option
                      className="option-filtre-post"
                      value="Tunisia"
                      selected
                    >
                      Tunisia
                    </option>
                  </select>
                </div>
                <div className="posts-filtre-select white-text">
                  <label className="label-posts-filtre">
                    <MDBIcon icon="map-marker-alt" />
                    &nbsp;&nbsp; State :
                  </label>
                  <select
                    onChange={(e) => this.setState({ state: e.target.value })}
                    value={this.state.state}
                    onChange={(e) => this.setState({ state: e.target.value })}
                    className="select-posts-filtre"
                  >
                    <option className="option-filtre-post" value="" selected>
                      Choose the state
                    </option>
                    <option className="option-filtre-post">Ariana</option>
                    <option className="option-filtre-post">Béja</option>
                    <option className="option-filtre-post">Ben Arous</option>
                    <option className="option-filtre-post">Bizerte</option>
                    <option className="option-filtre-post">Gabés</option>
                    <option className="option-filtre-post">Gafsa</option>
                    <option className="option-filtre-post">Jendouba</option>
                    <option className="option-filtre-post">Kairouan</option>
                    <option className="option-filtre-post">Kasserine</option>
                    <option className="option-filtre-post">Kebili</option>
                    <option className="option-filtre-post">kef</option>
                    <option className="option-filtre-post">Mahdia</option>
                    <option className="option-filtre-post">Mannouba</option>
                    <option className="option-filtre-post">Mednine</option>
                    <option className="option-filtre-post">Monastir</option>
                    <option className="option-filtre-post">Nabeul</option>
                    <option className="option-filtre-post">Sfax</option>
                    <option className="option-filtre-post">Sidi Bouzid</option>
                    <option className="option-filtre-post">Sliana</option>
                    <option className="option-filtre-post">Sousse</option>
                    <option className="option-filtre-post">Tataouine</option>
                    <option className="option-filtre-post">Tozeur</option>
                    <option className="option-filtre-post">Tunis</option>
                    <option className="option-filtre-post">Zaghouan</option>
                  </select>
                </div>
              </div>

              <div className="posts-list-view"></div>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}
export default PostsList;
