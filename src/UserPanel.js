import React, { useState } from "react";
import classes from "./UserPanel.module.css";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post(
      //   "https://sports-scoreboard.cyclic.cloud/users/login",
      //   JSON.stringify(formData),
      //   { withCredentials: true }
      // );

      const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const token = await Cookies.get("jwt");
        console.log(token);

        setIsUserLoggedIn(true);
        

        // if (rawCookie) {
        //   const cookieValue = rawCookie.split(";")[0].split("=")[1];
        //   // console.log("Received cookie:", cookieValue);
        // }
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        {isUserLoggedIn && <div>Kaduvaaye kiduva pidikkunne... ambambo</div>}
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
