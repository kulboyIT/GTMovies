export const actionNames = {
  FETCH_MOVIES_REQUEST: '@movies/FETCH_MOVIES_REQUEST',
  FETCH_MOVIES_SUCCESS: '@movies/FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_FAILURE: '@movies/FETCH_MOVIES_FAILURE',

  CREATE_NEW_MOVIE_REQUEST: '@movies/CREATE_NEW_MOVIE_REQUEST',
  DELETE_MOVIE_REQUEST: '@movies/DELETE_MOVIE_REQUEST',
  UPDATE_MOVIE_REQUEST: '@movies/UPDATE_MOVIE_REQUEST',
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

export function updateMovieRequest (id, changes) {
  console.log(id);
  console.log(changes);
  return {
    type: actionNames.UPDATE_MOVIE_REQUEST,
    id,
    changes,
  };
}