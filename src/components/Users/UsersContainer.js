import React from "react";
import { connect } from "react-redux";
import {
  followActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator,
} from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((res) => {
        this.props.onSetUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
        console.log("totalCount: " + res.data.totalCount);
      });
  }
  handlePageChange = (pageNum) => {
    // change current number
    this.props.onPageChange(pageNum);
    // ajax call
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNum}`
      )
      .then((res) => {
        this.props.onSetUsers(res.data.items);
      });
  };

  render() {
    const {
      users,
      onUnfollow,
      onFollow,
      totalUsersCount,
      pageSize,
      currentPage,
    } = this.props;
    return (
      <Users
        users={users}
        onUnfollow={onUnfollow}
        onFollow={onFollow}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        handlePageChange={this.handlePageChange}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFollow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    onUnfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    onSetUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    onPageChange: (current) => {
      dispatch(setCurrentPageActionCreator(current));
    },
    setTotalUsersCount: (count) => {
      dispatch(setTotalUsersCountActionCreator(count));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
