import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBar from "./components/SideBar/SideBar";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    <div className="page-wrap">
      <Header />
      <main className="page-content my-4">
        <Container>
          <Row>
            <Col md={3}>
              <SideBar />
            </Col>
            <Col>
              <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/profile" element={<Profile />} />
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
