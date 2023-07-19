import React from 'react';
import {connect} from 'react-redux';
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers,
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import {compose} from 'redux';
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalCount,
  getUsers,
} from '../../redux/users-selectors';

class UsersComponent extends React.Component {
  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.requestUsers(currentPage, pageSize);
  }

  onPageChenged = (pageNumber) => {
    const {pageSize} = this.props
    this.props.requestUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChenged={this.onPageChenged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
  }),
)(UsersComponent);
