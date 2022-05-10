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

    return <article className={cardStyle.card} onClick={() => onClick()}>
        <div className={cardStyle.imgContainer}>
            <img className={cardStyle.image} src={data.image} alt="img" />
        </div>
        <div className={cardStyle.content}>
        <h3 className={cardStyle.title}> {data.name} </h3>
        </div>
    </article>;
};

export default EventCard;