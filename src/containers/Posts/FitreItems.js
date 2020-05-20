import React, { Component } from "react";

import { Input, Select, Slider } from "antd";
import { MDBBtn, MDBIcon } from "mdbreact";

const { Option } = Select;

export default class FitreItems extends Component {
  state = {
    search: "",
    brand: "",
    model: "",
    fuel: "",
    transmission: "",
    state: "",
    minPrice: "",
    maxPrice: "",
    range: [0, 3000],
  };

  onReset = () => {
    this.setState({
      search: "",
      brand: "",
      model: "",
      fuel: "",
      transmission: "",
      state: "",
      range: [0, 3000],
    });
  };

  onSubmit = () => {};

  render() {
    console.log(this.state.range);
    console.log("min price:", this.state.range[0]);
    console.log("max price:", this.state.range[1]);

    return (
      <div className="d-flex">
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex">
            <Input
              size="small"
              value={this.state.search}
              className="search-posts mr-5"
              style={{ width: "200px" }}
              onChange={(e) => this.setState({ search: e.target.value })}
              placeholder="Search"
              prefix={<MDBIcon icon="search" />}
            />
            <div className="d-flex flex-column align-items-start ml-5 mr-5">
              <label className="white-text">
                <MDBIcon icon="flag" />
                &nbsp; Country :
              </label>
              <Select
                size="small"
                value={this.state.country}
                style={{ width: "200px" }}
                onChange={(value) => this.setState({ country: value })}
              >
                <Option Selected value="">
                  <div className="demo-Option-label-item">Select country</div>
                </Option>
                <Option value="Tunisia">
                  <span role="img" aria-label="Beja">
                    <MDBIcon className="tunisia flag" />
                  </span>
                  Tunisia
                </Option>
              </Select>
            </div>
            <div className="d-flex flex-column align-items-start ml-5 ">
              <label className="white-text">
                <MDBIcon icon="street-view" />
                &nbsp; State :
              </label>
              {this.state.country === "Tunisia" ? (
                <Select
                  size="small"
                  value={this.state.state}
                  style={{ width: "200px" }}
                  onChange={(value) => this.setState({ state: value })}
                >
                  <Option Selected value="">
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
                  size="small"
                  value={this.state.state}
                  style={{ width: "200px" }}
                  onChange={(value) => this.setState({ state: value })}
                >
                  <Option value="" Selected>
                    Select country first
                  </Option>
                </Select>
              )}
            </div>
          </div>
          <div className="d-flex">
            <div className="d-flex flex-column align-items-start ml-3 mt-1">
              <label className="white-text">
                <MDBIcon icon="car-side" />
                &nbsp;&nbsp; Brand :
              </label>
              <Select
                size="small"
                onChange={(value) => this.setState({ brand: value })}
                value={this.state.state}
                style={{ width: "200px" }}
                value={this.state.brand}
              >
                <Option value="" Selected>
                  Choose the brand
                </Option>
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

            <div className="d-flex flex-column align-items-start ml-3 mt-1">
              <label className="white-text">
                <MDBIcon icon="question-circle" />
                &nbsp;&nbsp;Model:
              </label>
              {this.state.brand === "BMW" ? (
                <Select
                  size="small"
                  value={this.state.state}
                  style={{ width: "200px" }}
                  onChange={(value) => this.setState({ model: value })}
                  value={this.state.model}
                >
                  <Option value="" Selected>
                    Choose the Model
                  </Option>
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
                  size="small"
                  value={this.state.state}
                  style={{ width: "200px" }}
                  onChange={(value) => this.setState({ model: value })}
                  value={this.state.model}
                >
                  <Option value="" Selected>
                    Choose the Model
                  </Option>
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
                  size="small"
                  value={this.state.state}
                  style={{ width: "200px" }}
                  onChange={(value) => this.setState({ model: value })}
                  value={this.state.model}
                >
                  <Option value="" Selected>
                    Choose the Model
                  </Option>
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
                  size="small"
                  value={this.state.state}
                  style={{ width: "200px" }}
                  onChange={(value) => this.setState({ model: value })}
                  value={this.state.model}
                >
                  <Option value="" Selected>
                    Choose the Model
                  </Option>
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
                  size="small"
                  value={this.state.state}
                  style={{ width: "200px" }}
                  onChange={(value) => this.setState({ model: value })}
                  value={this.state.model}
                >
                  <Option value="" Selected>
                    Choose the Model
                  </Option>
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
                  size="small"
                  value={this.state.state}
                  style={{ width: "200px" }}
                  onChange={(value) => this.setState({ model: value })}
                  value={this.state.model}
                >
                  <Option className="oOption-filtre-post" value="" Selected>
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
                  size="small"
                  value={this.state.state}
                  style={{ width: "200px" }}
                  onChange={(value) => this.setState({ model: value })}
                  value={this.state.model}
                >
                  <Option value="" Selected>
                    Choose the Model
                  </Option>
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
                  size="small"
                  value={this.state.state}
                  style={{ width: "200px" }}
                  onChange={(value) => this.setState({ model: value })}
                  value={this.state.model}
                >
                  <Option value="" Selected>
                    Choose the Model
                  </Option>
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
                  size="small"
                  value={this.state.state}
                  style={{ width: "200px" }}
                  onChange={(value) => this.setState({ model: value })}
                  value={this.state.model}
                >
                  <Option value="" Selected>
                    Choose the brand first
                  </Option>
                </Select>
              )}
            </div>
            <div className="d-flex flex-column align-items-start ml-3 mt-1">
              <label className="white-text">
                <MDBIcon icon="gas-pump" />
                &nbsp;&nbsp; Fuel :
              </label>
              <Select
                size="small"
                onChange={(value) => this.setState({ fuel: value })}
                value={this.state.state}
                style={{ width: "200px" }}
                value={this.state.fuel}
              >
                <Option value="" Selected>
                  Choose the fuel
                </Option>
                <Option value="Gasoline">Gasoline</Option>
                <Option value="Diesel">Diesel</Option>
                <Option value="Hybrid">Hybrid</Option>
              </Select>
            </div>
            <div className="d-flex flex-column align-items-start ml-3 mt-1">
              <label className="white-text">
                <MDBIcon icon="cogs" />
                &nbsp;&nbsp; Transmission :
              </label>
              <Select
                size="small"
                onChange={(value) =>
                  this.setState({
                    transmission: value,
                  })
                }
                value={this.state.state}
                style={{ width: "200px" }}
                value={this.state.transmission}
              >
                <Option value="" Selected>
                  Choose the transmission
                </Option>
                <Option value="Manual">Manual</Option>
                <Option value="Automatic">Automatic</Option>
              </Select>
            </div>
          </div>
          <div className="d-flex flex-column align-items-start mt-3">
            <label className="white-text">
              <MDBIcon icon="file-invoice-dollar" />
              &nbsp;&nbsp;Price range :
            </label>
            <Slider
              max={3000}
              style={{ width: 300 }}
              range
              step={10}
              value={this.state.range}
              onChange={(value) => this.setState({ range: value })}
              //   onAfterChange={(value) => this.setState({ range: value })}
            />
          </div>
        </div>
        <div className="d-flex flex-column ml-5">
          <MDBBtn
            color="danger"
            size="sm"
            className="font-weight-bold"
            onClick={this.onReset}
          >
            Reset&nbsp;&nbsp;
            <MDBIcon icon="wrench" />
          </MDBBtn>
          <MDBBtn
            className="font-weight-bold"
            color="amber"
            size="sm"
            onClick={this.handleClickSearch}
          >
            Search&nbsp;&nbsp;
            <MDBIcon icon="search-plus" />
          </MDBBtn>
        </div>
      </div>
    );
  }
}
