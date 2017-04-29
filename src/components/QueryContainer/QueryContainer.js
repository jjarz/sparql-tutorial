import React, { Component } from 'react';
import QueryInput from '../QueryInput/QueryInput';
import QueryResult from '../QueryResult/QueryResult';
import PropTypes from 'prop-types';

class QueryContainer extends Component {
    render() {
      return (
        <div className="QueryContainer">
          <h2>SPARQL Input</h2>
          <QueryInput country={this.props.country}/>

          <h2>Query Result</h2>
          <QueryResult result={this.props.result}/>
        </div>
      );
    }
}

QueryContainer.propTypes = {
  country: PropTypes.string.isRequired,
  result: PropTypes.string
}

export default QueryContainer;
