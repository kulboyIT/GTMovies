import { actionNames } from './actions';
import { toast } from 'react-toastify';

export default function movies(state = {}, action) {

  switch (action.type) {

    case actionNames.FETCH_MOVIES_SUCCESS:
      return {
        movies: action.data,
      };

    case actionNames.FETCH_MOVIES_REQUEST:
      console.log("Erro ao buscar filmes reducer")
      return {
        error,
      }

    default:
      return state;
  }
}
