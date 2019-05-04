import React, { Component } from "react";
import PlayerCard from "./components/playerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./image.json";

class App extends Component {
  state = {
    player: images
  };

  handleShuffle(id) {
    if (!this.state.clickedImages.includes(id)) {
      this.setState({
        score: this.state.score + 1,
        clickedImages: [...this.state.clickedImages, id]
      });
    }
    this.setState({
      images: images.sort(() => Math.random() - 0.5),
      totalClick: this.state.totalClick + 1
    });
  }

  removePlayer= id => {
    const player = this.state.player.filter(player => player.id !== id);
    this.setState({ player });
  };

  render() {
    return (
      <Wrapper>
        <Title>Basketball Game</Title>
        {this.state.player.map(player => (
          <PlayerCard
            removePlayer={this.removeFriend}
            id={player.id}
            key={player.id}
            name={player.name}
            image={player.image}
            occupation={player.occupation}
            location={player.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;