import { ReactComponent as Theater } from "../../../assets/icons/pins/theater.svg";
import { ReactComponent as Music } from "../../../assets/icons/pins/music.svg";
import { ReactComponent as Museum } from "../../../assets/icons/pins/museum.svg";

const Pin = ({ category }) => {
  return (
    <div>
      {category === "theater" && <Theater />}
      {category === "music" && <Music />}
      {category === "museum" && <Museum />}
    </div>
  );
};

export default Pin;
