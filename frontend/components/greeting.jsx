import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { currentUser } = this.props;
    if(currentUser !== null) {
      return (
        <div>
          <h1>Howdy, { currentUser.username }</h1>
          <button onClick={this.handleClick}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to='/signup'>Sign Up</Link><br></br>
          <Link to='/login'>Log In</Link>
        </div>
      );
    }
  }
}

export default Greeting;
