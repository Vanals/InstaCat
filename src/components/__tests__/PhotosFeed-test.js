import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PhotosFeed from '../PhotosFeed'

describe('PhotosFeed Component', () => {

  const photofeeds = {
    photoCards: [{ imageLink: 'cat1.jpeg' }],
    photoSelectionHandler: jest.fn()
  }

  let dataWrapper

  beforeEach(() => {
    dataWrapper = shallow(<PhotosFeed {...photofeeds} />);
  });

  it('renders without crashing', () => {
    expect(dataWrapper.type()).toEqual('div');
  })

  it('renders a Photo component', () => {
    expect(dataWrapper.find('Photo').exists()).toEqual(true);
  });

})
