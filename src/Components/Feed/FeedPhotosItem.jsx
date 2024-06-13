import React from 'react';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  console.log('PHOTO.SCR' + photo.src); // Log the image source
  function handleClick() {
    setModalPhoto(photo); 
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.view}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
