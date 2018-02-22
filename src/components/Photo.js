import React, { Component } from 'react';
import '../styles/Photo.css'

class Photo extends Component {
  render() {
    const imgPath = "./images/" + `${this.props.photoName}`
    return (
      <div>
        <div> <img src={imgPath} className='cat-photo'/> </div>
      </div>
    );
  }
}

export default Photo;
