import React from 'react';
import PropTypes from 'prop-types';

function QueryResult(props) {
  return (
    <div className="query-result">
      {props.result}
    </div>
  );
}

QueryResult.propTypes = {
  result: PropTypes.string
};

export default QueryResult;
