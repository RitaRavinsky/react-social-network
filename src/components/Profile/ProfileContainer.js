import React from "react";
import Profile from "./Profile";

import axios from "axios";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId =this.props.userId;
    let { toggleIsFetching } = this.props;
    // show loader
    toggleIsFetching(true);
    // ajax
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((res) => {
        this.props.setUserProfile(res.data);
      });
    //hide loader
    setTimeout(function () {
      toggleIsFetching(false);
    }, 500);
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