import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Footer from "./components/Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBar from "./components/SideBar/SideBar";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import WorkAround from "./components/Profile/WorkAround";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
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
                <Route path="/" element={<WorkAround />} />
                <Route path="/profile/" element={<WorkAround />} />
                <Route path="/profile/:userId" element={<WorkAround />} />
                <Route path="/dialogs" element={<DialogsContainer />} />
                <Route path="/dialog/:id" element={<DialogsContainer />} />
                <Route path="/users" element={<UsersContainer />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
