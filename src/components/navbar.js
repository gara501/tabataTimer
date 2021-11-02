import "./navbar.css";
import lungs from "../images/lungs_blue.png";

function Navbar({ message, type }) {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <a className="left-side" href="#heading">
          <img className="logo" src={lungs} alt="" />
          <h3>Breath!</h3>
        </a>

        <ul className="menu-list">
          <li>
            <a className="link" href="#square">
              Square
            </a>
          </li>
          <li>
            <a className="link" href="#wim">
              Wim Hof
            </a>
          </li>
          <li>
            <a className="link" href="#twone">
              "2:1"
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
