import "./section-header.css";
import cc from "classcat";

function SectionHeader({ children, sectionType }) {
  return (
    <div className={cc(["section-header", sectionType])}>
      <div className="section-header-content">{children}</div>
    </div>
  );
}

export default SectionHeader;
