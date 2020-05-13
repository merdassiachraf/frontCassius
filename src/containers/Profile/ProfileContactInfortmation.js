import React, { Component } from "react";

class ProfileContactInformation extends Component {
  render() {
    const { profile } = this.props;
    const contactInformation = (
      <tr key={profile.id}>
        <td>{profile.adress}</td>
        <td>{profile.state}</td>
        <td>{profile.country}</td>
        <td>{(profile.countryCode, profile.phoneNumber)}</td>
      </tr>
    );
    const contactInformation2 = profile.contactInformation.map((contact) => (
      <tr key={contact.id}>
        <td>{contact.adress}</td>
        <td>{contact.state}</td>
        <td>{contact.country}</td>
        <td>{(contact.countryCode, contact.phoneNumber)}</td>
      </tr>
    ));
    return (
      <div>
        <table className="table bg-white">
          <thread>
            <tr>
              <th>Adress</th>
              <th>State</th>
              <th>Country</th>
              <th>Phone number</th>
            </tr>
            <tbody>{contactInformation}{contactInformation2}</tbody>
          </thread>
        </table>
      </div>
    );
  }
}
export default ProfileContactInformation;
