import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import {v4 as uuidv4 } from 'uuid';

import { Container, Form, Input, Select, Button } from './styles';

import { bindActionCreators } from 'redux';
import * as MoviesActions from '../../store/modules/movies/actions';

function NewMovie ({
  createNewMovieRequest
}) {
  const id = uuidv4();
  const [title, setTitle] = useState('');
  const [gender, setGender] = useState('');
  const [picture, setPicture] = useState('');
  const [movieCode, setMovieCode] = useState('');
  const [language, setLanguage] = useState('Dublado');

  let newMovieObject = {
    id,
    title,
    gender,
    picture,
    language,
    movieCode,
  }

  return (
    <Container>
      <h1>Cadastrar novo Filme</h1> 
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
            createNewMovieRequest(newMovieObject)
          }
        }}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => ({
  props: ownProps,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(MoviesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewMovie);
