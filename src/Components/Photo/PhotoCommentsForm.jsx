import React, { useRef, useState } from 'react';
import SendImg from '../../Assets/enviar.svg?react';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { COMMENT_POST } from '../../api';
import styles from './PhotoCommentsForm.module.css';

export const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = useState('');
  const { request, error } = useFetch(); // used to handle the form

  // send the post
  async function handleSubmit() {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    console.log(json);
    // show the comment right away
    if (response.ok) {
      setComment(''); // erase the textarea when the comment is send
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    // its s different form from the other, its holds a textarea, not an input
    <form
      className={`${styles.form} ${single ? styles.single : ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <SendImg />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
