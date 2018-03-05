import './App.css';
import React, { Component } from 'react';
import PhotosFeed from './components/PhotosFeed'
import PhotoSelection from './components/PhotoSelection'
const photoCardsData = require('./photoCardsData.json');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoCards: photoCardsData,
      selectedPhoto: [],
      showPhotoSelection: false,
      user: 'Marco Vanali'
    };
  }

  componentDidMount() {
    //Just didn't want to change manually the .json file
    this.setIndexKeyAndComments()
  }

  //this allow me to refer to the correct picture for the like button.
  setIndexKeyAndComments = () => {
    const photoCardWithIndex = this.state.photoCards.map((photoCard, index) => {
    photoCard.indexKey = index;
    photoCard.comments = []
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

  // Go back button's function
  showFeeds = () => {
    this.setState({
      selectedPhoto: undefined,
      showPhotoSelection: false,
    })
  }

  //Possible with setState??
  deletePhotoCard = (index) => {
    //using pop the index of the picture change and the buttons get bugged
    delete this.state.photoCards[index]
    return this.forceUpdate()
  }

  addComment = (index, comment) => {
    this.state.photoCards[index].comments.push(comment)
    this.forceUpdate()
  }

  render() {
    return (
    <div>
      <h1 id='header-home'> -InstaCat- </h1>
      <div>
        {
          !this.state.showPhotoSelection &&
          <PhotosFeed
            photoCards={this.state.photoCards}
            photoSelectionHandler={this.photoSelectionHandler}
            deletePhotoCard={this.deletePhotoCard}
          />
        }
      </div>
      <div>
        { this.state.showPhotoSelection &&
          <PhotoSelection
            photoData={this.state.selectedPhoto}
            likeButtonHandler={this.likeButtonHandler}
            showFeeds={this.showFeeds}
            addComment={this.addComment}
            user={this.state.user}
          />
        }
      </div>
    </div>
    );
  }
}

export default App;
