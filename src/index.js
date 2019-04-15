import React, { Component } from "react";
import ReactDOM from "react-dom";
import Case from "./Case";

import "./styles.css";

class App extends Component {
  state = {
    currentSign: "X",
    map: ["", "", "", "", "", "", "", "", ""]
  };
  setSign = (i) => {
    /*this.state.signStored === "X"||
      ? this.setState({ sign: "X", signStored: "O" })
      : this.setState({ sign: "O", signStored: "X" });*/
    this.setState({
      sign: this.state.sign === "X" || this.state.sign === "" ? "X" : "O",
      map: Object.assign([],state,{map[i]:this.state.currentSign})
    });
  };

  /*handleClick = () => {
    this.setState({ sign: this.setSign() });
  };*/

  setGame = () => {
    
    return this.state.map.map (i => (
      <tr className="row">
      <Case setSign={this.setSign} case={this.state.map[i]}></Case>
        <Case setSign={this.setSign} case={this.state.map[i]}></Case>
        <Case setSign={this.setSign} case={this.state.map[i]}></Case>
      </tr>
    ))
    
  }

  

  render() {
    return (
      <div className="App">
        <table className="myTable">
          <tbody>
            <tr className="row">
              <Case setSign={this.setSign} sign={this.state.map[0]} index={0} />
              <Case setSign={this.setSign} sign={this.state.map[1]} index={1}/>
              <Case setSign={this.setSign} sign={this.state.map[2]} index ={2}/>
            </tr>
            <tr className="row">
              <Case setSign={this.setSign} sign={this.state.map[3]} index={3} />
              <Case setSign={this.setSign} sign={this.state.map[4]} index={4}/>
              <Case setSign={this.setSign} sign={this.state.map[5]} index={5}/>
            </tr>
            <tr className="row">
              <Case setSign={this.setSign} sign={this.state.map[6]} index={6}/>
              <Case setSign={this.setSign} sign={this.state.map[7]} index={7}/>
              <Case setSign={this.setSign} sign={this.state.map[8]} index={8}/>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
