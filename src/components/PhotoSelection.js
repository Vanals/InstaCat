import React, { Component } from 'react';

class PhotoSelection extends Component {
  render() {
    const imgPath = "./images/" + `${this.props.photoData.imageLink}`
    const avatarPath = "./avatars/" + `${this.props.photoData.userIconLink}`
    return (
      <div>
        <div> <img id='avatar' src={avatarPath} alt='avatarPicture'/>  </div>
        <p>{this.props.photoData.username}</p>
        <div> <img id='photo-selected' src={imgPath} alt='pictureSelected' /> </div>
      </div>
    );
  }
}

export default PhotoSelection;
