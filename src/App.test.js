import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App'


describe('App Component', () => {

  let wrapperInstance
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);

    wrapperInstance = wrapper.instance()
    wrapperInstance.setState({photoCards: [ {likes:53}, {likes:100} ], selectedPhoto: { indexKey: 0} })
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

  it('call likeButtonHandler, which increase the like amount of the selected picture by 1', () => {
    expect(wrapperInstance.likeButtonHandler())
    expect(wrapperInstance.state.photoCards[0].likes).toEqual(54);
  });

  it('call setIndexKey', () => {
    expect(wrapperInstance.setIndexKey())
    expect(wrapperInstance.state.photoCards[0].indexKey).toEqual(0);
    expect(wrapperInstance.state.photoCards[1].indexKey).toEqual(1);
  });

})
