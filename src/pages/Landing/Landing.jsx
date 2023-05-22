import { useNavigate } from "react-router-dom";

import profile from "../../assets/navigation/person.svg";
import hamburger from "../../assets/navigation/menu.svg";
import styles from "./Landing.module.css";

const Landing = (props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img className={styles.hamburger} src={hamburger} alt="" />
      <p className={styles.about}>ABOUT</p>
      <a className={styles.signup} href="/auth">
        SIGN UP
      </a>
      <img className={styles.profile} src={profile} alt="" />
      <p className={styles.appName}>Figtree</p>
      <p className={styles.description}>
        A RESOURCE FOR THE UNHOUSED COMMUNITY
      </p>
      <img className={styles.logo} src="" alt="" />
      <button
        className={styles.viewMap}
        onClick={() => {
          navigate("/location");
        }}
      >
        VIEW THE MAP
      </button>
    </div>
  );
};

export default Landing;
