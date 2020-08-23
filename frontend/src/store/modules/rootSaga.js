import { all } from 'redux-saga/effects';

import movies from './movies/sagas';

export default function* rootSaga() {
  return yield all([movies]);
}
