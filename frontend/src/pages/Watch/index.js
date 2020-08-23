import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { FaTrashAlt,  FaEdit} from "react-icons/fa";

import { Container, MovieHeader, EmbedContainer, MovieActions } from './styles';

import { bindActionCreators } from 'redux';
import * as MoviesActions from '../../store/modules/movies/actions';

function Watch ({match, movies, deleteMovieRequest}) {
  const movieParamsId = match.params.movieId;

  if (movies) {
    const currentMovie = movies.find(movie => movie.id == movieParamsId);
  
    return (
      <Container>
        <MovieHeader>
          <h2>{currentMovie.title} - {currentMovie.gender} - {currentMovie?.language}</h2>
          <MovieActions>
              <Link to="">
                <FaEdit size={25} color={"#cc2222"} />
              </Link>

              <FaTrashAlt 
                size={25} 
                color="#cc2222" 
                onClick={() => {
                  swal({
                    title: "Você tem certeza?",
                    text: "Após excluir este filme você não poderá mais recuperá-lo.",
                    icon: "warning",
                    buttons: ["Cancelar", "Excluir"],
                    dangerMode: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                      deleteMovieRequest(movieParamsId);
                      setTimeout(() => {
                        window.location.assign("/")
                      }, 1000);
                      swal("O filme foi excluído com sucesso.", {
                        icon: "success",
                      });
                    }
                  });
                }}
              />
          </MovieActions>
        </MovieHeader>
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
