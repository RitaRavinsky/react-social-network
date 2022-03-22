import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsersThunkCreator,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage);
  }

  handlePageChange = (pageNum) => {
    this.props.getUsersThunkCreator(this.props.pageSize, pageNum);
    // change current number
    this.props.setCurrentPage(pageNum);
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
      toggleFollowingProgress,
      followingInProgress,
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
          toggleFollowingProgress={toggleFollowingProgress}
          followingInProgress={followingInProgress}
          handlePageChange={this.handlePageChange}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
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
})(UsersContainer);
