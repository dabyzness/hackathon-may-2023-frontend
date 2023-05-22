import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LocationMap from "../../components/LocationMap/LocationMap";
import MapFilterContainer from "../../components/MapFilters/MapFilterContainer";
import Landing from "../Landing/Landing";

const Home = (props) => {
  const { user, locations } = props;
  // const [updatedLocations, setUpdatedLocations] = useState(locations);
  // const [filters, setFilters] = useState([
  //   "church",
  //   "doctor",
  //   "food",
  //   "domestic violence",
  //   "finance",
  //   "housing",
  //   "resource",
  //   "shelter",
  // ]);

  // useEffect(() => {
  //   setUpdatedLocations(
  //     locations.filter((location) => filters.includes(location.category))
  //   );
  // }, [filters, locations]);

  // function handleChangeFilter(filterToChange) {
  //   if (filters.includes(filterToChange)) {
  //     const updatedFilters = filters.filter(
  //       (filter) => filter !== filterToChange
  //     );
  //     setFilters(updatedFilters);
  //   } else {
  //     setFilters([...filters, filterToChange]);
  //   }
  // }

  // useEffect(() => {
  //   console.log(filters);
  // }, [filters]);

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
      {/* {user ? (
        <div
          style={{
            margin: "51px 0 0 0",
            padding: "0 0 0 0",
            height: "calc(100vh - 51px - 61px)",
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
      ) : ( */}
      <Landing handleSignupClick={handleOnClick} user={user} />

      {/* <button style={{ marginTop: "60px" }} onClick={handleOnClick}>
        // Click to Authenticate //{" "}
      </button> */}
      {/* )} */}
    </div>
  );
};

export default Home;
