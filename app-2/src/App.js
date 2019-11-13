import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      friends: ['Reese', 'Maxwell', 'Christian']
    }
  }

  render() {
    let myFriends = this.state.friends.map((e, i) => {
      return <h2 key={i}>{e}</h2>
    })
    return (
      <div className="App">
        {myFriends}
      </div>
    );
  }
}

export default App;
