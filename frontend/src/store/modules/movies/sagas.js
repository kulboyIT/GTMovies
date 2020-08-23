import { put, all, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from './actions';

import api from '../../../services/api';
import store from '../../../store';

function* fetchMoviesRequest() {
  try {
   // Chamando API para consultar a quantidade de estoque
    const movies = yield call(api.get, `/movies/`);

    yield put(fetchMoviesSuccess(movies));
  
    
  } catch (error) {
    console.log("Erro ao Buscar Filmes", error);
    yield put(fetchMoviesFailure(error));
  }
}

export default all([
  // 1º parametro é qual ação queremos ouvir
  // 2º parametro é qual action queremos disparar
  takeLatest(actionNames.OPEN_SOCKET_REQUEST, openSocketRequest),
]);
