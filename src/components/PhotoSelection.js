import React, { Component } from 'react';

class PhotoSelection extends Component {
  render() {
    const imgPath = "./images/" + `${this.props.photoName}`
    return (
      <div>
        <div> <img src={imgPath} /> </div>
      </div>
    );
  }
}

export default PhotoSelection;
