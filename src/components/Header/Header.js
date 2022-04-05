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
        
            {isAuth ? (
              <>
                <NavLink to="/profile" className={styles.loggedinUser}>
                  hi, {username}
                </NavLink>
                <button className={styles.btnLogin} onClick={logout}>
                  logout
                </button>
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
