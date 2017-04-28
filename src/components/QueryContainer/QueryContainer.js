import React, { Component } from 'react';
import QueryInput from '../QueryInput/QueryInput';
import QueryResult from '../QueryResult/QueryResult';

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

export default QueryContainer;
