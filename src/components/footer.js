import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n, ready } = useTranslation("ns1", { useSuspense: false });

  const setLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="footer">
      <ul>
        <a
          className="link"
          href="https://www.twitter.com/aramh4ck"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered By @Aramh4ck
        </a>
      </ul>
      <div className="lang-selector">
        <select onChange={setLanguage}>
          <option
            value="es"
            defaultValue={{ label: "Español", value: "es-ES" }}
          >
            Español
          </option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  );
}

export default Footer;
