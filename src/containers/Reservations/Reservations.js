import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getMyReservations } from "../../actions/reservationActions";

import ReservationsCard from "./ReservationsCard";
import Spinner from "../Common/Spinner";

import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { MDBIcon, MDBMask, MDBView } from "mdbreact";
class Reservations extends Component {
  state = {
    step: "",
    filtre: "All Reservations",
  };

  onChooseAll = () => {
    this.setState({ step: "", filtre: "All Reservations" });
  };

  onChooseConfirmed = () => {
    this.setState({ step: "Confirmed", filtre: "Confirmed" });
  };

  onChooseCanceled = () => {
    this.setState({ step: "Canceled", filtre: "Canceled" });
  };

  onChooseWaiting = () => {
    this.setState({ step: "Waiting", filtre: "Waiting" });
  };

  componentDidMount = () => {
    this.props.getMyReservations();
  };

  render() {
    const { my_reservations, loading } = this.props.reservation;
    const { step, filtre } = this.state;

    const menu = (
      <Menu>
        <Menu.Item onClick={this.onChooseAll}>
          <MDBIcon className="text-info" size="lg" icon="shopping-bag" />
          &nbsp;&nbsp;&nbsp;All Reservations
        </Menu.Item>
        <Menu.Item onClick={this.onChooseWaiting}>
          <MDBIcon className="text-warning" size="lg" icon="user-edit" />
          &nbsp;&nbsp;Waitting
        </Menu.Item>
        <Menu.Item onClick={this.onChooseConfirmed}>
          <MDBIcon className="green-text" size="lg" icon="check" />
          &nbsp;&nbsp; Confirmed
        </Menu.Item>
        <Menu.Item danger onClick={this.onChooseCanceled}>
          <MDBIcon className="text-danger" size="lg" icon="times" />
          &nbsp;&nbsp;&nbsp; Canceled
        </Menu.Item>
      </Menu>
    );

    let myReservationsContent;

    if (my_reservations === null || loading === true) {
      myReservationsContent = <Spinner />;
    } else if (my_reservations.length > 0) {
      myReservationsContent = (
        <div className="d-flex">
          <div className="d-flex flex-wrap  reservations-list">
            {my_reservations
              .filter((reservation) => reservation.status.includes(step))
              .map((reservation) => (
                <ReservationsCard
                  key={reservation._id}
                  reservation={reservation}
                />
              ))}
          </div>
        </div>
      );
    }

    return (
      <div id="classicformpage">
        <MDBView src="https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <div className="filtre-reservation">
              <Dropdown overlay={menu} placement="bottomCenter">
                <Button
                  className="d-flex align-items-center"
                  style={{ width: "170px" }}
                >
                  {step === "Waiting" ? (
                    <div>
                      <MDBIcon
                        className="text-warning"
                        size="lg"
                        icon="user-edit"
                      />
                      &nbsp;&nbsp;Waitting
                    </div>
                  ) : step === "Canceled" ? (
                    <div>
                      <MDBIcon className="text-danger" size="lg" icon="times" />
                      &nbsp;&nbsp;&nbsp; Canceled
                    </div>
                  ) : step === "Confirmed" ? (
                    <div>
                      <MDBIcon className="green-text" size="lg" icon="check" />
                      &nbsp;&nbsp; Confirmed
                    </div>
                  ) : (
                    <div>
                      <MDBIcon
                        className="text-info"
                        size="lg"
                        icon="shopping-bag"
                      />
                      &nbsp;&nbsp;&nbsp;All Reservations
                    </div>
                  )}
                  <DownOutlined />
                </Button>
              </Dropdown>
            </div>
            <div className="d-flex flex-column reservations-page align-items-center">
              <div className="d-flex mr-5 ml-5">
                <h1 className="white-text mr-5 ml-5">Your Reservation List</h1>
              </div>
              {myReservationsContent}
            </div>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

Reservations.propTypes = {
  getMyReservations: PropTypes.func.isRequired,
  reservation: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  reservation: state.reservation,
});

export default connect(mapStateToProps, { getMyReservations })(Reservations);
