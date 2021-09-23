import React, { Component } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import List from "./components/List";
import Sort from "./components/Sort";

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <div className="row">
          <Sort />
          <Form />
        </div>
        <List />
      </div>
    );
  }
}

export default App;
