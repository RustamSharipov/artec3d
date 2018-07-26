import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as MoviesActions from 'apps/movies/actions/MoviesActions';
import Button from 'apps/base/components/Button';
import BackButton from 'apps/base/components/BackButton';
import MovieDirector from 'apps/movies/components/MovieDirector';
import MovieYear from 'apps/movies/components/MovieYear';
import MovieGenres from 'apps/movies/components/MovieGenres';
import MovieRuntime from 'apps/movies/components/MovieRuntime';
import MovieDescription from 'apps/movies/components/MovieDescription';
import MoviePoster from 'apps/movies/components/MoviePoster';
import MovieActors from 'apps/movies/components/MovieActors';

import styles from './style.css';


class MovieDetailsView extends React.Component {
  componentDidMount() {
    const movieId = +this.props.match.params.id;
    this.props.MoviesActions.getMovieDetails(movieId);
  }

  render() {
    const { title, year, genres, posterUrl, director, runtime, plot, actors, editLink } = this.props.movieDetails;
    return (
      <div>
        <div>
          <BackButton link="/movies/">Movie List</BackButton>
        </div>
        <h1>{title}</h1>
        <div>
          {editLink && <Button link={editLink} className={styles.editLink}>Edit</Button>}
        </div>
        <div className={styles.movieDetailsView}>
          <div>
            <MoviePoster posterUrl={posterUrl} title={title} size="large" />
            <MovieYear year={year} />
            <MovieDirector director={director} />
            <MovieGenres genres={genres} />
            <MovieRuntime runtime={runtime} />
          </div>
          <div className={styles.details}>
            <MovieDescription>
              <p>{plot}</p>
            </MovieDescription>
            <MovieActors actors={actors} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieDetails: state.movieDetails,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    MoviesActions: bindActionCreators(MoviesActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsView);
