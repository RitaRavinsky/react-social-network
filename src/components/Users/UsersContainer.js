import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
} from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    let { toggleIsFetching } = this.props;
    // show loader
    toggleIsFetching(true);
    // ajax
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
        console.log("totalCount: " + res.data.totalCount);
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
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNum}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
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
    } = this.props;

    return (
      <>
        {isFetching ? (
         <Preloader />
        ) : null}
        <Users
          users={users}
          unfollow={unfollow}
          follow={follow}
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
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
})(UsersContainer);
