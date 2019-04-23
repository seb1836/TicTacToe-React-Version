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

class App extends Component {
  state = {
    currentSign: "X",
    map: ["", "", "", "", "", "", "", "", ""]
  };

  checkWinner = () => {
    winningCoordinates.map(function(row) {
      console.log(this.state.map[row[0]]);

      if (
        this.state.map[row[0]] === this.state.currentSign &&
        this.state.map[row[1]] === this.state.currentSign &&
        this.state.map[row[2]] === this.state.currentSign
      ) {
        () => {
          console.log(`${this.state.currentSign} is winner `);
        };
      }
    });
  };

  setSign = i => {
    /*this.state.signStored === "X"||
      ? this.setState({ sign: "X", signStored: "O" })
      : this.setState({ sign: "O", signStored: "X" });*/
    this.setState(
      {
        currentSign:
          this.state.currentSign === "X" || this.state.currentSign === ""
            ? "O"
            : "X",
        map: this.state.map.fill(this.state.currentSign, i, i + 1)
      },
      () => {
        this.checkWinner();
      }
    );
  };
  /*handleClick = () => {
    this.setState({ sign: this.setSign() });
  };*/

  render() {
    return (
      <div className="App">
        <table className="myTable">
          <tbody>
            <tr className="row">
              <Case setSign={this.setSign} sign={this.state.map[0]} index={0} />
              <Case setSign={this.setSign} sign={this.state.map[1]} index={1} />
              <Case setSign={this.setSign} sign={this.state.map[2]} index={2} />
            </tr>
            <tr className="row">
              <Case setSign={this.setSign} sign={this.state.map[3]} index={3} />
              <Case setSign={this.setSign} sign={this.state.map[4]} index={4} />
              <Case setSign={this.setSign} sign={this.state.map[5]} index={5} />
            </tr>
            <tr className="row">
              <Case setSign={this.setSign} sign={this.state.map[6]} index={6} />
              <Case setSign={this.setSign} sign={this.state.map[7]} index={7} />
              <Case setSign={this.setSign} sign={this.state.map[8]} index={8} />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
