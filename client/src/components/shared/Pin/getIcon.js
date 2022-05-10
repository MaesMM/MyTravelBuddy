import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
import Pin from "./Pin";
import styles from "./Pin.module.scss";

export const getIcon = (category) => {
  const iconMarkup = renderToStaticMarkup(<Pin category={category} />);
  const customMarketIcon = divIcon({
    html: iconMarkup,
    iconAnchor: [15, 40],
    className: styles.pin,
  });
  return customMarketIcon;
};

export const currentLocation = () => {
  const iconMarkup = renderToStaticMarkup(<Pin category="user" />);

  const customMarketIcon = divIcon({
    html: iconMarkup,

    className: styles.userLoc,
  });
  return customMarketIcon;
};
