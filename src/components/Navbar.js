import { BiHash } from "react-icons/bi";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BsTranslate } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import useLocalPresist from "../contexts/LocalePresistContext";
const Navbar = () => {
  const { toggleLang } = useLocalPresist();
  const { t } = useTranslation();
  return (
    <div className="top-nav">
      <div className="logo">
        <BiHash size="35" className="title-hashtag" />
        <h1 className="title-text">{t("title")}</h1>
      </div>
      <div className="icons">
        <MdOutlineDarkMode size="35" className="nav-icon" />
        <FiSettings size="30" className="nav-icon" />
        <BsTranslate
          onClick={toggleLang}
          size="30"
          className="nav-icon me-10 ms-5 "
        />
      </div>
    </div>
  );
};

export default Navbar;
