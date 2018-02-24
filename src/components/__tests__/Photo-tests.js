import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Photo from '../Photo'


describe('Photo Component', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Photo />);
  });

  it('render the img tag', () => {
    expect(wrapper.find('#cat-photo').length).toEqual(1)
  })

  it('render the hide button', () => {
    expect(wrapper.find('#hide-button').length).toEqual(1)
  })
})
