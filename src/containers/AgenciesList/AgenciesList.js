import React, { Component } from "react";
import { connect } from "react-redux";
import { filtreAgency } from "../../redux/agency/AgencyAction";
import {
  MDBMask,
  MDBView,
  MDBContainer,
  MDBInput,
  MDBIcon,
  MDBBtn
} from "mdbreact";
import AgencyCard from "./AgencyCard";

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "",
      state1: "",
      search: "",
      search1: "",
      sort: ""
    };
  }
  handleChangeState = (e) => {
    this.setState({ state1: e.target.value });
  };
  handleChangeSearch = (e) => {
    this.setState({ search1: e.target.value });
  };
  handleClickSearch = () => {
    this.setState({ search: this.state.search1, state: this.state.state1 });
  };

  render() {
    console.log(this.state.sort);
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
                    onChange={(e) => this.handleChangeSearch(e)}
                  />
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
                    onChange={(e) => this.handleChangeState(e)}
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
                <MDBBtn color="info" onClick={(e) => this.handleClickSearch(e)}>
                  Search
                </MDBBtn>
              </div>

              <div>
                
                <div>
                  <div className="sort-agencies">
                    <label className="sort-label">Sort by:</label>
                    <select
                      onChange={this.handleChangeSearch}
                      className="sort-select"
                    >
                      <option className="sort-option" value="">
                        ---
                      </option>
                      <option className="sort-option">A-Z</option>
                      <option className="sort-option">Z-A</option>
                    </select>
                  </div>
                  <div className="posts-list-view">
                    {this.props.agencies
                      .filter(
                        (agency) =>
                          agency.agencyName
                            .toLowerCase()
                            .includes(this.state.search.toLowerCase()) &&
                          agency.agencyState.includes(this.state.state)
                      )
                      .map((agency) => (
                        <AgencyCard agency={agency} />
                      ))}
                  </div>
                </div>
              </div>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    agencies: state.agencies.agencies
  };
};

export default connect(mapStateToProps)(PostsList);
