import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      filterStr: '',
      friends: ['Reese', 'Maxwell', 'Christian']
    }
  }

  handleChange = (filter) => {
    this.setState({
      filterStr: filter
    })
  }

  render() {
    let filteredFriends = this.state.friends.filter(e => {
      return e.includes(this.state.filterStr)
    }).map((e, i) => {
      return <h2 key={i}>{e}</h2>
    })
    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)}/>
        {filteredFriends}
      </div>
    );
  }
}

export default App;
