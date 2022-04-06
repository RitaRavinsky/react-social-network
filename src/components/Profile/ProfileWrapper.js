import { Navigate, useParams } from "react-router-dom";
import ProfileContainer from "./ProfileContainer";
import { connect } from "react-redux";
import {
  toggleIsFetching,
  setUserProfile,
  getProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import { compose } from "redux";

const ProfileWrapper = (props) => {
  let { userId } = useParams();
  if (!userId) {
    userId = props.loggedInUserId;
  }

  return (
    <>
      {!userId && <Navigate to="/login" />}
      {userId && <ProfileContainer userId={userId} {...props} />}
    </>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  loggedInUserId: state.auth.userId,
});

// const AuthRedirectComponent = WithAuthRedirect(ProfileWrapper);
// export default connect(mapStateToProps, {
//   toggleIsFetching,
//   setUserProfile,
//   getProfile,
// })(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, {
    toggleIsFetching,
    setUserProfile,
    getProfile,
    getStatus,
    updateStatus,
  })
  // WithAuthRedirect
)(ProfileWrapper);
