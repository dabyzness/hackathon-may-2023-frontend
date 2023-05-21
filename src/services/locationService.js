import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;

async function getLocations() {
  const res = await axios.request({
    method: "get",
    url: `${BASE_URL}/location`,
  });

  const json = await res.data;

  return json;
}

async function getLocation(locationId) {
  const res = await axios.request({
    method: "get",
    url: `${BASE_URL}/location/${locationId}`,
  });

  const json = await res.data;

  return json;
}

export { getLocations, getLocation };
