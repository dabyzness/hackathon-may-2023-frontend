import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Location.module.css";

import call from "../../assets/locationIcons/call.svg";
import directions from "../../assets/locationIcons/directions.svg";
import website from "../../assets/locationIcons/website.svg";
import star from "../../assets/locationIcons/star.svg";
import LocationIcon from "../../components/LocationIcon/LocationIcon";
import back from "../../assets/navigation/back.svg";

const locationIconArr = [call, directions, website];

const Location = (props) => {
  const { fetchLocation } = props;
  const { locationId } = useParams();
  const [location, setLocation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!locationId) {
      return;
    }

    const fetch = async () => {
      const data = await fetchLocation(locationId);
      setLocation(data);
    };
    fetch();
  }, [locationId]);

  const locationFake = {
    name: "Raphael House",
    street: "1065 Sutter St",
    city: "San Francisco",
    state: "CA",
    zipcode: "94109",
    tags: [
      "shelter",
      "food kitchen",
      "after-school programs",
      "training program",
      "case management",
      "community groups",
    ],
    email: "info@raphaelhouse.org",
  };

  if (!location) {
    return <div>LOADING</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.backStar}>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className={styles.back}
        >
          <img src={back} alt="back" />
        </button>
        <button className={styles.star}>
          <img src={star} alt="favorite" />
        </button>
      </div>
      <h3 className={styles.locationName}>{location.name}</h3>
      <h4 className={styles.locationStreet}>{locationFake.street}</h4>
      <h4 className={styles.locationCity}>
        {locationFake.city}, {locationFake.state} {locationFake.zipcode}
      </h4>
      <p className={styles.locationDistance}>0.6 MILES AWAY</p>

      <div className={styles.iconContainer}>
        {["call", "directions", "website"].map((iconName, i) => (
          <LocationIcon icon={locationIconArr[i]} iconName={iconName} />
        ))}
      </div>

      {/* ABOUT LOCATION */}
      <p className={styles.about}>
        At Raphael House we provide each family with the personalized and
        family-centered solutions necessary to achieve long-term secure housing
        and financial stability.
      </p>
      {/* HOURS */}
      <h3 className={styles.heading3}>HOURS FOR INTAKE</h3>
      <p className={styles.about}>
        Women: Monday through Saturday at 2:00 pm and Sundays at 11:00 am.
        Families – Everday at 4:00 pm.
      </p>
      {/* TAGS */}
      <h3 className={styles.heading3}>SERVICES OFFERED</h3>
      <ul className={styles.tags}>
        {locationFake.tags.map((tag) => (
          <li key={tag} className={styles.tag}>
            {tag[0].toUpperCase() + tag.slice(1)}
          </li>
        ))}
      </ul>
      {/* PHONE */}
      <h3 className={styles.heading3}>PHONE NUMBER</h3>
      <p style={{ fontSize: "14px" }} className={styles.about}>
        ({location.phone.slice(0, 3)}) {location.phone.slice(3, 6)}-
        {location.phone.slice(6)}
      </p>
      {/* EMAIL */}
      <h3 className={styles.heading3}>EMAIL</h3>
      <p className={styles.about}>{locationFake.email}</p>
    </div>
  );
};

export default Location;
