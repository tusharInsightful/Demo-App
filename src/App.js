import React from "react";
import Table from "./Table";
import Form from "./Form";
import Api from "./Api";

class App extends React.Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    // const characters = [
    //   {
    //     name: "Charlie",
    //     job: "Janitor",
    //   },
    //   {
    //     name: "Mac",
    //     job: "Bouncer",
    //   },
    //   {
    //     name: "Dee",
    //     job: "Aspring actress",
    //   },
    //   {
    //     name: "Dennis",
    //     job: "Bartender",
    //   },
    // ];

    const { characters } = this.state;

    return (
      <div className="Container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
        <Api/>
      </div>
    );
  }
}

export default App;
