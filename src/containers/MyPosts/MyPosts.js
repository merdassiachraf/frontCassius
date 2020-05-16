import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Link} from "react-router-dom"

import MyPostCard from "./MyPostCard";

import Spinner from "../Common/Spinner";

import { MDBMask, MDBView, MDBContainer, MDBInput, MDBIcon } from "mdbreact";

class MyPosts extends Component {
  render() {
    return (
        <div id="classicformpage">
        <MDBView src="https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
          <Link className="go-back" to="/dashboard">
                <MDBIcon icon="arrow-circle-left" />
                &nbsp;Go back
              </Link>
            <MDBContainer className="d-flex flex-column ">
            <div className=" my-posts mt-5 ">
            <MyPostCard />
            <MyPostCard />
            <MyPostCard />
            <MyPostCard />
            <MyPostCard />
            <MyPostCard />
            <MyPostCard />
            <MyPostCard />
            <MyPostCard />
            <MyPostCard /></div>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default connect(null)(MyPosts);
