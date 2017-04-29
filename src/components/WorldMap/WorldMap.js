import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import styles from './MapProperties';
import './WorldMap.css';

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
    mapTypeId={google.maps.MapTypeId.ROADMAP} // eslint-disable-line no-undef
    styles={styles}
  >
  </GoogleMap>
));

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
    console.log(styles);
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
  }

  render() {
    return (
      <div className='map'>
        <GettingStartedGoogleMap
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
  updateCountry: PropTypes.func.isRequired
};

export default WorldMap;
