import axios from "axios";
import { setToken } from "./token";

const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;

async function signup(userFormData, profileFormData) {
  delete userFormData.rePassword;

  const formData = { user: userFormData, profile: profileFormData };

  try {
    const res = await axios.request({
      method: "post",
      url: `${BASE_URL}/signup`,
      data: formData,
      headers: { "Content-Type": "application/json" },
    });

    const json = await res.data;

    setToken(json.token);
    delete json.token;

    return json;
  } catch (error) {
    return error;
  }
}

async function login(formData) {
  try {
    const res = await axios.request({
      method: "post",
      url: `${BASE_URL}/login`,
      data: formData,
      headers: { "Content-Type": "application/json" },
    });

    const json = await res.data;

    setToken(json.token);
    delete json.token;

    return json;
  } catch (error) {
    return error;
  }
}

export { signup, login };
