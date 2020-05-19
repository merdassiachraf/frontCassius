import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../Common/Spinner";
import PostFeed from "./PostFeed";

import { getPosts } from "../../actions/postActions";

import { MDBMask, MDBView, MDBBtn, MDBIcon } from "mdbreact";
import { Input, Select } from "antd";

const { Option } = Select;

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      brand: "",
      model: "",
      fuel: "",
      transmission: "",
      state: "",
      minPricePerDay: 0,
      maxPricePerDay: 999999999999999999,
      brand: "",
      search1: "",
      model: "",
      fuel: "",
      transmission1: "",
      state1: "",
      minPrice: 0,
      maxPrice: 999999999999999999,
    };
  }
  componentDidMount = () => {
    this.props.getPosts();
  };

  handleClickSearch = () => {
    this.setState({
      search: this.state.search1,
      brand: this.state.brand,
      model: this.state.model,
      fuel: this.state.fuel,
      transmission: this.state.transmission1,
      state: this.state.state1,
      minPricePerDay: this.state.minPrice,
      maxPricePerDay: this.state.maxPrice,
    });
  };
  handleClickReset = () => {
    this.setState({
      search: "",
      brand: "",
      model: "",
      fuel: "",
      transmission: "",
      state: "",
      minPricePerDay: 0,
      maxPricePerDay: 999999999999999999,
      search1: "",
      brand: "",
      model: "",
      fuel: "",
      transmission1: "",
      state1: "",
      minPrice: 0,
      maxPrice: 999999999999999999,
    });
  };
  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <div id="">
        <MDBView src="https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
              <div className="d-flex align-items-center">
                  <Input
                    value={this.state.search}
                    className=""
                    style={{ width: "200px" }}
                    onChange={(value) => this.setState({ search: value })}
                    placeholder="    Search"
                    prefix={<MDBIcon icon="search" />}
                  />
                  <div className="d-flex flex-column align-items-start">
                    <label className="white-text">
                      <MDBIcon icon="flag" size="lg" />
                      &nbsp; Country :
                    </label>
                    <Select
                      value={this.state.country}
                      style={{ width: "200px" }}
                      onChange={(value) => this.setState({ country: value })}
                    >
                      <Option Selected value="">
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
                  <div className="d-flex flex-column align-items-start ">
                    <label className="white-text">
                      <MDBIcon icon="flag" size="lg" />
                      &nbsp; State :
                    </label>
                    {this.state.country === "Tunisia" ? (
                      <Select
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

                  <div className="d-flex flex-column align-items-start">
                    <label className="label-filtre-post-price">
                      <MDBIcon icon="dollar-sign" />
                      &nbsp;&nbsp;Min Price :
                    </label>
                    <input
                      type="number"
                      className="input-filtre-post-price"
                      size="sm"
                      onChange={(value) => this.setState({ minPrice: value })}
                      value={this.state.minPrice}
                    />
                  </div>
                  <div className="d-flex flex-column align-items-start">
                    <label className="label-filtre-post-price">
                      <MDBIcon icon="dollar-sign" size="sm" />
                      &nbsp;&nbsp;Max Price :
                    </label>
                    <input
                      type="number"
                      className="input-filtre-post-price"
                      onChange={(value) => this.setState({ maxPrice: value })}
                      value={this.state.maxPrice}
                    />
                  </div>

                  <div className="d-flex flex-column align-items-start">
                    <label className="white-text">
                      <MDBIcon icon="car-side" />
                      &nbsp;&nbsp; Brand :
                    </label>
                    <Select
                      onChange={(value) => this.setState({ brand: value })}
                      className="Select-posts-filtre"
                      value={this.state.brand}
                    >
                      <Option className="Option-filtre-post" value="" Selected>
                        Choose the brand
                      </Option>
                      <Option className="Option-filtre-post">BMW</Option>
                      <Option className="Option-filtre-post">Ford</Option>
                      <Option className="Option-filtre-post">Hyundai</Option>
                      <Option className="Option-filtre-post">Kia</Option>
                      <Option className="Option-filtre-post">Nissan</Option>
                      <Option className="Option-filtre-post">Peugeot</Option>
                      <Option className="Option-filtre-post">Toyota</Option>
                      <Option className="Option-filtre-post">Volkswagen</Option>
                    </Select>
                  </div>
                  {this.state.brand === "BMW" ? (
                    <div className="d-flex flex-column align-items-start">
                      <label className="white-text">
                        <MDBIcon icon="question-circle" />
                        &nbsp;&nbsp;Model:
                      </label>
                      <Select
                        className="Select-posts-filtre"
                        onChange={(value) => this.setState({ model: value })}
                        value={this.state.model}
                      >
                        <Option
                          className="Option-filtre-post"
                          value=""
                          Selected
                        >
                          Choose the Model
                        </Option>
                        <Option className="Option-filtre-post">Serie 1</Option>
                        <Option className="Option-filtre-post">Serie 2</Option>
                        <Option className="Option-filtre-post">Serie 3</Option>
                        <Option className="Option-filtre-post">Serie 4</Option>
                        <Option className="Option-filtre-post">Serie 5</Option>
                        <Option className="Option-filtre-post">Serie 7</Option>
                        <Option className="Option-filtre-post">X 1</Option>
                        <Option className="Option-filtre-post">X 2</Option>
                        <Option className="Option-filtre-post">X 3</Option>
                        <Option className="Option-filtre-post">X 4</Option>
                        <Option className="Option-filtre-post">X 5</Option>
                        <Option className="Option-filtre-post">X 6</Option>
                        <Option className="Option-filtre-post">X 7</Option>
                        <Option className="Option-filtre-post">i3</Option>
                        <Option className="Option-filtre-post">i8</Option>
                      </Select>
                    </div>
                  ) : this.state.brand === "Hyundai" ? (
                    <div className="d-flex flex-column align-items-start">
                      <label className="white-text">
                        <MDBIcon icon="question-circle" />
                        &nbsp;&nbsp; Model:
                      </label>
                      <Select
                        className="Select-posts-filtre"
                        onChange={(value) => this.setState({ model: value })}
                        value={this.state.model}
                      >
                        <Option
                          className="Option-filtre-post"
                          value=""
                          Selected
                        >
                          Choose the Model
                        </Option>
                        <Option className="Option-filtre-post">i10</Option>
                        <Option className="Option-filtre-post">Gran i10</Option>
                        <Option className="Option-filtre-post">i20</Option>
                        <Option className="Option-filtre-post">i30</Option>
                        <Option className="Option-filtre-post">i40</Option>
                        <Option className="Option-filtre-post">Accent</Option>
                        <Option className="Option-filtre-post">Elantra</Option>
                        <Option className="Option-filtre-post">Sonata</Option>
                        <Option className="Option-filtre-post">ix-35</Option>
                        <Option className="Option-filtre-post">Veloster</Option>
                        <Option className="Option-filtre-post">Tucson</Option>
                        <Option className="Option-filtre-post">Santa Fe</Option>
                        <Option className="Option-filtre-post">Palisade</Option>
                        <Option className="Option-filtre-post">Starex</Option>
                        <Option className="Option-filtre-post">H350</Option>
                      </Select>
                    </div>
                  ) : this.state.brand === "Ford" ? (
                    <div className="d-flex flex-column align-items-start">
                      <label className="white-text">
                        <MDBIcon icon="question-circle" />
                        &nbsp;&nbsp; Model:
                      </label>
                      <Select
                        className="Select-posts-filtre"
                        onChange={(value) => this.setState({ model: value })}
                        value={this.state.model}
                      >
                        <Option
                          className="Option-filtre-post"
                          value=""
                          Selected
                        >
                          Choose the Model
                        </Option>
                        <Option className="Option-filtre-post">KA</Option>
                        <Option className="Option-filtre-post">Fiesta</Option>
                        <Option className="Option-filtre-post">Focus</Option>
                        <Option className="Option-filtre-post">Mondeo</Option>
                        <Option className="Option-filtre-post">Mustang</Option>
                        <Option className="Option-filtre-post">Ranger</Option>
                        <Option className="Option-filtre-post">F-150</Option>
                        <Option className="Option-filtre-post">S-Max</Option>
                        <Option className="Option-filtre-post">Puma</Option>
                        <Option className="Option-filtre-post">Escape</Option>
                        <Option className="Option-filtre-post">Explorer</Option>
                      </Select>
                    </div>
                  ) : this.state.brand === "Kia" ? (
                    <div className="d-flex flex-column align-items-start">
                      <label className="white-text">
                        <MDBIcon icon="question-circle" />
                        &nbsp;&nbsp; Model:
                      </label>
                      <Select
                        className="Select-posts-filtre"
                        onChange={(value) => this.setState({ model: value })}
                        value={this.state.model}
                      >
                        <Option
                          className="Option-filtre-post"
                          value=""
                          Selected
                        >
                          Choose the Model
                        </Option>
                        <Option className="Option-filtre-post">Picanto</Option>
                        <Option className="Option-filtre-post">Rio</Option>
                        <Option className="Option-filtre-post">Cerato</Option>
                        <Option className="Option-filtre-post">Sorento</Option>
                        <Option className="Option-filtre-post">Optima</Option>
                        <Option className="Option-filtre-post">Ranger</Option>
                        <Option className="Option-filtre-post">Ceed</Option>
                        <Option className="Option-filtre-post">Sportage</Option>
                        <Option className="Option-filtre-post">Soul</Option>
                        <Option className="Option-filtre-post">K900</Option>
                        <Option className="Option-filtre-post">Cadenza</Option>
                      </Select>
                    </div>
                  ) : this.state.brand === "Nissan" ? (
                    <div className="d-flex flex-column align-items-start">
                      <label className="white-text">
                        <MDBIcon icon="question-circle" />
                        &nbsp;&nbsp; Model:
                      </label>
                      <Select
                        className="Select-posts-filtre"
                        onChange={(value) => this.setState({ model: value })}
                        value={this.state.model}
                      >
                        <Option
                          className="Option-filtre-post"
                          value=""
                          Selected
                        >
                          Choose the Model
                        </Option>
                        <Option className="Option-filtre-post">Micra</Option>
                        <Option className="Option-filtre-post">X-trail</Option>
                        <Option className="Option-filtre-post">Juke</Option>
                        <Option className="Option-filtre-post">Qashqai</Option>
                        <Option className="Option-filtre-post">GT-R</Option>
                        <Option className="Option-filtre-post">Rogue</Option>
                        <Option className="Option-filtre-post">Versa</Option>
                        <Option className="Option-filtre-post">NV-100</Option>
                        <Option className="Option-filtre-post">Navara</Option>
                        <Option className="Option-filtre-post">Terra</Option>
                      </Select>
                    </div>
                  ) : this.state.brand === "Peugeot" ? (
                    <div className="d-flex flex-column align-items-start">
                      <label className="white-text">
                        <MDBIcon icon="question-circle" />
                        &nbsp;&nbsp; Model:
                      </label>
                      <Select
                        className="Select-posts-filtre"
                        onChange={(value) => this.setState({ model: value })}
                        value={this.state.model}
                      >
                        <Option
                          className="oOption-filtre-post"
                          value=""
                          Selected
                        >
                          Choose the Model
                        </Option>
                        <Option className="Option-filtre-post">108</Option>
                        <Option className="Option-filtre-post">208</Option>
                        <Option className="Option-filtre-post">308</Option>
                        <Option className="Option-filtre-post">508</Option>
                        <Option className="Option-filtre-post">2008</Option>
                        <Option className="Option-filtre-post">3008</Option>
                        <Option className="Option-filtre-post">4008</Option>
                        <Option className="Option-filtre-post">5008</Option>
                        <Option className="Option-filtre-post">Partner</Option>
                        <Option className="Option-filtre-post">Bipper</Option>
                        <Option className="Option-filtre-post">Boxer</Option>
                      </Select>
                    </div>
                  ) : this.state.brand === "Toyota" ? (
                    <div className="d-flex flex-column align-items-start">
                      <label className="white-text">
                        <MDBIcon icon="question-circle" />
                        &nbsp;&nbsp; Model:
                      </label>
                      <Select
                        className="Select-posts-filtre"
                        onChange={(value) => this.setState({ model: value })}
                        value={this.state.model}
                      >
                        <Option
                          className="Option-filtre-post"
                          value=""
                          Selected
                        >
                          Choose the Model
                        </Option>
                        <Option className="Option-filtre-post">Aygo</Option>
                        <Option className="Option-filtre-post">Yaris</Option>
                        <Option className="Option-filtre-post">Avanza</Option>
                        <Option className="Option-filtre-post">
                          Land Cruiser
                        </Option>
                        <Option className="Option-filtre-post">Corolla</Option>
                        <Option className="Option-filtre-post">Glanza</Option>
                        <Option className="Option-filtre-post">Hillux</Option>
                        <Option className="Option-filtre-post">Hiace</Option>
                        <Option className="Option-filtre-post">Fortuner</Option>
                      </Select>
                    </div>
                  ) : this.state.brand === "Volkswagen" ? (
                    <div className="d-flex flex-column align-items-start">
                      <label className="white-text">
                        <MDBIcon icon="question-circle" />
                        &nbsp;&nbsp; Model:
                      </label>
                      <Select
                        className="Select-posts-filtre"
                        onChange={(value) => this.setState({ model: value })}
                        value={this.state.model}
                      >
                        <Option
                          className="Option-filtre-post"
                          value=""
                          Selected
                        >
                          Choose the Model
                        </Option>
                        <Option className="Option-filtre-post">UP</Option>
                        <Option className="Option-filtre-post">Polo</Option>
                        <Option className="Option-filtre-post">Golf</Option>
                        <Option className="Option-filtre-post">Jetta</Option>
                        <Option className="Option-filtre-post">Passat</Option>
                        <Option className="Option-filtre-post">Amarok</Option>
                        <Option className="Option-filtre-post">
                          Transporter
                        </Option>
                        <Option className="Option-filtre-post">Tiguan</Option>
                        <Option className="Option-filtre-post">Touareg</Option>
                      </Select>
                    </div>
                  ) : (
                    <div className="d-flex flex-column align-items-start">
                      <label className="white-text">
                        <MDBIcon icon="question-circle" />
                        &nbsp;&nbsp; Model:
                      </label>
                      <Select
                        className="Select-posts-filtre"
                        onChange={(value) => this.setState({ model: value })}
                        value={this.state.model}
                      >
                        <Option
                          className="Option-filtre-post"
                          value=""
                          Selected
                        >
                          Choose the brand first
                        </Option>
                      </Select>
                    </div>
                  )}
                  <div className="d-flex flex-column align-items-start">
                    <label className="white-text">
                      <MDBIcon icon="gas-pump" />
                      &nbsp;&nbsp; Fuel :
                    </label>
                    <Select
                      onChange={(value) => this.setState({ fuel: value })}
                      className="Select-posts-filtre"
                      value={this.state.fuel}
                    >
                      <Option className="Option-filtre-post" value="" Selected>
                        Choose the fuel
                      </Option>
                      <Option className="Option-filtre-post">Gasoline</Option>
                      <Option className="Option-filtre-post">Diesel</Option>
                      <Option className="Option-filtre-post">Hybrid</Option>
                    </Select>
                  </div>
                  <div className="d-flex flex-column align-items-start">
                    <label className="white-text">
                      <MDBIcon icon="cogs" />
                      &nbsp;&nbsp; Transmission :
                    </label>
                    <Select
                      onChange={(value) =>
                        this.setState({
                          transmission: value,
                        })
                      }
                      className="Select-posts-filtre"
                      value={this.state.transmission}
                    >
                      <Option className="Option-filtre-post" value="" Selected>
                        Choose the transmission
                      </Option>
                      <Option className="Option-filtre-post">Manual</Option>
                      <Option className="Option-filtre-post">Automatic</Option>
                    </Select>
                  </div>
                  <div className="mt-4">
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

            <div className="posts-list-page">
              <h2 className="white-text text-center posts-title">Cars List</h2>
              <p className=" white-text posts-sous-titre text-center">
                You will find your car here
              </p>
              <div className="posts-list">{postContent}</div>
            </div>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    post: state.post,
  };
};

export default connect(mapStateToProps, { getPosts })(Posts);
