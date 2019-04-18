import React, { Component } from "react";
import ReactDOM from "react-dom";
import Case from "./Case";

import "./styles.css";

const winningCoordinates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8]
];
let currentCoordinates = [["", "", ""], ["", "", ""], ["", "", ""]];

class App extends Component {
  state = {
    currentSign: "X",
    map: ["", "", "", "", "", "", "", "", ""]
  };
  setSign = i => {
    /*this.state.signStored === "X"||
      ? this.setState({ sign: "X", signStored: "O" })
      : this.setState({ sign: "O", signStored: "X" });*/
    this.setState({
      currentSign:
        this.state.currentSign === "X" || this.state.currentSign === ""
          ? "O"
          : "X",
      map: this.state.map.fill(this.state.currentSign, i, i + 1)
    });
  };


  setCurrentCoordinates = i =>{
    for(i=0;i<this.state.map.length;i++) {
      const position = currentCoordinates[i];
      for(let j =0;j<position.length;j++){
        if(this.state.map[i] ==="X"||"O"){
          currentCoordinates[i] =i
      }
    }
  }
}
  /*handleClick = () => {
    this.setState({ sign: this.setSign() });
  };*/

  render() {
    return (
      <div className="App">
        <table className="myTable">
          <tbody>
            <tr className="row">
              <Case setSign={this.setSign} sign={this.state.map[0]} index={0} currentCoordinates={currentCoordinates}/>
              <Case setSign={this.setSign} sign={this.state.map[1]} index={1} currentCoordinates={currentCoordinates} />
              <Case setSign={this.setSign} sign={this.state.map[2]} index={2} currentCoordinates={currentCoordinates}/>
            </tr>
            <tr className="row">
              <Case setSign={this.setSign} sign={this.state.map[3]} index={3} currentCoordinates={currentCoordinates}/>
              <Case setSign={this.setSign} sign={this.state.map[4]} index={4} currentCoordinates={currentCoordinates}/>
              <Case setSign={this.setSign} sign={this.state.map[5]} index={5} currentCoordinates={currentCoordinates}/>
            </tr>
            <tr className="row">
              <Case setSign={this.setSign} sign={this.state.map[6]} index={6} currentCoordinates={currentCoordinates}/>
              <Case setSign={this.setSign} sign={this.state.map[7]} index={7} currentCoordinates={currentCoordinates}/>
              <Case setSign={this.setSign} sign={this.state.map[8]} index={8} currentCoordinates={currentCoordinates}/>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
