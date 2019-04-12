import React from "react";
import ReactDOM from "react-dom";
import Case from "./Case";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <table className="myTable">
        <tbody>
          <tr className="row">
            <Case />
            <Case />
            <Case />
          </tr>
          <tr className="row">
            <Case />
            <Case />
            <Case />
          </tr>
          <tr className="row">
            <Case />
            <Case />
            <Case />
          </tr>
          <tr className="row">
            <Case />
            <Case />
            <Case />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
