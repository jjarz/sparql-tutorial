import React from 'react';
import ReactDOM from 'react-dom';
import QueryResult from './QueryResult';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QueryResult
      result='result'
    />, div);
});
