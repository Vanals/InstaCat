import React, { Component } from 'react';

class Photo extends Component {
  render() {
    return (
      <div>
        <div><img src={this.props.path} /></div>
      </div>
    );
  }
}

export default Photo;
