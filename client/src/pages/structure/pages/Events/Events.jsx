import styles from "./Events.module.scss";

import { ReactComponent as Plus } from "../../../../assets/icons/plus.svg";
import { useState } from "react";

const Events = () => {
  const [events, setEvents] = useState(true);

  return (
    <div>
      <h2 className={styles.pageTitle}>Événements</h2>
      <section className={styles.section}>
        <header className={`${styles.sectionHead}`}>
          <h3>Vos événements</h3>
          <button className="primary-btn">
            <span>Ajouter</span>
            <Plus />
          </button>
        </header>
        {events ? (
          <div className={styles.eventList}>
            <div className={styles.event}></div>
            <div className={styles.event}></div>
            <div className={styles.event}></div>
          </div>
        ) : (
          <span>Vous n'avez créé aucun événement</span>
        )}
      </section>
    </div>
  );
};

export default Events;
