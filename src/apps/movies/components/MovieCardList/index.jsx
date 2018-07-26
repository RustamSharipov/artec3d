import React from 'react';

import styles from './style.css';


const MovieCardList = ({ children }) => {
  return (
    <div className={styles.movieCardList}>
      {children}
    </div>
  );
};

export default MovieCardList;