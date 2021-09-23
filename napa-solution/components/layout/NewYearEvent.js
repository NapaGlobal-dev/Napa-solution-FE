import React, { useEffect, useState } from "react";
import { Fireworks, FireworksOptions } from "fireworks-js/dist/react";

const fireWorkOptions = {
  hue: {
    min: 0,
    max: 360,
  },
  delay: {
    min: 1,
    max: 20,
  },
  rocketsPoint: 50,
  speed: 28,
  acceleration: 1.1,
  friction: 0.99,
  gravity: 1,
  particles: 204,
  trace: 2,
  explosion: 4,
  autoresize: true,
  brightness: {
    min: 1,
    max: 96,
    decay: {
      min: 0.01,
      max: 0.05,
    },
  },
  boundaries: {
    x: 50,
    y: 50,
    width: 1326,
    height: 700,
    visible: false,
  },
  mouse: {
    click: false,
    move: false,
    max: 9,
  },
};

const isTheFistTimeOfTheDay = () => {
  let lastTime = localStorage.getItem("last_firework_time")?.toString()?.trim();
  lastTime = lastTime ? parseInt(lastTime) : 0;

  const a = new Date(lastTime);
  const now = new Date();
  return a.getDate() != now.getDate();
};

const isNewYearDay = () => {
  const now = new Date();
  const day = now.getDate();

  switch (
    now.getMonth() + 1 //because month start from 0
  ) {
    case 1:
      return 1 <= day && day <= 3;

    default:
      return false;
  }
};

const NewYearEvent = ({
  enable = false,
  fireTime = 4000,
  delay = 0,
  ...props
}) => {
  const [isEnable, setEnable] = useState(enable);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (isNewYearDay() && isTheFistTimeOfTheDay()) {
        setEnable(true);

        setTimeout(() => {
          setOpacity(0);
          localStorage.setItem("last_firework_time", Date.now());
          setTimeout(() => {
            setEnable(false);
          }, 1000);
        }, fireTime);
      }
    }, delay);
  }, [setEnable]);

  return (
    <>
      {isEnable && (
        <Fireworks
          style={{
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            position: "fixed",
            background: "#0000",
            zIndex: "9999",
            transition: "1s all",
            opacity: opacity,
          }}
          options={fireWorkOptions}
          {...props}
        />
      )}
    </>
  );
};

export default NewYearEvent;
