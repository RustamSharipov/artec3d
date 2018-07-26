import React from 'react';

import styles from './style.css';


const MovieDirector = ({ director }) => {
  if (director) {
    return (
      <div className={styles.movieDirector}>
        <span className={styles.prefix}>by </span>
        <span className={styles.name}>{director}</span>
      </div>
    );
  }

  return null;
};

export default MovieDirector;
