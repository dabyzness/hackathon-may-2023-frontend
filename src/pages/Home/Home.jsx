import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LocationMap from "../../components/LocationMap/LocationMap";
import MapFilterContainer from "../../components/MapFilters/MapFilterContainer";

const Home = (props) => {
  const { user, locations } = props;
  const [updatedLocations, setUpdatedLocations] = useState(locations);
  const [filters, setFilters] = useState([
    "shelter",
    "clinic",
    "food",
    "restaurant",
    "other",
    "church",
    "government",
    "resource",
    "charity",
  ]);

  useEffect(() => {
    setUpdatedLocations(
      locations.filter((location) => filters.includes(location.category))
    );
  }, [filters, locations]);

  function handleChangeFilter(filterToChange) {
    let updatedFilters = filters;

    if (filters.includes(filterToChange)) {
      updatedFilters = filters.filter((filter) => filter !== filterToChange);
    } else {
      updatedFilters.push(filterToChange);
    }
    setFilters(updatedFilters);
  }

  const navigate = useNavigate();

  // const locations = [
  //   {
  //     name: "Birdsong",
  //     longitude: -122.4091859,
  //     latitude: 37.7814424,
  //   },
  //   {
  //     name: "Passport",
  //     longitude: -122.4171702,
  //     latitude: 37.7811788,
  //   },
  //   {
  //     name: "Union Square",
  //     longitude: -122.4097904,
  //     latitude: 37.7855449,
  //   },
  //   {
  //     name: "Whole Foods",
  //     longitude: -122.4066843,
  //     latitude: 37.7838149,
  //   },
  //   {
  //     name: "Dragon Gate",
  //     longitude: -122.4056002,
  //     latitude: 37.7866487,
  //   },
  // ];

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
            marginTop: "24px",
            height: "90vh",
            width: "95vw",
            border: "2px solid #666666",
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
