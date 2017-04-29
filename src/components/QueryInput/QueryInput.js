import React from 'react';
import PropTypes from 'prop-types';

function QueryInput(props) {
  const inputText =
`SELECT DISTINCT ?population
WHERE {
  ?x dbp:commonName ?name.
  FILTER(bif:contains(?name, "${props.country}")) .
  ?x dbo:populationTotal ?population.
}`;

  return (
    <textarea
      name="query-input"
      rows='10' cols='60'
      value={inputText}
      readOnly>
    </textarea>
  );
}

PropTypes.propTypes = {
  country: PropTypes.string.isRequired
};

export default QueryInput;
