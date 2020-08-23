import React from 'react';
import { connect } from 'react-redux';

import { Container, CoverPicture, MovieTitle, MovieGender } from './styles';

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
   </Container>
  )  
}

const mapStateToProps = (state, ownProps) => ({
  props: ownProps,
});

export default connect(mapStateToProps)(CardMovie);
