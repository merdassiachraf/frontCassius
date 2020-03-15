import React, { Component } from "react";

import { MDBMask, MDBView, MDBContainer, MDBInput, MDBIcon } from "mdbreact";

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
        <MDBView src="https://images.pexels.com/photos/27406/pexels-photo-27406.jpg?cs=srgb&dl=building-modern-glass-tall-27406.jpg&fm=jpg">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer className="posts-list-main">
              <div className="all-agencies-filtre">
                <div className="posts-filtre-input white-text">
                  <MDBInput
                    label="Search"
                    icon="search"
                    className="white-text search-input"
                    size="sm"
                  />
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
