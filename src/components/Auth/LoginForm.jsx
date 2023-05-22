import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './AuthForms.module.css';

const LoginForm = ({ handleLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    const res = await handleLogin(formData);

    if (res.error) {
      console.log("SOMETHING WENT WRONG WITH LOGIN");
      return;
    }

    navigate("/");
  }

  return (
// LINK STILL NEEDS TO BE ADDED TO 'SIGN UP', AND FOR LOG IN BUTTON
    <div>
      <h3 className={styles.header}>Log In</h3>
      <div className={styles.subHeaderContainer}>
      <p className={styles.subHeaderText}>DON'T HAVE AN ACCOUNT?</p><p className={styles.subHeaderText+' '+styles.asLink}>SIGN UP</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.fieldsContainer}>
          <div className={styles.inputFieldContainer}>
            <input
              type="text"
              placeholder="EMAIL ADDRESS"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputFieldContainer}>
            <input
              type="text"
              placeholder="PASSWORD"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
          <p className={styles.subFieldText}>KEEP ME SIGNED IN</p>
          <p className={styles.forgotPassword}>FORGOT YOUR PASSWORD?</p>

        <button className={styles.submitButton+' '+styles.loginButton} type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
