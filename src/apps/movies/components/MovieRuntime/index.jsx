import React from 'react';

import styles from './style.css';


const MovieRuntime = ({ runtime }) => {
  if (runtime) {
    return (
      <div className={styles.movieRuntime}>
        {runtime}&nbsp;min
      </div>
    );
  }
  return null;
};

export default MovieRuntime;
