import {
  GET_MOVIE_DETAILS, UPDATE_MOVIE_FORM_FIELD, REVERT_MOVIE_DATA, VALIDATION_ERRORS, INIT_MOVIE_ADD,
} from 'apps/movies/constants';


export default function editableMovieDetails(state={}, action) {
  switch(action.type) {
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        ...action.payload,
      };

    case UPDATE_MOVIE_FORM_FIELD:
      return {
        ...state,
        ...action.payload,
      }

    case INIT_MOVIE_ADD:
      return {};
    
    case REVERT_MOVIE_DATA:
      const { cache } = state;
      return {
        ...cache,
        cache: {
          ...cache,
        },
      }

    case VALIDATION_ERRORS:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state;
  }
}
