import LoginForm from "./LoginForm";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const Login = ({ login, isAuth }) => {
  if (isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <section className="login mt-5">
      <Row>
        <Col md="4" className="m-auto">
          <h1 className="mt-5 text-center">Login</h1>
          <LoginForm login={login} />
        </Col>
      </Row>
    </section>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
