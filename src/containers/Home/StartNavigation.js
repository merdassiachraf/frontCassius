import React, { Component } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBIcon,
} from "mdbreact";
import { Link } from "react-router-dom";

class StartNavigation extends Component {
  state = {
    modal10: false,
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };
  render() {
    return (
      <div>
        <MDBBtn
          className="font-weight-bold black-text button-start"
          color="success"
          style={{ fontSize: 21, height: 70, width: 300 }}
          onClick={this.toggle(10)}
        >
          Start Navigation &nbsp; &nbsp;
          <MDBIcon icon="shopping-cart" />
        </MDBBtn>

        <MDBModal
          isOpen={this.state.modal10}
          toggle={this.toggle(10)}
          frame
          position="bottom"
          className="d-flex flex-column"
          backdrop={false}
        >
          <MDBModalBody className="text-center font-weight-bold mb-4">
            Start navigation in :
            <div>
              <Link to="/profiles">
                <MDBBtn
                  size="lg"
                  color="unique"
                  className=" white-text font-weight-bold "
                >
                  <MDBIcon icon="car-alt" size="lg" />
                  &nbsp; &nbsp; Agencies
                </MDBBtn>
              </Link>
              <Link to="/posts">
                <MDBBtn
                  size="lg"
                  color="deep-orange"
                  className=" white-text font-weight-bold"
                >
                  <MDBIcon icon="city" size="lg" />
                  &nbsp; &nbsp; Cars
                </MDBBtn>
              </Link>
            </div>
          </MDBModalBody>
        </MDBModal>
      </div>
    );
  }
}
export default StartNavigation;
