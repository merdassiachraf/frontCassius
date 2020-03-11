import React, { Component } from "react";

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation
} from "mdbreact";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      model: "",
      fuel: "",
      transmission: "",
      country: "Tunisia",
      state: "",
      pricePerDay: 0
    };
  }
  render() {
    return (
      <div id="classicformpage">
        <MDBView src="https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol className="right-animation-add">
                  <MDBAnimation
                    type="fadeInLeft"
                    delay=".3s"
                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5 right-add-photo"
                  >
                    <h1 className="h1-responsive font-weight-bold white-text ">
                      Create your car Post easily and for free ... !
                    </h1>
                    <hr className="hr-light white-text" />
                    <h5 bold className="mb-4 white-text ">
                      real
                    </h5>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="" xl="5" className="mb-4 all-post-card">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card" style={{ width: 540 }}>
                      <MDBCardBody className="white-text">
                        <h3 className=" text-center add-title font-weight-bold">
                          <MDBIcon icon="scroll" /> Car Pictures
                        </h3>
                        <hr className="hr-light" />
                        <div>



                        </div>
                       
                        <div className="text-center mt-4 black-text">
                          <div className=" Post-button">
                            <MDBBtn
                              className=" font-weight-bold  btn-md"
                              color="deep-orange"
                              style={{ fontSize: 16 }}
                            >
                              Post &nbsp; &nbsp;
                              <MDBIcon icon="check-circle" size="lg" />
                            </MDBBtn>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
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
export default AddPost;
