import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PhotoSelection from '../PhotoSelection'

describe('PhotoSelection Component', () => {

  let wrapper
  const imageLink = { imageLink: 'cat1.jpeg', username: 'MarcoMVF' }
  beforeEach(() => {
    wrapper = shallow(<PhotoSelection photoData={imageLink} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.type()).toEqual('div');
  })

  it('renders a img tag', () => {
    expect(wrapper.find('img').prop('src')).toEqual('./images/cat1.jpeg');
  });

  it('renders a img tag', () => {
    expect(wrapper.find('p').text()).toEqual('MarcoMVF');
  });

})
