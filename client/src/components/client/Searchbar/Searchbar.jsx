import styles from "./Searchbar.module.scss";
import { ReactComponent as Search } from "../../../assets/icons/search.svg";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow.svg";

import { useState } from "react";
import useClickedOutside from "../../../hooks/useClickedOutside";

const Searchbar = () => {
  const { target, button, isShown, setIsShown } = useClickedOutside();
  return (
    <div className={styles.searchbarContainer}>
      <div className={styles.searchbar}>
        <div
          className={`${styles.filtersBtn} ${isShown && styles.filtersShown}`}
          onClick={() => setIsShown(!isShown)}
          ref={button}
        >
          <span>Filtres</span>
          <Arrow />
        </div>
        <input
          className={styles.input}
          type="text"
          placeholder="Rechercher..."
        />
        <button className={styles.btn}>
          <Search />
        </button>
      </div>
      <div
        className={`${styles.filtersContainer} ${isShown && styles.show}`}
        ref={target}
      >
        <div className={styles.list}>
          <h4>Catégories</h4>
          <div>
            <input type="checkbox" name="theaters" id="theaters" />{" "}
            <label htmlFor="theaters">Théatres</label>
          </div>
          <div>
            <input type="checkbox" name="cinemas" id="cinemas" />{" "}
            <label htmlFor="cinemas">Cinémas</label>
          </div>
          <div>
            <input type="checkbox" name="museums" id="museums" />{" "}
            <label htmlFor="museums">Musées</label>
          </div>
          <div>
            <input type="checkbox" name="concerts" id="concerts" />{" "}
            <label htmlFor="concerts">Concerts</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
