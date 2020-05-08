import React, { Component } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div >
          <Avatar
            size={220}
            className="avatar-profile"
            src="data:image/jpeg;base64,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"
          />
        </div>
    );
  }
}

export default ProfileHeader;