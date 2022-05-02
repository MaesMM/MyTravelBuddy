import styles from "./Events.module.scss";
import { Link } from "react-router-dom";

import { ReactComponent as Plus } from "../../../../assets/icons/plus.svg";
import { useEffect, useState } from "react";

import api from "../../../../services/api";
import EventCard from '../Events/EventCard/EventCard'

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get(`/events`).then((res) => {
      setEvents(res.data)
    }).catch((err) => console.log(err))
  }, []);

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
        {events.length > 0 ? (
          <div className={styles.eventList}>
            {events.map((event) => <EventCard data={event}/>)}
          </div>
        ) : (
          <span>Vous n'avez créé aucun événement</span>
        )}
      </section>
    </div>
  );
};

export default Events;
