import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PhotoSelection from '../PhotoSelection'

describe('PhotoSelection Component', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<PhotoSelection photoName='cat1.jpeg' />);
  });

  it('renders without crashing', () => {
    expect(wrapper.type()).toEqual('div');
  })

  it('renders a img tag', () => {
    expect(wrapper.find('img').prop('src')).toEqual('./images/cat1.jpeg');
  });


})
