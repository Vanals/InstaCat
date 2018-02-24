import React, { Component } from 'react';
import PhotosFeed from './components/PhotosFeed'
import PhotoSelection from './components/PhotoSelection'
const photoCardsData = require('./photoCardsData.json');
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoCards: photoCardsData,
      selectedPhoto: [],
      showPhotoSelection: false
    };
  }

  componentDidMount() {
    this.setIndexKey()
  }

  //this allow me to refer to the correct picture for the like button.
  setIndexKey = () => {
    const photoCardWithIndex = this.state.photoCards.map((photoCard, index) => {
    photoCard.indexKey = index;
    return photoCard;
    });
    this.setState({photoCards: photoCardWithIndex });
  }

  likeButtonHandler = () => {
    const photoCards = this.state.photoCards
    const selectedPhotoIndex = this.state.selectedPhoto.indexKey
    //Use set state for the following code??
    if (photoCards[selectedPhotoIndex].liked === false) {
      photoCards[selectedPhotoIndex].likes += 1
      photoCards[selectedPhotoIndex].liked = true
      return this.forceUpdate()
    }

    if (photoCards[selectedPhotoIndex].liked === true) {
      photoCards[selectedPhotoIndex].likes -= 1
      photoCards[selectedPhotoIndex].liked = false
      return this.forceUpdate()
    }

  }

  photoSelectionHandler = (index) => {
    this.setState({
      selectedPhoto: this.state.photoCards[index],
      showPhotoSelection: true,
    })
  }

  render() {
    return (
    <div>
      <div>
        {
          !this.state.showPhotoSelection &&
          <PhotosFeed
            photoCards={this.state.photoCards}
            photoSelectionHandler={this.photoSelectionHandler}
          />
        }
      </div>
      <div>
        { this.state.showPhotoSelection &&
          <PhotoSelection
            photoData={this.state.selectedPhoto}
            likeButtonHandler={this.likeButtonHandler}
          />
        }
      </div>
    </div>
    );
  }
}

export default App;
