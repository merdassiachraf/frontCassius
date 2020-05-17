import React from "react";
import { MDBIcon } from "mdbreact";

export default function SocialLinks({ profile }) {
  return (
    <div className="d-flex">
      <MDBIcon className="blue-text  mb-1" size="lg" fab icon="facebook" />
      <MDBIcon
        className="blue-text ml-3 mb-1"
        size="lg"
        fab
        icon="twitter-square"
      />
      <MDBIcon className="pink-text ml-3 mb-1" size="lg" fab icon="instagram" />
      <MDBIcon className="red-text ml-3 mb-1" size="lg" fab icon="youtube" />
      <MDBIcon className="blue-text ml-3 mb-1" size="lg" fab icon="linkedin" />
    </div>
  );
}
