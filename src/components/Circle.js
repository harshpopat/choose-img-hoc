import React, { Component } from 'react';
import addImage from './addImage';

function Circle(props) {
  console.log(props);
  return (
    <div>
      <h1>Circle</h1>
      <input type='file' onChange={props.fileHandler} />
    </div>
  );
}

export default addImage(Circle);
