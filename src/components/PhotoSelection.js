import React, { Component } from 'react';
import '../styles/PhotoSelection.css'
class PhotoSelection extends Component {
  render() {
    const imgPath = "./images/" + `${this.props.photoData.imageLink}`
    const avatarPath = "./avatars/" + `${this.props.photoData.userIconLink}`
    return (
      <div>

        <input type="text" id="comment-text-input" placeholder="Write your comment here" />

        <button id='back-button' onClick={this.props.showFeeds}>Go Back</button>
        <div> <img id='avatar' src={avatarPath} alt='avatarPicture'/>  </div>
        <p id='username'>{this.props.photoData.username}</p>
        <div> <img id='photo-selected' src={imgPath} alt='pictureSelected' /> </div>
        <button id='like-button' onClick={this.props.likeButtonHandler} > Like </button>
        <p id='likes-amount'>{this.props.photoData.likes}</p>
        <p id='description-photo'>{this.props.photoData.description}</p>
      </div>
    );
  }
}

export default PhotoSelection;
