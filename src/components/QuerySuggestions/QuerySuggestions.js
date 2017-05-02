import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuerySuggestions.css';
import queries from '../../utils/queries';

class QuerySuggestions extends Component {
  constructor(props) {
    super(props);

    this.querySuggestions = this.constructMap();

    this.state = {
      value: 'defaultOption' // first key in Map
    }

    this.handleChange = this.handleChange.bind(this);
  }

  constructMap() {
    return new Map(
      [
        ['top_10_populations', {
            label: 'Top 10 Populations',
            query: queries[0]
          }
        ],
        ['all_populations', {
            label: 'Populations of every country',
            query: queries[1]
          }
        ],
        ['languages', {
            label: 'Official languages',
            query: queries[2]
          }
        ], 
        ['largest_city', {
            label: 'Largest cities in 10 largest countries',
            query: queries[3]
          }
        ]
      ]
    );
  }

  handleChange(event) {
    const selectedQueryKey = event.target.value;
    const selectedQueryValue = this.querySuggestions.get(selectedQueryKey);

    this.setState(() => {
      return {
        value: selectedQueryKey
      };
    });

    this.props.onChangeSuggestedQuery.call(null, selectedQueryValue.query);
  }

  render() {
    let suggestions = [];
    this.querySuggestions.forEach((value, key) => {
        suggestions.push(
          <option key={key} value={key}>
            {value.label}
          </option>
        );
      }
    );

    return (
      <div className="QuerySuggestions">
        <select className="QuerySuggestions-select queryButton" value={this.state.value} onChange={this.handleChange}>
          <option value='defaultOption' disabled>Try these other queries</option>
          {suggestions}
        </select>
      </div>
    );
  }
}

QuerySuggestions.propTypes = {
  onChangeSuggestedQuery: PropTypes.func.isRequired
}

export default QuerySuggestions;
