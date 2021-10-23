import Badge, { badgeType } from "./badge";
import "./counter.css";

function Intro() {
  const wim = () => {};

  const square = () => {};

  return (
    <div className="intro">
      <div className="roundcard-wrapper">
        <div className="roundcard-content">
          <a className="title" href="#square">
            Square Breathing
          </a>
          <Badge message="relaxation" type={badgeType.RELAXATION}></Badge>
        </div>
      </div>
      <div className="roundcard-wrapper">
        <div className="roundcard-content">
          <a className="title" href="#wim">
            Wim Hof Method
          </a>
          <Badge message="activation" type={badgeType.ACTIVATION}></Badge>
        </div>
      </div>

      <div className="roundcard-wrapper">
        <div className="roundcard-content">
          <a className="title" href="#long">
            Asymmetric Breathing
          </a>
          <Badge message="relaxation" type={badgeType.RELAXATION}></Badge>
        </div>
      </div>
    </div>
  );
}

export default Intro;
