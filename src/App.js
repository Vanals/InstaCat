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
      selectedPhoto: []
    };
  }


  photoSelectionHandler = (index) => {
    this.setState({selectedPhoto: this.state.photoCards[index] })
  }

  render() {
    return (
    <div>
      <div>
        <PhotosFeed photoCards={this.state.photoCards} photoSelectionHandler={this.photoSelectionHandler}/>
      </div>
      <div>
        <PhotoSelection photoName={this.state.selectedPhoto.imageLink}/>
      </div>
    </div>
    );
  }
}

export default App;
