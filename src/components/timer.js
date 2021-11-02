import { useState, useEffect } from "react";

export const useTimer = (initialTime = 0, active = false) => {
  const [seconds, setSeconds] = useState(initialTime);
  const [isActive, setIsActive] = useState(active);
  const [time, setTime] = useState("00:00");

  const startTimer = () => {
    setSeconds(0);
    setIsActive(true);
    setTime("00:00");
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsActive(false);
    setTime("00:00");
  };

  function format(seconds) {
    let minutes = "";
    let newSeconds = "";

    if (seconds <= 9) {
      return `00:0${seconds}`;
    } else if (seconds > 9 && seconds <= 60) {
      return `00:${seconds}`;
    } else if (seconds > 60) {
      console.log(seconds);
      const secondsInMinute = seconds - Math.trunc(seconds / 60) * 60;
      console.log(secondsInMinute);
      newSeconds = formatDigits(secondsInMinute);
      minutes = formatDigits(Math.trunc(seconds / 60));
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
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return [time, isActive, startTimer, resetTimer, seconds];
};
