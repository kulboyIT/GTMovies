import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import {v4 as uuidv4 } from 'uuid';

import { Container, Form, Input, Select, Button } from './styles';

import { bindActionCreators } from 'redux';
import * as MoviesActions from '../../store/modules/movies/actions';

function UpdateMovie ({ match, movies, updateMovieRequest}) {
  const movieParamsId = match.params.movieId;
  let currentMovie;

  if (movies) {
    currentMovie = movies.find(movie => movie.id == movieParamsId);
  }

  const [id, setId] = useState(movieParamsId);
  const [title, setTitle] = useState('');
  const [gender, setGender] = useState('');
  const [picture, setPicture] = useState('');
  const [movieCode, setMovieCode] = useState('');
  const [language, setLanguage] = useState('Dublado');

  let movieObject = {
    id,
    title,
    gender,
    picture,
    language,
    movieCode,
  }

  // Usado para renderizar apenas uma vez
  useEffect(() => {
    if (currentMovie) {
      setTitle(currentMovie.title);
      setGender(currentMovie.gender);
      setPicture(currentMovie.picture);
      setMovieCode(currentMovie.movieCode);
      setLanguage(currentMovie.language);
    }
  }, []);


  return (
    <Container>
      <h1>Editar: {title}</h1> 
      <Form>
        <Input 
          placeholder="Nome do Filme" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <Input 
          placeholder="Gênero" 
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />

        <Input 
          placeholder="Imagem Capa do Filme" 
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
        />

        <Input 
          placeholder="Ex: q0gZOGoRRnc" 
          value={movieCode}
          onChange={(e) => setMovieCode(e.target.value)}
        />

        <Select 
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="Dublado">Dublado</option>
          <option value="Original">Legendado</option>
        </Select>

        <Button onClick={(e) => {
          e.preventDefault();
          if (title == '' || gender == '' || picture == '' || movieCode == '')  {
            toast.error("Preencha todos os Campos!")
            
          } else {
            updateMovieRequest(id, movieObject)
          }
        }}>
          Editar
        </Button>
      </Form>
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => ({
  props: ownProps,
  movies: state.movies?.movies,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(MoviesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UpdateMovie);
