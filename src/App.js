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

  //this allow me to refer to the correct picture for like, for example
  setIndexKey = () => {
    const photoCardWithIndex = this.state.photoCards.map((photoCard, index) => {
    photoCard.indexKey = index;
    return photoCard;
    });
    this.setState({photoCards: photoCardWithIndex });
  }

  likeButtonHandler = () => {
    const photoCards = this.state.photoCards
    photoCards[this.state.selectedPhoto.indexKey].likes += 1
    this.forceUpdate()
    console.log(this.state)
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
