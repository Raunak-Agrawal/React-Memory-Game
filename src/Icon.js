import React, { Component } from "react";
import "./App.css";
class Icon extends Component {
  flipcard(e) {
    this.props.onMatch(this.props.character.charName, this.props.character.id);
  }

  render() {
    return (
      <div
        className="memory-card"
        onClick={e => {
          this.props.opened ? null : this.flipcard();
        }}
      >
        <img
          style={{
            visibility: this.props.opened ? "visible" : "hidden"
          }}
          className="card1"
          alt={this.props.charName}
          src={this.props.image}
        />
      </div>
    );
  }
}

export default Icon;
