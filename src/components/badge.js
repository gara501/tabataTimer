import "./badge.css";
import cc from "classcat";

export const badgeType = {
  ACTIVATION: "activation",
  RELAXATION: "relaxation",
  MEDITATION: "meditation",
};

function Badge({ message, type }) {
  return (
    <span
      className={cc([
        "badge",
        {
          activation: type === badgeType.ACTIVATION,
          relaxation: type === badgeType.RELAXATION,
          meditation: type === badgeType.MEDITATION,
        },
      ])}
    >
      {message}
    </span>
  );
}

export default Badge;
