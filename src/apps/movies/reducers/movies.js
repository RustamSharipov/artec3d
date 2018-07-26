import { FETCH_ALL_MOVIES, UPDATE_ALL_MOVIES } from 'apps/movies/constants';


export default function movies(state={}, action) {
  switch(action.type) {
    case FETCH_ALL_MOVIES:
      return {
        ...state,
        ...action.payload,
      };

    case UPDATE_ALL_MOVIES:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
