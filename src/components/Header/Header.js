import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = ({ isAuth, username, logout }) => {
  return (
    <div className={styles.headerNav}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ fontSize: "32px", color: "#F2E7DC" }}
          >
            <img
              alt=""
              src="https://s3.amazonaws.com/www-inside-design/uploads/2019/05/woolmarkimagelogo-1024x576.png"
              className="d-inline-block align-top"
            />{" "}
            Social
          </Navbar.Brand>

          <Nav className={styles.navLinks}>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/profile"
            >
              Profile
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/dialogs"
            >
              Dialogs
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/users"
            >
              Find Friends
            </NavLink>
            {isAuth ? (
              <>
                <NavLink to="/profile" className={styles.loggedinUser}>
                  hi, {username}
                </NavLink>
                <a className={styles.btnLogin} onClick={logout}>
                  logout
                </a>
              </>
            ) : (
              <NavLink className={styles.btnLogin} to="/login">
                Login
              </NavLink>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
