import React, { Component } from "react";

class Case extends Component {
  /* SignDisplay() {
    return this.props.caseClicked ? (
      <td className="data" onClick={this.props.setSign}>
        {this.props.sign}
      </td>
    ) : (
      <td className="data" onClick={this.props.case} />
    );
  }*/
  handleClick = () => {
    this.props.sign === "" ? this.props.setSign(this.props.index) : null;
  };

  render() {
    return (
      <td
        className="data"
        onClick={
          this.handleClick
        } /*onClick={() => this.props.setSign(this.props.index)}*/
      >
        {this.props.sign}
      </td>
    );
  }
}

export default Case;
