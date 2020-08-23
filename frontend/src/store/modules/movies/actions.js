export const actionNames = {
  FETCH_MOVIES_REQUEST: '@movies/FETCH_MOVIES_REQUEST',
  FETCH_MOVIES_SUCCESS: '@movies/FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_FAILURE: '@movies/FETCH_MOVIES_FAILURE',

  CREATE_NEW_MOVIE_REQUEST: '@movies/CREATE_NEW_MOVIE_REQUEST',
  CREATE_NEW_MOVIE_SUCCESS: '@movies/CREATE_NEW_MOVIE_SUCCESS',
  CREATE_NEW_MOVIE_FAILURE: '@movies/CREATE_NEW_MOVIE_FAILURE',

  DELETE_MOVIE_REQUEST: '@movies/DELETE_MOVIE_REQUEST',
}

export function fetchMoviesRequest() {
  return {
    type: actionNames.FETCH_MOVIES_REQUEST,
  };
}
export function fetchMoviesSuccess(data) {
  return {
    type: actionNames.FETCH_MOVIES_SUCCESS,
    data,
  };
}
export function fetchMoviesFailure(data) {
  return {
    type: actionNames.FETCH_MOVIES_FAILURE,
    error: data,
  };
}

export function createNewMovieRequest(data) {
  return {
    type: actionNames.CREATE_NEW_MOVIE_REQUEST,
    data,
  };
}

export function deleteMovieRequest (id) {
  return {
    type: actionNames.DELETE_MOVIE_REQUEST,
    id,
  };
}