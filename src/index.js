import React, { Component } from "react";
import ReactDOM from "react-dom";
import Case from "./Case";

import "./styles.css";

class App extends Component {
  state = {
    sign: "X",
    map: ["", "", "", "", "", "", "", "", ""]
  };
  setSign = () => {
    /*this.state.signStored === "X"||
      ? this.setState({ sign: "X", signStored: "O" })
      : this.setState({ sign: "O", signStored: "X" });*/
    this.setState({
      sign: this.state.sign === "X" || this.state.sign === "" ? "X" : "O"
    });
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
              <Case setSign={this.setSign} case={this.state.map[0]} />
              <Case setSign={this.setSign} case={this.state.map[1]} />
              <Case setSign={this.setSign} case={this.state.map[2]} />
            </tr>
            <tr className="row">
              <Case setSign={this.setSign} case={this.state.map[3]} />
              <Case setSign={this.setSign} case={this.state.map[4]} />
              <Case setSign={this.setSign} case={this.state.map[5]} />
            </tr>
            <tr className="row">
              <Case setSign={this.setSign} case={this.state.map[6]} />
              <Case setSign={this.setSign} case={this.state.map[7]} />
              <Case setSign={this.setSign} case={this.state.map[8]} />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
