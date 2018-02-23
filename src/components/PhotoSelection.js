import React, { Component } from 'react';

class PhotoSelection extends Component {
  render() {
    const imgPath = "./images/" + `${this.props.photoData.imageLink}`
    return (
      <div>
        <p>{this.props.photoData.username}</p>
        <div> <img id='photo-selected' src={imgPath} /> </div>
      </div>
    );
  }
}

export default PhotoSelection;
