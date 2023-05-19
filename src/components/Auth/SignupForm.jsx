import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ handleSignup }) => {
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
    rePassword: "",
  });

  const [profileFormData, setProfileFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    role: "homeless",
  });

  const navigate = useNavigate();

  function handleChange(evt) {
    if (evt.target.type === "select-one") {
      setProfileFormData({ ...profileFormData, role: evt.target.value });
      return;
    }
    const property = evt.target.name.split("-");

    if (property[0] === "user") {
      setUserFormData({ ...userFormData, [property[1]]: evt.target.value });
    } else {
      setProfileFormData({
        ...profileFormData,
        [property[1]]: evt.target.value,
      });
    }
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    if (userFormData.password !== userFormData.rePassword) {
      console.log("PASSWORDS DONT MATCH");
      return;
    }

    const res = await handleSignup(userFormData, profileFormData);

    if (res.error) {
      console.log("SOMETHING WENT WRONG WITH SIGNUP");
      return;
    }

    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user-email">Email: </label>
      <input
        type="text"
        name="user-email"
        value={userFormData.email}
        onChange={handleChange}
      />
      <label htmlFor="user-password">Password: </label>
      <input
        type="text"
        name="user-password"
        value={userFormData.password}
        onChange={handleChange}
      />
      <label htmlFor="user-rePassword">Re-enter Password</label>
      <input
        type="text"
        name="user-rePassword"
        value={userFormData.rePassword}
        onChange={handleChange}
      />

      <label htmlFor="profile-username">Username: </label>
      <input
        type="text"
        name="profile-username"
        value={profileFormData.username}
        onChange={handleChange}
      />
      <label htmlFor="profile-firstName">First Name: </label>
      <input
        type="text"
        name="profile-firstName"
        value={profileFormData.firstName}
        onChange={handleChange}
      />
      <label htmlFor="profile-lastName">Last Name: </label>
      <input
        type="text"
        name="profile-lastName"
        value={profileFormData.lastName}
        onChange={handleChange}
      />

      <label htmlFor="profile-role"></label>
      <select
        name="profile-role"
        value={profileFormData.role}
        onChange={handleChange}
      >
        <option value="homeless">Homeless</option>
        <option value="samaritan">Samaritan</option>
        <option value="clinic">Clinic</option>
        <option value="shelter">Shelter</option>
        <option value="vendor">Vendor</option>
        <option value="government">Government</option>
        <option value="business">Business</option>
      </select>

      <button type="submit">SIGN-UP</button>
    </form>
  );
};

export default SignupForm;
