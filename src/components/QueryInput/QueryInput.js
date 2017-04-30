import React from 'react';
import PropTypes from 'prop-types';
import './QueryInput.css';

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
      className='query-input'
      name='query-input'
      rows='8' cols='40'
      value={inputText}
      readOnly>
    </textarea>
  );
}

PropTypes.propTypes = {
  country: PropTypes.string.isRequired
};

export default QueryInput;
