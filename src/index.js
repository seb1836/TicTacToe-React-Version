import React, { Component } from "react";
import ReactDOM from "react-dom";
import Case from "./Case";

import "./styles.css";

class App extends Component {
  state = {
    sign: "",
    signStored: "X"
  };
  setSign = () => {
    /*this.state.signStored === "X"||
      ? this.setState({ sign: "X", signStored: "O" })
      : this.setState({ sign: "O", signStored: "X" });*/
    this.setState({
      sign: this.state.sign === "X" || this.state.sign === "" ? "X" : "O"
    });
    return this.state.sign;
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
              <Case setSign={this.setSign} sign={this.state.sign} />
              <Case setSign={this.setSign} sign={this.state.sign} />
              <Case setSign={this.setSign} sign={this.state.sign} />
            </tr>
            <tr className="row">
              <Case setSign={this.setSign} sign={this.state.sign} />
              <Case setSign={this.setSign} sign={this.state.sign} />
              <Case setSign={this.setSign} sign={this.state.sign} />
            </tr>
            <tr className="row">
              <Case setSign={this.setSign} sign={this.state.sign} />
              <Case setSign={this.setSign} sign={this.state.sign} />
              <Case setSign={this.setSign} sign={this.state.sign} />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
