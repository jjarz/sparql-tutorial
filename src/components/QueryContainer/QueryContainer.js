import React, { Component } from 'react';
import QueryInput from '../QueryInput/QueryInput';
import PropTypes from 'prop-types';
import './QueryContainer.css';

class QueryContainer extends Component {
    render() {
      return (
        <div className="QueryContainer">
          <h2 className="QueryContainer-header">SPARQL Input</h2>
          <QueryInput
            onSubmitQuery={this.props.onSubmitQuery}
            handleQueryInputChange={this.props.handleQueryInputChange}
            value={this.props.queryInputValue}
            onChangeSuggestedQuery={this.props.onChangeSuggestedQuery}
          />
        </div>
      );
    }
}

QueryContainer.propTypes = {
  queryInputValue: PropTypes.string.isRequired,
  handleQueryInputChange: PropTypes.func.isRequired,
  onChangeSuggestedQuery: PropTypes.func.isRequired
}

export default QueryContainer;
