import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

it('renders the world map and query container', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toHaveLength(1);
});
