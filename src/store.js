import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import movies from 'apps/movies/reducers/movies';
import moviesList from 'apps/movies/reducers/moviesList';
import movieDetails from 'apps/movies/reducers/movieDetails';
import editableMovieDetails from 'apps/movies/reducers/editableMovieDetails';


export default function configureStore() {
  return createStore(
    combineReducers({
      movies,
      moviesList,
      movieDetails,
      editableMovieDetails,
    }),
    applyMiddleware(thunk),
  );
}
