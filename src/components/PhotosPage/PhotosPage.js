import React from 'react';
import PropTypes from 'prop-types';

const Photos = (props) => {
  let addPhoto = props.store.addPhoto;
  let refUrl = React.createRef();
  let images = null;
  if (!!props.imagesUrls) {
    images = props.imagesUrls.map((url, index) => <img src={url.picture} key={index} alt='url'/>)
  }
  return (
    <div>
      <div className = 'picture-wrapper'>
        {images}
      </div>
      <input type='text' ref = {refUrl} />
      <button onClick = {() => {addPhoto(refUrl.current.value)}}>
        Add photo
      </button>
    </div>
  )
}
Photos.propTypes = {
  imagesUrls: PropTypes.array.isRequired
};

export default Photos;