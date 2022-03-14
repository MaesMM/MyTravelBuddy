import { useState, useEffect } from "react";
import styles from "./MainMenu.module.scss";
import ScrollContainer from "react-indiana-drag-scroll";

import axios from "axios";

const MainMenu = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()
  useEffect(() => {

    axios.get("")

    fetch([
      { id: 1, name: "Apples", price: "$2" },
      { id: 2, name: "Peaches", price: "$5" },
    ])
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div className={styles.Menu}>
      <div className={styles.MenuTitle}>
        <h3>
          En ce moment à <span className="underline">Lille</span>
        </h3>
        {items.map((item) => (
          <li>
            {item.name} {item.price}
          </li>
        ))}
      </div>
      <div className={styles.trend}>
        <div className={styles.SectionTitle}>
          <h4>Tendances</h4>
        </div>
        <div className={styles.BorderScroll}>
          <ScrollContainer className="scroll-container">
            <div className={styles.TendancesAffiche}>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>

              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
            </div>
          </ScrollContainer>
        </div>
      </div>
      <div className={styles.trend}>
        <div className={styles.SectionTitle}>
          <h4>Tendances</h4>
        </div>
        <div className={styles.BorderScroll}>
          <ScrollContainer className="scroll-container">
            <div className={styles.TendancesAffiche}>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
            </div>
          </ScrollContainer>
        </div>
      </div>
      <div className={styles.trend}>
        <div className={styles.SectionTitle}>
          <h4>Tendances</h4>
        </div>
        <div className={styles.BorderScroll}>
          <ScrollContainer className="scroll-container">
            <div className={styles.TendancesAffiche}>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
            </div>
          </ScrollContainer>
        </div>
      </div>
      <div className={styles.trend}>
        <div className={styles.SectionTitle}>
          <h4>Tendances</h4>
        </div>
        <div className={styles.BorderScroll}>
          <ScrollContainer className="scroll-container">
            <div className={styles.TendancesAffiche}>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
            </div>
          </ScrollContainer>
        </div>
      </div>
      <div className={styles.trend}>
        <div className={styles.SectionTitle}>
          <h4>Tendances</h4>
        </div>
        <div className={styles.BorderScroll}>
          <ScrollContainer className="scroll-container">
            <div className={styles.TendancesAffiche}>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
            </div>
          </ScrollContainer>
        </div>
      </div>
      <div className={styles.trend}>
        <div className={styles.SectionTitle}>
          <h4>Tendances</h4>
        </div>
        <div className={styles.BorderScroll}>
          <ScrollContainer className="scroll-container">
            <div className={styles.TendancesAffiche}>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
            </div>
          </ScrollContainer>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
