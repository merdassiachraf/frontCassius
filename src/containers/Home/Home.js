import React, { Component } from "react";
import { Link } from "react-router-dom";

import Icon from "../../atests/logo/Icon";

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBAnimation,
  MDBBtn,
  MDBIcon
} from "mdbreact";

class Home extends Component {
  render() {
    return (
      <div id="classicformpage">
        <MDBView src="https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?cs=srgb&dl=action-blur-car-child-386009.jpg&fm=jpg">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow className="all-home">
                <MDBCol className="right-animation-add">
                  <div className="left-home">
                    <MDBAnimation
                      type="fadeInLeft"
                      delay=".3s"
                      className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5 right-add-photo"
                    >
                      <MDBAnimation type="bounce" infinite>
                        <Icon />
                      </MDBAnimation>
                      <hr className="hr-light succes-text" />
                      <h1 class="logo">
                        <span class="word1">The</span>
                        <span class="word2">CASSIUS</span>
                      </h1>
                    </MDBAnimation>
                  </div>
                </MDBCol>

                <MDBCol md="" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <div className="intro-buttons">
                      <div className="intro-home">
                        <h1 className="h1-responsive  font-weight-bold white-text ">
                          Just Choose Your Car &nbsp;
                          <MDBIcon
                            className="text-danger"
                            icon="fas fa-star-and-crescent"
                          ></MDBIcon>{" "}
                          &nbsp;
                          <MDBIcon className="text-danger" icon="heart" />
                        </h1>
                        <hr className="hr-light white-text" />
                      </div>
                      <div className="home-buttons">
                        <Link to="/posts_list">
                          <MDBBtn
                            className="font-weight-bold black-text"
                            color="success"
                            style={{ fontSize: 21, height: 70, width: 300 }}
                          >
                            Start Navigation &nbsp; &nbsp;
                            <MDBIcon icon="shopping-cart" />
                          </MDBBtn>
                        </Link>
                        <Link to="/signup">
                          <MDBBtn
                            className="font-weight-bold "
                            color="amber"
                            style={{ fontSize: 21, height: 70, width: 300 }}
                          >
                            <MDBIcon icon="star" />
                            &nbsp; &nbsp; Sign Up &nbsp; &nbsp;
                            <MDBIcon icon="star" />
                          </MDBBtn>
                        </Link>
                      </div>
                    </div>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}
export default Home;
