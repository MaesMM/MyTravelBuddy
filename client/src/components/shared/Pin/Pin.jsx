import { ReactComponent as Theater } from "../../../assets/icons/pins/theater.svg";
import { ReactComponent as Music } from "../../../assets/icons/pins/music.svg";
import { ReactComponent as Museum } from "../../../assets/icons/pins/museum.svg";

import styles from "./Pin.module.scss";

const Pin = ({ category }) => {
  return (
    <div>
      {category === "theater" && <Theater />}
      {category === "music" && <Music />}
      {category === "museum" && <Museum />}
      {category === "user" && <div></div>}
    </div>
  );
};

export default Pin;
