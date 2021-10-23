import "./counter.css";
import { useRef, useEffect } from "react";
import { useTimer } from "../components/timer";

function Wim({ title }) {
  const pointerElement = useRef(null);
  const [time, isActive, toggle, reset] = useTimer(0, false);
  const [holdtime, holdIsActive, holdToggle, holdReset, holdSeconds] = useTimer(
    0,
    false
  );

  useEffect(() => {
    if (holdSeconds > 15) {
      holdReset();
    }
  }, [holdSeconds, holdReset]);

  useEffect(() => {
    pointerElement.current.addEventListener("animationend", () => {
      stop();

      // Activate Timer
      toggle();
    });
  }, []);

  const stop = () => {
    pointerElement.current.classList.remove("grow");
    reset();
  };

  const start = () => {
    pointerElement.current.classList.add("grow");
    reset();
  };

  const stopInhalation = () => {
    stop();
    holdToggle();
    if (holdIsActive && holdSeconds > 15) {
      holdReset();
    }
  };

  const changeBreaths = (e) => {
    document.documentElement.style.setProperty(
      "--wim-iteration",
      e.target.value
    );
    stop();
  };

  const changeSpeed = (e) => {
    const speedTime = e.target.checked ? 2 : 3;
    document.documentElement.style.setProperty("--wim-time", speedTime + "s");
    stop();
  };

  return (
    <div className="wimhof breath-wrapper">
      <h4 className="title">{title}</h4>
      <div ref={pointerElement} className="circle"></div>
      <div className="options">
        <div className="card yellow hold-time first">
          <div className="card-section">
            <p>BreathHold Time</p>
            <h2 className="hold-time">{time}</h2>
          </div>
          <div className="card-section">
            <p>Inhalation hold time</p>
            <h2 className="hold-time">{holdtime}</h2>
            <button className="button stop-hold" onClick={stopInhalation}>
              Stop BreathHold
            </button>
          </div>
        </div>
        <div className="card blue second">
          <div className="input-block">
            <label htmlFor="sets">Breaths</label>
            <input
              id="sets"
              type="number"
              name="sets"
              onChange={changeBreaths}
              placeholder="30 breaths"
            ></input>
          </div>
          <div className="input-block">
            <label htmlFor="speed">Breathing Speed</label>

            <div className="speed-block">
              <div class="switch-button">
                <input
                  class="switch-button-checkbox"
                  onChange={changeSpeed}
                  type="checkbox"
                  data-value="2"
                ></input>
                <label class="switch-button-label" for="">
                  <span class="switch-button-label-span">Normal</span>
                </label>
              </div>
            </div>
          </div>
          <div className=" instructions">
            <h4>Instructions</h4>
            <p>
              Put the number or breaths that you will do, after finish, the
              counter will start, hold your breath after the last exhalation as
              much as you can, once you can't continue, push stop breathHold
              button, full inhale and maintain 15 seconds. Repeat many times as
              you want. Is recommended to start with 3 blocks.
            </p>
          </div>
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

export default Wim;
