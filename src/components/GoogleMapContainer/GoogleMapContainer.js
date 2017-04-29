import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import PropTypes from 'prop-types';

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
*/
const GoogleMapContainer = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
    mapTypeId={google.maps.MapTypeId.ROADMAP} // eslint-disable-line no-undef
  >
  </GoogleMap>
));

export default GoogleMapContainer;
