import React, { Component } from "react";
import Image from './Components/Image';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={'https://http.cat/409'}/>
      </div>
    );
  }
}

export default App;
