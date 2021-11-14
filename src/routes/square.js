import m2 from "../images/m2.png";
import Navbar from "../components/navbar";
import Counter from "../components/counter";
import SectionHeader from "../components/section-header";
import Footer from "../components/footer";
import { useTranslation } from "react-i18next";

export default function Square() {
  const { t, i18n } = useTranslation();

  return (
    <div className="parent-wrapper">
      <Navbar></Navbar>
      <div id="t-square" className="internal-page m-s-section">
        <SectionHeader sectionType="s-square">
          <div className="wrapper">
            <div className="title-section text-blue">
              <img src={m2} alt="" />
              <h2 className="m-b-text">{t("square.title")}</h2>
            </div>
            <p>{t("square.p1")}</p>
            <h3 className="m-t-block m-b-text">{t("square.title2")}</h3>
            <ul className="list m-b-text">
              <li>{t("square.list1.li1")}</li>
              <li>{t("square.list1.li2")}</li>
              <li>{t("square.list1.li3")}</li>
              <li>{t("square.list1.li4")}</li>
              <li>{t("square.list1.li5")}</li>
            </ul>
            <p>{t("square.p2")}</p>
          </div>
        </SectionHeader>

        <Counter title={t("square.title")}></Counter>
      </div>
      <Footer />
    </div>
  );
}
