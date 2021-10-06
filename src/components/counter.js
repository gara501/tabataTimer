import "./counter.css";

function Counter({ seconds, minutes, textColor, title }) {
  return (
    <div className={textColor + " counter"}>
      <span>{title}</span>
      <p className="timer">
        {minutes}:{seconds}
      </p>
    </div>
  );
}

export default Counter;
