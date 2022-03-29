import React from "react";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.userId;
    this.props.getProfile(userId);
    this.props.getStatus(userId)
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
