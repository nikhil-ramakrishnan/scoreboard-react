import React, { useState } from "react";
import classes from "./UserPanel.module.css";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <button type="submit">Login</button>
          </div>
        </form>
        <div className={classes.createAccountLink}>
          <p>Don't have an account? </p>
          <Link to="/signup">
            <button>Create Account</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
