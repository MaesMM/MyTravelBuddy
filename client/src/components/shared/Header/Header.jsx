import styles from "./Header.module.scss";
import enFlag from "../../../assets/images/Angleterre.png";
import esFlag from "../../../assets/images/Espagne.png";
import frFlag from "../../../assets/images/France.png";
import useClickedOutside from "../../../hooks/useClickedOutside";
import useClickedOutside1 from "../../../hooks/useClickedOutside1";

import { ReactComponent as Arrow } from "../../../assets/icons/arrow.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const { target, button, isShown, setIsShown } = useClickedOutside();
  const { target1, button1, isShown1, setIsShown1 } = useClickedOutside1();

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <div className={styles.logo}>MyTravelBuddy</div>

        <div className={styles.rightHeader}>
          <span className={styles.donate}>Faire un don</span>

          <div
            onClick={() => setIsShown1(!isShown1)}
            ref={button1}
            className={styles.countriesSelection}
          >
            <div className={`${styles.lang} ${isShown1 && styles.rotate}`}>
              <img className={styles.flag} src={frFlag} />
              <span>FR</span>
              <Arrow />
            </div>
          </div>

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
        ref={target1}
        className={`${styles.Languages} ${isShown1 && styles.isShown1}`}
      >
        <div className={styles.choiceLanguage}>
          <img className={styles.flag} src={frFlag} />
          <span>FR</span>
        </div>
        <div className={styles.choiceLanguage}>
          <img className={styles.flag} src={enFlag} />
          <span>EN</span>
        </div>
        <div className={styles.choiceLanguage}>
          <img className={styles.flag} src={esFlag} />
          <span>ES</span>
        </div>
      </div>

      <div
        ref={target}
        className={`${styles.navHeader} ${isShown && styles.isShown}`}
      >
        <div className={styles.menu}>
          <a className="primary-btn full-width" href="identifier">
            S'identifier
          </a>

          <a href="contacter">Contacter</a>

          <a href="espace_professionnel">Espace professionnel</a>

          <a href="mentions_légales">Mentions légales</a>
        </div>
      </div>

     
    </div>
  );
};

export default Header;
