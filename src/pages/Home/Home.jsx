import { useNavigate } from "react-router-dom";

import LocationMap from "../../components/LocationMap/LocationMap";

const Home = (props) => {
  const { user } = props;
  const navigate = useNavigate();

  const locations = [
    {
      name: "Birdsong",
      longitude: -122.4091859,
      latitude: 37.7814424,
    },
    {
      name: "Passport",
      longitude: -122.4171702,
      latitude: 37.7811788,
    },
    {
      name: "Union Square",
      longitude: -122.4097904,
      latitude: 37.7855449,
    },
    {
      name: "Whole Foods",
      longitude: -122.4066843,
      latitude: 37.7838149,
    },
    {
      name: "Dragon Gate",
      longitude: -122.4056002,
      latitude: 37.7866487,
    },
  ];

  function handleOnClick() {
    navigate("/auth");
  }

  return (
    <div>
      {user ? (
        <div style={{ height: "80vh", width: "95vw" }}>
          <LocationMap locations={locations} />
        </div>
      ) : (
        <button onClick={handleOnClick}>Click to Authenticate</button>
      )}
    </div>
  );
};

export default Home;
