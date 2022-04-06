import React from "react";
import { connect } from "react-redux";
import {
  setAuthUserData,
  logout
} from "../../redux/auth-reducer";
import Header from "./Header";


class HeaderContainer extends React.Component {

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
export default connect(mapStateToProps, { setAuthUserData,  logout })(
  HeaderContainer
);
