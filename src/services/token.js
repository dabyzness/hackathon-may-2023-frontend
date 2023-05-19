import jwtDecode from "jwt-decode";

function setToken(token) {
  localStorage.setItem("token", token);
}

function removeToken() {
  localStorage.removeItem("token");
}

function getToken() {
  let token = localStorage.getItem("token");

  if (token) {
    const payload = jwtDecode(token);

    if (payload.exp < Date.now() / 1000) {
      removeToken();
      token = null;
    }
  }

  return token;
}

function getUserFromToken() {
  const token = getToken();
  if (!token) {
    return null;
  }

  const { _id, email, profile } = jwtDecode(token).user;
  const user = { id: _id, email, profile };

  return user;
}

export { setToken, getToken, getUserFromToken };
