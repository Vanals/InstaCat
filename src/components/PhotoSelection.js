import React, { Component } from 'react';
import '../styles/PhotoSelection.css'

class PhotoSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: null
    };
  }

  updateCommentText = (event) => {
    this.setState({commentText: event.target.value})
  }

  render() {
    const imgPath = "./images/" + `${this.props.photoData.imageLink}`
    const avatarPath = "./avatars/" + `${this.props.photoData.userIconLink}`
    let photoComments
    photoComments = this.props.photoData.comments.map((comment) => {
      return <p>{comment}</p>
    })

    return (
      <div>

        <input type="text" id="comment-text-input" onChange={this.updateCommentText} placeholder="Write your comment here" />
        <button id='send-comment-button' onClick={() => this.props.addComment(this.props.photoData.indexKey, this.state.commentText)}>Post comment</button>

        {photoComments}

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
