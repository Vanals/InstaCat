import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App'


describe('App Component', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.type()).toEqual('div');
  })

  it('renders the PhotosFeed component', () => {
    expect(wrapper.find('PhotosFeed').exists()).toEqual(true);
  });

  it('renders the PhotoSelection component', () => {
    expect(wrapper.find('PhotoSelection').exists()).toEqual(false);
  });

})
