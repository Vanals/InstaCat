import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App'


describe('App Component', () => {

  let wrapperInstance
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);

    wrapperInstance = wrapper.instance()
    wrapperInstance.setState({photoCards: [ {likes:53, liked: false}, {likes:100} ], selectedPhoto: { indexKey: 0} })
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

  it('call showFeeds', () => {
    wrapperInstance.setState({photoCards: [], selectedPhoto: { indexKey: 0}, showPhotoSelection: true, })
    expect(wrapperInstance.showFeeds())
    expect(wrapperInstance.find('PhotoSelection').exists()).toEqual(false)
  });

  describe('#likeButtonHandler', function() {

    it('when liked ==== false, it should increase the like amount of the selected picture by 1 and set like to true', () => {
      expect(wrapperInstance.likeButtonHandler())
      expect(wrapperInstance.state.photoCards[0].likes).toEqual(54);
      expect(wrapperInstance.state.photoCards[0].liked).toEqual(true)
    });

    it('when liked === true, it should decrease the like amount of the selected picture by 1 and set like to false', () => {
      wrapperInstance.setState({photoCards: [ {likes:53, liked: true}, {likes:100} ], selectedPhoto: { indexKey: 0} })
      expect(wrapperInstance.likeButtonHandler())
      expect(wrapperInstance.state.photoCards[0].likes).toEqual(52);
      expect(wrapperInstance.state.photoCards[0].liked).toEqual(false);
    });
  })

  it('call setIndexKey', () => {
    expect(wrapperInstance.setIndexKey())
    expect(wrapperInstance.state.photoCards[0].indexKey).toEqual(0);
    expect(wrapperInstance.state.photoCards[1].indexKey).toEqual(1);
  });

  it('call deletePhotoCard', () => {
    expect(wrapperInstance.deletePhotoCard(1))
    expect(wrapperInstance.state.photoCards[1]).toEqual(undefined);
  });


})
