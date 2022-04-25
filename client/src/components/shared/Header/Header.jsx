import styles from "./Header.module.scss";
import enFlag from "../../../assets/images/Angleterre.png";
import esFlag from "../../../assets/images/Espagne.png";
import frFlag from "../../../assets/images/France.png";
import useClickedOutside from "../../../hooks/useClickedOutside";
import useClickedOutside1 from "../../../hooks/useClickedOutside1";

import { ReactComponent as Arrow } from "../../../assets/icons/arrow.svg";

import { Link } from "react-router-dom";

const Header = () => {
  const { target, button, isShown, setIsShown } = useClickedOutside();
  const { target1, button1, isShown1, setIsShown1 } = useClickedOutside1();

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <div className={styles.logo}>MyTravelBuddy</div>

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
