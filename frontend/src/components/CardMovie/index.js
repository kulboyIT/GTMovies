import React from 'react';
import { connect } from 'react-redux';

import { Container, CoverPicture, MovieTitle, MovieGender, MovieLanguage } from './styles';

function CardMovie({props}) {
  return (
   <Container>
     <CoverPicture src={props.picture} alt={props.title} />
    <MovieTitle>
      {props.title}
    </MovieTitle>
    <MovieGender>
      {props.gender}
    </MovieGender>
    <MovieLanguage>
      {props.language}
    </MovieLanguage>
   </Container>
  )  
}

const mapStateToProps = (state, ownProps) => ({
  props: ownProps,
});

export default connect(mapStateToProps)(CardMovie);
