import "./counter.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";

function Counter({ title }) {
  const { t, i18n } = useTranslation();
  const pointerElement = useRef(null);
  const setsElement = useRef(null);
  const timeElement = useRef(null);
  let timeline = gsap.timeline();

  const animate = (sets, time) => {
    timeline.repeat(sets);
    timeline.to(pointerElement.current, {
      left: "95%",
      scale: 2,
      duration: time / 4,
    });
    timeline.to(
      pointerElement.current,
      {
        left: "95%",
        top: "95%",
        scale: 2,
        duration: time / 4,
      },
      ">"
    );
    timeline.to(
      pointerElement.current,
      {
        left: "-5%",
        top: "95%",
        scale: 1,
        duration: time / 4,
      },
      ">"
    );
    timeline.to(
      pointerElement.current,
      {
        top: "-5%",
        left: "-5%",
        scale: 1,
        duration: time / 4,
      },
      ">"
    );
  };

  const start = () => {
    animate(setsElement.current.value - 1, timeElement.current.value * 4);
    timeline.restart();
  };

  const stop = () => {
    timeline.tweenFromTo(pointerElement.current, pointerElement.current);
    timeline.pause();
  };

  return (
    <div className="counter breath-wrapper m-section">
      <h3 className="m-b-section">{title}</h3>
      <div className="figure">
        <span className="marker-left">Hold</span>
        <span className="marker-top">Inhale</span>
        <span className="marker-right">Hold</span>
        <span className="marker-bottom">Exhale</span>
        <div ref={pointerElement} className="pointer"></div>
      </div>
      <div className="options">
        <div className="input-block">
          <label htmlFor="sets">{t("square.simlb1")}</label>
          <input
            id="sets"
            type="number"
            name="sets"
            placeholder={t("square.simf1")}
            ref={setsElement}
          ></input>
        </div>
        <div className="input-block">
          <label htmlFor="time">{t("square.simlb2")}</label>
          <input
            id="time"
            type="number"
            name="time"
            placeholder={t("square.simf2")}
            ref={timeElement}
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

export default Counter;
