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


  photoSelectionHandler = (index) => {
    this.setState({
      selectedPhoto: this.state.photoCards[index],
      showPhotoSelection: true
    })
  }

  render() {
    return (
    <div>
      <div>
        { !this.state.showPhotoSelection && <PhotosFeed photoCards={this.state.photoCards} photoSelectionHandler={this.photoSelectionHandler}/> }
      </div>
      <div>
        { this.state.showPhotoSelection && <PhotoSelection photoName={this.state.selectedPhoto.imageLink}/> }
      </div>
    </div>
    );
  }
}

export default App;
