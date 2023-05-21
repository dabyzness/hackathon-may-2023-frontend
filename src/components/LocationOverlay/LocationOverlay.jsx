import { useNavigate } from "react-router-dom";
import styles from "./LocationOverlay.module.css";

const LocationOverlay = (props) => {
  const { location } = props;

  const navigate = useNavigate();

  const locationFake = {
    name: "Raphael House",
    street: "1065 Sutter St",
    city: "San Francisco",
    state: "CA",
    zipcode: "94109",
  };

  function handleClick() {
    navigate(`/location/${location._id}`);
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.locationName}>{location.name}</h3>
      <h4 className={styles.locationStreet}>{locationFake.street}</h4>
      <h4 className={styles.locationCity}>
        {locationFake.city}, {locationFake.state} {locationFake.zipcode}
      </h4>

      <p className={styles.locationDistance}>0.6 MILES AWAY</p>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p className={styles.openClosed}>OPEN</p>
        <button className={styles.locationButton} onClick={handleClick}>
          View Page
        </button>
      </div>
    </div>
  );
};

export default LocationOverlay;
