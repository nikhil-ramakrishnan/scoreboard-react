import React, { useEffect, useState } from "react";
import classes from "./Main.module.css";
// import mockData from "./assets/mockdata";
import CardComponent from "./components/CardComponent";
const Main = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://sports-scoreboard.cyclic.cloud/scores/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        const scores = data.data.scores;
        const sorted = [...scores].sort((a, b) => b.score - a.score);
        setTeams(sorted);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUserData();
  }, []);
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.containerTitle}>
          <p>Team</p>
          <p>Score</p>
        </div>
        {teams.map((team, index) => (
          <CardComponent
            pos={index}
            key={team.name}
            name={team.name}
            score={team.score}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
