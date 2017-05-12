import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import * as APIUtil from './util/session_api_util';
import * as Actions from './actions/session_actions';
import configureStore from './store/store';

window.signup = Actions.requestSignUp;
window.login = Actions.requestLogIn;
window.logout = Actions.requestLogOut;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Howdy!</h1>, root);
});
