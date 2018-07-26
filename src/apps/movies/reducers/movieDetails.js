import { GET_MOVIE_DETAILS } from 'apps/movies/constants';


export default function movieDetails(state={}, action) {
  switch(action.type) {
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
