import styles from "./Header.module.scss";

import useClickedOutside from "../../../hooks/useClickedOutside";
import useClickedOutside1 from "../../../hooks/useClickedOutside1";

import { Link } from "react-router-dom";

const Header = () => {
  const { target, button, isShown, setIsShown } = useClickedOutside();

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          MyTravelBuddy
        </Link>

        <div className={styles.rightHeader}>
          <span className={styles.donate}>S'identifier</span>
          <div
            onClick={() => setIsShown(!isShown)}
            ref={button}
            className={styles.ok}
          >
            <div className={`${styles.hamburger} ${isShown && styles.change}`}>
              <div className={styles.hamburgerLine}></div>
              <div className={styles.hamburgerLine}></div>
              <div className={styles.hamburgerLine}></div>
            </div>
          </div>
        </div>
      </header>

      <div
        ref={target}
        className={`${styles.navHeader} ${isShown && styles.isShown}`}
      >
        <div className={styles.menu}>
          <Link to="/auth/login" onClick={() => setIsShown(false)}>
            <div className="primary-btn full-width">S'identifier</div>
          </Link>

          <a href="contacter">Contacter</a>

          <Link to="/structures/">
            <span>Espace professionnel</span>
          </Link>
          <Link to="/mentions_légales/">
            <span>Mentions légales</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
