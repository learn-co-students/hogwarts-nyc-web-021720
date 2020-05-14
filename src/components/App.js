import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";

import HogContainer from "./HogContainer"

//|-App
// |-HogContainer
//  |-HogCard
// |-Nav
// |-HelloWorld

class App extends Component {
  state = {
    hogs: [],
    filterHogs: [],
    clicked: false
  }
  
  filterGreased = () => {
    this.setState({clicked: !this.state.clicked}, () => {
      if (this.state.clicked === true) {
        let filteredArray = this.state.hogs.filter(hog => hog.greased===true)
        this.setState({filterHogs: filteredArray})
        }
        else {
          this.setState({filterHogs: this.state.hogs})
        }
        console.log(this.state.clicked)
    })  
  }
  sortWeight = () => {
    let sortedHogs = this.state.filterHogs.sort((a, b) => {
      return a.weight - b.weight
    })
    this.setState({filterHogs: sortedHogs})
  }
  componentDidMount() {
    this.setState({hogs: hogs, filterHogs: hogs})
  }

  sortName = () => {
    let sortedHogs = this.state.filterHogs.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
    // this.setState({filterHogs: sortedHogs})
    this.setState({filterHogs: sortedHogs})
  }

  componentDidMount() {
    this.setState({hogs: hogs, filterHogs: hogs})
  }

  render() {
    return (
      console.log(this.state),
      <div className="App">
        <Nav />
        <button onClick={this.filterGreased}>Filter By Greased</button>
        <button onClick={this.sortWeight}>Sort By Weight</button>
        <button onClick={this.sortName}>Sort By Name</button>
        
        <HogContainer hogs={this.state.filterHogs}/>
      </div>
    );
  }
}

export default App;
