import React, { Component } from "react";
import { Avatar } from "antd";

import { MDBMask, MDBBtn, MDBView, MDBContainer } from "mdbreact";

class ClientProfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agencyPicture:
        "https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png",
      agencyAdress: "104, cité hached",
      agencyState: "Bizerte",
      agencyCountry: "Tunisia",
      agencyCountryCode: "+216",
      agencyPhoneNumber: "72534173",
      agencyName: "Dorro rent Car"
    };
  }
  render() {
    const scrollContainerStyle = {
      width: "500px",
      height: "600px"
    };

    return (
      <div id="classicformpage">
        <MDBView src="https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <div className="agency-avatar">
                <Avatar size={270} src={this.state.agencyPicture} />
              </div>
              <div className="agency-infos">
              <div className="all-info">
              <div className="agency-info"><h5>Agency Name :</h5><h5>{this.state.agencyName}</h5></div>
              <div className="agency-info"><h5>Adress :</h5><h5>{this.state.agencyAdress}</h5></div>
              <div className="agency-info"><h5>State :</h5><h5>{this.state.agencyState}</h5></div>
              <div className="agency-info"><h5>Country :</h5><h5>{this.state.agencyCountry}</h5></div>  
              <div className="agency-info"><h5>Phone Number :</h5>{this.state.agencyCountryCode +" "+ this.state.agencyPhoneNumber}<h5></h5></div>
              </div>
              </div>
            </MDBContainer>
            <div className="scroll-posts">
              <MDBContainer>
                <div
                  className="scrollbar scrollbar-primary  mt-5 mx-auto"
                  style={scrollContainerStyle}
                >
                  <div className="agency-post-card">
                    <Avatar
                      shape="square"
                      size={40}
                      src={this.state.agencyPicture}
                    />
                    <div className="car-details">
                      <h5>Toyota Lancruiser</h5>
                      <h6>300 dt/day</h6>
                    </div>
                    <div className="view-button">
                      <MDBBtn size="sm" color="danger" rounded>
                        View Post
                      </MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBContainer>
            </div>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}
export default ClientProfil;
