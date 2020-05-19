import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../Common/Spinner";

import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profileActions";

import { Input, Select } from "antd";

import { MDBMask, MDBView, MDBBtn, MDBIcon } from "mdbreact";

const { Option } = Select;

class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      state: "",
      search: "",
    };
  }

  componentDidMount = () => {
    this.props.getProfiles();
  };

  onReset = () => {
    this.setState({
      country: "",
      state: "",
      search: "",
    });
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
                  <Input
                    value={this.state.search}
                    className="mt-5"
                    style={{ width: "200px" }}
                    onChange={(e) => this.setState({ search: e.target.value })}
                    placeholder="    Search"
                    prefix={<MDBIcon icon="search" />}
                  />
                  <div className="d-flex flex-column align-items-start mt-5">
                    <label className="white-text">
                      <MDBIcon icon="flag" size="lg" />
                      &nbsp; Country :
                    </label>
                    <Select
                      value={this.state.country}
                      style={{ width: "200px" }}
                      onChange={(value) => this.setState({ country: value })}
                    >
                      <Option selected value="">
                        <div className="demo-option-label-item">
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
                  <div className="d-flex flex-column align-items-start mt-5">
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
                        <Option selected value="">
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
                        <Option value="" selected>
                          Select country first
                        </Option>
                      </Select>
                    )}
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
              </div>

              <div className="agency-list-page">
                <h2 className="white-text text-center agencies-title">
                  Agencies List
                </h2>
                <p className=" white-text agencies-sous-titre text-center">
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

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
