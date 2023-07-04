import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import Header from './Header.jsx';

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header {...this.props} />
    ); /*login={this.props.login} isAuth={this.props.isAuth}*/
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { logout })(HeaderContainer);
