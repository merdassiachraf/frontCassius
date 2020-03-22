import React from "react";

import { Card } from 'antd';

import { connect } from "react-redux";

const { Meta } = Card;

const AgencyCard = ({ agency }) => {
  return (
    <div className="agency-card">
    <Card
    className="agency-body-card"
    hoverable
    style={{ width: 120 }}
    cover={<img className="agency-img" alt="example" src={agency.agencyPicture} />}
  >
    <Meta title={agency.agencyName} description={agency.agencyState} />
  </Card></div>
  );
};

export default connect(null, null)(AgencyCard);
