import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AuthForms.module.css";

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
  <div>
    <h1 className={styles.header}>Sign Up</h1>
    <form onSubmit={handleSubmit}>
      <div className={styles.fieldsContainer}>
        <input
          type="text"
          placeholder="FIRST NAME"
          name="profile-firstName"
          value={profileFormData.firstName}
          onChange={handleChange}
        />
      
      
        
        <input
          type="text"
          placeholder="LAST NAME"
          name="profile-lastName"
          value={profileFormData.lastName}
          onChange={handleChange}
        />
      
      
        
        <input
          type="text"
          placeholder="EMAIL ADDRESS *"
          
          name="user-email"
          value={userFormData.email}
          onChange={handleChange}
        />
      
      
        
        <input
          type="text"
          placeholder="PASSWORD"
          name="user-password"
          value={userFormData.password}
          onChange={handleChange}
        />
      
      
        
        <input
          type="text"
          placeholder="RETYPE PASSWORD"
          name="user-rePassword"
          value={userFormData.rePassword}
          onChange={handleChange}
        />
      
      
        
        <input
          type="text"
          placeholder="USERNAME *"
          name="profile-username"
          value={profileFormData.username}
          onChange={handleChange}
        />
      </div>
      
      
      
     
      {/* <div className={styles.fieldContainer}>
        <div className={styles.selectMenuContainer}>
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
        </div>
      </div> */}
      
        <button className={styles.submitButton}type="submit">Sign Up</button>
     
    </form>
  </div>
  );
};

export default SignupForm;