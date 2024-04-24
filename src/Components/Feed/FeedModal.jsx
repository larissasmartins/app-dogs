import React, { useEffect } from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';

const FeedModal = ({ photo }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTOS_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal}>
      <img src={photo.src}></img>
    </div>
  );
};

export default FeedModal;
