import React from 'react';
import ReactDOM from 'react-dom';
import CountrySelector from './CountrySelector';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const updateCountry = () => {};
  ReactDOM.render(<CountrySelector
      selectedCountry='Switzerland'
      onSelect={updateCountry}
    />, div);
});
