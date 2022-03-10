import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <aside className="sidebar pt-4 px-4">
      <Nav className={styles.navLinks + " flex-column"}>
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
      </Nav>
      <Friends />
    </aside>
  );
};

export default SideBar;
