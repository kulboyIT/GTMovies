import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container } from './styles';

import CardMovie from '../../components/CardMovie';

import { bindActionCreators } from 'redux';
import * as MoviesActions from '../../store/modules/movies/actions';

function DubMovies ({
  movies,
}) {
  if (movies) {
    return (
      <Container>
        {movies.map(movie => {
          if (movie.language === "Dublado" || movie.language === "dublado") {
            return (
              <Link to={`/watch/${movie.id}`}>
                <CardMovie 
                  title={movie.title}
                  picture={movie.picture} 
                  gender={movie.gender} 
                  language={movie.language}
                />
              </Link>
            ) 
          }
        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(DubMovies);
