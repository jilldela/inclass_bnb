import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {

  let store;

  if(window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser, errors: []}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TODO: for testing only!
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});

import * as Actions from './actions/session_actions';

window.login = Actions.requestLogIn;

git filter-branch -f --env-filter "GIT_AUTHOR_NAME='Jill de los Angeles'; GIT_AUTHOR_EMAIL='jilldelosangeles@gmail.com'; GIT_COMMITTER_NAME='Jill de los Angeles'; GIT_COMMITTER_EMAIL='jilldelosangeles@gmail.com';" HEAD
