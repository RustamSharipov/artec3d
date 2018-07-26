import React from 'react';

import styles from './style.css';


const MovieActors = ({ actors }) => {
  if (actors) {
    return (
      <div className={styles.movieActors}>
        Starring: {actors}
      </div>
    );
  }
  return null;
};

export default MovieActors;