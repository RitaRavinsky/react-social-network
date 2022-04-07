import React from "react";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { userId, getProfile, getStatus } = this.props;
    getProfile(userId);
    getStatus(userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}
// const mapStateToProps = (state) => ({
//   profile: state.profilePage.profile,
// });

// export default connect(mapStateToProps, { toggleIsFetching, setUserProfile })(
//   ProfileContainer
// );

export default ProfileContainer;
