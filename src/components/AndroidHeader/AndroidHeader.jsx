import styles from "./AndroidHeader.module.css";

import battery from "../../assets/navigation/battery.svg";
import time from "../../assets/navigation/time.svg";

const AndroidHeader = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.time} src={time} alt="time" />
      <img className={styles.battery} src={battery} alt="battery" />
    </div>
  );
};

export default AndroidHeader;
