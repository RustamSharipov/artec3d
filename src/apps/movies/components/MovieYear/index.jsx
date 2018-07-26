import React from 'react';

import styles from './style.css';


const MovieYear = ({ year }) => {
  return (
    <div className={styles.movieYear}>
      {year}
    </div>
  );
};

export default MovieYear;