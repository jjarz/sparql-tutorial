import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders the world map and query container', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
