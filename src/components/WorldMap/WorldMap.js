import React, { Component } from 'react';
import './WorldMap.css';
import PropTypes from 'prop-types';

function SelectCountry(props) {
  const countries = ['Switzerland', 'Cocos  Islands', 'North Sudan', 'Paraguay'];

  return (
    <div className='world-map'>
      <p>
        Population of {props.selectedCountry} is {props.population}
      </p>
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

/**
* Component to handle the Google Map with clickable countries
*/
class WorldMap extends Component {
  constructor() {
    super();

    this.state = {
      selectedCountry: 'Switzerland',
      population: '???'
    };

    this.updateCountry = this.updateCountry.bind(this);
  }

  updateCountry(country) {
    this.setState(() => {
      return {
        selectedCountry: country
      }
    });
  }

  render() {
    return (
      <div>
        <SelectCountry
          selectedCountry={this.state.selectedCountry}
          onSelect={this.updateCountry}
          population={this.state.population}
        />
      </div>
    );
  }
}

SelectCountry.propTypes = {
  selectedCountry: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default WorldMap;
