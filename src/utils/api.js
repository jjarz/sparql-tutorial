import axios from 'axios';

module.exports = {
  fetchPopulation: function(country) {
    const endpoint = 'http://dbpedia.org/sparql';
    const query = `
    SELECT DISTINCT ?population
    WHERE {
      ?x dbp:commonName ?name.
      FILTER(bif:contains(?name, "${country}")) .
      ?x dbo:populationTotal ?population.
    }
    `;

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
  }
};
