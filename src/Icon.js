import React, { Component } from "react";
import "./App.css";
class Icon extends Component {
  state = {
    // hasFlippedCard: false
    // showImg: Array(this.props.character.length).fill("hidden")
    //   firstCard: "",
    //   secondCard: ""
  };
  flipcard(e) {
    //     // const firstCard = this.props.character.charName;
    this.props.onMatch(this.props.character.charName, this.props.character.id);
  }
  //   //   if (this === this.state.firstCard) return;
  //   //   if (!this.state.hasFlippedCard) {
  //   //     this.setState({ hasFlippedCard: true, firstCard: this.props.charName });
  //   //   } else {
  //   //     this.setState({ secondCard: this.props.charName, hasFlippedCard: false });
  //   //     setTimeout(() => {
  //   //       this.checkforMatch();
  //   //     }, 1000);
  //   //   }
  //   // };
  //   // checkforMatch = () =>
  //   //   this.state.firstCard === this.state.secondCard
  //   //     ? console.log("WON")
  //   //     : console.log("LOST");
  render() {
    return (
      <div className="memory-card" onClick={_ => this.flipcard()}>
        <img
          style={{
            visibility: this.props.opened ? "visible" : "hidden"
          }}
          // className={{ style: "backface-visibility: hidden;" }}
          // charName={this.props.charName}
          className="card1"
          alt={this.props.charName}
          src={this.props.image}
        />
      </div>
    );
  }
}

export default Icon;
