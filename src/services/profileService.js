import axios from "axios";
import { getToken } from "./token";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;

async function getProfile(profileId) {
  try {
    const res = await axios.request({
      method: "get",
      url: `${BASE_URL}/profile/${profileId}`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });

    const profile = await res.data;
    return profile;
  } catch (error) {
    return error;
  }
}

export { getProfile };
