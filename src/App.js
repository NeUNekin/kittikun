import React, { Component } from 'react';
import WordCard from './WordCard';
const word = "Kittikun";
class App extends Component {
  render() {
    return (
      <div>
        <WordCard value={word}/>
      </div>
    );
  }
}

export default App;