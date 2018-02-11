import React, { Component } from "react";
import "./App.css";

import UserList from "./containers/UserList";
import SearchBar from "./containers/SearchBar";

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <UserList />
      </div>
    );
  }
}

export default App;
