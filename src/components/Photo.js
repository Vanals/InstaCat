import React, { Component } from 'react';
import '../styles/Photo.css'

class Photo extends Component {
  render() {
    const imgPath = "./images/" + `${this.props.photoName}`
    const altText = "" + `${this.props.photoName}} not loaded`
    return (
      <div>
        <button id='hide-button'>Hide</button>
        <div> <img src={imgPath} id='cat-photo' onClick={() => this.props.photoSelectionHandler(this.props.index)} alt={altText} /> </div>
      </div>
    );
  }
}

export default Photo;
