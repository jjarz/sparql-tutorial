import React, { Component } from 'react';
import { Polygon } from 'react-google-maps';
import PropTypes from 'prop-types';

class CountryPolygon extends Component {
  constructor() {
    super();

    this.state = {
      options: {
        fillColor: '#ffff66',
        fillOpacity: 0,
        strokeColor: '#ff9900',
        strokeOpacity: 1,
        strokeWeight: 0.3
      }

    }
  }

  _onMouseOver = this._onMouseOver.bind(this);
  _onMouseOut = this._onMouseOut.bind(this);
  _onClick = this._onClick.bind(this);

  _onMouseOver() {
    this.setState({
      options: {
        fillOpacity: 0.4
      }
    });
  }

  _onMouseOut() {
    this.setState({
      options: {
        fillOpacity: 0
      }
    });
  }

  _onClick() {
    this.props.onCountryClick.call(this, this.props.name);
  }

  render() {
    return (
      <Polygon
        paths={this.props.paths}
        options={this.state.options}
        name={this.props.name}
        onMouseOver={this._onMouseOver}
        onMouseOut={this._onMouseOut}
        onClick={this._onClick}
      />
    );
  }
}

CountryPolygon.propTypes = {
  paths: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  onCountryClick: PropTypes.func.isRequired
}

export default CountryPolygon;
