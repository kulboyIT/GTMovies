import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { Container, Form, Input, Select, Button } from './styles';

import { bindActionCreators } from 'redux';
import * as MoviesActions from '../../store/modules/movies/actions';

function NewMovie ({
  movies,
}) {

  const [title, setTitle] = useState('');
  const [gender, setGender] = useState('');
  const [picture, setPicture] = useState('');
  const [movieCode, setMovieCode] = useState('');
  const [language, setLanguage] = useState('');

  return (
    <Container>
      <h1>Cadastrar novo Filme</h1> 
      <Form>
        <Input 
          placeholder="Nome do Filme" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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

        <Button>
          Cadastrar
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

export default connect(mapStateToProps, mapDispatchToProps)(NewMovie);
