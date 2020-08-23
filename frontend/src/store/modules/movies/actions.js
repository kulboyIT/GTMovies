export const actionNames = {
  FETCH_MOVIES_REQUEST: '@movies/FETCH_MOVIES_REQUEST',
  FETCH_MOVIES_FAILURE: '@movies/FETCH_MOVIES_FAILURE',
  FETCH_MOVIES_SUCCESS: '@movies/FETCH_MOVIES_SUCCESS',
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