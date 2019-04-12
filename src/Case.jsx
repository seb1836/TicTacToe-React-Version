import React, { Component } from "react";

class Case extends Component {
  render() {
    return (
      <td className="data" onClick={this.props.setSign}>
        {this.props.sign}
      </td>
    );
  }
}

export default Case;
