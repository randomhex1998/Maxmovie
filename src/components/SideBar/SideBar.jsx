import React from "react";
import "./SideBar.scss";
import SocialBox from "../../shared/SocialBox";

const SideBar = () => {
  return (
    <aside className="side-bar">
      <div className="sidebar-area">
        <SocialBox SclIco="fa-brands fa-telegram" Scltxt="ورود به تلگرام" />
        <SocialBox SclIco="fa-brands fa-instagram" Scltxt="ورود به اینستاگرام" />
      </div>
    </aside>
  );
};

export default SideBar;
