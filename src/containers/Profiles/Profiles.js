import React, { Component } from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import Spinner from "../Common/Spinner";

import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profileActions";

import {
  MDBMask,
  MDBView,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";

class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.getProfiles();
  };

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading === true) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map((profile) => (
          <ProfileItem key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = <h4>No profiles found ...</h4>;
      }
    }

    return (
      <div id="classicformpage">
        <MDBView src="https://images.pexels.com/photos/27406/pexels-photo-27406.jpg?cs=srgb&dl=building-modern-glass-tall-27406.jpg&fm=jpg">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <div className="posts-list-main">
              <div className="profiles d-flex flex-column align-items-center">
                <div className="all-agencies-filtre">
                  <MDBInput
                    label="Search"
                    icon="search"
                    className="white-text "
                    size="sm"
                    onChange={(e) => this.setState({ search1: e.target.value })}
                    value={this.state.search1}
                  />
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
                      onChange={(e) =>
                        this.setState({ state1: e.target.value })
                      }
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
                      <option className="option-filtre-post">
                        Sidi Bouzid
                      </option>
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
              </div>

              <div className="agency-list-page">
                <h2 className="white-text text-center agencies-title">Agencies List</h2>
                <p  className=" white-text agencies-sous-titre text-center">
                  Browse and connect with agencies
                </p>
                <div className="agencies-list">{profileItems}</div>
              </div>
            </div>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

Profiles.prototypes = {
  getProfiles: Proptypes.func.isRequired,
  profile: Proptypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
