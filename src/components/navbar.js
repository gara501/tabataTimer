import "./navbar.css";
import lungs from "../images/lungs_blue.png";

function Navbar({ message, type }) {
  return (
    <div className="navbar">
      <img className="logo" src={lungs} alt="" />
      <h3>Breath!</h3>
    </div>
  );
}

export default Navbar;
