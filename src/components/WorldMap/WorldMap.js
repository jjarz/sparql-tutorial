import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WorldMap.css';
import GoogleMapContainer from '../GoogleMapContainer/GoogleMapContainer';

/**
* Container component for GoogleMap
*
* Handles calls to get geometries for countries and drawing polygons
* Implements map events, like clicking a country
*/
class WorldMap extends Component {
  componentDidMount() {
    this.props.updateCountry(this.props.selectedCountry);
  }

  state = {};

  handleMapLoad = this.handleMapLoad.bind(this);
  handleMapClick = this.handleMapClick.bind(this);

  /**
  * Called after google maps is loaded
  * Makes call to get the country polygons from here
  *
  * @param map - the google map passed back from react-google-maps' GoogleMap
  */
  handleMapLoad(map) {
    this._mapComponent = map;
  }

  /*
   * This is called when you click on the map.
   */
  handleMapClick(event) {
  }

  render() {
    return (
      <div className='map'>
        <GoogleMapContainer
          containerElement={
            <div className='map--container' />
          }
          mapElement={
            <div className='map--element'/>
          }
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          polygons={this.props.polygons}
        />
      </div>
    );
  }
}

WorldMap.propTypes = {
  selectedCountry: PropTypes.string.isRequired,
  updateCountry: PropTypes.func.isRequired,
  polygons: PropTypes.array.isRequired
};

export default WorldMap;
