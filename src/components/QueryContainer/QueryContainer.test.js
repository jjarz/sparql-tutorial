import React from 'react';
import ReactDOM from 'react-dom';
import QueryContainer from './QueryContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QueryContainer
      country='country'
      result='9000000'
    />, div);
});
