import React from 'react';

function QueryInput(props) {
  const inputText =
`SELECT DISTINCT ?population
WHERE {
  ?x dbp:commonName ?name.
  FILTER(bif:contains(?name, "${props.country}")) .
  ?x dbo:populationTotal ?population.
}`;

  return (
    <textarea name="query-input" rows='10' cols='60' value={inputText}>
    </textarea>
  );
}

export default QueryInput;
