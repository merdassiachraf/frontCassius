import React, { Component } from "react";

import {
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation,
} from "mdbreact";
export default class CreateProfile extends Component {
  render() {
    return (
       this.props.role==="Client"?(
          <MDBCol md="" xl="5" className="mb-4 all-post-card">
          <MDBAnimation type="fadeInRight" delay=".3s">
            <MDBCard
              id="classic-card"
              style={{
                padding: 20,
                width: 660,
                height: 570,
                marginTop: 20,
              }}
            >
              <MDBCardBody className="white-text">
                <h3 className=" text-center add-title font-weight-bold">
                  <MDBIcon icon="user-edit" />
                  &nbsp;Your Profile Information
                </h3>
                <hr className="hr-light" />
                <div className="All-selector">
                  <div className="left-side-selector">
                    <MDBInput
                      icon="Your handle"
                      label="Full Name"
                      onChange={(e) =>
                        this.setState({
                          handle: e.target.value,
                        })
                      }
                    />
                    <MDBInput
                      icon="location-arrow"
                      label="Adress"
                      onChange={(e) =>
                        this.setState({
                          adress: e.target.value,
                        })
                      }
                    />

                    <div className="full-selector">
                      <label className="label-post-add">
                        <MDBIcon icon="globe-africa" />
                        &nbsp;&nbsp; Country :
                      </label>
                      <select
                        onChange={(e) =>
                          this.setState({
                            country: e.target.value,
                          })
                        }
                        class="select-post-add"
                      >
                        <option className="option-add-post" value="" selected>
                          Choose country
                        </option>
                        <option className="option-add-post">Algeria</option>
                        <option className="option-add-post">France</option>
                        <option className="option-add-post">Italy</option>
                        <option className="option-add-post">Germany</option>
                        <option className="option-add-post">Tunisia</option>
                      </select>
                    </div>
                    {this.state.country === "Algeria" ? (
                      <div className="full-selector">
                        <label className="label-post-add">
                          <MDBIcon icon="map-marker-alt" />
                          &nbsp;&nbsp;State:
                        </label>
                        <select
                          class="select-post-add"
                          onChange={(e) =>
                            this.setState({
                              state: e.target.value,
                            })
                          }
                        >
                          <option className="option-add-post" value="" selected>
                            Choose the state
                          </option>
                          <option className="option-add-post">Adrar</option>
                          <option className="option-add-post">Chlef</option>
                          <option className="option-add-post">Laghouat</option>
                          <option className="option-add-post">
                            Oum el-Bouaghi
                          </option>
                          <option className="option-add-post">Batna</option>
                          <option className="option-add-post">Béjaïa</option>
                          <option className="option-add-post">Biskra</option>
                          <option className="option-add-post">Béchar</option>
                          <option className="option-add-post">Blida</option>
                          <option className="option-add-post">Bouïra</option>
                          <option className="option-add-post">
                            Tamanghasset
                          </option>
                          <option className="option-add-post">Tébessa</option>
                          <option className="option-add-post">Tlemcen</option>
                          <option className="option-add-post">Tiaret</option>
                          <option className="option-add-post">
                            Tizi Ouzou
                          </option>
                          <option className="option-add-post">Algiers</option>
                          <option className="option-add-post">Djelfa</option>
                          <option className="option-add-post">Jijel</option>
                          <option className="option-add-post">Sétif</option>
                          <option className="option-add-post">Saïda</option>
                          <option className="option-add-post">Skikda</option>
                          <option className="option-add-post">
                            Sidi Bel Abbès
                          </option>
                          <option className="option-add-post">Annaba</option>
                          <option className="option-add-post">Guelma</option>
                          <option className="option-add-post">
                            Constantine
                          </option>
                          <option className="option-add-post">Médéa</option>
                          <option className="option-add-post">
                            Mostaganem
                          </option>
                          <option className="option-add-post">M'sila</option>
                        </select>
                      </div>
                    ) : this.state.country === "France" ? (
                      <div className="full-selector">
                        <label className="label-post-add">
                          <MDBIcon icon="map-marker-alt" />
                          &nbsp;&nbsp; State:
                        </label>
                        <select
                          class="select-post-add"
                          onChange={(e) =>
                            this.setState({
                              state: e.target.value,
                            })
                          }
                        >
                          <option className="option-add-post" value="" selected>
                            Choose the state
                          </option>
                          <option className="option-add-post">Paris</option>
                          <option className="option-add-post">Bourges</option>
                          <option className="option-add-post">Orléans</option>
                          <option className="option-add-post">Rouen</option>
                          <option className="option-add-post">Toulouse</option>
                          <option className="option-add-post">Lyon</option>
                          <option className="option-add-post">Grenoble</option>
                          <option className="option-add-post">Troyes</option>
                          <option className="option-add-post">
                            La Rochelle
                          </option>
                          <option className="option-add-post">Saintes</option>
                          <option className="option-add-post">Poitiers</option>
                          <option className="option-add-post">Bordeaux</option>
                          <option className="option-add-post">Dijon</option>
                          <option className="option-add-post">Amiens</option>
                          <option className="option-add-post">
                            Aix-en-Provence
                          </option>
                          <option className="option-add-post">Pau</option>
                          <option className="option-add-post">Perpignan</option>
                          <option className="option-add-post">Nancy</option>
                          <option className="option-add-post">Foix</option>
                          <option className="option-add-post">Tours</option>
                          <option className="option-add-post">Le Mans</option>
                        </select>
                      </div>
                    ) : this.state.country === "Italy" ? (
                      <div className="full-selector">
                        <label className="label-post-add">
                          <MDBIcon icon="map-marker-alt" />
                          &nbsp;&nbsp; Model:
                        </label>
                        <select
                          class="select-post-add"
                          onChange={(e) =>
                            this.setState({
                              state: e.target.value,
                            })
                          }
                        >
                          <option className="option-add-post" value="" selected>
                            Choose the Model
                          </option>
                          <option className="option-add-post">Agrigento</option>
                          <option className="option-add-post">
                            Alessandria
                          </option>
                          <option className="option-add-post">Ancona</option>
                          <option className="option-add-post">Aosta</option>
                          <option className="option-add-post">Arezzo</option>
                          <option className="option-add-post">
                            Ascoli Piceno
                          </option>
                          <option className="option-add-post">Asti</option>
                          <option className="option-add-post">Avellino</option>
                          <option className="option-add-post">Bari</option>
                          <option className="option-add-post">
                            Barletta-Andria-Trani
                          </option>
                          <option className="option-add-post">Belluno</option>
                          <option className="option-add-post">Benevento</option>
                          <option className="option-add-post">Bergamo</option>
                          <option className="option-add-post">Bologna</option>
                          <option className="option-add-post">Brescia</option>
                          <option className="option-add-post">Brindisi</option>
                          <option className="option-add-post">Cagliari</option>
                          <option className="option-add-post">
                            Caltanissetta
                          </option>
                          <option className="option-add-post">
                            Campobasso
                          </option>
                          <option className="option-add-post">Caserta</option>
                          <option className="option-add-post">Catania</option>
                          <option className="option-add-post">Catanzaro</option>
                          <option className="option-add-post">Chieti</option>
                          <option className="option-add-post">Como</option>
                          <option className="option-add-post">Cosenza</option>
                          <option className="option-add-post">Genoa</option>
                          <option className="option-add-post">Florence</option>
                          <option className="option-add-post">Livorno</option>
                          <option className="option-add-post">Lodi</option>
                          <option className="option-add-post">Macerata</option>
                          <option className="option-add-post">Milan</option>
                          <option className="option-add-post">Naples</option>
                          <option className="option-add-post">Novara</option>
                          <option className="option-add-post">Palermo</option>
                          <option className="option-add-post">Pavia</option>
                        </select>
                      </div>
                    ) : this.state.clientCountry === "Germany" ? (
                      <div className="full-selector">
                        <label className="label-post-add">
                          <MDBIcon icon="map-marker-alt" />
                          &nbsp;&nbsp; State:
                        </label>
                        <select
                          class="select-post-add"
                          onChange={(e) =>
                            this.setState({
                              state: e.target.value,
                            })
                          }
                        >
                          <option className="option-add-post" value="" selected>
                            Choose the state
                          </option>
                          <option className="option-add-post">
                            Baden-Württemberg
                          </option>
                          <option className="option-add-post">Bavaria</option>
                          <option className="option-add-post">Berlin</option>
                          <option className="option-add-post">
                            Brandenburg
                          </option>
                          <option className="option-add-post">Bremen</option>
                          <option className="option-add-post">Hamburg</option>
                          <option className="option-add-post">Hesse</option>
                          <option className="option-add-post">
                            Lower Saxony
                          </option>
                          <option className="option-add-post">
                            Mecklenburg-Vorpommern
                          </option>
                          <option className="option-add-post">
                            North Rhine-Westphalia
                          </option>
                          <option className="option-add-post">Saarland</option>
                        </select>
                      </div>
                    ) : this.state.country === "Tunisia" ? (
                      <div className="full-selector">
                        <label className="label-post-add">
                          <MDBIcon icon="map-marker-alt" />
                          &nbsp;&nbsp; State :
                        </label>
                        <select
                          onChange={(e) =>
                            this.setState({ state: e.target.value })
                          }
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
                    ) : (
                      <div className="full-selector">
                        <label className="label-post-add">
                          <MDBIcon icon="map-marker-alt" />
                          &nbsp;&nbsp; State:
                        </label>
                        <select
                          class="select-post-add"
                          onChange={(e) =>
                            this.setState({
                              state: e.target.value,
                            })
                          }
                        >
                          <option className="option-add-post" value="" selected>
                            Choose the country first
                          </option>
                        </select>
                      </div>
                    )}
                    {this.state.clientCountry === "Tunisia" ? (
                      <div className="full-selector">
                        <label className="label-post-add">
                          <MDBIcon icon="mobile-alt" />
                          &nbsp;&nbsp; Country Phone code :
                        </label>
                        <select
                          onChange={(e) =>
                            this.setState({
                              countryCode: e.target.value,
                            })
                          }
                          value="+216"
                          class="select-post-add"
                        >
                          <option className="option-add-post" value="" selected>
                            Choose the country code
                          </option>
                          <option className="option-add-post">+213</option>
                          <option className="option-add-post">+33</option>
                          <option className="option-add-post">+39</option>
                          <option className="option-add-post">+49</option>
                          <option className="option-add-post">+216</option>
                        </select>
                      </div>
                    ) : this.state.clientCountry === "Algeria" ? (
                      <div className="full-selector">
                        <label className="label-post-add">
                          <MDBIcon icon="mobile-alt" />
                          &nbsp;&nbsp; Country Phone code :
                        </label>
                        <select
                          onChange={(e) =>
                            this.setState({
                              countryCode: e.target.value,
                            })
                          }
                          value="+213"
                          class="select-post-add"
                        >
                          <option className="option-add-post" value="" selected>
                            Choose the country code
                          </option>
                          <option className="option-add-post">+213</option>
                          <option className="option-add-post">+33</option>
                          <option className="option-add-post">+39</option>
                          <option className="option-add-post">+49</option>
                          <option className="option-add-post">+216</option>
                        </select>
                      </div>
                    ) : this.state.clientCountry === "France" ? (
                      <div className="full-selector">
                        <label className="label-post-add">
                          <MDBIcon icon="mobile-alt" />
                          &nbsp;&nbsp; Country Phone code :
                        </label>
                        <select
                          onChange={(e) =>
                            this.setState({
                              countryCode: e.target.value,
                            })
                          }
                          value="+33"
                          class="select-post-add"
                        >
                          <option className="option-add-post" value="" selected>
                            Choose the country code
                          </option>
                          <option className="option-add-post">+213</option>
                          <option className="option-add-post">+33</option>
                          <option className="option-add-post">+39</option>
                          <option className="option-add-post">+49</option>
                          <option className="option-add-post">+216</option>
                        </select>
                      </div>
                    ) : this.state.clientCountry === "Italy" ? (
                      <div className="full-selector">
                        <label className="label-post-add">
                          <MDBIcon icon="mobile-alt" />
                          &nbsp;&nbsp; Country Phone code :
                        </label>
                        <select
                          onChange={(e) =>
                            this.setState({
                              countryCode: e.target.value,
                            })
                          }
                          value="+39"
                          class="select-post-add"
                        >
                          <option className="option-add-post" value="" selected>
                            Choose the country code
                          </option>
                          <option className="option-add-post">+213</option>
                          <option className="option-add-post">+33</option>
                          <option className="option-add-post">+39</option>
                          <option className="option-add-post">+49</option>
                          <option className="option-add-post">+216</option>
                        </select>
                      </div>
                    ) : this.state.clientCountry === "Germany" ? (
                      <div className="full-selector">
                        <label className="label-post-add">
                          <MDBIcon icon="mobile-alt" />
                          &nbsp;&nbsp; Country Phone code :
                        </label>
                        <select
                          onChange={(e) =>
                            this.setState({
                              countryCode: e.target.value,
                            })
                          }
                          value="+49"
                          class="select-post-add"
                        >
                          <option className="option-add-post" value="" selected>
                            Choose the country code
                          </option>
                          <option className="option-add-post">+213</option>
                          <option className="option-add-post">+33</option>
                          <option className="option-add-post">+39</option>
                          <option className="option-add-post">+49</option>
                          <option className="option-add-post">+216</option>
                        </select>
                      </div>
                    ) : (
                      <div className="full-selector">
                        <label className="label-post-add">
                          <MDBIcon icon="mobile-alt" />
                          &nbsp;&nbsp; Country Phone code :
                        </label>
                        <select
                          onChange={(e) =>
                            this.setState({
                              countryCode: e.target.value,
                            })
                          }
                          value=""
                          class="select-post-add"
                        >
                          <option className="option-add-post" value="" selected>
                            Choose country first
                          </option>
                          <option className="option-add-post">+213</option>
                          <option className="option-add-post">+33</option>
                          <option className="option-add-post">+39</option>
                          <option className="option-add-post">+49</option>
                          <option className="option-add-post">+216</option>
                        </select>
                      </div>
                    )}
                  </div>
                  <div className="right-side-selector">
                    <MDBInput
                      icon="phone-square-alt"
                      label="Phone Number"
                      onChange={(e) =>
                        this.setState({
                          phoneNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="text-center mt-4 black-text">
                  <div className=" choose-account">
                    <MDBBtn
                      className=" font-weight-bold  btn-md"
                      color="deep-orange"
                      style={{ fontSize: 14 }}
                    >
                      Save &nbsp; &nbsp;
                      <MDBIcon icon="save" size="lg" />
                    </MDBBtn>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>):
        (<MDBCol md="" xl="5" className="mb-4 all-post-card">
        <MDBAnimation type="fadeInRight" delay=".3s">
          <MDBCard id="classic-card" style={{ width: 540 }}>
            <MDBCardBody className="white-text">
              <h3 className=" text-center add-title font-weight-bold">
                <MDBIcon icon="building" />
                &nbsp;Your Agency Profile
              </h3>
              <hr className="hr-light" />
              <div className="All-selector">
                <div className="left-side-selector">
                  <MDBInput
                    icon="vihara"
                    label="Handle"
                    onchange={(e) =>
                      this.setState({
                        handle: e.target.value
                      })
                    }
                  />
                  <MDBInput
                    icon="location-arrow"
                    label="Adress"
                    onChange={(e) =>
                      this.setState({
                        adress: e.target.value
                      })
                    }
                  />

                  <div className="full-selector">
                    <label className="label-post-add">
                      <MDBIcon icon="globe-africa" />
                      &nbsp;&nbsp; Country :
                    </label>
                    <select
                      onChange={(e) =>
                        this.setState({ country: "Tunisia" })
                      }
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
                        this.setState({ state: e.target.value })
                      }
                      class="select-post-add"
                    >
                      <option
                        className="option-add-post"
                        value=""
                        selected
                      >
                        Choose the state
                      </option>
                      <option className="option-add-post">
                        Ariana
                      </option>
                      <option className="option-add-post">
                        Béja
                      </option>
                      <option className="option-add-post">
                        Ben Arous
                      </option>
                      <option className="option-add-post">
                        Bizerte
                      </option>
                      <option className="option-add-post">
                        Gabés
                      </option>
                      <option className="option-add-post">
                        Gafsa
                      </option>
                      <option className="option-add-post">
                        Jendouba
                      </option>
                      <option className="option-add-post">
                        Kairouan
                      </option>
                      <option className="option-add-post">
                        Kasserine
                      </option>
                      <option className="option-add-post">
                        Kebili
                      </option>
                      <option className="option-add-post">
                        kef
                      </option>
                      <option className="option-add-post">
                        Mahdia
                      </option>
                      <option className="option-add-post">
                        Mannouba
                      </option>
                      <option className="option-add-post">
                        Mednine
                      </option>
                      <option className="option-add-post">
                        Monastir
                      </option>
                      <option className="option-add-post">
                        Nabeul
                      </option>
                      <option className="option-add-post">
                        Sfax
                      </option>
                      <option className="option-add-post">
                        Sidi Bouzid
                      </option>
                      <option className="option-add-post">
                        Sliana
                      </option>
                      <option className="option-add-post">
                        Sousse
                      </option>
                      <option className="option-add-post">
                        Tataouine
                      </option>
                      <option className="option-add-post">
                        Tozeur
                      </option>
                      <option className="option-add-post">
                        Tunis
                      </option>
                      <option className="option-add-post">
                        Zaghouan
                      </option>
                    </select>
                  </div>
                  <div className="full-selector">
                    <label className="label-post-add">
                      <MDBIcon icon="mobile-alt" />
                      &nbsp;&nbsp; Country Phone code :
                    </label>
                    <select
                      onChange={(e) =>
                        this.setState({
                        countryCode: e.target.value
                        })
                      }
                      value="+216"
                      class="select-post-add"
                    >
                      <option className="option-add-post">
                        +216
                      </option>
                    </select>
                  </div>
                </div>
                <div className="right-side-selector">
                  <MDBInput
                    icon="phone-square-alt"
                    label="Phone Number"
                  />
          
                </div>
              </div>
              <div className="text-center mt-4 black-text">
                <div className=" choose-account">
                  <MDBBtn
                    className=" font-weight-bold  btn-md"
                    color="deep-orange"
                    style={{ fontSize: 14 }}
                  >
                    Save &nbsp; &nbsp;
                    <MDBIcon icon="save" size="lg" />
                  </MDBBtn>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBAnimation>
      </MDBCol>)
    );
  }
}
