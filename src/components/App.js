import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogTile from "../HogTile";

class App extends Component {
  state = {
    hogs:hogs
  }
  render() {
    return (
      <div className="App">
        <Nav />
        {this.state.hogs.map((hog, index) => <HogTile key={index} {...hog}/>  )}
        <HelloWorld />
      </div>
    );
  }
}

export default App;
