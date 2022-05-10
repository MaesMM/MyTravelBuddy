import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Searchbar from "../../components/client/Searchbar/Searchbar";
import MainMenu from "../../components/shared/Header/MainMenu/MainMenu";
import { ReactComponent as Spinner } from "../../assets/icons/spin.svg";

import api from "../../services/api";

import { getIcon, currentLocation } from "../../components/shared/Pin/getIcon";
import Place from "../../components/shared/Place/Place";
import styles from "./Home.module.scss";
import useClickedOutside2 from "../../hooks/useClickedOutside2";

const Home = () => {
  const [position, setPosition] = useState(null);
  const [isGeoLocAllowed, setIsGeoLocAllowed] = useState(true);
  const [locations, setLocations] = useState([]);

  navigator.permissions.query({ name: "geolocation" }).then(function (result) {
    // Will return ['granted', 'prompt', 'denied']
    result.state === "granted" || result.state === "prompt"
      ? setIsGeoLocAllowed(true)
      : setIsGeoLocAllowed(false);
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((geoloc) =>
      setPosition([geoloc.coords.latitude, geoloc.coords.longitude])
    );
  }, []);
  useEffect(() => {
    // get and display locations
    api
      .get(`locations/getAll`)
      .then((res) => {
        setLocations(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const [isShown, setIsShown] = useState(false);
  const { target2, button2, isShown2, setIsShown2 } = useClickedOutside2();

  return (
    <>
      {isGeoLocAllowed && position && (
        <div className={styles.Home}>
          <main className={styles.mainContent}>
            <Searchbar />

            <MapContainer className={styles.map} center={position} zoom={13}>
              <TileLayer
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
                url="https://api.mapbox.com/styles/v1/louislecout/ckzwfj8rc00a414jydquyrqpv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibG91aXNsZWNvdXQiLCJhIjoiY2t6d2ZubTEzMmoxNTJ3cGU5eGJ5amg4eiJ9.Av7gubKDgQ_33XWfC5nUHQ"
              />

              <Marker
                position={position}
                icon={currentLocation("user")}
              ></Marker>
              <Marker
                ref={button2}
                position={[position[0], position[1]]}
                icon={getIcon("theater")}
                eventHandlers={{
                  click: () => {
                    setIsShown2(!isShown2);
                  },
                }}
              ></Marker>

              {/* Display Locations */}

              {locations.map((data) => (
                <Marker
                  ref={button2}
                  position={[data.latitude, data.longitude]}
                  icon={getIcon("theater")}
                  eventHandlers={{
                    click: () => {
                      setIsShown2(!isShown2);
                    },
                  }}
                >
                  {/* <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup> */}
                </Marker>
              ))}
            </MapContainer>
            {isShown2 && (
              <div className={styles.background}>
                <div className={styles.containerPlace} ref={target2}>
                  <Place />
                </div>
              </div>
            )}
          </main>
          <MainMenu />
        </div>
      )}

      {isGeoLocAllowed && !position && (
        <div className={styles.message}>
          <Spinner className={styles.spinner} />
        </div>
      )}
      {!isGeoLocAllowed && (
        <div className={styles.message}>
          MyTravelBuddy a besoin d'accéder à votre position pour fonctionner
        </div>
      )}
    </>
  );
};

export default Home;
