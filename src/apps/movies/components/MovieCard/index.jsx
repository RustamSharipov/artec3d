import React from 'react';
import { Link } from 'react-router-dom';

import MovieDirector from 'apps/movies/components/MovieDirector';
import MovieYear from 'apps/movies/components/MovieYear';
import MovieGenres from 'apps/movies/components/MovieGenres';
import MovieRuntime from 'apps/movies/components/MovieRuntime';
import MoviePoster from 'apps/movies/components/MoviePoster';

import styles from './style.css';


const MovieCard = ({ title, year, runtime, genres, director, posterUrl, link }) => {
  
  return (
    <div className={styles.movieCard}>
      <Link to={link}>
        <MoviePoster posterUrl={posterUrl} title={title} />
        <div className={styles.title}>{title}</div>
        <MovieYear year={year} />
        <MovieDirector director={director} />
        <MovieGenres genres={genres} />
        <MovieRuntime runtime={runtime} />
      </Link>
    </div>
  );
};

export default MovieCard;