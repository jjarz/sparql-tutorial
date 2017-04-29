import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import PropTypes from 'prop-types';
import CountryPolygon from '../CountryPolygon/CountryPolygon';

/*
 * Render the GoogleMap from react-google-maps
 * See https://github.com/tomchentw/react-google-maps#withgooglemap
 *
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
  {props.polygons.map(polygon => {
    return (
      <CountryPolygon
        paths={polygon.paths}
        name={polygon.name}
        key={polygon.name}
      />
    );
  })}
  </GoogleMap>
));

GoogleMapContainer.propTypes = {
  onMapLoad: PropTypes.func.isRequired,
  onMapClick: PropTypes.func,
  polygons: PropTypes.array.isRequired
}

export default GoogleMapContainer;
