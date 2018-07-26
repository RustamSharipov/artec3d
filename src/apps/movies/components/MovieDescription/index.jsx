import React from 'react';

import styles from './style.css';


const MovieDescription = ({ children }) => {
  return (
    <div className={styles.movieDescription}>
      {children}
    </div>
  );
};

export default MovieDescription;
