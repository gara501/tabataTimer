import "./counter.css";
import { useState, useRef, useEffect } from "react";

function Counter({ title }) {
  const pointerElement = useRef(null);

  useEffect(() => {
    pointerElement.current.addEventListener("animationstart", () => {
      console.log("start");
    });

    pointerElement.current.addEventListener("animationend", () => {
      console.log("end");
    });
  }, []);

  const start = () => {
    pointerElement.current.classList.add("move");
  };

  const stop = () => {
    pointerElement.current.classList.remove("move");
  };

  return (
    <div className="counter">
      <h4 className="title">{title}</h4>
      <div className="figure">
        <span className="marker-left">Hold</span>
        <span className="marker-top">Inhale</span>
        <span className="marker-right">Hold</span>
        <span className="marker-bottom">Exhale</span>
        <div ref={pointerElement} className="pointer"></div>
      </div>
      <button className="button start" onClick={start}>
        Start
      </button>
      <button className="button stop" onClick={stop}>
        Stop
      </button>
    </div>
  );
}

export default Counter;
