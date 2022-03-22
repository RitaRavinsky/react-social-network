import React from "react";
import { connect } from "react-redux";
import { setAuthUserData, toggleIsFetching } from "../../redux/auth-reducer";
import Header from "./Header";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    let { toggleIsFetching } = this.props;
    // show loader
    toggleIsFetching(true);
    // ajax
   authAPI.authMe().then((data) => {
     if (data.resultCode === 0) {
       const { id, email, login } = data.data;
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
