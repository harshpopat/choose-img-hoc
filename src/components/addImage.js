import React from 'react';

const addImage = (WrappedComponent) => {
  class AddImage extends React.Component {
    fileHandler = (event) => {
      console.log(event);
    };

    render() {
      return (
        <div>
          <WrappedComponent fileHandler={this.fileHandler} {...this.props} />
        </div>
      );
    }
  }
  return AddImage;
};

export default addImage;
