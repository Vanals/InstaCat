import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PhotoSelection from '../PhotoSelection'

describe('PhotoSelection Component', () => {

  let wrapper
  const imageLink = { imageLink: 'cat1.jpeg', username: 'MarcoMVF', userIconLink: 'MakersAcademy.jpeg' }
  beforeEach(() => {
    wrapper = shallow(<PhotoSelection photoData={imageLink} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.type()).toEqual('div');
  })

  it('renders a img tag with the src value given by props', () => {
    expect(wrapper.find('#photo-selected').prop('src')).toEqual('./images/cat1.jpeg');
  });

  it('renders a img tag', () => {
    expect(wrapper.find('p').text()).toEqual('MarcoMVF');
  });

  it('renders a img tag with the src value given by props', () => {
    expect(wrapper.find('#avatar').prop('src')).toEqual('./avatars/MakersAcademy.jpeg');
  });

})
