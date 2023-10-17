import React from "react";
import classes from "./CardComponent.module.css";
import duklogo from "../assets/duklogo.png";
const CardComponent = (props) => {
  return (
    <div
      className={classes.cardContainer}
      style={{ "background-color": "#D9D9D9" }}
    >
      <div className={classes.teamIconAndNameContainer}>
        <div className={classes.teamIcon}>
          <p>{props.pos + 1}</p>
        </div>
        <p className={classes.teamName}>{props.name}</p>
      </div>
      <div className={classes.containerTeamScore}>
        <p className={classes.score}>{props.score}</p>
      </div>
    </div>
  );
};
export default CardComponent;
