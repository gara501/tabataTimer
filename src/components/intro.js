import Badge, { badgeType } from "./badge";
import "./counter.css";

function Intro() {
  const wim = () => {};

  const square = () => {};

  return (
    <div className="intro">
      <div className="roundcard-wrapper">
        <div className="roundcard-content">
          <h2>Square Breathing</h2>
          <Badge message="relaxation" type={badgeType.RELAXATION}></Badge>
          <p className="section">
            Square breathing is a type of breathwork that can shift your energy,
            connect you more deeply with your body, calm your nervous system,
            and decrease stress in your body.
          </p>
        </div>
      </div>
      <div className="roundcard-wrapper">
        <div className="roundcard-content">
          <a className="title" href="#wim">
            Wim Hof Method
          </a>
          <Badge message="activation" type={badgeType.ACTIVATION}></Badge>
          <p className="section">
            THE WIM HOF METHOD CAN BE DEFINED BY ITS SIMPLE, EASY-TO-APPLY
            APPROACH AND ITS STRONG SCIENTIFIC FOUNDATION. IT’S A PRACTICAL WAY
            TO BECOME HAPPIER, HEALTHIER AND STRONGER..
          </p>
        </div>
      </div>

      <div className="roundcard-wrapper">
        <div className="roundcard-content">
          <a className="title" href="#long">
            1:2 Breathing
          </a>
          <Badge message="relaxation" type={badgeType.RELAXATION}></Badge>
          <p className="section">
            All you do is to double your exhale. That means that your exhale is
            twice as long as your inhale. If you inhale for 4 seconds, your
            exhalation will be 8 seconds.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
