import React from 'react';
import ReactDOM from 'react-dom';
import QueryInput from './QueryInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QueryInput
      result='result'
    />, div);
});
