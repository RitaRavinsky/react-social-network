import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    let { toggleIsFetching } = this.props;
    // show loader
    toggleIsFetching(true);
    // ajax
   usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then((data) => {
     this.props.setUsers(data.items);
     this.props.setTotalUsersCount(data.totalCount);
     console.log("totalCount: " + data.totalCount);
   });
    //hide loader
    setTimeout(function () {
      toggleIsFetching(false);
    }, 500);
  }
  handlePageChange = (pageNum) => {
    let { toggleIsFetching } = this.props;
    // show loader
    toggleIsFetching(true);
    // change current number
    this.props.setCurrentPage(pageNum);
    // ajax call
      usersAPI.getUsers(this.props.pageSize, pageNum).then((data) => {
        this.props.setUsers(data.items);
      });
    //hide loader
    setTimeout(function () {
      toggleIsFetching(false);
    }, 500);
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
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
})(UsersContainer);
