import React, { Component } from "react";
import characters from "./characters.json";
import Icon from "./Icon";
import "./App.css";

class App extends Component {
  state = {
    openedCard: null,
    characters: characters
    // hasFlippedCard: false
  };
  componentWillMount() {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      // return array;
    }
    shuffleArray(this.state.characters);
  }
  onMatchCards = (item, id) => {
    // console.log(item, id);

    const { openedCard, characters } = this.state;

    var index = this.state.characters.findIndex(a => {
      return a.id === id;
    });

    this.setState(
      state => {
        state.characters[index].opened = true;
      },
      _ => {
        debugger;
        if (!this.state.openedCard) {
          // debugger;

          this.setState(state => {
            state.openedCard = item;
          });
        } else {
          // stateJSON.characters[index].opened = true;
          debugger;
          if (this.state.openedCard === item) {
            console.log("MATCH");

            this.setState(state => {
              state.openedCard = null;
            });
            // this.setState({
            //   stateJSON
            //   // console.log(this.state.openedCard, id);
            // });

            // this.setState({ openedCard: null });
          } else {
            console.log("not match");
            // stateJSON.characters[index].opened = false;
            // setTimeout(this.setState(stateJSON), 1500);
          }
        }
      }
    );
  };
  // else {
  //     // this.setState({ secondCard: item }, _ => {
  //     //   console.log(this.state.secondCard, id);
  //     //   this.check();
  //     // });
  //     // if(match occurs){
  //     stateJSON.openedCard = null;
  //     this.setState(stateJSON);
  //     // } else {
  //     //   // jo upar waalo ko openkia  tha unhe  close kar do settimeoutme
  //     // }
  //   }

  // check() {
  //   if (this.state.openedCard === this.state.secondCard) {
  //     console.log("match");
  //     this.setState({ opened: true });
  //   } else {
  //     console.log("Not match");
  //     this.setState({ opened: false });
  //   }
  // }

  //   onFlipCards = (item, id) => {
  //     let oldState = this.state;

  //     if (!openedCard) {
  //       this.setState({ openedCard: item }, _ => {
  //         console.log(this.state.openedCard);
  //         // debugger;
  //         oldState.characters[id - 1].open = true;
  //         this.setState({
  //           oldState
  //         });
  //       });
  //     } else {
  //     }
  //     // const { firstCard, secondCard, hasFlippedCard } = this.state;
  //     // // if (item == firstCard) return;
  //     // console.log(item);
  //     // if (!hasFlippedCard) {
  //     //   this.setState({ hasFlippedCard: true, firstCard: item });
  //     //   console.log(firstCard);
  //     // } else {
  //     //   this.setState({ hasFlippedCard: false, secondCard: item });
  //     //   console.log(secondCard);
  //     //   // checkForMatch();
  //     // }
  //   };
  render() {
    return (
      <div className="container">
        {this.state.characters.map(character => (
          <Icon
            character={character}
            key={character.id}
            charName={character.charName}
            image={character.image}
            onMatch={this.onMatchCards}
            opened={character.opened}
            matched={character.matched}
            // open={character.open}
            // match={this.match}
            // flipcard={this.flipcard}
          />
        ))}
      </div>
    );
  }
  // }
}
export default App;
