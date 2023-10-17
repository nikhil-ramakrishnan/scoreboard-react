import React from "react";
import classes from "./styles/Header.module.css";
import duklogo from "../assets/duklogo.png";
const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img src={duklogo} alt="DUK Logo" />
      </div>
      <div className={classes.navbar}></div>
    </div>
  );
};

export default Header;
