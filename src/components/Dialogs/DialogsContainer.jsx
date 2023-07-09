/* eslint-disable no-unused-vars */
import React from 'react';
import { sendMessageCreator } from '../../redux/messages-page-reducer';
import Dialogs from './Dialogs.jsx';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../../HOC/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageText) => {
      dispatch(sendMessageCreator(newMessageText));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);
