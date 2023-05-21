import styles from "./LocationIcon.module.css";

const LocationIcon = (props) => {
  const { icon, iconName } = props;

  return (
    <div className={styles.container}>
      <button className={styles.iconButton}>
        <img
          src={icon}
          alt={iconName}
          style={{ height: "30px", margin: "4px 0" }}
        />
      </button>
      <p
        style={{
          margin: "0",
          padding: "0",
          fontFamily: "FigtreeLight",
          fontWeight: "bold",
          letterSpacing: "1px",
          marginBottom: "4px",
          opacity: ".8",
          color: "#626262",
          fontSize: "11px",
        }}
      >
        {iconName.toUpperCase()}
      </p>
    </div>
  );
};

export default LocationIcon;
