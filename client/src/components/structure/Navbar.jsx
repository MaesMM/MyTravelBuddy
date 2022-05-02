import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav className={styles.navigation}>
        <NavLink
          to="/structures/"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : null}`
          }
        >
          Tableau de bord
        </NavLink>

        <NavLink
          to="/structures/profile"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : null}`
          }
        >
          Profil
        </NavLink>
        <NavLink
          to="/structures/events"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : null}`
          }
        >
          Événements
        </NavLink>
        <NavLink
          to="/structures/settings"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : null}`
          }
        >
          Paramètres
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
