import { GET_MOVIES_LIST } from 'apps/movies/constants';


export default function moviesList(state={}, action) {
  switch(action.type) {
    case GET_MOVIES_LIST:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
