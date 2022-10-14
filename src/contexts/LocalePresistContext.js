import { createContext, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
export const LocalePresistContext = createContext();

export const LocalePresistProvider = ({ children }) => {
  const { i18n } = useTranslation();

  const initiateLocale = () => {
    if (localStorage && localStorage.getItem("lang"))
      setRawLang(localStorage.getItem("lang"));
  };

  const handleDirection = (dir) => {
    document.documentElement.dir = dir;
  };

  const setRawLang = (lang) => {
    const dir = lang == "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    handleDirection(dir);
    i18n.changeLanguage(lang);
  };
  const toggleLang = () => {
    setRawLang(i18n.language == "en" ? "ar" : "en");
  };
  useEffect(() => {
    initiateLocale();
  }, []);

  return (
    <LocalePresistContext.Provider value={{ toggleLang, setRawLang }}>
      {children}
    </LocalePresistContext.Provider>
  );
};
export default () => useContext(LocalePresistContext);
