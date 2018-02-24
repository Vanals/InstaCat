import React, { Component } from 'react';
import Photo from './Photo'

class PhotosFeed extends Component {
  render() {

    let receivedPhotos
    receivedPhotos = this.props.photoCards.map((photoCard) => {
      return(
        <Photo
          photoName={photoCard.imageLink}
          index={photoCard.indexKey}
          photoSelectionHandler={this.props.photoSelectionHandler}
          deletePhotoCard={this.props.deletePhotoCard}
        />
      )
    })

    return (
      <div>
        {receivedPhotos}
      </div>
    );
  }
}

export default PhotosFeed;
