import React from 'react';

import styles from './style.css';


const MovieGenres = ({ genres }) => {
  if (genres) {
    const movieGenres = genres.map((genre, index) => ({
      id: index,
      name: genre,
    }))

    return (
      <div className={styles.movieGenres}>
        {movieGenres.map(genre => (
          <span className={styles.genre} key={genre.id}>
            {genre.name}
          </span>
        ))}
      </div>
    );
  }

  return null;
};

export default MovieGenres;