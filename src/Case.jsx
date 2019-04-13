import React, { Component } from "react";

class Case extends Component {
  SignDisplay() {
    return this.props.caseClicked ? (
      <td className="data" onClick={this.props.setSign}>
        {this.props.sign}
      </td>
    ) : (
      <td className="data" onClick={this.props.case} />
    );
  }
  render() {
    return this.SignDisplay();
    /*(
      <td className="data" onClick={this.props.setSign}>
        {this.props.sign}
      </td>
    );*/
  }
}

export default Case;
