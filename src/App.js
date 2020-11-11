import "./App.css";
import React, { Component } from "react";
import Clock from "./Components/Clock";
import Analog from "./Components/Analog";

class App extends Component {
  render() {
    return (
      <div>
        <Clock />
        <Analog />
      </div>
    );
  }
}

export default App;
