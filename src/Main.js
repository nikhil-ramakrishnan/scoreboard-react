import React, { useEffect, useState } from "react";
import classes from "./Main.module.css";
import CardComponent from "./components/CardComponent";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Main = () => {
  const [teams, setTeams] = useState([]);

  const options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 900,
        },
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 1,
      },
      size: {
        value: { min: 1, max: 8 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
    },
    container: "main",
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

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
      <Particles options={options} init={particlesInit} />
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
            color={team.color}
            score={team.score}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
