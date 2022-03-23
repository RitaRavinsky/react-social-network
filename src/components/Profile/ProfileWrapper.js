import { useParams } from "react-router-dom";
import ProfileContainer from "./ProfileContainer";
import { connect } from "react-redux";
import {
  toggleIsFetching,
  setUserProfile,
  getProfile,
} from "../../redux/profile-reducer";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

const ProfileWrapper = (props) => {
  let { userId } = useParams();
  if (!userId) {
    userId = 22838;
  }

  return <ProfileContainer userId={userId} {...props} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
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
  }),
  WithAuthRedirect
)(ProfileWrapper);
