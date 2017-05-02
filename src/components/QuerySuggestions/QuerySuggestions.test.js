import React from 'react';
import ReactDOM from 'react-dom';
import QuerySuggestions from './QuerySuggestions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuerySuggestions
      onChangeSuggestedQuery={() => {}}
    />, div);
});
