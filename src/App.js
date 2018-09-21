import React, { Component } from "react";
import characters from "./characters.json";
import Icon from "./Icon";
import "./App.css";

class App extends Component {
  state = {
    openedCard: null,
    characters: characters,
    lockBoard: false,
    moves: 0,
    countMin: 0,
    countSec: 0,
    tempCount: 0,
    matchPairs: 0
  };
  componentWillMount() {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    shuffleArray(this.state.characters);
  }
  timerFunc = () => {
    this.myInterval = setInterval(() => {
      this.setState({
        countSec: this.state.countSec + 1
      });
      if (this.state.countSec % 60 === 0) {
        this.setState({
          countSec: 0,
          countMin: this.state.countMin + 1
        });
      }
    }, 1000);
  };
  timerCall = () => {
    this.setState(
      state => {
        return (state.tempCount = this.state.tempCount + 1);
      },
      _ => {
        if (this.state.tempCount === 1) {
          this.timerFunc();
        }
      }
    );
  };
  onRestart = () => {
    characters.map(item => (item.opened = false));
    this.setState({
      moves: 0,
      countMin: 0,
      countSec: 0,
      openedCard: null,
      characters: characters,
      tempCount: 0
    });
    clearInterval(this.myInterval);
  };

  onMatchCards = (imageItem, id) => {
    const index = this.state.characters.findIndex(a => a.id === id);

    this.setState(
      state => {
        return (state.characters[index].opened = true);
      },
      _ => {
        if (!this.state.openedCard) {
          this.setState(
            state => {
              state.openedCard = {
                imageItem: imageItem,
                id: id
              };
            },
            _ => {
              this.timerCall();
            }
          );
        } else {
          if (this.state.openedCard.imageItem === imageItem) {
            console.log("match");
            console.log(this.state.openedCard.id, id);
            this.setState(
              state => {
                state.openedCard = null;
                state.moves = state.moves + 1;
                state.matchPairs++;
                return state;
              },
              _ => {
                if (this.state.matchPairs === 6) {
                  this.onRestart();
                }
              }
            );
          } else {
            this.setState({ moves: this.state.moves + 1 });
            var firstCardIndex = this.state.characters.findIndex(
              a => a.id === id
            );
            var SecondCardIndex = this.state.characters.findIndex(
              a => a.id === this.state.openedCard.id
            );

            setTimeout(() => {
              this.setState(state => {
                state.characters[SecondCardIndex].opened = false;
                state.characters[firstCardIndex].opened = false;
                // state.moves++;
                state.openedCard = null;
                return state;
              });
            }, 500);
          }
        }
      }
    );
  };

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
          />
        ))}
        <span className="button">Moves: {this.state.moves}</span>
        <span className="button">
          Time: {this.state.countMin}
          min:
          {this.state.countSec}
          sec
        </span>

        <button onClick={this.onRestart} className="button">
          Restart
        </button>
      </div>
    );
  }
}
export default App;
