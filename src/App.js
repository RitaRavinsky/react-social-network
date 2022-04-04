import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Footer from "./components/Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBar from "./components/SideBar/SideBar";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileWrapper from "./components/Profile/ProfileWrapper";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if(!this.props.initialized){
      return <Preloader />
    }
    return (
      <div className="page-wrap">
        <HeaderContainer />
        <main className="page-content my-4">
          <Container>
            <Row>
              <Col md={3}>
                <SideBar />
              </Col>
              <Col>
                <Routes>
                  <Route path="/" element={<ProfileWrapper />} />
                  <Route path="/profile/" element={<ProfileWrapper />} />
                  <Route path="/profile/:userId" element={<ProfileWrapper />} />
                  <Route path="/dialogs" element={<DialogsContainer />} />
                  <Route path="/dialog/:id" element={<DialogsContainer />} />
                  <Route path="/users" element={<UsersContainer />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
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
  initialized:state.app.initialized,

})

export default connect(mapStateToProps, { initializeApp })(App);

