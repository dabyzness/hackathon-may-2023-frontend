import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LocationMap from "../../components/LocationMap/LocationMap";
import MapFilterContainer from "../../components/MapFilters/MapFilterContainer";

const Home = (props) => {
  const { user, locations } = props;
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

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  const navigate = useNavigate();

  function handleOnClick() {
    navigate("/auth");
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {user ? (
        <div
          style={{
            margin: "24px 0 0 0",
            padding: "0 0 0 0",

            height: "90vh",
            width: "100vw",
            // border: "2px solid #666666",
            borderRadius: "5px",
          }}
        >
          <LocationMap locations={updatedLocations} />
          <MapFilterContainer
            filters={filters}
            handleChangeFilter={handleChangeFilter}
          />
        </div>
      ) : (
        <button onClick={handleOnClick}>Click to Authenticate</button>
      )}
    </div>
  );
};

export default Home;
