import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_LOGOUT_SUCCESS = 'RECEIVE_LOGOUT_SUCCESS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

// export const receiveLogoutSuccess = () => ({
//   type: RECEIVE_LOGOUT_SUCCESS
// });

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const requestSignUp = (user) => (dispatch) => {
  return APIUtil.signup(user)
    .then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveErrors(errors)));
};

export const requestLogIn = (user) => (dispatch) => {
  return APIUtil.login(user)
    .then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveErrors(errors)));
};

export const requestLogOut = () => (dispatch) => {
  return APIUtil.logout()
    .then(
      () => dispatch(receiveCurrentUser(null)),
      errors => dispatch(receiveErrors(errors)));
};
