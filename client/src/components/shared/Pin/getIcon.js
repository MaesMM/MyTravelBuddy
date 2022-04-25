import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
import Pin from "./Pin";

export const getIcon = (category) => {
  const iconMarkup = renderToStaticMarkup(<Pin category={category} />);
  const customMarketIcon = divIcon({
    html: iconMarkup,
    iconAnchor: [5, 55],
    popupAnchor: [17.5, -55],
    iconSize: [0, 0],
  });
  return customMarketIcon;
};
