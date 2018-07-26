import React from 'react';

import styles from './style.css';


const MoviePoster = ({ posterUrl, title, size }) => {
  const posterImageClassName = [
    styles.image,
    size && `${size}Size`,
  ];
  return (
    <div className={styles.moviePoster}>
      <img
        src={posterUrl}
        width="148"
        height="220"
        className={posterImageClassName.join(' ')}
        alt={title} />
    </div>
  );
};

export default MoviePoster;
