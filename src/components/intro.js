import { useTranslation } from "react-i18next";
import m3 from "../images/m3.png";
import muscles from "../images/muscles.png";
import diap from "../images/diap.jpeg";
import vertical from "../images/vertical.jpg";
import horizontal from "../images/horizontal.jpg";

import "./counter.css";

function Intro() {
  const { t } = useTranslation();

  return (
    <div className="intro">
      <div className="block-section dark">
        <div className="wrapper">
          <div className="disclaimer">
            <div className="title-section">
              <h2 className="m-b-text">Disclaimer</h2>
            </div>
            <p>{t("disclaimer")}</p>
          </div>
          <div className="title-section m-t-section">
            <img src={m3} alt="" />
            <h2 className="m-b-text">{t("intro.title")}</h2>
          </div>
          <p>
            {t("intro.p1")}{" "}
            <a
              className="link"
              href="https://www.kenhub.com/en/library/anatomy/anatomy-of-breathing"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("intro.p2")}
            </a>
          </p>
          <p>{t("intro.p3")}</p>
          <figure className="ext-image">
            <img src={muscles} alt="" />
            <figcaption>
              Fig.1 - {t("intro.imgfrom")} MSD Manual consumer version
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="block-section">
        <div className="wrapper">
          <h3 className="m-text">{t("intro.title2")}</h3>
          <p>{t("intro.p4")}</p>
          <figure className="ext-image">
            <img className="resized-image" src={vertical} alt="" />
            <figcaption>
              Fig.2 - {t("intro.imgfrom")}
              https://www.artofmanliness.com/health-fitness/health/how-to-breathe/.
            </figcaption>
          </figure>
          <p>{t("intro.p5")}</p>
          <figure className="ext-image">
            <img className="resized-image" src={horizontal} alt="" />
            <figcaption>
              Fig.3 - {t("intro.imgfrom")}
              https://www.artofmanliness.com/health-fitness/health/how-to-breathe/.
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="block-section dark">
        <div className="wrapper">
          <h3 className="m-text">{t("intro.title3")}</h3>
          <p>{t("intro.p6")}</p>
          <figure className="ext-image">
            <img className="image-ref" src={diap} alt="" />
            <figcaption>
              Fig.4 - {t("intro.imgfrom")} https://www.physio-pedia.com/.
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="block-section">
        <div className="wrapper">
          <h3 className="m-text">{t("intro.title4")}</h3>
          <p>
            {t("intro.p7")}
            <ul className="list m-text">
              <li>{t("intro.list1.li1")}</li>
              <li>{t("intro.list1.li2")}</li>
              <li>{t("intro.list1.li3")}</li>
              <li>{t("intro.list1.li4")}</li>
              <li>{t("intro.list1.li5")}</li>
            </ul>
          </p>
          <p className="m-text">{t("intro.p8")}</p>
          <p>{t("intro.p9")}</p>
        </div>
      </div>
      <div className="block-section dark">
        <div className="wrapper">
          <h3 className="m-text">Benefits</h3>
          <p>{t("intro.p10")}</p>
          <ul className="list m-text">
            <li>{t("intro.list2.li1")}</li>
            <li>{t("intro.list2.li2")}</li>
            <li>{t("intro.list2.li3")}</li>
            <li>{t("intro.list2.li4")}</li>
            <li>{t("intro.list2.li5")}</li>
            <li>{t("intro.list2.li6")}</li>
          </ul>
        </div>
      </div>
      <div className="block-section">
        <div className="wrapper">
          <h3 className="m-text">{t("intro.title5")}</h3>
          <p className="m-b-text">{t("intro.p11")}</p>

          <p className="m-b-text">{t("intro.p12")}</p>

          <p className="m-b-text">{t("intro.p13")}</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
