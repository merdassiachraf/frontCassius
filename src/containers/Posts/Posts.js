import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../Common/Spinner";
import PostFeed from "./PostFeed";

import { getPosts } from "../../actions/postActions";

import {
  MDBMask,
  MDBView,
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdbreact";

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
      brand1: "",
      search1: "",
      model1: "",
      fuel1: "",
      transmission1: "",
      state1: "",
      minPricePerDay1: 0,
      maxPricePerDay1: 999999999999999999,
    };
  }
  componentDidMount = () => {
    this.props.getPosts();
  };

  handleClickSearch = () => {
    this.setState({
      search: this.state.search1,
      brand: this.state.brand1,
      model: this.state.model1,
      fuel: this.state.fuel1,
      transmission: this.state.transmission1,
      state: this.state.state1,
      minPricePerDay: this.state.minPricePerDay1,
      maxPricePerDay: this.state.maxPricePerDay1,
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
      brand1: "",
      model1: "",
      fuel1: "",
      transmission1: "",
      state1: "",
      minPricePerDay1: 0,
      maxPricePerDay1: 999999999999999999,
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
            <MDBContainer className="posts-list-main">
              <div className="all-post-filtre">
                <div className="posts-filtre-input white-text">
                  <MDBInput
                    label="Search"
                    icon="search"
                    className="white-text "
                    size="sm"
                    onChange={(e) => this.setState({ search1: e.target.value })}
                    value={this.state.search1}
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
                      onChange={(e) =>
                        this.setState({ minPricePerDay1: e.target.value })
                      }
                      value={this.state.minPricePerDay1}
                    />
                  </div>
                  <div className="vertical-price">
                    <label className="label-filtre-post-price">
                      <MDBIcon icon="dollar-sign" size="sm" />
                      &nbsp;&nbsp;Max Price :
                    </label>
                    <input
                      type="number"
                      className="input-filtre-post-price"
                      onChange={(e) =>
                        this.setState({ maxPricePerDay1: e.target.value })
                      }
                      value={this.state.maxPricePerDay1}
                    />
                  </div>
                </div>

                <div className="posts-filtre-select white-text">
                  <label className="label-posts-filtre">
                    <MDBIcon icon="car-side" />
                    &nbsp;&nbsp; Brand :
                  </label>
                  <select
                    onChange={(e) => this.setState({ brand1: e.target.value })}
                    className="select-posts-filtre"
                    value={this.state.brand1}
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
                {this.state.brand1 === "BMW" ? (
                  <div className="posts-filtre-select white-text">
                    <label className="label-posts-filtre">
                      <MDBIcon icon="question-circle" />
                      &nbsp;&nbsp;Model:
                    </label>
                    <select
                      className="select-posts-filtre"
                      onChange={(e) =>
                        this.setState({ model1: e.target.value })
                      }
                      value={this.state.model1}
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
                ) : this.state.brand1 === "Hyundai" ? (
                  <div className="posts-filtre-select white-text">
                    <label className="label-posts-filtre">
                      <MDBIcon icon="question-circle" />
                      &nbsp;&nbsp; Model:
                    </label>
                    <select
                      className="select-posts-filtre"
                      onChange={(e) =>
                        this.setState({ model1: e.target.value })
                      }
                      value={this.state.model1}
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
                ) : this.state.brand1 === "Ford" ? (
                  <div className="posts-filtre-select white-text">
                    <label className="label-posts-filtre">
                      <MDBIcon icon="question-circle" />
                      &nbsp;&nbsp; Model:
                    </label>
                    <select
                      className="select-posts-filtre"
                      onChange={(e) =>
                        this.setState({ model1: e.target.value })
                      }
                      value={this.state.model1}
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
                ) : this.state.brand1 === "Kia" ? (
                  <div className="posts-filtre-select white-text">
                    <label className="label-posts-filtre">
                      <MDBIcon icon="question-circle" />
                      &nbsp;&nbsp; Model:
                    </label>
                    <select
                      className="select-posts-filtre"
                      onChange={(e) =>
                        this.setState({ model1: e.target.value })
                      }
                      value={this.state.model1}
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
                ) : this.state.brand1 === "Nissan" ? (
                  <div className="posts-filtre-select white-text">
                    <label className="label-posts-filtre">
                      <MDBIcon icon="question-circle" />
                      &nbsp;&nbsp; Model:
                    </label>
                    <select
                      className="select-posts-filtre"
                      onChange={(e) =>
                        this.setState({ model1: e.target.value })
                      }
                      value={this.state.model1}
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
                ) : this.state.brand1 === "Peugeot" ? (
                  <div className="posts-filtre-select white-text">
                    <label className="label-posts-filtre">
                      <MDBIcon icon="question-circle" />
                      &nbsp;&nbsp; Model:
                    </label>
                    <select
                      className="select-posts-filtre"
                      onChange={(e) =>
                        this.setState({ model1: e.target.value })
                      }
                      value={this.state.model1}
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
                ) : this.state.brand1 === "Toyota" ? (
                  <div className="posts-filtre-select white-text">
                    <label className="label-posts-filtre">
                      <MDBIcon icon="question-circle" />
                      &nbsp;&nbsp; Model:
                    </label>
                    <select
                      className="select-posts-filtre"
                      onChange={(e) =>
                        this.setState({ model1: e.target.value })
                      }
                      value={this.state.model1}
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
                ) : this.state.brand1 === "Volkswagen" ? (
                  <div className="posts-filtre-select white-text">
                    <label className="label-posts-filtre">
                      <MDBIcon icon="question-circle" />
                      &nbsp;&nbsp; Model:
                    </label>
                    <select
                      className="select-posts-filtre"
                      onChange={(e) =>
                        this.setState({ model1: e.target.value })
                      }
                      value={this.state.model1}
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
                      onChange={(e) =>
                        this.setState({ model1: e.target.value })
                      }
                      value={this.state.model1}
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
                    onChange={(e) => this.setState({ fuel1: e.target.value })}
                    className="select-posts-filtre"
                    value={this.state.fuel1}
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
                    onChange={(e) =>
                      this.setState({
                        transmission1: e.target.value,
                      })
                    }
                    className="select-posts-filtre"
                    value={this.state.transmission1}
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
                  <select className="select-posts-filtre">
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
                    onChange={(e) => this.setState({ state1: e.target.value })}
                    className="select-posts-filtre"
                    value={this.state.state1}
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
                <div>
                  <MDBBtn
                    color="amber"
                    size="sm"
                    onClick={this.handleClickSearch}
                  >
                    Search
                  </MDBBtn>
                  <MDBBtn
                    color="danger"
                    size="sm"
                    onClick={this.handleClickReset}
                  >
                    Reset
                  </MDBBtn>
                </div>
              </div>

              <div className="posts-list-page">
                <h2 className="white-text text-center posts-title">
                  Cars List
                </h2>
                <p className=" white-text posts-sous-titre text-center">
                  You will find your car here
                </p>
                <div className="posts-list">{postContent}</div>
              </div>
            </MDBContainer>
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
