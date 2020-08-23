import React from 'react';

import { connect } from 'react-redux';

import { Container } from './styles';

import CardMovie from '../../components/CardMovie';

import { bindActionCreators } from 'redux';
import * as MoviesActions from '../../store/modules/movies/actions';

function Home () {
  return (
    <Container>
      <CardMovie title="Duro de Matar" picture="https://images-na.ssl-images-amazon.com/images/I/61uicc7gULL._AC_SX425_.jpg" gender="Ação" />
      <CardMovie title="Duro de Matar" picture="https://images-na.ssl-images-amazon.com/images/I/61uicc7gULL._AC_SX425_.jpg" gender="Ação" />
      <CardMovie title="Duro de Matar" picture="https://images-na.ssl-images-amazon.com/images/I/61uicc7gULL._AC_SX425_.jpg" gender="Ação" />

      <CardMovie title="Duro de Matar" picture="https://images-na.ssl-images-amazon.com/images/I/61uicc7gULL._AC_SX425_.jpg" gender="Ação" />
      <CardMovie title="Duro de Matar" picture="https://images-na.ssl-images-amazon.com/images/I/61uicc7gULL._AC_SX425_.jpg" gender="Ação" />
      <CardMovie title="Duro de Matar" picture="https://images-na.ssl-images-amazon.com/images/I/61uicc7gULL._AC_SX425_.jpg" gender="Ação" />

      <CardMovie title="Duro de Matar" picture="https://images-na.ssl-images-amazon.com/images/I/61uicc7gULL._AC_SX425_.jpg" gender="Ação" />
      <CardMovie title="Duro de Matar" picture="https://images-na.ssl-images-amazon.com/images/I/61uicc7gULL._AC_SX425_.jpg" gender="Ação" />
      <CardMovie title="Duro de Matar" picture="https://images-na.ssl-images-amazon.com/images/I/61uicc7gULL._AC_SX425_.jpg" gender="Ação" />
    </Container>
  );
}

const mapStateToProps = (state, ownProps) => ({
  props: ownProps,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(MoviesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
