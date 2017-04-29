import React, { Component } from 'react';
import './App.css';
import api from './utils/api';
import mapPolygonUtils from './utils/mapPolygonUtils';

import WorldMap from './components/WorldMap/WorldMap';
import QueryContainer from './components/QueryContainer/QueryContainer';

/**
* Container app for the entire application
*
* Child components:
* WorldMap: renders the map that allows users to choose country
* QueryContainer: renders the query input and result
*
*/
class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedCountry: 'Switzerland',
      population: null,
      countryPolygons: []
    };

    this.updateCountry = this.updateCountry.bind(this);

    mapPolygonUtils.createMapPolygons()
      .then((polygonsResult) => {
        this.setState(() => {
          return {
            countryPolygons: polygonsResult
          }
        })
      });
  }

  /**
  * Callback for country being selected from map
  * Calls API to fetch the population for given country
  *
  * @param country - selected on map
  */
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
            polygons={this.state.countryPolygons}
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
