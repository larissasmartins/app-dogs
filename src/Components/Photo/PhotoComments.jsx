import React, { useContext, useState } from 'react';
import PhotoCommentsForm from './PhotoCommentsForm';
import { UserContext } from '../../UserContext';
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments); // show comments
  // only show form if there's a user logged in
  const { login } = useContext(UserContext);

  return (
    <>
      <ul className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </> // setComments - to show the comment as soon as it is sent
    // props its the comments coming from data in PhotoContent
  );
};

export default PhotoComments;
