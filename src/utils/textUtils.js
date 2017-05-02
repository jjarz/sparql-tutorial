/* eslint-disable */
module.exports = {
  welcomeText: `  __________
 / ___  ___ \\    Welcome to SPARQLorial!
/ / @ \\/ @   \\
\\ \\___/\\___/ /\\  Click on a country and I will
 \\____\\/____/||  make a query for its
 /     /\\\\\\\\\\//  population.
 |     |\\\\\\\\\\
  \\      \\\\\\\\\\   Or get straight to it
   \\______/\\\\\\\\  and input your own
   _||_||_       SPARQL Query here!
    -- --
  `,

  countryQueryText: function(country) {
    return `SELECT ?population WHERE {
   ?country a dbo:Country.
   ?country dbp:commonName ?commonName.
   ?country dbp:commonName "${country}"@en.
   ?country dbo:populationTotal ?population.
}`;
  }
};
