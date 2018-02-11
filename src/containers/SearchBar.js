import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { onFetchUser } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.onFetchUser(this.state.searchTerm);
    this.setState({ searchTerm: "" });
  }

  render() {
    return (
      <main>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Search for Github User"
            value={this.state.searchTerm}
            onChange={this.onInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ onFetchUser }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);
