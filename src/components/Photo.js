import React, { Component } from 'react';
import '../styles/Photo.css'

class Photo extends Component {
  render() {
    const imgPath = "./images/" + `${this.props.photoName}`
    return (
      <div>
        <div> <img src={imgPath} className='cat-photo' onClick={() => this.props.photoSelectionHandler(this.props.index)}/> </div>
      </div>
    );
  }
}

export default Photo;
