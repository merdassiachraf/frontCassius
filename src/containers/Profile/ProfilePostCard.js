import React from "react";
import { Avatar } from "antd";
import { MDBBtn, MDBIcon } from "mdbreact";

export default function ProfilePostCard({ post }) {
  return (
    <div className="p-2 profile-post-card mr-3 mb-3">
      <div className="d-flex align-items-center ">
        <Avatar
        className="post-avatar"
          shape="square"
          size={110}
          src="https://img.autoplus.fr/news/2019/06/20/1539713/a6d052ec615a21142260c7c9-1200-800.jpg"
        />
        <div className="ml-5">
          <h5>Bmw Serie 8</h5>
          <h5>540 dt/day</h5>
        </div>
        <div className="ml-5 d-flex">
          <MDBBtn color="yellow"><MDBIcon size="lg" icon="edit" /></MDBBtn>
          <MDBBtn color="danger"><MDBIcon size="lg" icon="times" /></MDBBtn>
        </div>
      </div>
    </div>
  );
}
