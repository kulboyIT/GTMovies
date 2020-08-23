import { put, all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  actionNames,
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from './actions';

import api from '../../../services/api';

function* fetchMoviesRequest() {
  try {
   // Chamando API para pegar os todos os filmes
    const movies = yield call(api.get, `/movies/`);

    yield put(fetchMoviesSuccess(movies));
  
    
  } catch (error) {
    yield put(fetchMoviesFailure(error));
  }
}

function* createNewMovieRequest(data) {
  try {
    const objectData = data.data
    console.log(objectData)
   // Chamando API para gravar novo filme
    const response = yield call(api.post, `/movies/`, objectData);

    if (response.status === 200) {
      toast.success("Filme Cadastrado com Sucesso");
      setTimeout(() => window.location.assign("/"), 1800);
    }

    
  } catch (error) {
    toast.error("Erro ao Cadastrar Filme. Tente Novamente")
  }
}

export default all([
  // 1º parametro é qual ação queremos ouvir
  // 2º parametro é qual action queremos disparar
  takeLatest(actionNames.FETCH_MOVIES_REQUEST, fetchMoviesRequest),
  takeLatest(actionNames.CREATE_NEW_MOVIE_REQUEST, createNewMovieRequest),
]);
