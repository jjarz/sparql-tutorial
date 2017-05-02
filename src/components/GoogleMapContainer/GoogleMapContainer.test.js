import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMapContainer from './GoogleMapContainer';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<GoogleMapContainer
      containerElement={
        <div className='map--container' />
      }
      mapElement={
        <div className='map--element'/>
      }
      onMapLoad={() => {}}
      onCountryClick={()=>{}}
      polygons={[]}
    />);

  expect(wrapper).toHaveLength(1);
});
