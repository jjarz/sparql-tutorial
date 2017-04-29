import React from 'react';
import ReactDOM from 'react-dom';
import WorldMap from './WorldMap';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const updateCountry = () => {};
  ReactDOM.render(<WorldMap
      selectedCountry='Switzerland'
      updateCountry={updateCountry}
    />, div);
});
