import "./counter.css";
import { useRef } from "react";

function Wim({ title }) {
  const pointerElement = useRef(null);
  const start = () => {
    pointerElement.current.classList.add("grow");
  };

  const stop = () => {
    pointerElement.current.classList.remove("grow");
  };

  const changeSets = (e) => {
    console.log(e.target.value);
    document.documentElement.style.setProperty(
      "--wim-iteration",
      e.target.value
    );
    stop();
  };

  const changeSpeed = (e) => {
    console.log(e.target.value);
    document.documentElement.style.setProperty(
      "--wim-time",
      e.target.value.toString() + "s"
    );
    stop();
  };

  const changeBlocks = (e) => {
    console.log(e.target.value);
    document.documentElement.style.setProperty("--wim-blocks", e.target.value);
    stop();
  };

  return (
    <div className="wimhof">
      <h4 className="title">{title}</h4>
      <div ref={pointerElement} className="circle"></div>
      <h4 className="instructions">Prepare</h4>
      <div className="options">
        <div className="input-block">
          <label htmlFor="sets">Sets</label>
          <input
            id="sets"
            type="number"
            name="sets"
            onChange={changeSets}
            placeholder="30 breaths"
          ></input>
        </div>
        <div className="input-block">
          <label htmlFor="blocks">Blocks</label>
          <input
            id="blocks"
            type="number"
            name="blocks"
            onChange={changeBlocks}
            placeholder="3 Blocks"
          ></input>
        </div>
        <div className="input-block">
          <label htmlFor="blocks">Breathing Speed</label>
          <input
            id="speed"
            type="number"
            name="speed"
            onChange={changeSpeed}
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

export default Wim;
