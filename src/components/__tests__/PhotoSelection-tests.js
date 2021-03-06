import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PhotoSelection from '../PhotoSelection'

describe('PhotoSelection Component', () => {

  let wrapper
  const imageLink = {
    imageLink: 'cat1.jpeg',
    username: 'MarcoMVF',
    userIconLink: 'MakersAcademy.jpeg',
    description: 'Marco is an awsome developer',
    likes: 1000,
    comments: []
  }

  beforeEach(() => {
    wrapper = shallow(<PhotoSelection photoData={imageLink} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.type()).toEqual('div');
  })

  it('renders the picture selected in base of the data given by props', () => {
    expect(wrapper.find('#photo-selected').prop('src')).toEqual('./images/cat1.jpeg');
  });

  it('renders a p tag containing the username/alias of the user who posted the picture', () => {
    expect(wrapper.find('#username').text()).toEqual('MarcoMVF');
  });

  it('renders the correct avatar using the src\'s value given by props', () => {
    expect(wrapper.find('#avatar').prop('src')).toEqual('./avatars/MakersAcademy.jpeg');
  });

  it('renders a p tag containing the description of the photo selected', () => {
    expect(wrapper.find('#description-photo').text()).toEqual('Marco is an awsome developer');
  });

  it('renders a p tag showing how many likes the picture has', () => {
    expect(wrapper.find('#likes-amount').text()).toEqual('1000');
  });

  it('render the Like button', () => {
    expect(wrapper.find('#like-button').exists()).toEqual(true);
  });

  it('render the comment input text', () => {
    expect(wrapper.find('#comment-text-input').exists()).toEqual(true);
  });

  it('render the send comment button', () => {
    expect(wrapper.find('#send-comment-button').exists()).toEqual(true);
  });

  it('test if an onClick function is called when the like button is clicked', () => {
    const mockCallBack = jest.fn()
    const wrapper = shallow(<PhotoSelection likeButtonHandler={mockCallBack} photoData={imageLink}/>);
    wrapper.find('#like-button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1)
  });

  it('test if an onClick function is called when the like Go Back button is clicked', () => {
    const mockCallBack = jest.fn()
    const wrapper = shallow(<PhotoSelection showFeeds={mockCallBack} photoData={imageLink}/>);
    wrapper.find('#back-button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1)
  });

  it('test if an onClick function is the send-comment-button is clicked', () => {
    const mockCallBack = jest.fn()
    const wrapper = shallow(<PhotoSelection addComment={mockCallBack} photoData={imageLink}/>);
    wrapper.find('#send-comment-button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1)
  });

})
