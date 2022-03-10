import { connect } from "react-redux";
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/users-reducer";
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        onUnfollow : (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        onSetUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
