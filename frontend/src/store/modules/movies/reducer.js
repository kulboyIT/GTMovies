import { actionNames } from './actions';

export default function movies(state = {}, action) {
  let movies;
  switch (action.type) {

    case actionNames.FETCH_MOVIES_SUCCESS:
      movies = action.data.data;
      return {
        movies,
      };

    case actionNames.FETCH_MOVIES_FAILURE:
      return {
        error: action.error,
      }

    default:
      return state;
  }
}
