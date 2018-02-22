import React, { Component } from 'react';
import PhotosFeed from './components/PhotosFeed'
const photoCardsData = require('./photoCardsData.json');
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoCards: photoCardsData
    };
  }


  render() {
    return (
      <div>
        <PhotosFeed photoCards={this.state.photoCards}/>
      </div>
    );
  }
}

export default App;
