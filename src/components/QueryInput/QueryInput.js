import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      <form onSubmit={this.handleSubmit} className='query-form'>
        <label>
          <textarea
            className='query-input'
            name='query-input'
            rows='15' cols='50'
            value={this.props.value}
            onChange={this.handleChange}>
          </textarea>
        </label>
        <input type="submit" className='query-submit' value="Submit Query" />
      </form>
    );
  }
}

PropTypes.propTypes = {
  country: PropTypes.string.isRequired,
  handleQueryInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default QueryInput;
