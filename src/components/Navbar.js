import { BiHash } from "react-icons/bi";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BsTranslate } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="top-nav">
      <div className="logo">
        <BiHash size="35" className="title-hashtag" />
        <h1 className="title-text">Luka</h1>
      </div>
      <div className="icons">
        <MdOutlineDarkMode size="35" className="nav-icon" />
        <FiSettings size="30" className="nav-icon" />
        <BsTranslate size="30" className="nav-icon ml-10 mr-5 " />
      </div>
    </div>
  );
};

export default Navbar;
