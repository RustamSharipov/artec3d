import {
  FETCH_ALL_MOVIES, GET_MOVIES_LIST, GET_MOVIE_DETAILS, UPDATE_MOVIE_FORM_FIELD, UPDATE_ALL_MOVIES,
  REVERT_MOVIE_DATA, VALIDATION_ERRORS, INIT_MOVIE_ADD,
} from 'apps/movies/constants';
import data from 'data.json';
import { MovieItem, MovieDetails } from 'apps/movies/models';


function validateMovieDetails(movieDetails) {
  const requiredFields = ['title', 'posterUrl', 'plot'];
  const validFieldsCount = requiredFields.reduce((count, field) => {
    if (movieDetails[field]) {
      return ++count;
    }
    else {
      return 0;
    }}, 0);

  return validFieldsCount === requiredFields.length;
}

function fetchMovies() {
  return Promise.resolve(data.movies);
}

export function getAllMovies() {
  return (dispatch) => {
    fetchMovies().then((movies) => {
      dispatch({
        type: FETCH_ALL_MOVIES,
        payload: { movies },
      });
    });
  };
}

export function getMoviesList() {
  return (dispatch, getState) => {
    const { movies } = getState().movies;
    const moviesList = movies ? movies.map(movie => new MovieItem(movie)) : null;

    dispatch({
      type: GET_MOVIES_LIST,
      payload: { moviesList },
    });
  };
}

export function getMovieDetails(movieId) {
  return (dispatch, getState) => {
    const { movies } = getState().movies;
    const movieDetails = new MovieDetails(
      movies.filter(movie => movie.id === movieId)[0] || {}
    );

    dispatch({
      type: GET_MOVIE_DETAILS,
      payload: {
        ...movieDetails,
        cache: {
          ...movieDetails,
        },
      },
    });
  };
}

export function updateMovieFormField(formField) {
  if ('genres' in formField) {
    formField.genres = formField.genres.split(/,\s*/)
  }

  return {
    type: UPDATE_MOVIE_FORM_FIELD,
    payload: formField,
  };
}

export function saveMovieData(history) {
  return (dispatch, getState) => {
    const { movies: { movies }, editableMovieDetails } = getState();

    if (validateMovieDetails(editableMovieDetails)) {
      const updatedMovies = movies.map(movie => movie.id === editableMovieDetails.id
        ? { ...movie, ...editableMovieDetails }
        : movie
      );

      dispatch({
        type: UPDATE_ALL_MOVIES,
        payload: { movies: updatedMovies },
      });

      if (history) {
        history.push(`/movies/${editableMovieDetails.id}`);
      }
    }

    else {
      dispatch({
        type: VALIDATION_ERRORS,
      });
    }
  };
}

export function revertMovieData(history) {
  return (dispatch, getState) => {
    const { editableMovieDetails: { id } } = getState();

    dispatch({
      type: REVERT_MOVIE_DATA,
    });

    if (history) {
      history.push(`/movies/${id}`);
    }
  };
}

export function initMovieAdd() {
  return {
    type: INIT_MOVIE_ADD,
  };
}

export function addMovie(history) {
  return (dispatch, getState) => {
    const { editableMovieDetails } = getState();

    if (validateMovieDetails(editableMovieDetails)) {
      const { movies: { movies } } = getState();
      const updatedMovies = [
        ...movies,
        {
          id: movies[movies.length - 1].id++,
          ...editableMovieDetails,
        },
      ];
      
      dispatch({
        type: UPDATE_ALL_MOVIES,
        payload: { movies: updatedMovies },
      });
      
      if (history) {
        history.push('/movies');
      }
    }

    else {
      dispatch({
        type: VALIDATION_ERRORS,
        payload: { hasErrors: true },
      });
    }
  };
}