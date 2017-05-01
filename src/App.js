import React, { Component } from 'react';
import './App.css';
import api from './utils/api';
import mapPolygonUtils from './utils/mapPolygonUtils';
import textUtils from './utils/textUtils';

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
      selectedCountry: '',
      queryResult: '',
      countryPolygons: [],
      queryInputValue: textUtils.welcomeText
    };

    this.updateCountry = this.updateCountry.bind(this);
    this.onSubmitQuery = this.onSubmitQuery.bind(this);
    this.handleQueryInputChange = this.handleQueryInputChange.bind(this);

    this.cache = new Map();

    mapPolygonUtils.createMapPolygons()
      .then((polygonsResult) => {
        this.setState(() => {
          return {
            countryPolygons: polygonsResult
          }
        })
      });
  }

  onSubmitQuery(query) {
    api.fetchRawQueryResults(query, this.cache)
      .then((results) => {
        this.setState(() => {
          return {
            queryResult: results
          }
        });
      }, (error) => {

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
        population: null,
        queryInputValue: textUtils.countryQueryText(country)
      }
    });

    api.fetchPopulation(country, this.cache)
      .then((population) => {
        this.setState(() => {
          return {
            queryResult: population
          }
        })
      });
  }

  handleQueryInputChange(inputValue) {
    this.setState(() => {
      return {
        queryInputValue: inputValue
      }
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
            result={this.state.queryResult}
            onSubmitQuery={this.onSubmitQuery}
            handleQueryInputChange={this.handleQueryInputChange}
            queryInputValue={this.state.queryInputValue}
            />
          </div>

      </div>
    );
  }
}

export default App;
