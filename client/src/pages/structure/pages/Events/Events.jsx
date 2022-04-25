import styles from "./Events.module.scss";
import { Link } from "react-router-dom";

import { ReactComponent as Plus } from "../../../../assets/icons/plus.svg";
import { useState } from "react";

const Events = () => {
  const [events, setEvents] = useState(true);

  return (
    <div className={styles.structurePage}>
      <h2 className={styles.pageTitle}>Événements</h2>
      <section className={styles.section}>
        <header className={`${styles.sectionHead}`}>
          <h3>Vos événements</h3>
          <Link className="primary-btn" to="/structures/events/create">
            <span>Ajouter</span>
            <Plus />
          </Link>
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
