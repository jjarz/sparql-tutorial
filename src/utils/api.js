import axios from 'axios';
import cachingUtils from './cachingUtils';

const endpoint = 'http://dbpedia.org/sparql';

function getPopulationQuery(country) {
  return (
    `SELECT ?population WHERE {
      ?country a dbo:Country.
      ?country dbp:commonName ?commonName.
      ?country dbp:commonName "${country}"@en.
      ?country dbo:populationTotal ?population.
    }`
  );
};

function formatPopulation(country, number) {
  return `The population of ${country} is ${Number.parseInt(number, 10).toLocaleString()}`;
};

const flatten = arr => arr.reduce(
  (acc, val) => acc.concat(
    Array.isArray(val) ? flatten(val) : val
  ),
  []
);

module.exports = {
  /**
  * Makes call to fetch the population of a country through SPARQL
  */
  fetchPopulation: (country, cache) => {
    const query = getPopulationQuery(country);

    // SPARQL ajax query URI
    const encodedURI = window.encodeURI(`${endpoint}?query=${query}`);

    const cachedResult = cachingUtils.getCachedResult(cache, encodedURI);

    if (cachedResult) {
      return cachedResult;
    }

    return axios.get(encodedURI)
      .then((response) => {
        let result;
        if (response.data.results) {
          result = response.data.results.bindings[0] ?
            formatPopulation(country, response.data.results.bindings[0].population.value) :
            `The population for ${country} is not in DPBedia :(`;
          cachingUtils.cacheResult(cache, encodedURI, result);
          return result;
        }
        console.log('how about here'); // eslint-disable-line
        return 'no results from DBPedia';
      })
      .catch((error) => {
        console.log(`Error calling SPARQL for population: ${error.response.data}`);
        return '???';
      });
  },

  /**
  * Call SPARQL endpoint with query input (raw input from user's textarea entry)
  *
  * @param query
  */
  fetchRawQueryResults: (query) => {
    // SPARQL ajax query URI
    const encodedURI = window.encodeURI(`${endpoint}?query=${query}&format=text/html`);

    return axios.get(encodedURI)
      .then((response) => {
        if (response.data) {
          return response.data;
        } else {
          return response;
        }
      })
      .catch((error) => {
        console.log(`Error calling SPARQL for population: ${error.response.data}`);
        return error.response.data;
      });
  },

  /**
  * Makes a call to google's Fusion Tables API to retrieve geometries for countries
  * Adapted from https://developers.google.com/fusiontables/docs/samples/mouseover_map_styles
  *
  * @returns response.data.rows from request, if successful. logs error if api call fails
  */
  getMapPolygonGeometries: () => {
    // Initialize JSONP request
    var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
    url.push('sql=');
    var query = 'SELECT name, kml_4326 FROM ' +
        '1foc3xO9DyfSIF6ofvN0kp2bxSfSeKog5FbdWdQ';
    var encodedQuery = encodeURIComponent(query);
    url.push(encodedQuery);
    url.push('&key=AIzaSyAm9yWCV7JPCTHCJut8whOjARd7pwROFDQ');

    return axios.get(url.join(''))
      .then((response) => {
        if (response.data.rows) {
          return response.data.rows;
        } else {
          console.log(`getPolygonGeometries axios call data in unexpected format: ${response.data}`);
        }
      })
      .catch((error) => {
        console.log(`getPolygonGeometries axios call failed with error: ${error}\n
          Error message: ${error.response.data.error.message}`);
          return [];
      });
  }
};
