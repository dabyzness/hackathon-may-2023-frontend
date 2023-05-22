import { useState, useEffect } from "react";

import LocationMap from "../../components/LocationMap/LocationMap";
import MapFilterContainer from "../../components/MapFilters/MapFilterContainer";

const Map = (props) => {
  const { locations, user } = props;

  const [updatedLocations, setUpdatedLocations] = useState(locations);
  const [filters, setFilters] = useState([
    "church",
    "doctor",
    "food",
    "domestic violence",
    "finance",
    "housing",
    "resource",
    "shelter",
  ]);

  useEffect(() => {
    setUpdatedLocations(
      locations.filter((location) => filters.includes(location.category))
    );
  }, [filters, locations]);

  function handleChangeFilter(filterToChange) {
    if (filters.includes(filterToChange)) {
      const updatedFilters = filters.filter(
        (filter) => filter !== filterToChange
      );
      setFilters(updatedFilters);
    } else {
      setFilters([...filters, filterToChange]);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          margin: "51px 0 0 0",
          padding: "0 0 0 0",
          height: `${
            !user ? "calc(100vh - 51px)" : "calc(100vh - 51px - 61px)"
          }`,
          width: "100vw",
          overflowY: "scroll",
          borderRadius: "5px",
        }}
      >
        <LocationMap locations={updatedLocations} />
        <MapFilterContainer
          filters={filters}
          handleChangeFilter={handleChangeFilter}
        />
      </div>
    </div>
  );
};

export default Map;
