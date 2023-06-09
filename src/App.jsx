import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Location from "./pages/Location/Location";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Profile from "./pages/Profile/Profile";
import Landing from "./pages/Landing/Landing";
import Map from "./pages/Map/Map";

import { signup, login } from "./services/authService";
import { getProfile } from "./services/profileService";
import { getUserFromToken } from "./services/token";
import { getLocations, getLocation } from "./services/locationService";

import "./App.css";
import AndroidHeader from "./components/AndroidHeader/AndroidHeader";
import Footer from "./components/Footer/Footer";

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
      <AndroidHeader />
      <Routes>
        <Route path="/" element={<Home user={user} locations={locations} />} />
        <Route
          path="/auth"
          element={
            <Auth handleSignup={handleSignup} handleLogin={handleLogin} />
          }
        />

        <Route
          path="/location"
          element={<Map locations={locations} user={user} />}
        />

        <Route
          path="/location/:locationId"
          element={<Location fetchLocation={fetchLocation} />}
        />

        <Route
          path="/profile/:username"
          element={
            <ProtectedRoute user={user}>
              <Profile user={user} profile={profile} />
            </ProtectedRoute>
          }
        />
      </Routes>
      {user && <Footer profile={profile} />}
    </div>
  );
}

export default App;
