import { useRef, useState } from "react";
import { gsap } from "gsap";
import "./double.css";

function Double({ title }) {
  const [time, setTime] = useState(4);
  const [sets, setSets] = useState(1);
  const pointerElement = useRef(null);
  const setsElement = useRef(null);
  const timeElement = useRef(null);
  const labelElement = useRef(null);
  let timeline = gsap.timeline();

  const animate = (sets, time) => {
    console.log("TIME", time);
    timeline.repeat(sets);
    timeline.to(pointerElement.current, {
      height: "100%",
      duration: time,
      ease: "linear",
      onStart: () => {
        labelElement.current.innerText = "Inhale";
      },
    });
    timeline.to(
      pointerElement.current,
      {
        height: 0,
        duration: time * 2,
        ease: "linear",
        onStart: () => {
          labelElement.current.innerText = "Exhale";
        },
      },
      ">"
    );
  };

  const changeSets = (e) => {
    setSets(e.currentTarget.value);
  };

  const changeTime = (e) => {
    setTime(e.currentTarget.value);
  };

  const start = () => {
    animate(sets - 1, time);
    timeline.restart();
  };

  const stop = () => {
    timeline.tweenFromTo(pointerElement.current, pointerElement.current);
    timeline.pause();
    labelElement.current.innerText = "Ready";
  };

  return (
    <div className="counter breath-wrapper m-section">
      <h3 className="m-b-section">{title}</h3>
      <div className="double-box">
        <div ref={pointerElement} className="double-bar"></div>
        <span className="breath-label" ref={labelElement}>
          Ready
        </span>
      </div>
      <div className="options">
        <div className="input-block">
          <label htmlFor="sets">Sets</label>
          <input
            id="sets"
            type="number"
            name="sets"
            placeholder="Set number"
            ref={setsElement}
            onChange={changeSets}
          ></input>
        </div>
        <div className="input-block">
          <label htmlFor="time">Breathing Time</label>
          <input
            id="time"
            type="number"
            name="time"
            placeholder="Set seconds"
            ref={timeElement}
            onChange={changeTime}
          ></input>
        </div>
      </div>
      <div className="btn-container">
        <button className="btn secondary" onClick={start}>
          Start
        </button>
        <button className="btn terciary" onClick={stop}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default Double;
