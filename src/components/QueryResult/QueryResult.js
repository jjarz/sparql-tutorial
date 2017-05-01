import React from 'react';
import PropTypes from 'prop-types';
import './QueryResult.css';

function QueryResult(props) {
  return (
    <div className="query-result">
      <div dangerouslySetInnerHTML={{__html: `<div>${props.result}</div>`}} />
    </div>
  );
}

QueryResult.propTypes = {
  result: PropTypes.string
};

export default QueryResult;
