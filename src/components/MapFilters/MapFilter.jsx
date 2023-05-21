import styles from "./MapFilter.module.css";

const MapFilter = (props) => {
  const { filter, handleChangeFilter, icon } = props;

  return (
    <div className={styles.mapFilter}>
      <button
        className={styles.filterButton}
        onClick={() => handleChangeFilter(filter)}
      >
        <img
          src={icon}
          alt={filter}
          style={{ height: "40px", margin: "4px 0" }}
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
          opacity: ".65",
        }}
      >
        {filter.toUpperCase()}
      </p>
    </div>
  );
};

export default MapFilter;
