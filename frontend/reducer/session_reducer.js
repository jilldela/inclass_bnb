import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const session = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = session, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.user);
    case RECEIVE_ERRORS:
      return merge({}, state, action.errors.responseJSON);
    default:
      return state;
  }
};

export default SessionReducer;
