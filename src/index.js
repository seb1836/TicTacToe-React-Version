import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <table className="myTable">
        <tr className="row">
          <td className="data" />
          <td className="data" />
          <td className="data" />
        </tr>
        <tr className="row">
          <td className="data" />
          <td className="data" />
          <td className="data" />
        </tr>
        <tr className="row">
          <td className="data" />
          <td className="data" />
          <td className="data" />
        </tr>
        <tr className="row">
          <td className="data" />
          <td className="data" />
          <td className="data" />
        </tr>
      </table>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
