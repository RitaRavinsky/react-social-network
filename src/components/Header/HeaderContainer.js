import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData, toggleIsFetching } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    let { toggleIsFetching } = this.props;
    // show loader
    toggleIsFetching(true);
    // ajax
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.resultCode === 0) {
          const { id, email, login } = res.data.data;
          this.props.setAuthUserData(id, email, login);
        }
    
      });
    //hide loader
    setTimeout(function () {
      toggleIsFetching(false);
    }, 500);
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth:state.auth.isAuth,
    username:state.auth.login,
  };
};
export default connect(mapStateToProps, { setAuthUserData, toggleIsFetching })(
  HeaderContainer
);
