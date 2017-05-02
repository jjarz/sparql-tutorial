import React, { Component } from 'react';
import './App.css';
import api from './utils/api';
import mapPolygonUtils from './utils/mapPolygonUtils';
import textUtils from './utils/textUtils';
import CountryResolver from './utils/CountryResolver';

import WorldMap from './components/WorldMap/WorldMap';
import QueryContainer from './components/QueryContainer/QueryContainer';
import QueryResult from './components/QueryResult/QueryResult';

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
      queryInputValue: textUtils.welcomeText,
      querySubmitEnabled: false,
      queryResultClass: ''
    };

    this.updateCountry = this.updateCountry.bind(this);
    this.onSubmitQuery = this.onSubmitQuery.bind(this);
    this.handleQueryInputChange = this.handleQueryInputChange.bind(this);
    this.onChangeSuggestedQuery = this.onChangeSuggestedQuery.bind(this);

    this.cache = new Map();
    this.countryResolver = new CountryResolver();

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
  * Calls API to retreive results for query passed in
  */
  fetchRawQueryResults(query) {
    api.fetchRawQueryResults(query, this.cache)
      .then((results) => {
        this.setState(() => {
          return {
            queryResult: results,
            queryResultClass: ''
          }
        });
      }, (error) => {
        this.setState(() => {
          return {
            queryResult: error,
            queryError: 'QueryResult--error'
          }
        });
      });
  }

  onChangeSuggestedQuery(query) {
    this.setState(() => {
      return {
        queryInputValue: query
      }
    });

    this.fetchRawQueryResults(query);
  }

  onSubmitQuery(query) {
    this.fetchRawQueryResults(query);
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

    api.fetchPopulation(this.countryResolver.resolveCountry(country), this.cache)
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
          <h2>SPARQLorial</h2>
          <h4 className="App-subHeader">An app to help you learn about SPARQL</h4>
        </div>

        <div className="App-body">
          <div>
            <WorldMap
              updateCountry={this.updateCountry}
              selectedCountry={this.state.selectedCountry}
              polygons={this.state.countryPolygons}
             />

             <QueryContainer
              country={this.state.selectedCountry}
              onSubmitQuery={this.onSubmitQuery}
              handleQueryInputChange={this.handleQueryInputChange}
              queryInputValue={this.state.queryInputValue}
              onChangeSuggestedQuery={this.onChangeSuggestedQuery}
              />
          </div>
          <div className="clearfix"></div>

          <QueryResult result={this.state.queryResult}/>
        </div>
      </div>
    );
  }
}

export default App;
