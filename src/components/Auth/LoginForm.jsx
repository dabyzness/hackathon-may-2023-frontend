import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password: </label>
      <input
        type="text"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit">LOGIN</button>
    </form>
  );
};

export default LoginForm;
