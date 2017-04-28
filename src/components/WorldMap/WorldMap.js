import React, { Component } from 'react';
import CountrySelector from '../CountrySelector/CountrySelector'
import PropTypes from 'prop-types';

/**
* Component to handle the Google Map with clickable countries
*/
class WorldMap extends Component {
  componentDidMount() {
    this.props.updateCountry(this.props.selectedCountry);
  }

  render() {
    return (
      <div>
        <CountrySelector
          selectedCountry={this.props.selectedCountry}
          onSelect={this.props.updateCountry}
        />
      </div>
    );
  }
}

WorldMap.propTypes = {
  selectedCountry: PropTypes.string.isRequired,
  updateCountry: PropTypes.func.isRequired
};

export default WorldMap;
