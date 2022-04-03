import React from "react";
import { connect } from "react-redux";
import {
  authMe,
  setAuthUserData,
  toggleIsFetching,
  logout
} from "../../redux/auth-reducer";
import Header from "./Header";


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMe();
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    username: state.auth.login,
  };
};
export default connect(mapStateToProps, { setAuthUserData, toggleIsFetching, authMe, logout })(
  HeaderContainer
);
