import React, { Component } from 'react';

class PhotoSelection extends Component {
  render() {
    const imgPath = "./images/" + `${this.props.photoData.imageLink}`
    const avatarPath = "./avatars/" + `${this.props.photoData.userIconLink}`
    return (
      <div>
        <div> <img id='avatar' src={avatarPath} alt='avatarPicture'/>  </div>
        <p id='username'>{this.props.photoData.username}</p>
        <div> <img id='photo-selected' src={imgPath} alt='pictureSelected' /> </div>
        <p id='description-photo'>{this.props.photoData.description}</p>
      </div>
    );
  }
}

export default PhotoSelection;
