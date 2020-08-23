import React from 'react';
import { connect } from 'react-redux';

import { Container, MovieHeader, EmbedContainer, MovieEmbed } from './styles';

import { bindActionCreators } from 'redux';
import * as MoviesActions from '../../store/modules/movies/actions';

function Watch ({match, movies}) {
  const movieParamsId = parseInt(match.params.movieId);

  if (movies) {
    const currentMovie = movies.find(movie => movie.id === movieParamsId);
  
    console.log(currentMovie)
    return (
      <Container>
        <MovieHeader>{currentMovie.title} - {currentMovie.gender} - {currentMovie.language}</MovieHeader>
        <EmbedContainer>
          <iframe src={`https://www.youtube.com/embed/${currentMovie.movieCode}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"/>
        </EmbedContainer>
      </Container>
    );
  } else {
    return <></>
  }

}

const mapStateToProps = (state, ownProps) => ({
  props: ownProps,
  movies: state.movies?.movies,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(MoviesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Watch);
