import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {} from './styles';
import logo from '../../assets/images/logo.svg';


import { bindActionCreators } from 'redux';
import * as ChatActions from '../../../../store/modules/chat/actions';

function Header() {

}

const mapStateToProps = (state, ownProps) => ({
  props: ownProps,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ChatActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
