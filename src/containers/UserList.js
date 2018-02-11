import React, { Component } from "react";
import { connect } from "react-redux";

class UserList extends Component {
  renderUser({ id, name, location, bio }) {
    return (
      <tr key={id}>
        <td>{name}</td>
        <td>{location}</td>
        <td>{bio}</td>
      </tr>
    );
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Location</th>
            <th>Bio</th>
          </tr>
        </thead>
        <tbody>{this.props.users.map(this.renderUser)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return { users };
};

export default connect(mapStateToProps)(UserList);
