import { useNavigate } from "react-router-dom";

import styles from "./Footer.module.css";

import account from "../../assets/navigation/account.svg";
import home from "../../assets/navigation/home.svg";
import location from "../../assets/navigation/location.svg";
import settings from "../../assets/navigation/settings.svg";
import storefront from "../../assets/navigation/storefront.svg";

const Footer = (props) => {
  const { profile } = props;

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <button className={styles.iconButton} onClick={() => navigate("/")}>
          <img className={styles.icon} src={home} alt="home" />
        </button>
        <p className={styles.word}>Home</p>
      </div>
      <div className={styles.navContainer}>
        <button
          className={styles.iconButton}
          onClick={() =>
            navigate(`/profile/${profile._id ? profile._id : "1"}`)
          }
        >
          <img className={styles.icon} src={account} alt="profile" />
        </button>
        <p className={styles.word}>Profile</p>
      </div>
      <div className={styles.navContainer}>
        <button
          className={styles.iconButton}
          onClick={() => navigate("/location")}
        >
          <img className={styles.icon} src={location} alt="map" />
        </button>
        <p className={styles.word}>Map</p>
      </div>
      <div className={styles.navContainer}>
        <button className={styles.iconButton} onClick={() => navigate("/")}>
          <img className={styles.icon} src={storefront} alt="market" />
        </button>
        <p className={styles.word}>Market</p>
      </div>
      <div className={styles.navContainer}>
        <button
          className={styles.iconButton}
          onClick={() =>
            navigate(`/profile/${profile._id ? profile._id : "1"}`)
          }
        >
          <img className={styles.icon} src={settings} alt="settings" />
        </button>
        <p className={styles.word}>Settings</p>
      </div>
    </div>
  );
};

export default Footer;
