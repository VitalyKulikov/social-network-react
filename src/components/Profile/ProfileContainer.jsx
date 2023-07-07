import React from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import {
  getStatus,
  getUsersProfile,
  updateStatus,
} from '../../redux/profile-page-reducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorizetUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }

    this.props.getUsersProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return (
      <div>
        {' '}
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
  authorizetUserId: state.auth.id,
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

export default compose(
  connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);

//connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus})(withRouter(AuthRedirectComponent));
