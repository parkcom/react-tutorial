import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import ApiTest from './api_test';
class App extends Component {
  state = {
    characters: [
      {
        name: 'charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Doe',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
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
    this.setState({
      characters: [...this.state.characters, character],
    });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className='container'>
        <h1>parkcom...</h1>
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
        <br />
        <br />
        <ApiTest />
      </div>
    );
  }
}

export default App;
