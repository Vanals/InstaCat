import React, { Component } from 'react';
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

      </div>
    );
  }
}

export default App;
