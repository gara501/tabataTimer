import m3 from "../images/m3.png";
import Navbar from "../components/navbar";
import DoubleSimulator from "../components/double";
import SectionHeader from "../components/section-header";
import Footer from "../components/footer";
import { useTranslation } from "react-i18next";

export default function Double() {
  const { t, i18n } = useTranslation();

  return (
    <div className="parent-wrapper">
      <Navbar></Navbar>
      <div id="t-double" className="internal-page m-s-section">
        <SectionHeader sectionType="s-double">
          <div className="wrapper">
            <div className="title-section text-blue">
              <img src={m3} alt="" />
              <h2 className="m-b-text">{t("double.title")}</h2>
            </div>
            <p>{t("double.p1")}</p>
            <h3 className="m-t-block m-b-text">{t("double.title2")}</h3>
            <ul className="list m-b-text">
              <li>{t("double.list.li1")}</li>
              <li>{t("double.list.li2")}</li>
              <li>{t("double.list.li3")}</li>
              <li>{t("double.list.li4")}</li>
              <li>{t("double.list.li5")}</li>
            </ul>
            <p className="m-b-text">{t("double.p2")}</p>
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://www.musiciansway.com/blog/2010/03/2-to-1-breathing/"
            >
              {t("double.link")}
            </a>
          </div>
        </SectionHeader>
        <DoubleSimulator title={t("double.title")}></DoubleSimulator>
      </div>
      <Footer />
    </div>
  );
}
