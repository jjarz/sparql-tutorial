import React from 'react';
import './CountrySelector.css';
import PropTypes from 'prop-types';

function CountrySelector(props) {
  const countries = ['Switzerland', 'Cocos  Islands', 'North Sudan', 'Paraguay'];

  return (
    <div className='country-selector'>
      <ul className='countries'>
        {countries.map((country) => {
          return (
            <li
              style={country === props.selectedCountry ? { color: '#d0021b'}: null }
              onClick={props.onSelect.bind(null, country)}
              key={country}>
              {country}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

CountrySelector.propTypes = {
  selectedCountry: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default CountrySelector;
