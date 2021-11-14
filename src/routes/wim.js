import m1 from "../images/m1.png";
import Navbar from "../components/navbar";
import WimSimulator from "../components/wim";
import Footer from "../components/footer";
import { useTranslation } from "react-i18next";

export default function Wim() {
  const { t, i18n } = useTranslation();

  return (
    <div className="parent-wrapper">
      <Navbar></Navbar>
      <div id="t-wim" className="data-page p-s-section bg-dark">
        <div className="wrapper">
          <div className="title-section">
            <img src={m1} alt="" />
            <h2 className="m-b-text text-blue font-700">{t("wim.title")}</h2>
          </div>
          <p>
            {t("wim.p1")}
            <a
              className="link-dark"
              target="_blank"
              rel="noreferrer"
              href="https://www.wimhofmethod.com/practice-the-method#learn-more"
            >
              {t("wim.link")}
            </a>
            )
          </p>
          <h3 className="m-t-block m-b-text">{t("wim.title2")}</h3>
          <p>{t("wim.p2")}</p>

          <h3 className="m-t-block m-b-text">{t("wim.title3")}</h3>
          <p>{t("wim.p3")}</p>

          <h3 className="m-t-block m-b-text">{t("wim.title4")}</h3>
          <p>{t("wim.p4")}</p>
          <h3 className="m-t-block m-b-text">{t("wim.title5")}</h3>
          <ul className="list m-b-text">
            <li>{t("wim.list.li1")}</li>
            <li>{t("wim.list.li2")}</li>
            <li>{t("wim.list.li3")}</li>
            <li>{t("wim.list.li4")}</li>
            <li>{t("wim.list.li5")}</li>
            <li>{t("wim.list.li6")}</li>
            <li>{t("wim.list.li7")}</li>
          </ul>
          <h3 className="m-t-block m-b-text">{t("wim.title6")}</h3>
          <p>{t("wim.p5")}</p>

          <WimSimulator title={t("wim.title")}></WimSimulator>
        </div>
      </div>
      <Footer />
    </div>
  );
}
