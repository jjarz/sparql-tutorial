import React, { Component } from 'react';
import './App.css';
import api from './utils/api';

import WorldMap from './components/WorldMap/WorldMap';
import QueryContainer from './components/QueryContainer/QueryContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedCountry: 'Switzerland',
      population: null
    };

    this.updateCountry = this.updateCountry.bind(this);
  }

  updateCountry(country) {
    this.setState(() => {
      return {
        selectedCountry: country,
        population: null
      }
    });

    api.fetchPopulation(country)
      .then((population) => {
        this.setState(() => {
          return {
            population
          }
        })
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Use this map to learn about SPARQL</h2>
        </div>

        <div>
          <WorldMap
            updateCountry={this.updateCountry}
            selectedCountry={this.state.selectedCountry}
           />

           <QueryContainer
            country={this.state.selectedCountry}
            result={this.state.population}
            />
          </div>

      </div>
    );
  }
}

export default App;
