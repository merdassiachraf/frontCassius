import React, { Component } from "react";
import { Avatar } from "antd";

import { MDBMask,MDBIcon, MDBBox, MDBView, MDBContainer,MDBTypography } from "mdbreact";

class ClientProfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientPicture: "https://www.howtogeek.com/wp-content/uploads/2019/11/disneyplus-logo.jpg",
      clientAdress: "",
      clientState: "",
      clientCountry: "",
      clientCountryCode: "",
      clientPhoneNumber: "",
      clientName: "",
      clientEmail: "",
      clientPassword: ""
    };
  }
  render() {
      return (
      <div id="classicformpage">
        <MDBView src="https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <div className="client-avatar">
              <Avatar shape="square" size={280} src={this.state.clientPicture} />
              </div>
              <div>
              <MDBTypography blockquote bqColor="warning">
                  <MDBBox tag="p" mb={0} className="bq-title">
                    <h1 className="text-warning"> Car Information</h1>
                  </MDBBox>
                  <div className="car-info">
                    <h4 className="left-car-info">
                      <MDBIcon icon="angle-right" />
                      &nbsp;&nbsp;Name :
                    </h4>
                    <h4 className="right-car-info">&nbsp;&nbsp;Toyota</h4>
                  </div>
                  <div className="car-info">
                    <h4 className="left-car-info">
                      <MDBIcon icon="angle-right" />
                      &nbsp;&nbsp;Adress :
                    </h4>
                    <h4 className="right-car-info">&nbsp;&nbsp;Yaris</h4>
                  </div>
                  <div className="car-info">
                    <h4 className="left-car-info">
                      <MDBIcon icon="angle-right" />
                      &nbsp;&nbsp;State :
                    </h4>
                    <h4 className="right-car-info">&nbsp;&nbsp;Diesel</h4>
                  </div>
                  <div className="car-info">
                    <h4 className="left-car-info">
                      <MDBIcon icon="angle-right" />
                      &nbsp;&nbsp;Country :
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
              </div>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}
export default ClientProfil;
