import "./counter.css";
import { useRef, useEffect, useState } from "react";
import { useTimer } from "../components/timer";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";

const states = {
  ACTIVE: "active",
  HOLD: "hold",
  FULLHOLD: "fullhold",
};

function Wim({ title }) {
  const { t, i18n } = useTranslation();
  let timeline = gsap.timeline();
  const pointerElement = useRef(null);
  const counterElement = useRef(null);
  const [breathTime, breathActive, breathStart, breathStop] = useTimer(
    0,
    false
  );
  const [holdTime, holdIsActive, holdStart, holdStop, holdSeconds] = useTimer(
    0,
    false
  );
  const [seconds, setSeconds] = useState(3);
  const [sets, setSets] = useState(30);
  const [currentState, setCurrentState] = useState(states.ACTIVE);
  let labelState = "Ready";

  useEffect(() => {
    if (holdSeconds > 15) {
      holdStop();
      setCurrentState(states.ACTIVE);
    }
  }, [holdSeconds, holdStop]);

  const animate = (sets, time) => {
    timeline.repeat(sets - 1);
    timeline.to(pointerElement.current, {
      scale: 12,
      duration: time * 0.52,
      background: "#1c71da",
      opacity: 0.6,
      onStart: () => {
        labelState = "Inhale";
        counterElement.current.innerText = labelState;
      },
    });
    timeline.to(
      pointerElement.current,
      {
        scale: 1,
        duration: time * 0.35,
        background: "#eb5223",
        opacity: 1,
        onStart: () => {
          labelState = "Exhale";
          counterElement.current.innerText = labelState;
        },
      },
      ">"
    );
    timeline.eventCallback("onComplete", () => {
      breathStart();
      setCurrentState(states.HOLD);
    });
  };

  const stop = () => {
    timeline.pause();
    timeline.tweenFromTo(pointerElement.current, pointerElement.current);
    timeline.kill();
    setCurrentState(states.ACTIVE);
    breathStop();
    holdStop();
  };

  const start = () => {
    animate(sets, seconds);
    timeline.restart();
  };

  const stopBreathHold = () => {
    breathStop();
    holdStart();
    setCurrentState(states.FULLHOLD);
  };

  const changeBreaths = (e) => {
    setSets(e.target.value);
  };

  const changeSpeed = (e) => {
    const speedTime = e.target.checked ? 3 : 4;
    setSeconds(speedTime);
  };

  return (
    <div className="wimhof breath-wrapper m-section">
      <h3 className="m-b-section">{title}</h3>
      <div className="options">
        <div className="card blue second card-wim">
          <div className="card-wim-content">
            {currentState === states.ACTIVE && (
              <div ref={pointerElement} className="circle">
                <span className="counter" ref={counterElement}>
                  {labelState}
                </span>
              </div>
            )}
            {currentState === states.HOLD && (
              <>
                <div className="card-section">
                  <p>{t("wim.sim5")}</p>
                  <h4 className="hold-time m-b-text">{breathTime}</h4>
                </div>
                <button className="btn secondary" onClick={stopBreathHold}>
                  {t("wim.sim6")}
                </button>
              </>
            )}
            {currentState === states.FULLHOLD && (
              <div className="card-section">
                <p>{t("wim.sim7")}</p>
                <h4 className="hold-time m-b-text">{holdTime}</h4>
              </div>
            )}
            <div className="input-block">
              <label htmlFor="sets">{t("wim.sim1")}</label>
              <input
                id="sets"
                type="number"
                name="sets"
                onChange={changeBreaths}
                placeholder="30"
              ></input>
            </div>
            <div className="input-block">
              <label htmlFor="speed">{t("wim.sim2")}</label>

              <div className="speed-block">
                <div class="switch-button">
                  <input
                    className="switch-button-checkbox"
                    onChange={changeSpeed}
                    type="checkbox"
                    data-value="1"
                  ></input>
                  <label className="switch-button-label" htmlFor="">
                    <span className="switch-button-label-span">Normal</span>
                  </label>
                </div>
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
        </div>
      </div>
    </div>
  );
}

export default Wim;
