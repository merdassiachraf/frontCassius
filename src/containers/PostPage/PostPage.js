import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Avatar } from "antd";
import { Carousel } from "react-responsive-carousel";
import {
  MDBMask,
  MDBView,
  MDBContainer,
  MDBTypography,
  MDBBox,
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalHeader,
  MDBModalFooter,
  MDBAlert,
  MDBModalBody,
  MDBInput
} from "mdbreact";

class Home extends Component {
  state = {
    modal: false,
    startDate: "",
    endDate: "",
    startTime: "",
    endtTime: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    console.log(this.state.dayCount);
    return (
      <div>
        <MDBView src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="rgba-blue-grey-light d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <div className="post-carousel">
                <Carousel>
                  <div className="carousel-picture">
                    <img src="https://www.bigstockphoto.com/images/homepage/module-6.jpg" />
                  </div>
                  <div className="carousel-picture">
                    <img src="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg" />
                  </div>
                </Carousel>
                <MDBContainer>
                  <MDBAlert color="success" className="alert-reduction">
                    <h4 className="alert-heading">
                      <MDBIcon icon="exclamation-triangle" />
                      &nbsp;&nbsp;Important!
                    </h4>
                    <hr/>
                    <p className="mb-0">
                      Each reservation more than a month, benefits from a
                      reduction of 20%
                    </p>
                  </MDBAlert>
                </MDBContainer>
              </div>
              <div className="car-infos">
                <MDBTypography blockquote bqColor="danger">
                  <MDBBox tag="p" mb={0} className="bq-title">
                    <h1 className="text-danger"> Car Information</h1>
                  </MDBBox>
                  <div className="car-info">
                    <h4 className="left-car-info">
                      <MDBIcon icon="angle-right" />
                      &nbsp;&nbsp;Brand :
                    </h4>
                    <h4 className="right-car-info">&nbsp;&nbsp;Toyota</h4>
                  </div>
                  <div className="car-info">
                    <h4 className="left-car-info">
                      <MDBIcon icon="angle-right" />
                      &nbsp;&nbsp;Model :
                    </h4>
                    <h4 className="right-car-info">&nbsp;&nbsp;Yaris</h4>
                  </div>
                  <div className="car-info">
                    <h4 className="left-car-info">
                      <MDBIcon icon="angle-right" />
                      &nbsp;&nbsp;Fuel :
                    </h4>
                    <h4 className="right-car-info">&nbsp;&nbsp;Diesel</h4>
                  </div>
                  <div className="car-info">
                    <h4 className="left-car-info">
                      <MDBIcon icon="angle-right" />
                      &nbsp;&nbsp;Transmission :
                    </h4>
                    <h4 className="right-car-info">&nbsp;&nbsp;Automatic</h4>
                  </div>
                  <div className="car-info">
                    <h4 className="left-car-info">
                      <MDBIcon icon="angle-right" />
                      &nbsp;&nbsp;Adress :
                    </h4>
                    <h4 className="right-car-info">
                      &nbsp;&nbsp;104, cité Hached
                    </h4>
                  </div>
                  <div className="car-info">
                    <h4 className="left-car-info">
                      <MDBIcon icon="angle-right" />
                      &nbsp;&nbsp;State :
                    </h4>
                    <h4 className="right-car-info">&nbsp;&nbsp;Bizerte</h4>
                  </div>
                  <div className="car-info">
                    <h4 className="left-car-info">
                      <MDBIcon icon="angle-right" />
                      &nbsp;&nbsp;Country :
                    </h4>
                    <h4 className="right-car-info">&nbsp;&nbsp;Tunisia</h4>
                  </div>
                  <div className="car-info">
                    <h4 className="left-car-info">
                      <MDBIcon icon="angle-right" />
                      &nbsp;&nbsp;Price Per Day :
                    </h4>
                    <h4 className="right-car-info">&nbsp;&nbsp;180 dt/day</h4>
                  </div>
                </MDBTypography>
                <MDBBtn size="lg" rounded onClick={this.toggle} color="danger">
                  Reserve Now
                </MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                  <MDBModalHeader toggle={this.toggle}>
                    Reservation formulaire
                  </MDBModalHeader>
                  <MDBModalBody>
                    <label>Start Date :</label>
                    <MDBInput
                      icon="calendar-alt"
                      type="date"
                      onChange={(e) =>
                        this.setState({ startDate: e.target.value })
                      }
                    />
                    <label>Return Date :</label>
                    <MDBInput
                      icon="calendar-alt"
                      type="date"
                      onChange={(e) =>
                        this.setState({ endDate: e.target.value })
                      }
                    />
                    <label>Start Time :</label>
                    <MDBInput
                      icon="clock"
                      type="time"
                      onChange={(e) =>
                        this.setState({ startTime: e.target.value })
                      }
                    />
                    <label>Return Time :</label>
                    <MDBInput
                      icon="clock"
                      type="time"
                      value={this.state.startTime}
                    />
                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={this.toggle}>
                      Close
                    </MDBBtn>
                    <MDBBtn color="primary">Reserve</MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
              </div>
              <div className="publish-agency">
                <h3>Published by</h3>
                <div className="client-link">
                  <Avatar
                    size={64}
                    src="https://www.bigstockphoto.com/images/homepage/module-6.jpg"
                  />
                  &nbsp;&nbsp;<a href="#">Sixt</a>
                </div>
              </div>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}
export default Home;
