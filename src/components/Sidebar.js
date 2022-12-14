import { GoHome } from "react-icons/go";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { IoIosList } from "react-icons/io";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();
  return (
    <div
      className=" top-0 left-0 h-screen w-20 m-0
     flex flex-col
     bg-gray-900 text-white shadow-lg "
    >
      <div className="sidebar-icon group">
        <GoHome size="28" />
        <span className=" sidebar-tooltip group-hover:scale-100">
          {t("home")}
        </span>
      </div>
      <hr className="sidebar-hr"></hr>
      <div className="sidebar-icon group">
        <HiOutlineCurrencyDollar size="32" />
        <span className="sidebar-tooltip group-hover:scale-100">
          {t("sales")}
        </span>
      </div>
      <div className="sidebar-icon group">
        <IoIosList size="30" />
        <span className=" sidebar-tooltip group-hover:scale-100">
          {t("categories")}
        </span>
      </div>
      <div className="sidebar-icon group">
        <MdOutlineDashboardCustomize size="30" />
        <span className=" sidebar-tooltip group-hover:scale-100">
          {t("dashboard")}
        </span>
      </div>
      <hr className="sidebar-hr"></hr>
      <div className="sidebar-icon group">
        <FiUser size="30" />
        <span className=" sidebar-tooltip group-hover:scale-100">
          {t("admin")}
        </span>
      </div>

      {/* <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} /> */}
    </div>
  );
};
// const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
//   <div className="sidebar-icon group">
//     {icon}
//     <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
//   </div>
// );

export default Sidebar;
