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
    defaultCenter={{ lat: 46.8182, lng: 8.2275 }}
    mapTypeId={google.maps.MapTypeId.ROADMAP} // eslint-disable-line no-undef
  >
  {props.polygons.map(polygon => {
    return (
      <CountryPolygon
        paths={polygon.paths}
        name={polygon.name}
        key={polygon.name}
        onCountryClick={props.onCountryClick}
      />
    );
  })}
  </GoogleMap>
));

GoogleMapContainer.propTypes = {
  onCountryClick: PropTypes.func.isRequired,
  polygons: PropTypes.array.isRequired
}

export default GoogleMapContainer;
