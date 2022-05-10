import styles from "../Events.module.scss";
import cardStyle from "./EventCard.module.scss";
import React from "react";

import api from "../../../../../services/api";

const EventCard = ({ data }) => {
    function onClick() {
        console.log("Click", data.name, data.id)
        api.delete("/events/delete/" + data.id).then((res) => {
            return location.reload();
        }).catch((err) => console.log(err));
    }

    return <button className={styles.event} onClick={() => onClick()}>
        <h2> {data.id} </h2>
        <img className={cardStyle.image} src={data.image} alt="img" />
        <h3> {data.name} </h3>
    </button>;
};

export default EventCard;