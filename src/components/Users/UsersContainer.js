import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { getUsersThunkCreator, pageSize, currentPage } = this.props;
   getUsersThunkCreator(
      pageSize,
      currentPage
    );
  }

  handlePageChange = (pageNum) => {
    const { pageSize, setCurrentPage, getUsersThunkCreator } = this.props;
    getUsersThunkCreator(pageSize, pageNum);
    // change current number
    setCurrentPage(pageNum);
  };

  render() {
    const {
      users,
      unfollow,
      follow,
      totalUsersCount,
      pageSize,
      currentPage,
      isFetching,
      followingInProgress,
      followThunkCreator,
      unfollowThunkCreator,
    } = this.props;

    return (
      <>
        {isFetching ? <Preloader /> : null}
        <Users
          users={users}
          unfollow={unfollow}
          follow={follow}
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          handlePageChange={this.handlePageChange}
          followingInProgress={followingInProgress}
          followThunkCreator={followThunkCreator}
          unfollowThunkCreator={unfollowThunkCreator}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onFollow: (userId) => {
//       dispatch(follow(userId));
//     },
//     onUnfollow: (userId) => {
//       dispatch(unfollow(userId));
//     },
//     onSetUsers: (users) => {
//       dispatch(setUsers(users));
//     },
//     onPageChange: (current) => {
//       dispatch(setCurrentPage(current));
//     },
//     setTotalUsersCount: (count) => {
//       dispatch(setTotalUsersCount(count));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetching(isFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  toggleFollowingProgress,
  getUsersThunkCreator,
  setCurrentPage,
  followThunkCreator,
  unfollowThunkCreator,
})(UsersContainer);
