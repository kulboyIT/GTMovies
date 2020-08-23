import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, MenuContainer, MenuItem } from './styles';
import logo from '../../assets/images/logo.svg';

import { bindActionCreators } from 'redux';
import * as MoviesActions from '../../store/modules/movies/actions';

function Header({fetchMoviesRequest}) {
  fetchMoviesRequest()
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="GT Movies" />
      </Link>

      <MenuContainer>
        <MenuItem>
          <Link to="/">Início</Link>
        </MenuItem>

        <MenuItem>
          <Link to="/">Legendados</Link>
        </MenuItem>

        <MenuItem>
          <Link to="/">Dublados</Link>
        </MenuItem>

        <MenuItem>
          <Link to="/">Cadastrar Filme</Link>
        </MenuItem>
      </MenuContainer>
    </Container>
  )  
}

const mapStateToProps = (state, ownProps) => ({
  props: ownProps,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(MoviesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
