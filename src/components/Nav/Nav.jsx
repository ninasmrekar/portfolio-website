import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/work"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            WORK
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            ABOUT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
