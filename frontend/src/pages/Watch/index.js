import React from 'react';
import { connect } from 'react-redux';

import { Container, MovieHeader, EmbedContainer, MovieEmbed } from './styles';

import { bindActionCreators } from 'redux';
import * as MoviesActions from '../../store/modules/movies/actions';

function Watch () {
  return (
    <Container>
      <MovieHeader>Bastardos Inglórios - Ação</MovieHeader>
      <EmbedContainer>
        <iframe src="https://www.youtube.com/embed/WgpqBkFFUVQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"/>
      </EmbedContainer>
    </Container>
  );
}

const mapStateToProps = (state, ownProps) => ({
  props: ownProps,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(MoviesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Watch);
