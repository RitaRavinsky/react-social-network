import { useParams } from "react-router-dom";
import ProfileContainer from "../Profile/ProfileContainer";
import { connect } from "react-redux";
import { toggleIsFetching, setUserProfile } from "../../redux/profile-reducer";

const WorkAround = (props) => {

  let { userId } = useParams();
  console.log(userId);

  return <ProfileContainer userId={userId} {...props} />;
};


const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { toggleIsFetching, setUserProfile })(
  WorkAround
);
