import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Filter from "./Filter"
// import HelloWorld from "./HelloWorld";
import HogContainer from "./HogContainer";

class App extends Component {

  state={
    hogs : hogs,
    greased : false,
    sort : "unsorted"
  }

  toggleGreased=()=>{
    this.setState({
      greased: !this.state.greased
    })
  }

  handleSort= event =>{
    this.setState({
      sort: event.target.value
    })
  }


  render() {
    const {greased,sort}=this.state

    // made a copy of the sate, making sure we're not mutating the original
    let displayHogs=[...this.state.hogs]

    // {greased ? displayHogs=displayHogs.filter(hog=>hog.greased) : null}

    // this is not working, just want to make unsorted as default so we can take out the unsorted in the drop down 
    // switch (sort){

    //   case "weight":
    //     return  displayHogs.sort((a,b) => a.weight - b.weight);

    //   case "name":
    //     return displayHogs.sort((a,b)=>a.name.toLowerCase() > b.name.toLowerCase()? 1 : -1);

    //   default:
    //      displayHogs=displayHogs.filter(hog => hog.greased);


    // }

// greased or not greased filter button
    if(greased){
      displayHogs=displayHogs.filter(hog => hog.greased)
    }

   if(sort==='weight'){
     displayHogs.sort((a,b) => a.weight - b.weight)
    }else if (sort==='name'){
      displayHogs.sort((a,b)=>a.name.toLowerCase() > b.name.toLowerCase()? 1 : -1)
    }


    return (
      <div className="App">
      <Nav />
      <Filter
       toggleGreased={this.toggleGreased}
       greased={greased}
       handleSort={this.handleSort}
       sort={sort}
      />
      <HogContainer hog={displayHogs} />
      </div>
    );
  }
}

export default App;
