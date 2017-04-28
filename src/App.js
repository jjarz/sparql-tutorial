import React, { Component } from 'react';
import './App.css';
import WorldMap from './components/WorldMap/WorldMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Use this map to learn about SPARQL</h2>
        </div>

        <WorldMap />

      </div>
    );
  }
}

export default App;
