import { useTranslation } from "react-i18next";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Footer from "./components/footer";

function App() {
  const { t, i18n } = useTranslation();
  const time = new Date();
  time.setSeconds(time.getSeconds() + 240);

  return (
    <div className="parent-wrapper">
      <Navbar></Navbar>
      <div id="heading" className="intro-page">
        <div className="wrapper">
          <div className="heading">
            <h1 className="intro-text">{t("heading")}</h1>
          </div>
        </div>
      </div>
      <Intro />
      <Footer />
    </div>
  );
}

export default App;
