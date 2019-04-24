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
    this.props.sign === "" && !this.props.winner
      ? this.props.setSign(this.props.index)
      : null;
    //this.props.winner ? console.log(`${this.props.currentSign} is winnerdf`) : null
    this.props.checkWinner();
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
