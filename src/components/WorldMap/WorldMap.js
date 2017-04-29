import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WorldMap.css';
import GoogleMapContainer from '../GoogleMapContainer/GoogleMapContainer';
import styles from './MapProperties';

/**
* Component to handle the Google Map with clickable countries
*/
class WorldMap extends Component {
  componentDidMount() {
    this.props.updateCountry(this.props.selectedCountry);
  }

  state = {};

  handleMapLoad = this.handleMapLoad.bind(this);
  handleMapClick = this.handleMapClick.bind(this);

  handleMapLoad(map) {
    this._mapComponent = map;
    // this._mapComponent.setOptions({styles: {styles}});
    this.props.onMapLoad(this.drawMap);
  }

  /*
   * This is called when you click on the map.
   */
  handleMapClick(event) {
  }

  drawMap(data) {

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
        />
      </div>
    );
  }
}

WorldMap.propTypes = {
  selectedCountry: PropTypes.string.isRequired,
  updateCountry: PropTypes.func.isRequired,
  onMapLoad: PropTypes.func.isRequired
};

export default WorldMap;
