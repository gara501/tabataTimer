import { useState, useEffect } from "react";

export const useTimer = (initialTime = 0, active = false) => {
  const [seconds, setSeconds] = useState(initialTime);
  const [isActive, setIsActive] = useState(active);
  const [time, setTime] = useState("00:00");

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
    setTime("00:00");
  }

  function format(seconds) {
    let minutes = "";
    let newSeconds = "";

    if (seconds <= 9) {
      return `00:0${seconds}`;
    } else if (seconds > 9 && seconds <= 60) {
      return `00:${seconds}`;
    } else if (seconds > 60) {
      newSeconds = formatDigits(seconds - Math.round(seconds / 60) * 60);
      minutes = formatDigits(Math.round(seconds / 60));
      return `${minutes}:${newSeconds}`;
    }
  }

  function formatDigits(value) {
    if (value <= 9) {
      return `0${value}`;
    } else {
      return value;
    }
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        const newTime = format(seconds);
        setTime(newTime);
        console.log("TIMER", time);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return [time, isActive, toggle, reset, seconds];
};
