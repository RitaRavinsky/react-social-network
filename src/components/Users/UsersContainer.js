import { connect } from "react-redux";
import {
  followActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator
} from "../../redux/users-reducer";
import Users from './Users';

const mapStateToProps = (state) => {
    return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
    };
}
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
          dispatch(setTotalUsersCountActionCreator(count))
      }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
