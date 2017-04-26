import React from 'react';
import ReactDOM from 'react-dom';
import WorldMap from './WorldMap';

it('renders the map', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WorldMap />, div);
});
