import React from "react";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  refreshProfile() {
    const { userId, getProfile, getStatus } = this.props;
    getProfile(userId);
    getStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.userId !== prevProps.userId) {
      this.refreshProfile();
    }
  }

  render() {
    let isOwner = false;
    if (this.props.userId === this.props.loggedInUserId) {
      isOwner = true;
    }
    return <Profile isOwner={isOwner} {...this.props} />;
  }
}
// const mapStateToProps = (state) => ({
//   profile: state.profilePage.profile,
// });

// export default connect(mapStateToProps, { toggleIsFetching, setUserProfile })(
//   ProfileContainer
// );

export default ProfileContainer;
