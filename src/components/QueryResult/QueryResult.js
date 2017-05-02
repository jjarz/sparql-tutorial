import React from 'react';
import PropTypes from 'prop-types';
import './QueryResult.css';

function QueryResult(props) {
  return (
    <div className="QueryResult">
      <h2 className="QueryResult-header">Query Result</h2>
      <div className="QueryResult-output"
        dangerouslySetInnerHTML={{__html: `<div>${props.result}</div>`}} />
    </div>
  );
}

QueryResult.propTypes = {
  result: PropTypes.string
};

export default QueryResult;
