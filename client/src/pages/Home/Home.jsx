import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { getIcon } from "../../components/shared/Pin/getIcon";

import styles from "./Home.module.scss";

const Home = () => {
  const [position, setPosition] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((geoloc) =>
      setPosition([geoloc.coords.latitude, geoloc.coords.longitude])
    );
  }, []);

  return (
    <div>
      {position && (
        <MapContainer className={styles.map} center={position} zoom={13}>
          <TileLayer
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
            url="https://api.mapbox.com/styles/v1/louislecout/ckzwfj8rc00a414jydquyrqpv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibG91aXNsZWNvdXQiLCJhIjoiY2t6d2ZubTEzMmoxNTJ3cGU5eGJ5amg4eiJ9.Av7gubKDgQ_33XWfC5nUHQ"
          />
          {/* <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          /> */}
          <Marker position={position} icon={getIcon("theater")}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Home;
