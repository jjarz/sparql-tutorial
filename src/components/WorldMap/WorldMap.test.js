import React from 'react';
import ReactDOM from 'react-dom';
import WorldMap from './WorldMap';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<WorldMap
      selectedCountry='Switzerland'
      updateCountry={() => {}}
      polygons={[]}
    />);
  expect(wrapper).toHaveLength(1);
});
