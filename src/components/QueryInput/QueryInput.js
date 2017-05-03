import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuerySuggestions from '../QuerySuggestions/QuerySuggestions';
import './QueryInput.css';

class QueryInput extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.handleQueryInputChange.call(null, event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmitQuery.call(null, this.props.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='QueryInput-form'>
        <label>
          <textarea
            className='QueryInput-textarea'
            name='query-input'
            value={this.props.value}
            onChange={this.handleChange}>
          </textarea>
        </label>

        <input type="submit" className='QueryInput-submit queryButton' value="Submit Query" />
        <QuerySuggestions
          visible={this.props.showSuggestions}
          onChangeSuggestedQuery={this.props.onChangeSuggestedQuery}
          />
      </form>
    );
  }
}

PropTypes.propTypes = {
  handleQueryInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  suggestedQueries: PropTypes.object.isRequired
};

export default QueryInput;
