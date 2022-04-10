import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Preloader from "./components/common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
// lazy loading components
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const ProfileWrapper = React.lazy(() =>
  import("./components/Profile/ProfileWrapper")
);
const Login = React.lazy(() => import("./components/Login/Login"));



class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="page-wrap">
        <HeaderContainer />
        <main className="page-content my-4">
          <Container>
            <Row>
              <Col md="3">
                <SideBar />
              </Col>
              <Col>
                <Suspense fallback={<Preloader />}>
                  <Routes>
                    <Route path="/" element={<ProfileWrapper />} />
                    <Route path="/profile/" element={<ProfileWrapper />} />
                    <Route
                      path="/profile/:userId"
                      element={<ProfileWrapper />}
                    />
                    <Route path="/dialogs" element={<DialogsContainer />} />
                    <Route path="/dialog/:id" element={<DialogsContainer />} />
                    <Route path="/users" element={<UsersContainer />} />
                    <Route path="/login" element={<Login />} />
                  </Routes>
                </Suspense>
              </Col>
            </Row>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
