import React, { Component } from 'react';
import { Polygon } from 'react-google-maps';


class CountryPolygon extends Component {
  constructor() {
    super();

    this.state = {
      fillOpacity: 0
    }
  }

  _onMouseOver = this._onMouseOver.bind(this);

  _onMouseOver() {
    this.setState({
      fillOpacity: 0.4
    });
  }

  render() {
    return (
      <Polygon
        paths={this.props.paths}
        strokeColor='#ff9900'
        strokeOpacity={1}
        strokeWeight={0.3}
        fillColor='#ffff66'
        fillOpacity={this.state.fillOpacity}
        name={this.props.name}
        onMouseOver={this._onMouseOver}
      />
    );
  }

  // const country = new google.maps.Polygon({
  //   paths: newCoordinates,
  //   onMouseOver
  //
  // });
  // google.maps.event.addListener(country, 'mouseover', function() {
  //   this.setOptions({fillOpacity: 0.4});
  // });
  // google.maps.event.addListener(country, 'mouseout', function() {
  //   this.setOptions({fillOpacity: 0});
  // });
  // google.maps.event.addListener(country, 'click', function() {
  //   alert(this.name);
  // });
  //
  //
  // country.setMap(this._mapComponent);
}

export default CountryPolygon;
