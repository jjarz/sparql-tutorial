import axios from 'axios';

function getPopulationQuery(country) {
  return (
  `SELECT DISTINCT ?population
  WHERE {
    ?x dbp:commonName ?name.
    FILTER(bif:contains(?name, "${country}")) .
    ?x dbo:populationTotal ?population.
  }`
  );
};

function formatNumber(number) {
  return Number.parseInt(number, 10).toLocaleString();
};

module.exports = {
  /**
  * Makes call to fetch the population of a country through SPARQL
  */
  fetchPopulation: (country) => {
    const endpoint = 'http://dbpedia.org/sparql';
    const query = getPopulationQuery(country);

    // SPARQL ajax query URI
    const encodedURI = window.encodeURI(`${endpoint}?query=${query}`);

    return axios.get(encodedURI)
      .then((response) => {
        if (response.data.results) {
          return response.data.results.bindings[0] ?
            formatNumber(response.data.results.bindings[0].population.value) :
            `The population for ${country} is not in DPBedia :(`;
        }
        return 'no results from DBPedia';
      })
      .catch((error) => {
        // TODO: handle multi-word countries
        console.log(`Error calling SPARQL for population: ${error.response.data}`);
        return '???';
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
