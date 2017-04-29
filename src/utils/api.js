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

module.exports = {
  fetchPopulation: (country) => {
    const endpoint = 'http://dbpedia.org/sparql';
    const query = getPopulationQuery(country);

    // SPARQL ajax query URI
    const encodedURI = window.encodeURI(`${endpoint}?query=${query}`);

    return axios.get(encodedURI)
      .then((response) => {
        return response.data.results.bindings[0].population.value;
      })
      .catch((error) => {
        // TODO: handle multi-word countries
        console.log(`Error calling SPARQL for population: ${error.response.data}`);
        return '???';
      });
  },

  getMapPolygonGeometries: (drawMap) => {
    var drawMap = function(data) {
      console.log(`drawMap data: ${data}`);
    };
    // Initialize JSONP request
    var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
    url.push('sql=');
    var query = 'SELECT name, kml_4326 FROM ' +
        '1foc3xO9DyfSIF6ofvN0kp2bxSfSeKog5FbdWdQ';
    var encodedQuery = encodeURIComponent(query);
    url.push(encodedQuery);
    url.push('&callback=drawMap');
    url.push('&key=AIzaSyAm9yWCV7JPCTHCJut8whOjARd7pwROFDQ');


    return axios.get(url.join(''))
      .then((response) => {
        return response['rows'];
      })
      .catch((error) => {
        `getPolygonGeometries axios call failed with error: ${error}`;
        return [];
      });
  }
};
