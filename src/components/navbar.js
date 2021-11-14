import "./navbar.css";
import lungs from "../images/lungs_blue.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar({ message, type }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <a className="left-side" href="/">
          <img className="logo" src={lungs} alt="" />
          <h3 className="logo-text text-blue font-700">{t("logo")}!</h3>
        </a>

        <ul className="menu-list">
          <li>
            <Link className="link" to="/square">
              {t("m1")}
            </Link>
          </li>
          <li>
            <Link className="link" to="/wim">
              Wim Hof
            </Link>
          </li>
          <li>
            <Link className="link" to="/double">
              2:1
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
