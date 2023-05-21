import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Location from "./pages/Location/Location";

import { signup, login } from "./services/authService";
import { getProfile } from "./services/profileService";
import { getUserFromToken } from "./services/token";
import { getLocations, getLocation } from "./services/locationService";

import "./App.css";

function App() {
  const [user, setUser] = useState(getUserFromToken());
  const [profile, setProfile] = useState(null);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (!user) {
      setProfile(null);
      return;
    }

    const fetchProfile = async () => {
      const data = await getProfile(user.profile);

      if (data instanceof Error) {
        setProfile(null);
        return;
      }
      setProfile(data);
    };
    fetchProfile();
  }, [user]);

  useEffect(() => {
    const fetchLocations = async () => {
      const data = await getLocations();

      if (data instanceof Error) {
        return;
      }

      setLocations(data);
    };
    fetchLocations();
  }, []);

  async function handleSignup(userFormData, profileFormData) {
    const data = await signup(userFormData, profileFormData);

    if (!data.user) {
      return { error: "Something went wrong with signup!" };
    }

    setUser(data.user);

    return { status: "OK" };
  }

  async function handleLogin(formData) {
    const data = await login(formData);

    if (!data.user) {
      return { error: "Something went wrong with login!" };
    }

    setUser(data.user);

    return { status: "OK" };
  }

  async function fetchLocation(locationId) {
    const data = await getLocation(locationId);

    return data;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home user={user} locations={locations} />} />
        <Route
          path="/auth"
          element={
            <Auth handleSignup={handleSignup} handleLogin={handleLogin} />
          }
        />
        <Route
          path="/location/:locationId"
          element={<Location fetchLocation={fetchLocation} />}
        />
      </Routes>
    </div>
  );
}

export default App;
