import React from 'react';
import PropTypes from 'prop-types';
import s from './PhotosPage.module.css'

const Photos = (props) => {
  let refUrl = React.createRef();
  let images = null;
  if (!!props.imagesUrls) {
    images = props.imagesUrls.map((url, index) => <div className={s.picture}><img src={url.picture} key={index} alt='url'/></div>)
  }
  return (
    <div>
      <div className = {s.pictures_wrapper}>
        {images}
      </div>
      <input type='text' ref = {refUrl} />
      <button onClick = {() => {props.store.dispatch({type: 'ADD-PHOTO', url: refUrl.current.value})}}>
        Add photo
      </button>
    </div>
  )
}
Photos.propTypes = {
  imagesUrls: PropTypes.array.isRequired
};

export default Photos;