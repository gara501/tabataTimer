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

  const changeSets = (e) => {
    console.log(e.target.value);
    document.documentElement.style.setProperty(
      "--square-iteration",
      e.target.value
    );
    stop();
  };

  const changeTime = (e) => {
    console.log(e.target.value);
    document.documentElement.style.setProperty(
      "--square-time",
      (e.target.value * 4).toString() + "s"
    );
    stop();
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
      <div className="options">
        <div className="input-block">
          <label htmlFor="sets">Sets</label>
          <input
            id="sets"
            type="number"
            name="sets"
            onChange={changeSets}
            placeholder="5 Sets"
          ></input>
        </div>
        <div className="input-block">
          <label htmlFor="time">Breathing Speed</label>
          <input
            id="time"
            type="number"
            name="time"
            onChange={changeTime}
            placeholder="3 seconds"
          ></input>
        </div>
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
