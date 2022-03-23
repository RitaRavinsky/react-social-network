import { useParams } from "react-router-dom";
import ProfileContainer from "./ProfileContainer";
import { connect } from "react-redux";
import {
  toggleIsFetching,
  setUserProfile,
  getProfile,
} from "../../redux/profile-reducer";


const ProfileWrapper = (props) => {
  let { userId } = useParams();
  if (!userId) {
    userId = 22838;
  }

  return <ProfileContainer userId={userId} {...props} />;
};


const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth:state.auth.isAuth
});

export default connect(mapStateToProps, {
  toggleIsFetching,
  setUserProfile,
  getProfile,
})(ProfileWrapper);
