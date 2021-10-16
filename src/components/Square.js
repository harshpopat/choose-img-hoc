import React, { Component } from 'react';
import addImage from './addImage';

class Square extends Component {
  render() {
    return (
      <div>
        <h1>Square</h1>
        <input type='file' onChange={this.fileHandler} />
      </div>
    );
  }
}

export default addImage(Square);
