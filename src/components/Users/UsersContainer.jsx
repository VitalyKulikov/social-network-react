import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUser,
} from '../../redux/users-page-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { compose } from 'redux';

class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.currentPage, this.props.pageSize);
  }

  onPageChenged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUser(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUser,
  }),
)(UsersComponent);
