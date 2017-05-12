import { connect } from 'react-redux';
import Greeting from './greeting';
import { requestLogOut } from '../actions/session_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: dispatch(requestLogOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
