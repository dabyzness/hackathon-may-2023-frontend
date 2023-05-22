import { useNavigate } from "react-router-dom";

import profile from "../../assets/navigation/person.svg";
import hamburger from "../../assets/navigation/menu.svg";
import tree from "../../assets/navigation/tree.svg";
import styles from "./Landing.module.css";

const Landing = (props) => {
  const { user } = props;
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img className={styles.hamburger} src={hamburger} alt="" />
      {!user && <p className={styles.about}>ABOUT</p>}
      {!user && (
        <a className={styles.signup} href="/auth">
          SIGN UP
        </a>
      )}
      {!user && <img className={styles.profile} src={profile} alt="" />}
      <p className={styles.appName}>Figtree</p>
      <p className={styles.description}>
        A RESOURCE FOR THE UNHOUSED COMMUNITY
      </p>
      <img className={styles.logo} src={tree} alt="" />
      {!user && (
        <button
          className={styles.viewMap}
          onClick={() => {
            navigate("/location");
          }}
        >
          VIEW THE MAP
        </button>
      )}
    </div>
  );
};

export default Landing;
